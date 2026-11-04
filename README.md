# Mattix

Personal site for films, the Qidian novel, channel support, and IT services. Edit public content in `lib/site.ts`. No payment API keys are required.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What to fill in

`lib/site.ts`

- `youtube.channelId` — the films page reads the public channel feed.
- `novel.title` and `novel.url` — the Qidian book page.
- `social` — full profile URLs for YouTube, Facebook, Instagram, TikTok, X, Threads, Telegram, WhatsApp, WeChat, Discord, Twitch, LinkedIn, and GitHub. Empty entries stay visible on the Connect grid and become links once a URL is set.
- `email` and `personalEmail` — both receive the contact form.
- `donations.links` — PayPal and Revolut accept a username or a full `href`. Payoneer, ABA, Binance, Coinbase, and Ko-fi use a payment link.
- WeChat and Alipay — save receive codes as `public/donate/wechat-qr.png` and `public/donate/alipay-qr.png`.
- `donations.wallets` — MetaMask, Trust Wallet, and Blockchain.com addresses. Keep each coin on its labeled network.
- `services` — published starting prices for consulting, programming, and care.

Invoices can be paid through the same channels as channel support.
