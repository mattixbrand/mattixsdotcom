import { cryptoAssets, quoteFromPrice, type RateQuote } from "@/lib/crypto";

async function readJson(url: string) {
  const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(2500) });
  if (!response.ok) return null;
  return response.json();
}

async function coinbasePrice(pair: string) {
  try {
    const body = (await readJson(`https://api.coinbase.com/v2/prices/${pair}/spot`)) as { data?: { amount?: string } } | null;
    const price = Number(body?.data?.amount);
    return Number.isFinite(price) && price > 0 ? price : null;
  } catch {
    return null;
  }
}

async function geckoPrices() {
  try {
    const ids = cryptoAssets.map((asset) => asset.gecko).join(",");
    return (await readJson(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`)) as Record<
      string,
      { usd?: number }
    > | null;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const usd = Number(new URL(request.url).searchParams.get("usd"));
  if (!Number.isFinite(usd) || usd <= 0 || usd > 100000) {
    return Response.json({ error: "amount" }, { status: 400 });
  }

  const coinbasePromise = Promise.all(cryptoAssets.map((asset) => coinbasePrice(asset.pair)));
  const gecko = await geckoPrices();
  const spot = await Promise.race([
    coinbasePromise,
    new Promise<(number | null)[]>((resolve) => {
      setTimeout(() => resolve([null, null, null]), 400);
    }),
  ]);
  const quotes: RateQuote[] = [];

  for (let index = 0; index < cryptoAssets.length; index += 1) {
    const asset = cryptoAssets[index];
    const coinbase = spot[index];
    const fallback = gecko?.[asset.gecko]?.usd;
    const price = coinbase ?? (typeof fallback === "number" ? fallback : null);
    if (price === null) continue;
    const quote = quoteFromPrice(usd, price, asset.decimals);
    if (!quote) continue;
    quotes.push({
      asset: asset.id,
      symbol: asset.symbol,
      network: asset.network,
      address: asset.address,
      crypto: quote.crypto,
      price: price.toFixed(2),
      baseUnits: quote.units,
      source: coinbase ? "Coinbase" : "CoinGecko",
    });
  }

  if (quotes.length !== cryptoAssets.length) {
    return Response.json({ error: "rate" }, { status: 502 });
  }

  return Response.json(
    { usd: usd.toFixed(2), quotes },
    { headers: { "Cache-Control": "no-store" } },
  );
}
