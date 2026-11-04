const en = {
  meta: {
    shortBio: "Vlogger and software engineer",
    tagline: "Films, a novel, and software for hire.",
    description:
      "Mattix publishes films, a novel on Qidian, and takes consulting and programming work. Offices in Ta Khmau, Cambodia and Kowloon, Hong Kong.",
  },
  nav: {
    films: "Films",
    novel: "Novel",
    services: "Services",
    contact: "Contact",
    support: "Support",
    menu: "Menu",
    close: "Close",
    primary: "Primary",
    language: "Language",
    skip: "Skip to content",
  },
  footer: { terms: "Terms of use", privacy: "Privacy", serviceTerms: "Service terms", legal: "Legal" },
  cookie: {
    title: "Cookies on this site",
    body: "This site stores your cookie choice in this browser. If you connect MetaMask or Trust Wallet, it also stores that wallet address and any monthly payment reminder on this device. It does not run advertising cookies, does not receive your seed phrase, and does not sell a profile of you.",
    privacy: "Privacy",
    accept: "Accept",
  },
  home: {
    watch: "Watch",
    hire: "Hire Mattix",
    latest: "Latest",
    nowPlaying: "Now playing",
    emptyFilms: "New films will appear here.",
    emptyHint: "The channel feed is checked each hour.",
    readNovel: "Read the novel",
    connectLead: "The channels that are actually in use.",
    about: "About",
    aboutBody: [
      "I publish films from the places I move through, and a novel on Qidian.",
      "I also consult and write software: planning, programming, and keeping a system running after it ships.",
    ],
    connect: "Connect",
    connectBrand: "Mattix",
    connectPerson: "In person",
    prices: "Published starting prices",
    supportEyebrow: "Support the work",
    supportTitle: "PayPal, Revolut, Payoneer, ABA, Ko-fi, and crypto.",
    supportCta: "Support",
    presidentEyebrow: "Brand president",
    presidentBody:
      "Shenze Sun is the person responsible for Mattix. The personal channel is separate from the brand films.",
    presidentCta: "Shenze Sun on YouTube",
    presidentEmpty: "New films from Shenze Sun will appear here.",
    officesTitle: "Offices",
    officesLead: "Two offices. Call the number for the city you are writing from.",
    phone: "Phone",
  },
  offices: { cambodia: "Cambodia", hongkong: "Hong Kong" },
  videos: {
    eyebrow: "YouTube",
    title: "Films",
    lead: "New uploads from the Mattix channel. Each card opens on YouTube.",
  },
  novel: { body: "The novel is published on Qidian. The button opens the book page.", open: "Open on Qidian" },
  donate: {
    eyebrow: "Support",
    title: "Send what you want.",
    lead: "Choose an amount, then a method. A button opens that service, or MetaMask and Trust Wallet convert it to ETH, SOL, or BTC at the rate when you confirm.",
    amount: "Amount in USD",
    custom: "Custom",
    methods: "Payment method",
    continue: "Continue with {label}",
    revolut: "This opens your Revolut link. Send ${amount} there if the page lets you choose an amount.",
    linked: "This opens your {label} link. Send ${amount} if that page asks for an amount.",
    leave: "You will leave this site and send ${amount} with {label}.",
    payoneer: "Send ${amount} to this Payoneer account from the Payoneer app.",
    account: "Send ${amount} with these {label} details.",
    nickname: "Nickname",
    accountId: "ID",
    email: "Email",
    username: "Username",
    name: "Name",
    record: "Open the public record",
    unavailable: "{label} is not available on this page yet.",
    qrLead: "Choose Hong Kong or Mainland China, then scan the code in {label}. Send ${amount}, or any amount you choose.",
    qrAlt: "{label} receive code",
    qrMissing: "The {label} receive code is not on this page yet.",
    qrRegion: "Region",
    qrHongkong: "Hong Kong",
    qrMainland: "Mainland China",
    qrAccount: "Account",
    walletLead: "Match the coin and the network before you send. These addresses belong to {label}.",
    walletEmpty: "Add the {asset} address for {wallet} before this code can be shown.",
    walletWarn: "Wrong network, and the transfer is gone. Check the asset and the network on the receiving wallet.",
    walletSend: "Send only {asset} on {network} to this {wallet} address. A transfer on another network cannot be recovered.",
    copy: "Copy address",
    copied: "Copied",
    web3: {
      lead: "Connect {label}. ${amount} is converted to ETH, SOL, or BTC at the rate when you confirm.",
      confirm: "You confirm every payment in the wallet, including a monthly one. This site cannot move funds by itself. The next monthly payment uses the rate at that later confirmation.",
      recipient: "Recipient",
      network: "Network",
      asset: "Asset",
      connected: "Connected as {account}.",
      connect: "Connect {label}",
      connecting: "Waiting for {label}…",
      paying: "Confirm the transfer in {label}…",
      once: "Pay {crypto} {symbol} once",
      month: "Pay {crypto} {symbol} this month",
      paid: "Sent. The transfer is public on {network}.",
      view: "View the transaction",
      missing: "{label} is not in this browser.",
      open: "Open in {label}",
      openPay: "Open the {symbol} payment",
      opened: "The {symbol} amount uses the rate just loaded. Confirm that payment in the wallet.",
      rejected: "The wallet closed the request. Nothing was sent.",
      chain: "Switch the wallet to {network}, then try again.",
      low: "This wallet does not have enough {symbol} on {network}.",
      rate: "${amount} = {crypto} {symbol}",
      rateNow: "Rate from {source} for this payment: 1 {symbol} = ${price}.",
      rateWait: "Loading the current rate…",
      rateFail: "The current rate is unavailable, so nothing was sent.",
      failed: "The transfer did not go through.",
      subSaved: "This month is paid. The next confirmation is due {date}. This site cannot charge the wallet by itself.",
      subDue: "A monthly payment of ${amount} is due. Confirm it in {label} to send it.",
      subClear: "Clear monthly reminder",
    },
  },
  services: {
    eyebrow: "IT services",
    title: "Consulting and programming, priced in the open.",
    lead: "These are starting rates in US dollars. A fixed quote replaces them once the scope is clear. Work starts after that quote is accepted in writing.",
    terms: "Service terms",
    ask: "Ask for a quote",
    groups: {
      consulting: {
        name: "Consulting",
        summary: "A second opinion on a system, a plan, or a decision you are about to make.",
      },
      programming: {
        name: "Programming",
        summary: "Scoped builds: a fix, a feature, or a week of focused delivery.",
      },
      care: {
        name: "Care",
        summary: "A monthly block of hours for a product that is already live.",
      },
    },
    plans: {
      hour: {
        name: "Office hour",
        unit: "per hour",
        points: ["One problem, worked through live", "Notes sent after the call", "Best for a blocked decision"],
      },
      block: {
        name: "Advisory block",
        unit: "half day",
        points: ["Architecture or codebase review", "Written risks and a recommended path", "Follow-up notes for your team"],
      },
      fix: {
        name: "Fix",
        unit: "one issue",
        points: ["Bug, integration, or small change", "Delivered on a branch you can review", "Price confirmed before work starts"],
      },
      feature: {
        name: "Feature",
        unit: "scoped build",
        points: ["Agreed screens or API behavior", "Working software, not a slide deck", "One round of revisions in scope"],
      },
      sprint: {
        name: "Sprint",
        unit: "per week",
        points: ["Five focused days", "Daily note on what moved", "You keep the repository"],
      },
      retain: {
        name: "Retain",
        unit: "per month",
        points: ["10 hours", "Bugs, small changes, and questions", "Unused hours do not roll over"],
      },
      priority: {
        name: "Priority",
        unit: "per month",
        points: ["20 hours", "Same person across the month", "Scheduled reply on business days"],
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Write to the inbox that answers.",
    lead: "Consulting, an invoice, or a general note. The message goes to contact@mattixs.com and shenzesun@mattixs.com.",
    name: "Name",
    email: "Email",
    about: "What is this about",
    reference: "Invoice reference",
    optional: "optional",
    message: "Message",
    company: "Company",
    send: "Send message",
    sending: "Sending…",
    sent: "Sent. A reply will come from the Mattix inbox.",
    mailto:
      "Your email app should open with this message addressed to contact@mattixs.com and shenzesun@mattixs.com. Send it from there.",
    purposes: { contact: "General note", consulting: "Consulting", invoice: "Pay an invoice" },
    errors: {
      name: "Enter your name.",
      email: "Enter a valid email address.",
      purpose: "Choose contact, consulting, or pay an invoice.",
      message: "Write a message of at least a few words.",
      reference: "Keep the invoice reference under 80 characters.",
      send: "The message was not sent. Try again in a moment.",
    },
  },
  legal: {
    updated: "Effective 4 November 2026",
    terms: {
      title: "Terms of use",
      summary: "The rules for reading this site. Paid professional work has its own terms.",
      sections: [
        {
          heading: "Who this covers",
          paragraphs: [
            "These terms cover the public pages of Mattix: films, the novel link, service descriptions, and the support page. Mattix is a personal practice with offices in Ta Khmau, Cambodia and Kowloon, Hong Kong.",
            "If you hire Mattix for consulting or programming, the professional service terms apply to that work. A donation is not a contract for services.",
          ],
        },
        {
          heading: "Using the site",
          paragraphs: [
            "You may read the pages, watch the linked films, and follow the links to YouTube, Qidian, social accounts, and payment services. Do not misuse the site, attempt to break it, or send unlawful material through the contact form.",
            "Film pages open on YouTube. The novel opens on Qidian. Those services have their own terms.",
          ],
        },
        {
          heading: "Support and payments",
          paragraphs: [
            "Amounts on the support page are chosen by you. The button sends you to PayPal, Revolut, Payoneer, ABA, Ko-fi, Sentz, Binance, or Coinbase, connects MetaMask or Trust Wallet, or shows a wallet address or receive code. This site does not store your card number.",
            "A payment to support the work is voluntary. It does not buy software, consulting hours, or a right to direct the films.",
          ],
        },
        {
          heading: "Wallet payments on Base",
          paragraphs: [
            "MetaMask and Trust Wallet on the support page can pay in ETH on Ethereum, SOL on Solana, or BTC on Bitcoin. The addresses are the published Coinbase Wallet addresses. A dollar amount is converted at the market rate at the moment you confirm, so $5 becomes the ETH, SOL, or BTC that rate buys at that moment. You confirm every transfer inside your wallet. This site never asks for a seed phrase and cannot move funds on its own.",
            "A monthly payment is a reminder stored in your browser plus a transfer you approve each period, at the rate on that later date. It is not an automatic debit. Transfers are public and this site cannot reverse them. Sending a different asset or using a different network can lose the funds. Support paid this way is voluntary and is not a contract for services.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The writing, layout, and Mattix name on this site belong to Mattix unless a page says otherwise. YouTube videos remain on YouTube. The novel remains on Qidian. Do not copy the site design or present it as your own.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "The site is offered as published. Links can change, a payment service can decline a transfer, and a film can be unavailable on YouTube. Mattix is not liable for decisions you make from a film, a novel chapter, or a public page.",
            "Questions about these terms: contact@mattixs.com.",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy",
      summary: "What this site stores, and what it sends when you write or pay.",
      sections: [
        {
          heading: "What the site itself stores",
          paragraphs: [
            "The cookie notice stores one value in your browser so the notice does not return after you accept it. If you connect MetaMask or Trust Wallet, this browser also stores the wallet address you connect and, if you choose a monthly payment, the amount and the next date to confirm. That reminder stays on your device. It is not sent to a Mattix server. The site never receives your seed phrase or private key. The site does not run an advertising network and does not sell personal data.",
          ],
        },
        {
          heading: "Contact form",
          paragraphs: [
            "If you send the form, Mattix receives your name, email address, the topic, an optional invoice reference, and the message. Those details are used to reply and, for an invoice, to match a payment.",
            "When a mail service is configured, the message is emailed to contact@mattixs.com and shenzesun@mattixs.com. Otherwise your own email app opens with that message. Do not send passwords or card numbers in the form.",
          ],
        },
        {
          heading: "Payments and video",
          paragraphs: [
            "PayPal, Revolut, Payoneer, ABA, Ko-fi, Binance, Coinbase, Sentz, WeChat, and Alipay process their own payments under their own privacy notices. YouTube receives the usual player and visit data when a film loads.",
            "A MetaMask or Trust Wallet payment sends ETH, SOL, or BTC to the published Coinbase Wallet address for that network. The dollar amount is converted with a public spot price when you confirm. The address, amount, and transaction are public on that network. MetaMask and Trust Wallet process the connection under their own terms.",
          ],
        },
        {
          heading: "How long and who to ask",
          paragraphs: [
            "Messages are kept long enough to answer and to keep a record of paid work. You can ask what is held about you, or ask for a correction, by writing to contact@mattixs.com.",
          ],
        },
      ],
    },
    services: {
      title: "Professional service terms",
      summary: "How consulting and programming work is scoped, paid, and handed over.",
      sections: [
        {
          heading: "When these terms apply",
          paragraphs: [
            "These terms apply when you hire Mattix for consulting, programming, or a care plan. The prices on the services page are starting rates in US dollars. They are not a quote for your project until Mattix confirms the scope in writing.",
            "A donation, a film, or a novel chapter is not an engagement under these terms.",
          ],
        },
        {
          heading: "Scope and changes",
          paragraphs: [
            "Work starts after you accept a written scope: what will be done, what will not, the price, and the date. A change in scope is a new agreement. Mattix will say so before doing the extra work.",
            "You provide access, decisions, and materials on time. Delay on that side moves the date.",
          ],
        },
        {
          heading: "Fees and invoices",
          paragraphs: [
            "Fees are in US dollars unless an invoice says otherwise. An invoice is payable by the date written on it, through the method named there. When that method is MetaMask or Trust Wallet, the payment is ETH, SOL, or BTC at the market rate when you confirm, and you confirm it in the wallet. Work can pause if an invoice is overdue.",
            "Monthly care hours expire at the end of that month. They are not a bank of unused time.",
          ],
        },
        {
          heading: "Your materials and the result",
          paragraphs: [
            "You keep ownership of materials you provide. After the invoice for a programming delivery is paid, you receive the agreed result and may use it for the purpose described in the scope. Mattix keeps the right to reuse general know-how that is not unique to your project.",
            "Mattix may mention the engagement in a portfolio unless you say not to before the work starts. Confidential details stay confidential.",
          ],
        },
        {
          heading: "Confidentiality and liability",
          paragraphs: [
            "Each side keeps the other's non-public information private and uses it only for the work. This does not cover information that is already public or that must be disclosed by law.",
            "Liability for a paid engagement is limited to the fees you paid for that engagement. Mattix is not liable for lost profits or for how you use the result after handover. Nothing here limits liability that the law does not allow to be limited.",
            "The practice is based in Cambodia and Hong Kong. These terms follow the law that applies to that practice. Write to contact@mattixs.com before you start if you need a different arrangement.",
          ],
        },
      ],
    },
  },
};

export type Dictionary = typeof en;
export default en;
