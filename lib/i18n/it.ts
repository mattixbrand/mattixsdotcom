import type { Dictionary } from "./en";

const it: Dictionary = {
  meta: {
    shortBio: "Vlogger e ingegnere del software",
    tagline: "Film, un romanzo e software su incarico.",
    description:
      "Mattix pubblica film, un romanzo su Qidian e prende incarichi di consulenza e programmazione. Uffici a Ta Khmau, in Cambogia, e a Kowloon, Hong Kong.",
  },
  nav: {
    films: "Film",
    novel: "Romanzo",
    services: "Servizi",
    contact: "Contatto",
    support: "Sostegno",
    menu: "Menu",
    close: "Chiudi",
    primary: "Principale",
    language: "Lingua",
    skip: "Vai al contenuto",
  },
  footer: {
    terms: "Condizioni d'uso",
    privacy: "Privacy",
    serviceTerms: "Condizioni di servizio",
    legal: "Note legali",
  },
  cookie: {
    title: "Cookie su questo sito",
    body: "Questo sito salva la scelta sui cookie in questo browser. Se colleghi MetaMask o Trust Wallet, salva anche quell'indirizzo e ogni promemoria di pagamento mensile su questo dispositivo. Google AdSense può impostare cookie pubblicitari per mostrare annunci. Non riceve la frase seed e non vende un profilo.",
    privacy: "Privacy",
    accept: "Accetta",
  },
  home: {
    watch: "Guarda",
    hire: "Ingaggia Mattix",
    latest: "Recenti",
    nowPlaying: "In riproduzione",
    emptyFilms: "I nuovi film compariranno qui.",
    emptyHint: "Il feed del canale viene controllato ogni ora.",
    readNovel: "Leggi il romanzo",
    connectLead: "I canali davvero in uso.",
    about: "Chi siamo",
    aboutBody: [
      "Pubblico film dei luoghi che attraverso, e un romanzo su Qidian.",
      "Faccio anche consulenza e scrivo software: pianificazione, programmazione, e tenere un sistema in funzione dopo il rilascio.",
    ],
    connect: "Collegamenti",
    connectBrand: "Mattix",
    connectPerson: "Di persona",
    prices: "Prezzi di partenza pubblicati",
    supportEyebrow: "Sostieni il lavoro",
    supportTitle: "PayPal, Revolut, Payoneer, ABA, Ko-fi e crypto.",
    supportCta: "Sostieni",
    presidentEyebrow: "Presidente del marchio",
    presidentBody:
      "Shenze Sun è la persona responsabile di Mattix. Il canale personale è distinto dai film del marchio.",
    presidentCta: "Shenze Sun su YouTube",
    presidentEmpty: "I nuovi film di Shenze Sun compariranno qui.",
    officesTitle: "Uffici",
    officesLead: "Due uffici. Chiama il numero della città da cui scrivi.",
    phone: "Telefono",
  },
  offices: { cambodia: "Cambogia", hongkong: "Hong Kong" },
  videos: {
    eyebrow: "YouTube",
    title: "Film",
    lead: "I nuovi caricamenti del canale Mattix. Ogni scheda si apre su YouTube.",
  },
  novel: {
    body: "Il romanzo è pubblicato su Qidian. Il pulsante apre la pagina del libro.",
    open: "Apri su Qidian",
  },
  donate: {
    eyebrow: "Sostegno",
    title: "Invia quello che vuoi.",
    lead: "Scegli un importo, poi un metodo. Un pulsante apre quel servizio, oppure MetaMask e Trust Wallet lo convertono in ETH, SOL o BTC al cambio del momento della conferma.",
    amount: "Importo in dollari statunitensi",
    custom: "Altro",
    methods: "Metodo di pagamento",
    continue: "Continua con {label}",
    revolut: "Si apre il tuo link Revolut. Invia {amount} $ se la pagina ti lascia scegliere l'importo.",
    linked: "Si apre il tuo link {label}. Invia {amount} $ se quella pagina chiede un importo.",
    leave: "Lascerai questo sito e invierai {amount} $ con {label}.",
    payoneer: "Invia {amount} $ a questo conto Payoneer dall'app Payoneer.",
    account: "Invia {amount} $ con questi dati {label}.",
    nickname: "Nickname",
    accountId: "ID",
    email: "Email",
    username: "Nome utente",
    name: "Nome",
    record: "Apri la scheda pubblica",
    unavailable: "{label} non è ancora disponibile in questa pagina.",
    qrLead:
      "Scegli Hong Kong o la Cina continentale, poi scansiona il codice in {label}. Invia {amount} $, o l'importo che preferisci.",
    qrAlt: "Codice di ricezione {label}",
    qrMissing: "Il codice di ricezione {label} non è ancora in questa pagina.",
    qrRegion: "Area",
    qrHongkong: "Hong Kong",
    qrMainland: "Cina continentale",
    qrAccount: "Conto",
    walletLead: "Controlla moneta e rete prima di inviare. Questi indirizzi appartengono a {label}.",
    walletEmpty: "Aggiungi l'indirizzo {asset} di {wallet} prima di mostrare questo codice.",
    walletWarn: "Rete sbagliata, trasferimento perso. Controlla asset e rete sul portafoglio di destinazione.",
    walletSend: "Invia solo {asset} su {network} a questo indirizzo {wallet}. Un trasferimento su un'altra rete non si recupera.",
    copy: "Copia indirizzo",
    copied: "Copiato",
    web3: {
      lead: "Collega {label}. {amount} $ vengono convertiti in ETH, SOL o BTC al cambio del momento della conferma.",
      confirm: "Confermi ogni pagamento nel wallet, anche quello mensile. Questo sito non può spostare i fondi da solo. Il prossimo pagamento mensile usa il cambio di quella conferma successiva.",
      recipient: "Destinatario",
      network: "Rete",
      asset: "Asset",
      connected: "Collegato come {account}.",
      connect: "Collega {label}",
      connecting: "In attesa di {label}…",
      paying: "Conferma il trasferimento in {label}…",
      once: "Paga {crypto} {symbol} una volta",
      month: "Paga {crypto} {symbol} questo mese",
      paid: "Inviato. Il trasferimento è pubblico su {network}.",
      view: "Vedi la transazione",
      missing: "{label} non è in questo browser.",
      open: "Apri in {label}",
      openPay: "Apri il pagamento {symbol}",
      opened: "L'importo {symbol} usa il cambio appena caricato. Conferma quel pagamento nel wallet.",
      rejected: "Il wallet ha chiuso la richiesta. Non è stato inviato nulla.",
      chain: "Passa il wallet a {network}, poi riprova.",
      low: "Questo wallet non ha abbastanza {symbol} su {network}.",
      rate: "{amount} $ = {crypto} {symbol}",
      rateNow: "Cambio {source} per questo pagamento: 1 {symbol} = {price} $.",
      rateWait: "Caricamento del cambio attuale…",
      rateFail: "Il cambio attuale non è disponibile, quindi non è stato inviato nulla.",
      failed: "Il trasferimento non è andato a buon fine.",
      subSaved: "Questo mese è pagato. La prossima conferma scade il {date}. Questo sito non può addebitare il wallet da solo.",
      subDue: "È dovuto un pagamento mensile di {amount} $. Confermalo in {label} per inviarlo.",
      subClear: "Cancella il promemoria mensile",
    },
  },
  services: {
    eyebrow: "Servizi IT",
    title: "Consulenza e programmazione, prezzi in chiaro.",
    lead: "Sono tariffe di partenza in dollari statunitensi. Un preventivo fisso le sostituisce quando l'ambito è chiaro. Il lavoro inizia dopo l'accettazione scritta di quel preventivo.",
    terms: "Condizioni di servizio",
    ask: "Chiedi un preventivo",
    groups: {
      consulting: {
        name: "Consulenza",
        summary: "Un secondo parere su un sistema, un piano o una decisione che stai per prendere.",
      },
      programming: {
        name: "Programmazione",
        summary: "Consegne delimitate: una correzione, una funzione o una settimana di lavoro concentrato.",
      },
      care: {
        name: "Assistenza",
        summary: "Un blocco mensile di ore per un prodotto già online.",
      },
    },
    plans: {
      hour: {
        name: "Ora in ufficio",
        unit: "all'ora",
        points: ["Un problema, affrontato dal vivo", "Note inviate dopo la chiamata", "Utile per una decisione bloccata"],
      },
      block: {
        name: "Blocco di consulenza",
        unit: "mezza giornata",
        points: ["Revisione di architettura o codice", "Rischi scritti e una strada consigliata", "Note di follow-up per il team"],
      },
      fix: {
        name: "Correzione",
        unit: "un tema",
        points: ["Bug, integrazione o piccola modifica", "Consegnata su un branch da rivedere", "Prezzo confermato prima del lavoro"],
      },
      feature: {
        name: "Funzione",
        unit: "consegna delimitata",
        points: ["Schermate o comportamento API concordati", "Software che funziona, non una presentazione", "Un giro di revisioni nell'ambito"],
      },
      sprint: {
        name: "Sprint",
        unit: "a settimana",
        points: ["Cinque giorni concentrati", "Nota quotidiana su cosa è avanzato", "Il repository resta tuo"],
      },
      retain: {
        name: "Retainer",
        unit: "al mese",
        points: ["10 ore", "Bug, piccole modifiche e domande", "Le ore non usate non si accumulano"],
      },
      priority: {
        name: "Priorità",
        unit: "al mese",
        points: ["20 ore", "La stessa persona per tutto il mese", "Risposta programmata nei giorni lavorativi"],
      },
    },
  },
  contact: {
    eyebrow: "Contatto",
    title: "Scrivi alla casella che risponde.",
    lead: "Consulenza, fattura o nota generale. Il messaggio va a contact@mattixs.com e shenzesun@mattixs.com.",
    name: "Nome",
    email: "Email",
    about: "Di cosa si tratta",
    reference: "Riferimento fattura",
    optional: "facoltativo",
    message: "Messaggio",
    company: "Azienda",
    send: "Invia",
    sending: "Invio…",
    sent: "Inviato. La risposta arriverà dalla casella Mattix.",
    mailto:
      "L'app di posta dovrebbe aprirsi con questo messaggio indirizzato a contact@mattixs.com e shenzesun@mattixs.com. Invialo da lì.",
    purposes: { contact: "Nota generale", consulting: "Consulenza", invoice: "Pagare una fattura" },
    errors: {
      name: "Inserisci il tuo nome.",
      email: "Inserisci un indirizzo email valido.",
      purpose: "Scegli contatto, consulenza o pagamento di una fattura.",
      message: "Scrivi almeno qualche parola.",
      reference: "Tieni il riferimento fattura sotto gli 80 caratteri.",
      send: "Il messaggio non è stato inviato. Riprova tra un momento.",
    },
  },
  legal: {
    updated: "In vigore dal 4 novembre 2026",
    terms: {
      title: "Condizioni d'uso",
      summary: "Le regole per leggere questo sito. Il lavoro professionale a pagamento ha condizioni proprie.",
      sections: [
        {
          heading: "A chi si applicano",
          paragraphs: [
            "Queste condizioni coprono le pagine pubbliche di Mattix: film, link del romanzo, descrizioni dei servizi e pagina di sostegno. Mattix è una pratica personale, con uffici a Ta Khmau, in Cambogia, e a Kowloon, Hong Kong.",
            "Se incarichi Mattix per consulenza o programmazione, si applicano le condizioni di servizio professionale. Una donazione non è un contratto di prestazione.",
          ],
        },
        {
          heading: "Uso del sito",
          paragraphs: [
            "Puoi leggere le pagine, guardare i film collegati e seguire i link a YouTube, Qidian, gli account social e i servizi di pagamento. Non abusare del sito, non tentare di romperlo e non inviare materiale illecito dal modulo.",
            "Le pagine dei film si aprono su YouTube. Il romanzo si apre su Qidian. Quei servizi hanno le proprie condizioni.",
          ],
        },
        {
          heading: "Sostegno e pagamenti",
          paragraphs: [
            "Gli importi della pagina di sostegno li scegli tu. Il pulsante ti porta a PayPal, Revolut, Payoneer, ABA, Ko-fi, Sentz, Binance o Coinbase, collega MetaMask o Trust Wallet, oppure mostra un indirizzo wallet o un codice di ricezione. Questo sito non memorizza il numero della carta.",
            "Un pagamento di sostegno è volontario. Non compra software, ore di consulenza né il diritto di dirigere i film.",
          ],
        },
        {
          heading: "Pagamenti wallet su Base",
          paragraphs: [
            "MetaMask e Trust Wallet nella pagina di sostegno possono pagare in ETH su Ethereum, SOL su Solana o BTC su Bitcoin. Gli indirizzi sono quelli pubblicati di Coinbase Wallet. Un importo in dollari viene convertito al cambio di mercato nel momento in cui confermi. Confermi ogni trasferimento nel tuo wallet. Questo sito non chiede mai la frase seed e non può spostare i fondi da solo.",
            "Un pagamento mensile è un promemoria salvato nel browser più un trasferimento che approvi a ogni periodo, al cambio di quella data successiva. Non è un addebito automatico. I trasferimenti sono pubblici e questo sito non può annullarli. Inviare un altro asset o usare un'altra rete può far perdere i fondi. Un sostegno pagato così è volontario e non è un contratto di servizi.",
          ],
        },
        {
          heading: "Proprietà intellettuale",
          paragraphs: [
            "Testi, impaginazione e nome Mattix su questo sito appartengono a Mattix, salvo diversa indicazione. I video restano su YouTube. Il romanzo resta su Qidian. Non copiare il sito per presentarlo come tuo.",
          ],
        },
        {
          heading: "Responsabilità",
          paragraphs: [
            "Il sito è offerto come pubblicato. Un link può cambiare, un servizio di pagamento può rifiutare un trasferimento e un film può non essere disponibile su YouTube. Mattix non risponde delle decisioni che prendi da un film, un capitolo o una pagina pubblica.",
            "Domande su queste condizioni: contact@mattixs.com.",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy",
      summary: "Cosa conserva questo sito, e cosa invia quando scrivi o paghi.",
      sections: [
        {
          heading: "Cosa conserva il sito",
          paragraphs: [
            "L'avviso sui cookie salva un solo valore nel browser, così non ricompare dopo l'accettazione. Se colleghi MetaMask o Trust Wallet, questo browser salva anche l'indirizzo collegato e, se scegli un pagamento mensile, l'importo e la prossima data da confermare. Quel promemoria resta sul dispositivo. Non viene inviato a un server Mattix. Il sito non riceve mai la frase seed né la chiave privata. Google AdSense può impostare cookie pubblicitari per mostrare annunci. Il sito non vende dati personali.",
          ],
        },
        {
          heading: "Modulo di contatto",
          paragraphs: [
            "Se invii il modulo, Mattix riceve nome, email, argomento, un riferimento fattura facoltativo e il messaggio. Servono per rispondere e, per una fattura, per abbinare un pagamento.",
            "Se un servizio di posta è configurato, il messaggio arriva a contact@mattixs.com e shenzesun@mattixs.com. Altrimenti si apre la tua app con quel messaggio. Non inviare password o numeri di carta.",
          ],
        },
        {
          heading: "Pagamenti e video",
          paragraphs: [
            "PayPal, Revolut, Payoneer, ABA, Ko-fi, Binance, Coinbase, Sentz, WeChat e Alipay trattano i pagamenti secondo le proprie informative. YouTube riceve i dati abituali del player quando un film si carica.",
            "Un pagamento MetaMask o Trust Wallet invia ETH, SOL o BTC all'indirizzo Coinbase Wallet pubblicato per quella rete. L'importo in dollari viene convertito con un prezzo pubblico al momento della conferma. Indirizzo, importo e transazione sono pubblici su quella rete. MetaMask e Trust Wallet gestiscono il collegamento secondo le proprie condizioni.",
          ],
        },
        {
          heading: "Durata e richieste",
          paragraphs: [
            "I messaggi restano il tempo di rispondere e di tenere traccia del lavoro pagato. Puoi chiedere cosa è conservato, o una correzione, scrivendo a contact@mattixs.com.",
          ],
        },
      ],
    },
    services: {
      title: "Condizioni di servizio professionale",
      summary: "Come consulenza e programmazione vengono definite, pagate e consegnate.",
      sections: [
        {
          heading: "Quando si applicano",
          paragraphs: [
            "Queste condizioni si applicano quando incarichi Mattix per consulenza, programmazione o un piano di assistenza. I prezzi della pagina servizi sono tariffe di partenza in dollari statunitensi. Diventano un preventivo solo quando Mattix conferma l'ambito per iscritto.",
            "Una donazione, un film o un capitolo non sono un incarico ai sensi di queste condizioni.",
          ],
        },
        {
          heading: "Ambito e modifiche",
          paragraphs: [
            "Il lavoro inizia dopo che accetti per iscritto cosa sarà fatto, cosa no, il prezzo e la data. Un cambio di ambito è un nuovo accordo. Mattix lo dirà prima di fare il lavoro extra.",
            "Tu fornisci accessi, decisioni e materiali in tempo. Un ritardo da parte tua sposta la data.",
          ],
        },
        {
          heading: "Compensi e fatture",
          paragraphs: [
            "I compensi sono in dollari statunitensi, salvo diversa indicazione in fattura. La fattura si paga entro la data indicata, con il metodo lì indicato. Se il metodo è MetaMask o Trust Wallet, il pagamento è ETH, SOL o BTC al cambio di mercato al momento della conferma, e lo confermi nel wallet. Il lavoro può fermarsi se una fattura è scaduta.",
            "Le ore mensili di assistenza scadono a fine mese. Non sono una riserva di tempo non usato.",
          ],
        },
        {
          heading: "I tuoi materiali e il risultato",
          paragraphs: [
            "Restano tuoi i materiali che fornisci. Pagata la fattura di consegna, ricevi il risultato concordato e puoi usarlo per lo scopo descritto. Mattix conserva il diritto di riusare il know-how generale che non è unico del tuo progetto.",
            "Mattix può citare l'incarico in un portfolio, salvo tuo rifiuto prima dell'inizio. I dettagli riservati restano riservati.",
          ],
        },
        {
          heading: "Riservatezza e responsabilità",
          paragraphs: [
            "Ciascuna parte tiene private le informazioni non pubbliche dell'altra e le usa solo per il lavoro. Non rientra ciò che è già pubblico o che la legge obbliga a comunicare.",
            "La responsabilità per un incarico pagato è limitata ai compensi pagati per quell'incarico. Mattix non risponde di mancati profitti né dell'uso del risultato dopo la consegna. Nulla qui limita una responsabilità che la legge non consente di limitare.",
            "La pratica ha sede in Cambogia e a Hong Kong. Queste condizioni seguono la legge applicabile a quella pratica. Scrivi a contact@mattixs.com prima di iniziare se ti serve un accordo diverso.",
          ],
        },
      ],
    },
  },
};

export default it;
