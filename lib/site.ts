import { cryptoAssets } from "@/lib/crypto";

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  handle: string;
};

export type PayField = {
  id: string;
  label: string;
  value: string;
};

export type PayLink = {
  id: string;
  label: string;
  detail: string;
  href: string;
  username: string;
  fields?: PayField[];
  addresses?: WalletAddress[];
};

export type PayCode = {
  id: string;
  region: "hongkong" | "mainland";
  account: string;
  src: string;
};

export type PayQr = {
  id: string;
  label: string;
  detail: string;
  codes: PayCode[];
};

function qrSrc(file: string) {
  return `/qrcodes/${encodeURIComponent(file)}`;
}

export type WalletAddress = {
  id: string;
  asset: string;
  network: string;
  address: string;
  record?: string;
  pay?: string;
  amountText?: string;
};

export type WalletGroup = {
  id: string;
  label: string;
  detail: string;
  addresses: WalletAddress[];
};

export type ServicePlan = {
  id: string;
  name: string;
  price: string;
  unit: string;
  points: string[];
};

export type ServiceGroup = {
  id: string;
  name: string;
  summary: string;
  plans: ServicePlan[];
};

export const site = {
  name: "Mattix",
  url: "https://mattixs.com",
  shortBio: "Vlogger and software engineer",
  location: "Cambodia",
  tagline: "Films, a novel, and software for hire.",
  email: "contact@mattixs.com",
  personalEmail: "shenzesun@mattixs.com",
  president: {
    name: "Shenze Sun",
    role: "Brand president",
    youtube: "https://www.youtube.com/@shenzesun",
    channelId: "UCI7BrGVcfC848Q51SrhMseA",
  },
  offices: [
    {
      id: "cambodia",
      address: "#1185, St. 201, Kompong Somnanh, Krong Ta Khmau, Kandal, Cambodia, 81106",
      phones: ["+85510358336", "+85585358336", "+85590358336"],
      phoneLabels: ["+855 10 358 336", "+855 85 358 336", "+855 90 358 336"],
    },
    {
      id: "hongkong",
      address: "#1000 Tak Ku Ling Rd, Kowloon City, Kowloon, Hong Kong",
      phones: ["+85246365150"],
      phoneLabels: ["+852 4636 5150"],
    },
  ],
  about: [
    "I publish films from the places I move through, and a novel on Qidian.",
    "I also consult and write software: planning, programming, and keeping a system running after it ships.",
  ],
  youtube: {
    channelId: "UCQz7hoatZsQAksAnDvtcJ_A",
    featuredVideoId: "",
  },
  novel: {
    platform: "Qidian",
    title: "推翻",
    url: "https://magev6.if.qidian.com/h5/share/book?channel=qidianapp&activityId=bookshare_02&tt=0&tc=0&nc=&nd=&spdt=14&spdid=109&ex1=1044256070&shareUserCode=UwZE3IOO&bookId=1044256070&shareBookType=1&shareSource=2&_trace=qdappsfx&dt=11&did=6",
    logline: "Mattix Book, published on Qidian.",
  },
  social: [
    { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@mattix_brand", handle: "@mattix_brand" },
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com/mattix.brand", handle: "mattix.brand" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/mattix_brand", handle: "@mattix_brand" },
    { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@mattix_brand", handle: "@mattix_brand" },
    { id: "telegram", label: "Telegram", href: "https://t.me/MattixBrand", handle: "@MattixBrand" },
    { id: "telegram-group", label: "Telegram group", href: "https://t.me/MattixGroup", handle: "MattixGroup" },
  ] satisfies SocialLink[],
  personalSocial: [
    { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@shenzesun", handle: "@shenzesun" },
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com/fbshenze/", handle: "fbshenze" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/shenze_sun", handle: "@shenze_sun" },
    { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@shenzesun", handle: "@shenzesun" },
    { id: "telegram", label: "Telegram", href: "https://t.me/shenzesun", handle: "@shenzesun" },
    { id: "weibo", label: "Weibo", href: "https://weibo.com/shenzesun", handle: "shenzesun" },
    { id: "kofi", label: "Ko-fi", href: "https://ko-fi.com/shenzesun", handle: "shenzesun" },
  ] satisfies SocialLink[],
  donations: {
    currency: "USD",
    presets: [5, 10, 25, 50],
    links: [
      { id: "paypal", label: "PayPal", detail: "PayPal balance or card", href: "", username: "MattixBrand" },
      {
        id: "payoneer",
        label: "Payoneer",
        detail: "Payoneer account",
        href: "",
        username: "songchimchek23712@gmail.com",
        fields: [{ id: "email", label: "Email", value: "songchimchek23712@gmail.com" }],
      },
      { id: "revolut", label: "Revolut", detail: "Revolut transfer", href: "", username: "mattixtrade" },
      { id: "aba", label: "ABA", detail: "Cambodia payment link", href: "https://link.payway.com.kh/X1561211C", username: "" },
      { id: "kofi", label: "Ko-fi", detail: "Personal Ko-fi page", href: "https://ko-fi.com/shenzesun", username: "" },
      { id: "sentz", label: "Sentz", detail: "Sentz profile", href: "https://sentz.me/Mattix", username: "Mattix" },
      {
        id: "binance",
        label: "Binance",
        detail: "Binance Pay",
        href: "",
        username: "Mattix-Trade",
        fields: [
          { id: "nickname", label: "Nickname", value: "Mattix-Trade" },
          { id: "accountId", label: "ID", value: "1053190421" },
          { id: "email", label: "Email", value: "songchimchek23712@gmail.com" },
        ],
      },
      {
        id: "coinbase",
        label: "Coinbase Wallet",
        detail: "ETH, SOL, BTC",
        href: "",
        username: "mattixtrade",
        fields: [
          { id: "username", label: "Username", value: "mattixtrade" },
          { id: "name", label: "Name", value: "mattixtrade.base.eth" },
        ],
        addresses: cryptoAssets.map((asset) => ({
          id: `coinbase-${asset.id}`,
          asset: asset.symbol,
          network: asset.network,
          address: asset.address,
          record: asset.record,
        })),
      },
    ] satisfies PayLink[],
    qr: [
      {
        id: "wechat",
        label: "WeChat",
        detail: "Hong Kong and Mainland China",
        codes: [
          { id: "wechat-hk", region: "hongkong", account: "Mattix", src: qrSrc("WeChat Pay Hong Kong - Mattix.jpg") },
          { id: "wechat-cn-520", region: "mainland", account: "@ShenzeSun520", src: qrSrc("WeChat Pay Mainland China - @ShenzeSun520.jpg") },
          { id: "wechat-cn-101", region: "mainland", account: "@ShenzeSun101", src: qrSrc("WeChat Pay Mainland China - @ShenzeSun101.jpg") },
        ],
      },
      {
        id: "alipay",
        label: "Alipay",
        detail: "Hong Kong and Mainland China",
        codes: [
          { id: "alipay-hk", region: "hongkong", account: "Mattix", src: qrSrc("Alipay Hong Kong - Mattix.jpg") },
          { id: "alipay-cn-connor", region: "mainland", account: "connor11matt@gmail.com", src: qrSrc("Alipay Mainland China - connor11matt@gmail.com.jpg") },
          {
            id: "alipay-cn-kruychamroeun",
            region: "mainland",
            account: "kruychamroeun101@gmail.com",
            src: qrSrc("Alipay Mainland China - kruychamroeun101@gmail.com.jpg"),
          },
        ],
      },
    ] satisfies PayQr[],
    wallets: [
      { id: "metamask", label: "MetaMask", detail: "ETH, SOL, BTC", addresses: [] },
      { id: "trust", label: "Trust Wallet", detail: "ETH, SOL, BTC", addresses: [] },
      {
        id: "blockchain",
        label: "Blockchain.com",
        detail: "Bitcoin wallet",
        addresses: [
          {
            id: "blockchain-btc",
            asset: "BTC",
            network: "Bitcoin",
            address: "mattixtrade.blockchain",
            record:
              "https://opensea.io/item/polygon/0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f/73036123896380372672487407380521330713042327814783307118289276504488929639020",
          },
        ],
      },
    ] satisfies WalletGroup[],
  },
  services: [
    {
      id: "consulting",
      name: "Consulting",
      summary: "A second opinion on a system, a plan, or a decision you are about to make.",
      plans: [
        {
          id: "hour",
          name: "Office hour",
          price: "$80",
          unit: "per hour",
          points: ["One problem, worked through live", "Notes sent after the call", "Best for a blocked decision"],
        },
        {
          id: "block",
          name: "Advisory block",
          price: "$450",
          unit: "half day",
          points: ["Architecture or codebase review", "Written risks and a recommended path", "Follow-up notes for your team"],
        },
      ],
    },
    {
      id: "programming",
      name: "Programming",
      summary: "Scoped builds: a fix, a feature, or a week of focused delivery.",
      plans: [
        {
          id: "fix",
          name: "Fix",
          price: "From $150",
          unit: "one issue",
          points: ["Bug, integration, or small change", "Delivered on a branch you can review", "Price confirmed before work starts"],
        },
        {
          id: "feature",
          name: "Feature",
          price: "From $800",
          unit: "one feature",
          points: ["A defined slice of product work", "Web, API, or automation", "Short demo when it is ready"],
        },
        {
          id: "sprint",
          name: "Sprint",
          price: "$2,400",
          unit: "one week",
          points: ["Five focused build days", "Daily check-in on what moved", "Handoff notes at the end of the week"],
        },
      ],
    },
    {
      id: "care",
      name: "Care",
      summary: "Reserved hours after something is already in production.",
      plans: [
        {
          id: "retain",
          name: "Retain",
          price: "$500",
          unit: "per month",
          points: ["10 hours reserved", "Fixes and small improvements", "Unused hours do not roll over"],
        },
        {
          id: "priority",
          name: "Priority",
          price: "$900",
          unit: "per month",
          points: ["20 hours reserved", "Faster response on production issues", "A monthly note on what changed"],
        },
      ],
    },
  ] satisfies ServiceGroup[],
};

export function publicSocialLinks(): SocialLink[] {
  const links = site.social.filter((item) => item.href.trim().length > 0);
  const hasYouTube = links.some((item) => item.id === "youtube");
  if (!hasYouTube && site.youtube.channelId) {
    return [
      {
        id: "youtube",
        label: "YouTube",
        href: `https://www.youtube.com/channel/${site.youtube.channelId}`,
        handle: "",
      },
      ...links,
    ];
  }
  return links;
}

export function paymentUrl(method: PayLink, amount: number) {
  if (method.href.trim()) return method.href.trim();
  const username = method.username.trim();
  if (!username || !Number.isFinite(amount)) return "";
  if (method.id === "paypal") {
    const value = Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
    return `https://www.paypal.com/paypalme/${encodeURIComponent(username)}/${value}USD`;
  }
  if (method.id === "revolut") {
    return `https://revolut.me/${encodeURIComponent(username)}`;
  }
  return "";
}
