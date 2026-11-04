import type { Dictionary } from "./en";

const fr: Dictionary = {
  meta: {
    shortBio: "Vlogueur et ingénieur logiciel",
    tagline: "Des films, un roman, et du logiciel sur commande.",
    description:
      "Mattix publie des films, un roman sur Qidian, et prend des missions de conseil et de programmation. Bureaux à Ta Khmau, au Cambodge, et à Kowloon, à Hong Kong.",
  },
  nav: {
    films: "Films",
    novel: "Roman",
    services: "Services",
    contact: "Contact",
    support: "Soutien",
    menu: "Menu",
    close: "Fermer",
    primary: "Principal",
    language: "Langue",
    skip: "Aller au contenu",
  },
  footer: {
    terms: "Conditions d'utilisation",
    privacy: "Confidentialité",
    serviceTerms: "Conditions de service",
    legal: "Mentions",
  },
  cookie: {
    title: "Cookies sur ce site",
    body: "Ce site enregistre votre choix de cookie dans ce navigateur. Si vous connectez MetaMask ou Trust Wallet, il enregistre aussi cette adresse et tout rappel de paiement mensuel sur cet appareil. Il n'utilise pas de cookies publicitaires, ne reçoit pas votre phrase secrète et ne vend pas de profil.",
    privacy: "Confidentialité",
    accept: "Accepter",
  },
  home: {
    watch: "Regarder",
    hire: "Engager Mattix",
    latest: "Récent",
    nowPlaying: "En lecture",
    emptyFilms: "Les nouveaux films apparaîtront ici.",
    emptyHint: "Le flux de la chaîne est vérifié chaque heure.",
    readNovel: "Lire le roman",
    connectLead: "Les chaînes réellement utilisées.",
    about: "À propos",
    aboutBody: [
      "Je publie des films des endroits que je traverse, et un roman sur Qidian.",
      "Je conseille aussi et j'écris des logiciels : la planification, la programmation, et le suivi d'un système après sa mise en ligne.",
    ],
    connect: "Liens",
    connectBrand: "Mattix",
    connectPerson: "En personne",
    prices: "Tarifs de départ publiés",
    supportEyebrow: "Soutenir le travail",
    supportTitle: "PayPal, Revolut, Payoneer, ABA, Ko-fi et crypto.",
    supportCta: "Soutenir",
    presidentEyebrow: "Président de la marque",
    presidentBody:
      "Shenze Sun est la personne responsable de Mattix. La chaîne personnelle est distincte des films de la marque.",
    presidentCta: "Shenze Sun sur YouTube",
    presidentEmpty: "Les nouveaux films de Shenze Sun apparaîtront ici.",
    officesTitle: "Bureaux",
    officesLead: "Deux bureaux. Appelez le numéro de la ville depuis laquelle vous écrivez.",
    phone: "Téléphone",
  },
  offices: { cambodia: "Cambodge", hongkong: "Hong Kong" },
  videos: {
    eyebrow: "YouTube",
    title: "Films",
    lead: "Les nouvelles vidéos de la chaîne Mattix. Chaque carte s'ouvre sur YouTube.",
  },
  novel: {
    body: "Le roman est publié sur Qidian. Le bouton ouvre la page du livre.",
    open: "Ouvrir sur Qidian",
  },
  donate: {
    eyebrow: "Soutien",
    title: "Envoyez ce que vous voulez.",
    lead: "Choisissez un montant, puis un moyen. Un bouton ouvre ce service, ou MetaMask et Trust Wallet le convertissent en ETH, SOL ou BTC au cours du moment de la confirmation.",
    amount: "Montant en dollars américains",
    custom: "Autre",
    methods: "Moyen de paiement",
    continue: "Continuer avec {label}",
    revolut: "Ceci ouvre votre lien Revolut. Envoyez {amount} $ si la page vous laisse choisir le montant.",
    linked: "Ceci ouvre votre lien {label}. Envoyez {amount} $ si cette page demande un montant.",
    leave: "Vous quitterez ce site et enverrez {amount} $ avec {label}.",
    payoneer: "Envoyez {amount} $ à ce compte Payoneer depuis l'application Payoneer.",
    account: "Envoyez {amount} $ avec ces informations {label}.",
    nickname: "Pseudonyme",
    accountId: "Identifiant",
    email: "E-mail",
    username: "Nom d'utilisateur",
    name: "Nom",
    record: "Ouvrir la fiche publique",
    unavailable: "{label} n'est pas encore disponible sur cette page.",
    qrLead:
      "Choisissez Hong Kong ou la Chine continentale, puis scannez le code dans {label}. Envoyez {amount} $, ou le montant de votre choix.",
    qrAlt: "Code de réception {label}",
    qrMissing: "Le code de réception {label} n'est pas encore sur cette page.",
    qrRegion: "Région",
    qrHongkong: "Hong Kong",
    qrMainland: "Chine continentale",
    qrAccount: "Compte",
    walletLead: "Vérifiez la pièce et le réseau avant d'envoyer. Ces adresses appartiennent à {label}.",
    walletEmpty: "Ajoutez l'adresse {asset} de {wallet} avant d'afficher ce code.",
    walletWarn: "Un mauvais réseau, et le transfert est perdu. Vérifiez l'actif et le réseau du portefeuille.",
    walletSend: "Envoyez seulement {asset} sur {network} à cette adresse {wallet}. Un transfert sur un autre réseau ne peut pas être récupéré.",
    copy: "Copier l'adresse",
    copied: "Copié",
    web3: {
      lead: "Connectez {label}. {amount} $ sont convertis en ETH, SOL ou BTC au cours du moment de la confirmation.",
      confirm: "Vous confirmez chaque paiement dans le portefeuille, y compris un paiement mensuel. Ce site ne peut pas déplacer les fonds seul. Le prochain paiement mensuel utilise le cours de cette confirmation ultérieure.",
      recipient: "Destinataire",
      network: "Réseau",
      asset: "Actif",
      connected: "Connecté en tant que {account}.",
      connect: "Connecter {label}",
      connecting: "En attente de {label}…",
      paying: "Confirmez le transfert dans {label}…",
      once: "Payer {crypto} {symbol} une fois",
      month: "Payer {crypto} {symbol} ce mois-ci",
      paid: "Envoyé. Le transfert est public sur {network}.",
      view: "Voir la transaction",
      missing: "{label} n'est pas dans ce navigateur.",
      open: "Ouvrir dans {label}",
      openPay: "Ouvrir le paiement {symbol}",
      opened: "Le montant {symbol} utilise le cours qui vient d'être chargé. Confirmez ce paiement dans le portefeuille.",
      rejected: "Le portefeuille a fermé la demande. Rien n'a été envoyé.",
      chain: "Passez le portefeuille sur {network}, puis réessayez.",
      low: "Ce portefeuille n'a pas assez de {symbol} sur {network}.",
      rate: "{amount} $ = {crypto} {symbol}",
      rateNow: "Cours {source} pour ce paiement : 1 {symbol} = {price} $.",
      rateWait: "Chargement du cours actuel…",
      rateFail: "Le cours actuel est indisponible, donc rien n'a été envoyé.",
      failed: "Le transfert n'a pas abouti.",
      subSaved: "Ce mois-ci est payé. La prochaine confirmation est due le {date}. Ce site ne peut pas débiter le portefeuille seul.",
      subDue: "Un paiement mensuel de {amount} $ est dû. Confirmez-le dans {label} pour l'envoyer.",
      subClear: "Effacer le rappel mensuel",
    },
  },
  services: {
    eyebrow: "Services informatiques",
    title: "Conseil et programmation, tarifs affichés.",
    lead: "Ce sont des tarifs de départ en dollars américains. Un devis fixe les remplace une fois le périmètre clair. Le travail commence après acceptation écrite de ce devis.",
    terms: "Conditions de service",
    ask: "Demander un devis",
    groups: {
      consulting: {
        name: "Conseil",
        summary: "Un second avis sur un système, un plan, ou une décision que vous allez prendre.",
      },
      programming: {
        name: "Programmation",
        summary: "Des livraisons cadrées : un correctif, une fonction, ou une semaine de travail concentré.",
      },
      care: {
        name: "Suivi",
        summary: "Un bloc mensuel d'heures pour un produit déjà en ligne.",
      },
    },
    plans: {
      hour: {
        name: "Heure de bureau",
        unit: "par heure",
        points: ["Un problème, traité en direct", "Des notes envoyées après l'appel", "Utile pour une décision bloquée"],
      },
      block: {
        name: "Bloc de conseil",
        unit: "demi-journée",
        points: ["Revue d'architecture ou de code", "Risques écrits et une voie recommandée", "Notes de suivi pour votre équipe"],
      },
      fix: {
        name: "Correctif",
        unit: "un sujet",
        points: ["Bogue, intégration ou petit changement", "Livré sur une branche à relire", "Prix confirmé avant le travail"],
      },
      feature: {
        name: "Fonction",
        unit: "livraison cadrée",
        points: ["Écrans ou comportement d'API convenus", "Un logiciel qui marche, pas un diaporama", "Un tour de révisions dans le périmètre"],
      },
      sprint: {
        name: "Sprint",
        unit: "par semaine",
        points: ["Cinq jours concentrés", "Note quotidienne sur l'avancement", "Vous gardez le dépôt"],
      },
      retain: {
        name: "Retainer",
        unit: "par mois",
        points: ["10 heures", "Bogues, petits changements et questions", "Les heures non utilisées ne sont pas reportées"],
      },
      priority: {
        name: "Priorité",
        unit: "par mois",
        points: ["20 heures", "La même personne tout le mois", "Réponse planifiée les jours ouvrés"],
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Écrivez à la boîte qui répond.",
    lead: "Conseil, facture ou note générale. Le message part vers contact@mattixs.com et shenzesun@mattixs.com.",
    name: "Nom",
    email: "E-mail",
    about: "Sujet",
    reference: "Référence de facture",
    optional: "facultatif",
    message: "Message",
    company: "Société",
    send: "Envoyer",
    sending: "Envoi…",
    sent: "Envoyé. Une réponse viendra de la boîte Mattix.",
    mailto:
      "Votre application e-mail devrait s'ouvrir avec ce message adressé à contact@mattixs.com et shenzesun@mattixs.com. Envoyez-le depuis là.",
    purposes: { contact: "Note générale", consulting: "Conseil", invoice: "Payer une facture" },
    errors: {
      name: "Indiquez votre nom.",
      email: "Indiquez une adresse e-mail valide.",
      purpose: "Choisissez contact, conseil ou paiement d'une facture.",
      message: "Écrivez au moins quelques mots.",
      reference: "Gardez la référence de facture sous 80 caractères.",
      send: "Le message n'a pas été envoyé. Réessayez dans un instant.",
    },
  },
  legal: {
    updated: "En vigueur le 4 novembre 2026",
    terms: {
      title: "Conditions d'utilisation",
      summary: "Les règles pour lire ce site. Le travail professionnel payant a ses propres conditions.",
      sections: [
        {
          heading: "Qui est concerné",
          paragraphs: [
            "Ces conditions couvrent les pages publiques de Mattix : films, lien du roman, descriptions de services et page de soutien. Mattix est une pratique personnelle, avec des bureaux à Ta Khmau, au Cambodge, et à Kowloon, à Hong Kong.",
            "Si vous engagez Mattix pour du conseil ou de la programmation, les conditions de service professionnel s'appliquent. Un don n'est pas un contrat de prestation.",
          ],
        },
        {
          heading: "Utiliser le site",
          paragraphs: [
            "Vous pouvez lire les pages, regarder les films liés et suivre les liens vers YouTube, Qidian, les comptes sociaux et les services de paiement. N'abusez pas du site, n'essayez pas de le casser et n'envoyez pas de contenu illicite par le formulaire.",
            "Les pages de films s'ouvrent sur YouTube. Le roman s'ouvre sur Qidian. Ces services ont leurs propres conditions.",
          ],
        },
        {
          heading: "Soutien et paiements",
          paragraphs: [
            "Les montants de la page de soutien sont choisis par vous. Le bouton vous envoie vers PayPal, Revolut, Payoneer, ABA, Ko-fi, Sentz, Binance ou Coinbase, connecte MetaMask ou Trust Wallet, ou affiche une adresse de portefeuille ou un code de réception. Ce site ne stocke pas votre numéro de carte.",
            "Un paiement de soutien est volontaire. Il n'achète ni logiciel, ni heures de conseil, ni un droit de diriger les films.",
          ],
        },
        {
          heading: "Paiements par portefeuille sur Base",
          paragraphs: [
            "MetaMask et Trust Wallet sur la page de soutien peuvent payer en ETH sur Ethereum, en SOL sur Solana ou en BTC sur Bitcoin. Les adresses sont celles du portefeuille Coinbase publiées. Un montant en dollars est converti au cours du marché au moment de votre confirmation. Vous confirmez chaque transfert dans votre portefeuille. Ce site ne demande jamais de phrase secrète et ne peut pas déplacer les fonds seul.",
            "Un paiement mensuel est un rappel enregistré dans votre navigateur, plus un transfert que vous approuvez à chaque période, au cours de cette date ultérieure. Ce n'est pas un prélèvement automatique. Les transferts sont publics et ce site ne peut pas les annuler. Envoyer un autre actif ou utiliser un autre réseau peut faire perdre les fonds. Un soutien payé ainsi est volontaire et n'est pas un contrat de services.",
          ],
        },
        {
          heading: "Propriété intellectuelle",
          paragraphs: [
            "Les textes, la mise en page et le nom Mattix sur ce site appartiennent à Mattix, sauf mention contraire. Les vidéos restent sur YouTube. Le roman reste sur Qidian. Ne copiez pas le site pour le présenter comme le vôtre.",
          ],
        },
        {
          heading: "Responsabilité",
          paragraphs: [
            "Le site est offert tel qu'il est publié. Un lien peut changer, un service de paiement peut refuser un transfert, et un film peut être indisponible sur YouTube. Mattix n'est pas responsable des décisions que vous prenez à partir d'un film, d'un chapitre ou d'une page publique.",
            "Questions sur ces conditions : contact@mattixs.com.",
          ],
        },
      ],
    },
    privacy: {
      title: "Confidentialité",
      summary: "Ce que ce site conserve, et ce qu'il envoie quand vous écrivez ou payez.",
      sections: [
        {
          heading: "Ce que le site conserve",
          paragraphs: [
            "L'avis sur les cookies enregistre une seule valeur dans votre navigateur pour ne plus s'afficher après votre acceptation. Si vous connectez MetaMask ou Trust Wallet, ce navigateur enregistre aussi l'adresse connectée et, si vous choisissez un paiement mensuel, le montant et la prochaine date à confirmer. Ce rappel reste sur votre appareil. Il n'est pas envoyé à un serveur Mattix. Le site ne reçoit jamais votre phrase secrète ni votre clé privée. Le site ne fait pas de publicité ciblée et ne vend pas de données personnelles.",
          ],
        },
        {
          heading: "Formulaire de contact",
          paragraphs: [
            "Si vous envoyez le formulaire, Mattix reçoit votre nom, votre e-mail, le sujet, une référence de facture facultative et le message. Ces éléments servent à répondre et, pour une facture, à rapprocher un paiement.",
            "Quand un service d'e-mail est configuré, le message est envoyé à contact@mattixs.com et shenzesun@mattixs.com. Sinon, votre propre application s'ouvre avec ce message. N'envoyez ni mot de passe ni numéro de carte.",
          ],
        },
        {
          heading: "Paiements et vidéo",
          paragraphs: [
            "PayPal, Revolut, Payoneer, ABA, Ko-fi, Binance, Coinbase, Sentz, WeChat et Alipay traitent leurs paiements selon leurs propres notices. YouTube reçoit les données habituelles du lecteur quand un film se charge.",
            "Un paiement MetaMask ou Trust Wallet envoie des ETH, SOL ou BTC vers l'adresse Coinbase Wallet publiée pour ce réseau. Le montant en dollars est converti avec un cours public au moment de la confirmation. L'adresse, le montant et la transaction sont publics sur ce réseau. MetaMask et Trust Wallet traitent la connexion selon leurs propres conditions.",
          ],
        },
        {
          heading: "Durée et contact",
          paragraphs: [
            "Les messages sont conservés le temps de répondre et de garder une trace du travail payé. Vous pouvez demander ce qui est détenu, ou une correction, en écrivant à contact@mattixs.com.",
          ],
        },
      ],
    },
    services: {
      title: "Conditions de service professionnel",
      summary: "Comment le conseil et la programmation sont cadrés, payés et remis.",
      sections: [
        {
          heading: "Quand ces conditions s'appliquent",
          paragraphs: [
            "Ces conditions s'appliquent quand vous engagez Mattix pour du conseil, de la programmation ou un plan de suivi. Les prix de la page services sont des tarifs de départ en dollars américains. Ils ne sont un devis qu'une fois le périmètre confirmé par écrit.",
            "Un don, un film ou un chapitre de roman n'est pas une mission au titre de ces conditions.",
          ],
        },
        {
          heading: "Périmètre et changements",
          paragraphs: [
            "Le travail commence après votre acceptation écrite : ce qui sera fait, ce qui ne le sera pas, le prix et la date. Un changement de périmètre est un nouvel accord. Mattix le dira avant de faire le travail supplémentaire.",
            "Vous fournissez les accès, les décisions et les documents à temps. Un retard de votre côté décale la date.",
          ],
        },
        {
          heading: "Honoraires et factures",
          paragraphs: [
            "Les honoraires sont en dollars américains, sauf indication sur la facture. Une facture est payable à la date indiquée, par le moyen qui y est nommé. Si ce moyen est MetaMask ou Trust Wallet, le paiement est en ETH, SOL ou BTC au cours du marché au moment de la confirmation, et vous le confirmez dans le portefeuille. Le travail peut être suspendu si une facture est en retard.",
            "Les heures mensuelles de suivi expirent à la fin du mois. Ce n'est pas une réserve d'heures non utilisées.",
          ],
        },
        {
          heading: "Vos documents et le résultat",
          paragraphs: [
            "Vous restez propriétaire des documents que vous fournissez. Une fois la facture de livraison payée, vous recevez le résultat convenu et pouvez l'utiliser pour l'objet décrit. Mattix conserve le droit de réutiliser un savoir-faire général qui n'est pas propre à votre projet.",
            "Mattix peut mentionner la mission dans un portfolio, sauf si vous le refusez avant le début. Les détails confidentiels restent confidentiels.",
          ],
        },
        {
          heading: "Confidentialité et responsabilité",
          paragraphs: [
            "Chaque partie garde privées les informations non publiques de l'autre et ne les utilise que pour le travail. Cela ne couvre pas une information déjà publique ou qu'une loi oblige à divulguer.",
            "La responsabilité pour une mission payée est limitée aux honoraires payés pour cette mission. Mattix n'est pas responsable des pertes de profit ni de l'usage du résultat après remise. Rien ici ne limite une responsabilité que la loi interdit de limiter.",
            "La pratique est établie au Cambodge et à Hong Kong. Ces conditions suivent le droit applicable à cette pratique. Écrivez à contact@mattixs.com avant de commencer si vous avez besoin d'un autre arrangement.",
          ],
        },
      ],
    },
  },
};

export default fr;
