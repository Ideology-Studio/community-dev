// Fonte unica di verità per tutti i post del blog.
// Importa questo file sia dalla listing page che dalla single page.

export const POSTS = [
    {
        id: 1,
        slug: "costruire-dev-community-da-zero",
        tag: "Community",
        accent: "#CCFF00",
        title: "Come costruire una dev community da zero",
        excerpt:
            "Costruire una community di sviluppatori non è solo una questione di numeri. Conta la qualità delle conversazioni, la cultura che si crea e il valore che ogni membro porta.",
        date: "18 Feb 2026",
        readTime: "5 min",
        author: { name: "JohnnyDEV", role: "Community Builder" },
        body: [
            {
                type: "paragraph",
                content:
                    "Costruire una community non è lanciare un server Discord e aspettarsi che la gente arrivi. È un lavoro lento, intenzionale, fatto di piccole decisioni quotidiane che nel tempo definiscono la cultura di un gruppo.",
            },
            {
                type: "heading",
                content: "1. Parti dal perché, non dal come",
            },
            {
                type: "paragraph",
                content:
                    "Prima di scegliere la piattaforma, chiediti: perché questa community dovrebbe esistere? Qual è il problema che risolve per i suoi membri? Una community forte nasce attorno a un bisogno reale, non attorno a un tool.",
            },
            {
                type: "quote",
                content:
                    "\"Una community non è un prodotto. È una cultura. E la cultura si costruisce con azioni ripetute nel tempo, non con un annuncio.\"",
            },
            {
                type: "heading",
                content: "2. Le prime 50 persone contano più delle successive 5000",
            },
            {
                type: "paragraph",
                content:
                    "Scegli manualmente i tuoi early member. Invita persone che incarnano i valori che vuoi vedere nella community. Dai loro una voce, ascoltali, falli sentire co-fondatori. Loro diventeranno i tuoi ambassador naturali.",
            },
            {
                type: "heading",
                content: "3. Crea rituali, non eventi",
            },
            {
                type: "paragraph",
                content:
                    "Un hackathon una volta l'anno non basta. Una call settimanale, una challenge mensile, un canale dove si condividono i lavori del lunedì mattina: i rituali ricorrenti danno alle persone un motivo per tornare.",
            },
            {
                type: "code",
                lang: "bash",
                content:
                    "# Idea: lancia una weekly challenge\n# Ogni lunedì un prompt diverso\n# La community risponde con codice, design, riflessioni\n\necho \"Week 1 → Construisci un micro-tool in 2 ore\"\necho \"Week 2 → Spiega un concetto complesso con un'analogia\"\necho \"Week 3 → Fai una code review pubblica\"",
            },
            {
                type: "heading",
                content: "4. Misura la qualità, non la quantità",
            },
            {
                type: "paragraph",
                content:
                    "Il numero di membri è una vanity metric. Quello che conta è il tasso di partecipazione attiva: quante persone contribuiscono ogni settimana? Quante conversazioni portano a collaborazioni reali? Quanti progetti nascono dalla community?",
            },
            {
                type: "paragraph",
                content:
                    "In JohnnyDEV abbiamo scelto una community selezionata proprio per questo motivo: preferiamo 200 persone che costruiscono insieme a 10.000 che leggono in silenzio.",
            },
        ],
    },
    {
        id: 2,
        slug: "migliori-strumenti-ai-developer-2026",
        tag: "AI & Tools",
        accent: "#1e34b7",
        title: "I migliori strumenti AI per developer nel 2026",
        excerpt:
            "Da Cursor a GitHub Copilot, fino agli agenti autonomi: una panoramica degli strumenti che stanno ridefinendo il modo in cui scriviamo codice ogni giorno.",
        date: "12 Feb 2026",
        readTime: "7 min",
        author: { name: "JohnnyDEV", role: "Tech Enthusiast" },
        body: [
            {
                type: "paragraph",
                content:
                    "Il 2026 è l'anno in cui l'AI non è più un'opzione per i developer: è diventata parte integrante del workflow di chiunque voglia rimanere competitivo. Ma tra il marketing e la realtà, quali strumenti valgono davvero il tuo tempo?",
            },
            {
                type: "heading",
                content: "Cursor — Il miglior editor AI-first sul mercato",
            },
            {
                type: "paragraph",
                content:
                    "Cursor ha cambiato il modo in cui scrivo codice. Non è solo autocomplete: è un editor che capisce il contesto del tuo progetto, risponde a domande sulla codebase, refactora su richiesta e scrive test. La funzione Chat con @codebase è da sola valsa il prezzo dell'abbonamento.",
            },
            {
                type: "heading",
                content: "GitHub Copilot — Affidabile, ma non basta",
            },
            {
                type: "paragraph",
                content:
                    "Copilot rimane solido per le completions inline, specialmente in VS Code. Ma rispetto a Cursor manca di profondità: non capisce il progetto nel suo complesso, e le sue risposte sono spesso generiche. Ottimo come fallback, non come strumento principale.",
            },
            {
                type: "quote",
                content:
                    "\"L'AI non scrive codice al posto tuo. Amplifica la velocità con cui trasformi idee in codice funzionante. Il pensiero rimane il tuo lavoro.\"",
            },
            {
                type: "heading",
                content: "v0.dev — Prototipazione UI in secondi",
            },
            {
                type: "paragraph",
                content:
                    "Per prototipare UI velocemente, v0.dev di Vercel è imbattibile. Descrivi un componente, ottieni codice React + Tailwind pronto all'uso. Non è perfetto, ma abbatte il tempo di bootstrap di un'interfaccia dall'80%.",
            },
            {
                type: "code",
                lang: "typescript",
                content:
                    "// Esempio: chiedi a Cursor di scrivere un hook custom\n// Prompt: \"Crea un useLocalStorage hook type-safe in TypeScript\"\n\nfunction useLocalStorage<T>(key: string, initialValue: T) {\n  const [storedValue, setStoredValue] = useState<T>(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? (JSON.parse(item) as T) : initialValue;\n    } catch {\n      return initialValue;\n    }\n  });\n\n  const setValue = (value: T) => {\n    setStoredValue(value);\n    window.localStorage.setItem(key, JSON.stringify(value));\n  };\n\n  return [storedValue, setValue] as const;\n}",
            },
            {
                type: "heading",
                content: "Il vero vantaggio competitivo",
            },
            {
                type: "paragraph",
                content:
                    "Gli developer più efficaci non sono quelli che usano più tool AI. Sono quelli che sanno esattamente cosa chiedere, sanno valutare l'output e sanno quando fidarsi dell'AI e quando no. Il prompt engineering è la skill del 2026.",
            },
        ],
    },
    {
        id: 3,
        slug: "primo-hackathon-lezioni-imparate",
        tag: "Hackathon",
        accent: "#7C3AED",
        title: "Tutto quello che ho imparato al primo hackathon",
        excerpt:
            "48 ore, un'idea, zero dormite. Ti racconto cosa è andato storto, cosa ha funzionato e perché parteciperò di nuovo al prossimo hackathon.",
        date: "5 Feb 2026",
        readTime: "6 min",
        author: { name: "JohnnyDEV", role: "Hacker" },
        body: [
            {
                type: "paragraph",
                content:
                    "Avevo sempre rimandato. Troppo impegnato, non abbastanza bravo, non avevo un'idea. Poi mi sono iscritto, quasi per caso, a un hackathon da 48 ore. Quello che è successo dopo ha cambiato il mio approccio alla programmazione.",
            },
            {
                type: "heading",
                content: "Le prime 4 ore: il caos dell'ideazione",
            },
            {
                type: "paragraph",
                content:
                    "Avevamo troppe idee. Abbiamo perso 3 ore a discutere, a fare brainstorming, a cambiare tema. Il mio errore più grande: non aver deciso in fretta. Un'idea mediocre eseguita bene batte un'idea brillante eseguita male. La prossima volta: 30 minuti di ideazione, poi si parte.",
            },
            {
                type: "quote",
                content:
                    "\"Done is better than perfect. In un hackathon, shipped è l'unica metrica che conta.\"",
            },
            {
                type: "heading",
                content: "Cosa ha funzionato: la divisione del lavoro",
            },
            {
                type: "paragraph",
                content:
                    "Eravamo in tre. Abbiamo diviso subito: uno al frontend, uno al backend, uno al pitch e al design. Zero sovrapposizioni, zero conflitti su Git. La comunicazione ogni 2 ore ci ha tenuti allineati senza meeting infiniti.",
            },
            {
                type: "heading",
                content: "Il momento peggiore: le 3 di notte",
            },
            {
                type: "paragraph",
                content:
                    "Le 3 di notte sono il momento più pericoloso di un hackathon. La stanchezza porta a decisioni sbagliate. Abbiamo fatto un refactor inutile che ci ha rubato 2 ore. Regola d'oro: dopo mezzanotte, solo bug fix e polish. Zero refactoring, zero nuove feature.",
            },
            {
                type: "code",
                lang: "javascript",
                content:
                    "// Il commit che non avrei mai dovuto fare alle 3:47 di notte\n// (spoiler: ha rotto tutto il sistema di auth)\n\n// ❌ Refactor notturno\nconst handleAuth = async (provider) => {\n  // \"Rifattorizzo tutto il sistema auth perché mi sembra sporco\"\n  // ... 2 ore dopo ... non funziona più niente\n};\n\n// ✅ Quello che avrei dovuto fare\n// git add -p  →  solo bug fix critici\n// poi dormire 2 ore",
            },
            {
                type: "heading",
                content: "Perché lo rifarei subito",
            },
            {
                type: "paragraph",
                content:
                    "Nonostante il caos, le 48 ore dell'hackathon mi hanno insegnato più di 3 mesi di side project solitari. La pressione del tempo, il team, il pubblico reale: tutto contribuisce a un apprendimento accelerato che non si trova altrove. Il prossimo è già in agenda.",
            },
        ],
    },
    {
        id: 4,
        slug: "da-junior-a-senior-skill-che-contano",
        tag: "Carriera",
        accent: "#CCFF00",
        title: "Da junior a senior: le skill che contano davvero",
        excerpt:
            "Il codice pulito è solo l'inizio. Le soft skill, il pensiero sistemico e la capacità di comunicare sono ciò che separa un buon developer da un ottimo uno.",
        date: "28 Gen 2026",
        readTime: "8 min",
        author: { name: "JohnnyDEV", role: "Senior Dev" },
        body: [
            {
                type: "paragraph",
                content:
                    "Dopo anni di mentorship e di hiring, ho notato un pattern ricorrente: i developer che crescono più velocemente non sono necessariamente i più brillanti tecnicamente. Sono quelli che hanno capito che il codice è solo una parte del lavoro.",
            },
            {
                type: "heading",
                content: "La trappola del solo codice",
            },
            {
                type: "paragraph",
                content:
                    "I junior tendono a misurare il loro valore in linee di codice scritte, in algoritmi risolti su LeetCode, in framework conosciuti. Queste cose contano, ma diventano un soffitto di vetro se non sono accompagnate da altro.",
            },
            {
                type: "heading",
                content: "1. Pensiero sistemico",
            },
            {
                type: "paragraph",
                content:
                    "Un senior non vede solo la feature da implementare: vede l'impatto sul sistema, i trade-off, le conseguenze a 6 mesi. Prima di scrivere codice, si chiede: perché? C'è un altro modo? Cosa succede se scala? Questa capacità si allena leggendo architetture di sistemi reali e lavorando su codebase grandi.",
            },
            {
                type: "quote",
                content:
                    "\"Il codice che non scrivi è il codice che non devi mantenere. Un senior sa quando non scrivere codice.\"",
            },
            {
                type: "heading",
                content: "2. Comunicazione tecnica",
            },
            {
                type: "paragraph",
                content:
                    "Saper spiegare una decisione tecnica a un PM, a un designer, a un C-level: questa è una skill rara e preziosissima. I developer che riescono a tradurre la complessità tecnica in linguaggio comprensibile ottengono più autonomia, più rispetto e più opportunità.",
            },
            {
                type: "heading",
                content: "3. Ownership e proattività",
            },
            {
                type: "paragraph",
                content:
                    "Un junior aspetta che gli dicano cosa fare. Un senior identifica i problemi prima che diventino urgenti, propone soluzioni, porta dati. L'ownership non significa fare tutto da soli: significa sentirsi responsabili del risultato finale, non solo del proprio task.",
            },
        ],
    },
    {
        id: 5,
        slug: "contribuire-open-source-cambia-carriera",
        tag: "Open Source",
        accent: "#1e34b7",
        title: "Perché contribuire all'open source cambia la carriera",
        excerpt:
            "Contribuire a progetti open source ti espone a codebase reali, revisioni di codice di qualità e una rete di contatti internazionale che nessun corso può darti.",
        date: "20 Gen 2026",
        readTime: "5 min",
        author: { name: "JohnnyDEV", role: "Open Source Contributor" },
        body: [
            {
                type: "paragraph",
                content:
                    "Il mio profilo GitHub prima e dopo la prima PR su un progetto open source rilevante sono due cose completamente diverse. Non solo visivamente: il modo in cui penso al codice è cambiato.",
            },
            {
                type: "heading",
                content: "Cosa ottieni contribuendo",
            },
            {
                type: "paragraph",
                content:
                    "Esposizione a codebase reali, mantenute da team distribuiti, con anni di storia e decisioni stratificate. Code review da maintainer esperti che non ti risparmiano feedback onesti. Un portfolio pubblico e verificabile più potente di qualsiasi certificazione.",
            },
            {
                type: "heading",
                content: "Come iniziare senza sentirti un impostore",
            },
            {
                type: "paragraph",
                content:
                    "Non devi risolvere un bug critico alla prima PR. Inizia con la documentazione, con i test, con piccoli fix di typo. L'obiettivo è capire il workflow — fork, branch, PR, review — e farsi un'idea della cultura del progetto.",
            },
            {
                type: "code",
                lang: "bash",
                content:
                    "# Workflow base per la prima contribuzione\n\n# 1. Fork del repo su GitHub\n# 2. Clone del tuo fork\ngit clone https://github.com/TUO-USERNAME/progetto.git\ncd progetto\n\n# 3. Crea un branch descrittivo\ngit checkout -b fix/typo-in-readme\n\n# 4. Fai le modifiche, poi\ngit add .\ngit commit -m \"fix: typo in README installation section\"\ngit push origin fix/typo-in-readme\n\n# 5. Apri la PR su GitHub con descrizione chiara",
            },
            {
                type: "quote",
                content:
                    "\"Il codice open source è la palestra più democratica che esista per uno sviluppatore. Non importa dove sei, chi sei o cosa hai studiato.\"",
            },
            {
                type: "paragraph",
                content:
                    "In JohnnyDEV organizziamo regolarmente sessioni di contribuzione guidata proprio per abbattere questa barriera iniziale. Il primo commit è il più difficile. Poi diventa un'abitudine.",
            },
        ],
    },
    {
        id: 6,
        slug: "burnout-developer-riconoscerlo-uscirne",
        tag: "Mindset",
        accent: "#7C3AED",
        title: "Il burnout dei developer: riconoscerlo e uscirne",
        excerpt:
            "Troppi side project, troppo confronto, troppa pressione. Il burnout è reale e diffusissimo tra developer. Vediamo come identificarlo e cosa fare per recuperare.",
        date: "10 Gen 2026",
        readTime: "9 min",
        author: { name: "JohnnyDEV", role: "Developer & Human" },
        body: [
            {
                type: "paragraph",
                content:
                    "C'è un momento preciso in cui ho capito di essere in burnout: aprivo VS Code, fissavo il cursore lampeggiante per 20 minuti e chiudevo tutto. Non era pigrizia. Era qualcosa di più profondo.",
            },
            {
                type: "heading",
                content: "I segnali che ignoriamo",
            },
            {
                type: "paragraph",
                content:
                    "Il burnout nei developer raramente si manifesta con un crollo improvviso. Arriva in punta di piedi: cali di concentrazione, irritabilità ai code review, perdita di interesse per i progetti che ti entusiasmavano, social media al posto del codice. Se ti riconosci in uno di questi, fermati e leggi.",
            },
            {
                type: "quote",
                content:
                    "\"Il burnout non è una debolezza. È il segnale che hai dato più di quanto potevi sostenere per troppo tempo.\"",
            },
            {
                type: "heading",
                content: "Le cause più comuni nel nostro settore",
            },
            {
                type: "paragraph",
                content:
                    "Tutorial hell, side project infiniti, confronto costante su Twitter/X con chi sembra sempre più produttivo, lavoro da remoto che cancella i confini tra vita e lavoro. La cultura dei developer glorifica il \"grind\" come se il riposo fosse una sconfitta.",
            },
            {
                type: "heading",
                content: "Come uscirne — onestamente",
            },
            {
                type: "paragraph",
                content:
                    "Non esiste una ricetta magica. Ma alcune cose funzionano: prenditi una pausa vera (non un weekend), rimuovi le notifiche di GitHub/Slack per qualche settimana, parla con qualcuno (un amico, un collega, un professionista). La community può essere una risorsa preziosa proprio in questo momento.",
            },
            {
                type: "heading",
                content: "Prevenzione: costruisci ritmi sostenibili",
            },
            {
                type: "paragraph",
                content:
                    "Il segreto a lungo termine è costruire ritmi, non sprint. Definisci degli orari, rispettali. Scegli 1-2 side project, non 10. Misura i tuoi progressi su settimane, non su giornate. E ricordati perché hai iniziato a programmare: per costruire cose, non per esaurirti.",
            },
        ],
    },
];

// Helper per trovare un post dallo slug
export function getPostBySlug(slug) {
    return POSTS.find((p) => p.slug === slug) ?? null;
}
