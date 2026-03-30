// Contenuti PNL basati su ricerche verificate e tecniche consolidate
// Fonti: Richard Bandler & John Grinder (fondatori PNL), Tony Buzan (mappe mentali),
// Gianni Golfera (tecniche di memoria), studi di neuroscienze cognitive

export const learningPaths = [
  {
    id: 'foundations',
    title: 'Fondamenti della PNL',
    description: 'Scopri i principi base della Programmazione Neuro-Linguistica',
    icon: 'brain',
    color: '#6366f1',
    difficulty: 'Principiante',
    duration: '4 settimane',
    xpTotal: 2000,
    modules: [
      {
        id: 'intro-pnl',
        title: 'Cos\'è la PNL',
        lessons: [
          {
            id: 'l1',
            title: 'Le origini della PNL',
            type: 'theory',
            xp: 50,
            content: {
              intro: 'La Programmazione Neuro-Linguistica (PNL) è stata sviluppata negli anni \'70 da Richard Bandler e John Grinder presso l\'Università della California a Santa Cruz. Nasce dall\'osservazione sistematica di terapeuti eccellenti come Fritz Perls, Virginia Satir e Milton Erickson.',
              keyPoints: [
                'Neuro: si riferisce al sistema nervoso e ai processi neurologici attraverso cui elaboriamo le esperienze',
                'Linguistica: riguarda il linguaggio verbale e non verbale con cui comunichiamo e organizziamo il pensiero',
                'Programmazione: si riferisce ai pattern comportamentali e cognitivi che possiamo modificare consapevolmente'
              ],
              deepDive: 'Il presupposto fondamentale della PNL è che l\'eccellenza può essere modellata: osservando e replicando le strategie mentali di chi ottiene risultati straordinari, chiunque può migliorare le proprie performance cognitive e comunicative.'
            }
          },
          {
            id: 'l2',
            title: 'I presupposti della PNL',
            type: 'theory',
            xp: 50,
            content: {
              intro: 'La PNL si basa su presupposti operativi che guidano la pratica. Non sono "verità assolute" ma credenze utili che, se adottate, facilitano il cambiamento e l\'apprendimento.',
              keyPoints: [
                'La mappa non è il territorio: la nostra percezione della realtà è una rappresentazione soggettiva, non la realtà stessa',
                'Ogni comportamento ha un\'intenzione positiva: dietro ogni azione c\'è un bisogno legittimo che cerca di essere soddisfatto',
                'Non esistono fallimenti, solo feedback: ogni risultato è un\'informazione utile per calibrare le proprie azioni',
                'Il significato della comunicazione è la risposta che ottieni: la responsabilità comunicativa è di chi comunica',
                'Se qualcuno può fare qualcosa, chiunque può imparare a farla: il modellamento dell\'eccellenza è alla base della PNL'
              ],
              deepDive: 'Questi presupposti derivano dalla cibernetica, dalla linguistica trasformazionale di Noam Chomsky e dalla teoria dei sistemi di Gregory Bateson.'
            }
          },
          {
            id: 'l3',
            title: 'Quiz: Fondamenti',
            type: 'quiz',
            xp: 100,
            questions: [
              {
                q: 'Chi ha fondato la PNL?',
                options: ['Sigmund Freud e Carl Jung', 'Richard Bandler e John Grinder', 'Tony Robbins e Robert Dilts', 'Milton Erickson e Fritz Perls'],
                correct: 1,
                explanation: 'Richard Bandler (matematico e informatico) e John Grinder (linguista) svilupparono la PNL negli anni \'70 all\'Università della California a Santa Cruz.'
              },
              {
                q: 'Cosa significa "La mappa non è il territorio"?',
                options: ['Le cartine geografiche sono imprecise', 'La nostra percezione è una rappresentazione soggettiva della realtà', 'Bisogna sempre verificare le informazioni', 'Il linguaggio è limitato'],
                correct: 1,
                explanation: 'Questo principio, derivato da Alfred Korzybski, ci ricorda che ciò che percepiamo è sempre filtrato dai nostri sensi, credenze ed esperienze.'
              },
              {
                q: 'Cosa rappresenta la "N" in PNL?',
                options: ['Narrativa', 'Naturale', 'Neuro', 'Nuova'],
                correct: 2,
                explanation: '"Neuro" si riferisce al sistema nervoso e ai processi neurologici attraverso cui elaboriamo le esperienze sensoriali.'
              }
            ]
          }
        ]
      },
      {
        id: 'rep-systems',
        title: 'Sistemi Rappresentazionali',
        lessons: [
          {
            id: 'l4',
            title: 'I canali sensoriali (VAK)',
            type: 'theory',
            xp: 50,
            content: {
              intro: 'Secondo la PNL, elaboriamo le informazioni principalmente attraverso tre canali sensoriali: Visivo (V), Auditivo (A) e Cinestesico (K). Ogni persona ha un sistema rappresentazionale preferito che influenza il modo in cui apprende, comunica e ricorda.',
              keyPoints: [
                'Visivo (V): le persone visive pensano per immagini, parlano velocemente, usano espressioni come "vedo che...", "è chiaro", "immagina"',
                'Auditivo (A): le persone auditive elaborano attraverso suoni e parole, usano "mi suona bene", "ascolta", "in armonia con"',
                'Cinestesico (K): le persone cinestesiche elaborano attraverso sensazioni fisiche ed emozioni, dicono "ho la sensazione", "toccare con mano", "afferrare il concetto"'
              ],
              deepDive: 'Le neuroscienze confermano che diverse aree cerebrali si attivano in base alla modalità sensoriale: la corteccia visiva (lobo occipitale), la corteccia uditiva (lobo temporale) e la corteccia somatosensoriale (lobo parietale). Conoscere il proprio canale preferito permette di ottimizzare l\'apprendimento.'
            }
          },
          {
            id: 'l5',
            title: 'Esercizio: Scopri il tuo canale',
            type: 'exercise',
            xp: 75,
            content: {
              instruction: 'Rispondi istintivamente alle seguenti situazioni per scoprire il tuo sistema rappresentazionale dominante.',
              scenarios: [
                {
                  situation: 'Quando ricordi una vacanza, cosa ti viene in mente per primo?',
                  options: [
                    { text: 'Le immagini dei luoghi visitati, i colori, i panorami', channel: 'V' },
                    { text: 'I suoni: la musica, le voci, il rumore del mare', channel: 'A' },
                    { text: 'Le sensazioni: il calore del sole, la brezza, le emozioni provate', channel: 'K' }
                  ]
                },
                {
                  situation: 'Per imparare qualcosa di nuovo preferisci:',
                  options: [
                    { text: 'Guardare video, schemi, grafici e diagrammi', channel: 'V' },
                    { text: 'Ascoltare spiegazioni, podcast o discussioni', channel: 'A' },
                    { text: 'Provare direttamente, fare pratica ed esperimenti', channel: 'K' }
                  ]
                },
                {
                  situation: 'In una conversazione importante, noti di più:',
                  options: [
                    { text: 'Le espressioni facciali e il linguaggio del corpo', channel: 'V' },
                    { text: 'Il tono di voce e le parole scelte', channel: 'A' },
                    { text: 'L\'atmosfera emotiva e le sensazioni che provi', channel: 'K' }
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'memory',
    title: 'Tecniche di Memoria',
    description: 'Impara le strategie mnemoniche più efficaci basate sulle neuroscienze',
    icon: 'lightbulb',
    color: '#10b981',
    difficulty: 'Intermedio',
    duration: '6 settimane',
    xpTotal: 3000,
    modules: [
      {
        id: 'memory-palace',
        title: 'Il Palazzo della Memoria',
        lessons: [
          {
            id: 'l6',
            title: 'La tecnica dei Loci',
            type: 'theory',
            xp: 50,
            content: {
              intro: 'La tecnica dei Loci (o Palazzo della Memoria) è una delle strategie mnemoniche più antiche e scientificamente validate. Risale al poeta greco Simonide di Ceo (556-468 a.C.) ed è ancora oggi utilizzata dai campioni mondiali di memoria.',
              keyPoints: [
                'Si basa sull\'associazione di informazioni da ricordare a luoghi fisici familiari (la propria casa, un percorso abituale)',
                'Il cervello umano è evolutivamente predisposto a ricordare luoghi e percorsi spaziali (memoria spaziale dell\'ippocampo)',
                'Studi fMRI hanno dimostrato che i campioni di memoria attivano intensamente l\'ippocampo e le aree di navigazione spaziale',
                'La tecnica è stata validata in studi pubblicati su Neuron (Maguire et al., 2003) con risultati significativi'
              ],
              deepDive: 'Per costruire un Palazzo della Memoria: 1) Scegli un luogo che conosci bene, 2) Identifica una sequenza di "stazioni" (es. ingresso, corridoio, cucina), 3) Associa ogni informazione a una stazione usando immagini vivide e bizzarre, 4) Per ricordare, "percorri" mentalmente il palazzo.'
            }
          },
          {
            id: 'l7',
            title: 'Pratica: Costruisci il tuo primo palazzo',
            type: 'exercise',
            xp: 100,
            content: {
              instruction: 'Segui questi passaggi per costruire il tuo primo Palazzo della Memoria e memorizzare una lista di 10 elementi.',
              steps: [
                'Chiudi gli occhi e visualizza l\'ingresso di casa tua. Nota ogni dettaglio: colori, forme, odori.',
                'Identifica 10 "stazioni" nel percorso dall\'ingresso alla camera da letto: porta, corridoio, primo mobile, ecc.',
                'Ora associa ogni parola della lista a una stazione con un\'immagine assurda e vivida.',
                'Parola 1: ELEFANTE → Immagina un elefante rosa che blocca la porta d\'ingresso.',
                'Parola 2: CHITARRA → Nel corridoio, una chitarra gigante suona da sola.',
                'Continua con le restanti parole, rendendo ogni immagine il più bizzarra possibile.',
                'Per ricordare la lista, ripercorri mentalmente il tuo palazzo.'
              ],
              tip: 'Le immagini funzionano meglio quando sono: esagerate, in movimento, coinvolgono i 5 sensi, hanno un contenuto emotivo.'
            }
          },
          {
            id: 'l8',
            title: 'Quiz: Palazzo della Memoria',
            type: 'quiz',
            xp: 100,
            questions: [
              {
                q: 'A chi è attribuita l\'invenzione della tecnica dei Loci?',
                options: ['Aristotele', 'Simonide di Ceo', 'Cicerone', 'Giordano Bruno'],
                correct: 1,
                explanation: 'Secondo la tradizione, Simonide di Ceo (556-468 a.C.) inventò questa tecnica dopo essere riuscito a identificare le vittime di un crollo ricordando dove erano sedute.'
              },
              {
                q: 'Quale area cerebrale è principalmente coinvolta nella tecnica dei Loci?',
                options: ['Corteccia prefrontale', 'Amigdala', 'Ippocampo', 'Cervelletto'],
                correct: 2,
                explanation: 'L\'ippocampo è fondamentale per la memoria spaziale e la navigazione. Studi di neuroimaging mostrano che i mnemonisti esperti attivano fortemente questa struttura.'
              }
            ]
          }
        ]
      },
      {
        id: 'association',
        title: 'Tecniche Associative',
        lessons: [
          {
            id: 'l9',
            title: 'Il sistema Peg e le catene associative',
            type: 'theory',
            xp: 50,
            content: {
              intro: 'Il sistema Peg (o dei "pioli") è una tecnica mnemonica che utilizza associazioni predefinite tra numeri e immagini per memorizzare liste ordinate. Le catene associative collegano invece ogni elemento al successivo.',
              keyPoints: [
                'Sistema Peg numerico: 1=candela, 2=cigno, 3=trifoglio, 4=sedia, 5=mano... Ogni numero è associato a un\'immagine basata sulla forma',
                'Catena associativa: si crea una "storia" collegando ogni elemento al successivo con immagini vivide',
                'Il principio neuroscientfico: il cervello ricorda meglio le associazioni bizarre, emotive e multisensoriali (effetto Von Restorff)',
                'Studi dimostrano che le immagini mentali attivano le stesse aree cerebrali della percezione reale (Kosslyn, 2005)'
              ],
              deepDive: 'L\'effetto Von Restorff (o effetto di isolamento) dimostra che un elemento che si distingue dagli altri viene ricordato meglio. Per questo le associazioni mnemoniche funzionano meglio quando sono bizzarre, esagerate o emotivamente cariche.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'communication',
    title: 'Comunicazione Efficace',
    description: 'Padroneggia il rapport, il ricalco e la guida per comunicare con impatto',
    icon: 'messages',
    color: '#f97316',
    difficulty: 'Intermedio',
    duration: '5 settimane',
    xpTotal: 2500,
    modules: [
      {
        id: 'rapport',
        title: 'Il Rapport',
        lessons: [
          {
            id: 'l10',
            title: 'Costruire il Rapport',
            type: 'theory',
            xp: 50,
            content: {
              intro: 'Il rapport è la capacità di stabilire una connessione profonda con un\'altra persona, creando un clima di fiducia e comprensione reciproca. È considerato il fondamento di ogni comunicazione efficace in PNL.',
              keyPoints: [
                'Mirroring (rispecchiamento): riprodurre sottilmente la postura, i gesti e le espressioni dell\'interlocutore',
                'Matching vocale: adeguare tono, ritmo, volume e velocità della voce a quella dell\'altro',
                'Ricalco verbale: utilizzare le stesse parole chiave e predicati sensoriali dell\'interlocutore',
                'La neuroscienza dei neuroni specchio (Rizzolatti, 1996) spiega perché il rispecchiamento funziona: il cervello "simula" internamente le azioni osservate'
              ],
              deepDive: 'La ricerca sui neuroni specchio, scoperta dal team di Giacomo Rizzolatti all\'Università di Parma, ha rivoluzionato la comprensione dell\'empatia. Questi neuroni si attivano sia quando compiamo un\'azione sia quando la osserviamo in altri, creando una base neurologica per la connessione interpersonale.'
            }
          },
          {
            id: 'l11',
            title: 'Ricalco e Guida',
            type: 'theory',
            xp: 50,
            content: {
              intro: 'Il ricalco e la guida (pacing and leading) è una tecnica fondamentale della PNL per influenzare positivamente una conversazione. Prima si "ricalca" l\'interlocutore (ci si sintonizza sul suo stato), poi si "guida" verso lo stato desiderato.',
              keyPoints: [
                'Ricalco (Pacing): rispecchiare e validare l\'esperienza dell\'altro - "Capisco che ti senti frustrato per questa situazione"',
                'Guida (Leading): una volta stabilito il rapport, guidare gradualmente l\'interlocutore verso una nuova prospettiva',
                'La sequenza ideale è: ricalco-ricalco-ricalco-guida, con almeno 3 ricalchi prima di tentare una guida',
                'Questa tecnica è utilizzata in ambito terapeutico, negoziale e nella leadership'
              ],
              deepDive: 'Milton Erickson, il famoso ipnoterapeuta che ispirò la PNL, era un maestro del ricalco e della guida. Utilizzava il "ricalco dell\'esperienza corrente" per creare un ponte di fiducia con i pazienti prima di proporre suggerimenti terapeutici.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'neuroscience',
    title: 'Neuroscienze Applicate',
    description: 'Comprendi il cervello per potenziare apprendimento e performance',
    icon: 'zap',
    color: '#a78bfa',
    difficulty: 'Avanzato',
    duration: '8 settimane',
    xpTotal: 4000,
    modules: [
      {
        id: 'neuroplasticity',
        title: 'Neuroplasticità',
        lessons: [
          {
            id: 'l12',
            title: 'Il cervello che cambia',
            type: 'theory',
            xp: 50,
            content: {
              intro: 'La neuroplasticità è la capacità del cervello di modificare la propria struttura e funzione in risposta all\'esperienza. Questa scoperta ha rivoluzionato le neuroscienze, dimostrando che il cervello non è "fisso" ma si modifica per tutta la vita.',
              keyPoints: [
                'Plasticità sinaptica: le connessioni tra neuroni si rafforzano con l\'uso ripetuto (legge di Hebb: "neurons that fire together, wire together")',
                'Neurogenesi adulta: nuovi neuroni vengono generati nell\'ippocampo anche in età adulta (Eriksson et al., 1998, Nature Medicine)',
                'I taxi driver londinesi hanno un ippocampo più grande della media grazie alla continua navigazione spaziale (Maguire et al., 2000)',
                'La meditazione modifica la struttura della corteccia prefrontale e dell\'amigdala in sole 8 settimane (Hölzel et al., 2011, Psychiatry Research)'
              ],
              deepDive: 'La neuroplasticità è il fondamento scientifico di ogni tecnica di PNL: se il cervello può cambiare, allora i nostri pattern mentali, le credenze limitanti e le abitudini possono essere riprogrammate. Questo non è solo un principio teorico ma un fatto neurologico documentato.'
            }
          },
          {
            id: 'l13',
            title: 'Stato di flusso e performance',
            type: 'theory',
            xp: 50,
            content: {
              intro: 'Lo stato di flusso (flow state), identificato da Mihaly Csikszentmihalyi, è una condizione di concentrazione totale in cui la performance raggiunge il picco. Le neuroscienze hanno identificato i correlati neurali di questo stato.',
              keyPoints: [
                'Durante il flow, la corteccia prefrontale dorsolaterale si "disattiva" parzialmente (ipofrontalità transitoria), riducendo l\'autocritica',
                'Aumentano dopamina, noradrenalina, endorfine, anandamide e serotonina - un cocktail neurochimico di performance',
                'La sfida deve essere calibrata: troppo facile → noia, troppo difficile → ansia. Il flow è nel mezzo (sfida ≈ 4% superiore alle competenze)',
                'Studi McKinsey mostrano che i dirigenti in stato di flow sono 5 volte più produttivi'
              ],
              deepDive: 'Per entrare in stato di flow: 1) Elimina distrazioni, 2) Scegli un compito con obiettivi chiari, 3) Assicurati che la sfida sia leggermente superiore alle tue capacità attuali, 4) Concentrati su feedback immediato, 5) Dai almeno 15-20 minuti di concentrazione ininterrotta.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'influence',
    title: 'Linguaggio di Influenza',
    description: 'Padroneggia i meta-modelli e i Milton patterns per una comunicazione persuasiva',
    icon: 'mic',
    color: '#ec4899',
    difficulty: 'Avanzato',
    duration: '6 settimane',
    xpTotal: 3500,
    modules: [
      {
        id: 'metamodel',
        title: 'Il Meta-Modello',
        lessons: [
          {
            id: 'l14',
            title: 'Cancellazioni, generalizzazioni e distorsioni',
            type: 'theory',
            xp: 50,
            content: {
              intro: 'Il Meta-Modello, sviluppato da Bandler e Grinder nel 1975, è un insieme di domande precise che sfidano le "violazioni" linguistiche. Si basa sulla grammatica trasformazionale di Chomsky e identifica come il linguaggio "impoverisce" l\'esperienza.',
              keyPoints: [
                'Cancellazioni: informazioni omesse - "Sono deluso" → "Da cosa specificamente? Chi ti ha deluso?"',
                'Generalizzazioni: un caso singolo diventa una regola - "Non riesco mai" → "Mai? C\'è stata almeno un\'occasione in cui ci sei riuscito?"',
                'Distorsioni: relazioni causa-effetto inventate - "Mi fai arrabbiare" → "In che modo specificamente le mie azioni provocano la tua rabbia?"',
                'Il Meta-Modello ripristina il collegamento tra linguaggio superficiale e struttura profonda dell\'esperienza'
              ],
              deepDive: 'La struttura profonda contiene la rappresentazione completa dell\'esperienza. La struttura superficiale (ciò che diciamo) è sempre una versione impoverita. Il Meta-Modello è uno strumento per "recuperare" le informazioni perse e arricchire la mappa dell\'interlocutore.'
            }
          }
        ]
      }
    ]
  }
]

export const achievements = [
  { id: 'first-lesson', title: 'Primo Passo', description: 'Completa la tua prima lezione', icon: '🎯', xp: 50 },
  { id: 'streak-7', title: 'Costanza', description: 'Mantieni una streak di 7 giorni', icon: '🔥', xp: 200 },
  { id: 'streak-30', title: 'Implacabile', description: 'Streak di 30 giorni consecutivi', icon: '⚡', xp: 500 },
  { id: 'perfect-quiz', title: 'Perfezione', description: 'Ottieni il massimo in un quiz', icon: '💎', xp: 100 },
  { id: 'memory-master', title: 'Maestro della Memoria', description: 'Completa il percorso Tecniche di Memoria', icon: '🧠', xp: 1000 },
  { id: 'social-butterfly', title: 'Comunicatore', description: 'Completa il percorso Comunicazione', icon: '💬', xp: 1000 },
  { id: 'full-path', title: 'Esploratore', description: 'Completa un intero percorso di apprendimento', icon: '🏆', xp: 2000 },
]

export const dailyChallenge = {
  title: 'Sfida del Giorno',
  description: 'Tecnica del giorno: pratica la visualizzazione creativa',
  task: 'Dedica 5 minuti a visualizzare un obiettivo importante come se lo avessi già raggiunto. Usa tutti i 5 sensi: cosa vedi? Cosa senti? Quali suoni percepisci?',
  xp: 30,
  technique: 'Visualizzazione Creativa',
  scienceNote: 'Studi di neuroimaging (Pascual-Leone, 1995) dimostrano che la visualizzazione attiva le stesse aree motorie dell\'azione reale, rafforzando i circuiti neurali coinvolti.'
}

export const b2bFeatures = [
  {
    title: 'Formazione Team',
    description: 'Programmi personalizzati per team aziendali: comunicazione efficace, leadership, gestione dello stress e negoziazione avanzata.',
    icon: 'users',
    stats: '+47% comunicazione interna'
  },
  {
    title: 'Analytics & Reporting',
    description: 'Dashboard dettagliata con metriche di apprendimento, engagement e ROI della formazione per ogni dipendente e team.',
    icon: 'bar-chart',
    stats: 'ROI medio 340%'
  },
  {
    title: 'Contenuti Personalizzati',
    description: 'Percorsi formativi cuciti sulle esigenze della tua azienda, con scenari realistici e casi studio del tuo settore.',
    icon: 'settings',
    stats: '98% soddisfazione'
  },
  {
    title: 'Certificazioni',
    description: 'Certificati di completamento riconosciuti, con badge digitali condivisibili su LinkedIn e nel CV aziendale.',
    icon: 'award',
    stats: '15.000+ certificati'
  }
]

export const b2cFeatures = [
  {
    title: 'Apprendimento Personalizzato',
    description: 'L\'algoritmo adatta il percorso al tuo stile di apprendimento (visivo, auditivo, cinestesico) e al tuo ritmo.',
    icon: 'user',
  },
  {
    title: 'Gamification Avanzata',
    description: 'Punti XP, streak, classifiche, achievement e sfide giornaliere per mantenere alta la motivazione.',
    icon: 'trophy',
  },
  {
    title: 'Esercizi Pratici',
    description: 'Ogni tecnica viene accompagnata da esercizi pratici guidati che puoi applicare immediatamente nella vita quotidiana.',
    icon: 'target',
  },
  {
    title: 'Community',
    description: 'Unisciti a una community di appassionati, condividi progressi e partecipa a sfide di gruppo.',
    icon: 'heart',
  }
]

export const testimonials = [
  {
    name: 'Marco R.',
    role: 'CEO, TechVenture Srl',
    text: 'NeuroMaster ha trasformato la comunicazione nel nostro team. In 3 mesi, la produttività è aumentata del 35% e i conflitti interni si sono ridotti drasticamente.',
    type: 'b2b',
    rating: 5
  },
  {
    name: 'Giulia F.',
    role: 'Studentessa universitaria',
    text: 'Le tecniche di memoria mi hanno permesso di dimezzare il tempo di studio. Il Palazzo della Memoria è stato una rivelazione per preparare gli esami.',
    type: 'b2c',
    rating: 5
  },
  {
    name: 'Andrea M.',
    role: 'HR Director, Fintech Group',
    text: 'L\'investimento in NeuroMaster per i nostri 200 dipendenti si è ripagato in meno di 6 mesi. La dashboard analytics ci permette di misurare il progresso reale.',
    type: 'b2b',
    rating: 5
  },
  {
    name: 'Sara L.',
    role: 'Libera professionista',
    text: 'Adoro l\'approccio Duolingo-like! Ogni giorno dedico 10 minuti e ho già notato enormi miglioramenti nella mia capacità di parlare in pubblico.',
    type: 'b2c',
    rating: 5
  }
]

export const pricingPlans = {
  b2c: [
    {
      name: 'Free',
      price: '0',
      period: 'per sempre',
      description: 'Inizia il tuo percorso nella PNL',
      features: [
        'Accesso a 3 lezioni introduttive',
        'Sfida giornaliera',
        '1 percorso base',
        'Community access'
      ],
      cta: 'Inizia Gratis',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '9.99',
      period: '/mese',
      description: 'Sblocca tutto il potenziale',
      features: [
        'Tutti i percorsi di apprendimento',
        'Esercizi pratici illimitati',
        'Certificati di completamento',
        'Sfide avanzate e streak bonus',
        'Contenuti offline',
        'Supporto prioritario'
      ],
      cta: 'Prova Gratis 7 Giorni',
      highlighted: true
    },
    {
      name: 'Lifetime',
      price: '149',
      period: 'una tantum',
      description: 'Accesso illimitato per sempre',
      features: [
        'Tutto il piano Pro',
        'Aggiornamenti futuri inclusi',
        'Accesso anticipato nuovi corsi',
        'Sessione 1-to-1 con un esperto',
        'Badge esclusivo "Founder"'
      ],
      cta: 'Acquista Ora',
      highlighted: false
    }
  ],
  b2b: [
    {
      name: 'Team',
      price: '29',
      period: '/utente/mese',
      description: 'Per team fino a 50 persone',
      features: [
        'Tutti i percorsi formativi',
        'Dashboard team analytics',
        'Report mensili automatici',
        'Percorsi personalizzabili',
        'Supporto dedicato'
      ],
      cta: 'Contattaci',
      highlighted: false
    },
    {
      name: 'Business',
      price: '19',
      period: '/utente/mese',
      description: 'Per aziende 50-500 dipendenti',
      features: [
        'Tutto il piano Team',
        'Contenuti custom per settore',
        'SSO & integrazioni HR',
        'Account manager dedicato',
        'Formazione on-site opzionale',
        'API access'
      ],
      cta: 'Richiedi Demo',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Per grandi organizzazioni',
      features: [
        'Tutto il piano Business',
        'White-label disponibile',
        'SLA garantito 99.9%',
        'Formazione certificata',
        'Consulenza strategica',
        'Integrazione LMS'
      ],
      cta: 'Parla con Noi',
      highlighted: false
    }
  ]
}
