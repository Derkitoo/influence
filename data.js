/**
 * DATA.JS — Base de connaissances encyclopédique complète
 * Basée sur l'œuvre intégrale de Robert B. Cialdini : "Influence et manipulation"
 * (Édition augmentée avec les 7 principes fondamentaux et les armes d'influence)
 */

const CIALDINI_DATA = {
  meta: {
    author: "Robert B. Cialdini, Ph.D.",
    title: "Influence & Manipulation : La Psychologie de la Persuasion",
    edition: "Édition Augmentée & Intégrale",
    corePhilosophy: "Comprendre les raccourcis mentaux qui dictent nos choix pour déjouer la manipulation prédatrice et persuader avec une totale intégrité éthique."
  },

  // LES ARMES D'INFLUENCE & HEURISTIQUES DE BASE
  weaponsOfInfluence: {
    title: "Les Armes d'Influence & le Judo Mental",
    subtitle: "Comprendre pourquoi notre cerveau fonctionne en pilote automatique",
    clickWhirr: {
      concept: "Le schéma Déclic / Déclenchement (Click, Whirr)",
      description: "À l'instar de la dinde qui protège n'importe quel objet émettant le son 'tchip-tchip' (même un putois empaillé, son pire prédateur), les êtres humains ont développé des schémas comportementaux automatiques gravés au cours de l'évolution. Face à un déclencheur précis (le 'déclic'), le comportement stéréotypé s'exécute automatiquement (le 'déclenchement').",
      famousExperiment: {
        title: "L'expérience de la photocopieuse (Ellen Langer, 1978)",
        protocol: "Une personne tente de doubler la file d'attente devant une photocopieuse de bibliothèque avec 3 formulations différentes :",
        variants: [
          { text: "« Excusez-moi, j'ai 5 pages. Est-ce que je peux passer parce que je suis pressé ? »", successRate: "94% d'acceptation (Raison valable)" },
          { text: "« Excusez-moi, j'ai 5 pages. Est-ce que je peux passer ? »", successRate: "60% d'acceptation (Sans justification)" },
          { text: "« Excusez-moi, j'ai 5 pages. Est-ce que je peux passer parce que je dois faire des photocopies ? »", successRate: "93% d'acceptation ! (Pseudo-raison vide)" }
        ],
        lesson: "Le mot magique « parce que » agit comme un déclencheur automatique d'acceptation, même si la raison donnée est une pure tautologie vide de sens."
      }
    },
    contrastPrinciple: {
      concept: "Le Principe de Contraste Perceptuel",
      description: "Notre perception n'évalue jamais un stimulus dans l'absolu, mais toujours par comparaison relative avec ce qui vient juste avant. Si le second objet diffère nettement du premier, nous tendons à exagérer cette différence.",
      applications: [
        { domain: "L'expérience des 3 seaux", detail: "Plongez une main dans l'eau glacée et l'autre dans l'eau chaude. Plongez ensuite les deux dans l'eau tiède : la première main la trouve brûlante, la seconde la trouve froide." },
        { domain: "L'immobilier (Les maisons repoussoirs)", detail: "Les agents avisés font d'abord visiter deux maisons délabrées et très chères ('setup houses'). La troisième, convenable et au prix normal, paraît instantanément miraculeuse et bon marché." },
        { domain: "La vente de prêt-à-porter", detail: "Toujours proposer le costume à 800€ avant le pull à 120€ ou la cravate à 60€. Après 800€, 60€ semblent être une broutille négligeable." }
      ]
    },
    triadOfInfluence: {
      title: "La Triade de Cialdini : Comment les acteurs utilisent l'influence",
      types: [
        {
          name: "Le Maladroit (The Bungler)",
          color: "rose",
          desc: "Ignore ou méconnaît les principes d'influence. Gâche les opportunités légitimes et force inutilement les décisions sans finesse."
        },
        {
          name: "Le Contrebandier (The Smuggler)",
          color: "amber",
          desc: "Falsifie ou importe artificiellement des principes qui n'existent pas dans la réalité (faux avis, fausse rareté, fausse sympathie). Gagne à court terme mais détruit la confiance et la réputation à long terme."
        },
        {
          name: "Le Détective (The Detective)",
          color: "emerald",
          desc: "L'approche recommandée par Cialdini : il cherche et découvre les principes d'influence authentiquement présents dans la situation et les met en lumière honnêtement. Crée des accords gagnant-gagnant durables."
        }
      ]
    }
  },

  // LES 7 PRINCIPES FONDAMENTAUX DÉTAILLÉS
  principles: [
    {
      id: "reciprocity",
      number: 1,
      title: "La Réciprocité",
      nameEn: "Reciprocity",
      icon: "gift",
      color: "emerald",
      badge: "Dette morale & Concession",
      quote: "« La règle de réciprocité stipule que nous devons nous efforcer de payer de retour les avantages que nous avons reçus d'autrui. »",
      summary: "Nous sommes programmés biologiquement et socialement pour rembourser tout ce qui nous est offert. Refuser de rendre la pareille génère une angoisse sociale intolérable.",
      psychologicalMechanism: "L'anthropologue Richard Leakey identifiait la réciprocité comme l'essence même de notre humanité : nous pouvons diviser le travail et échanger des ressources uniquement parce que nous avons la certitude que donner n'est pas perdre définitivement. Mais ce mécanisme noble est détourné lorsque le don initial est imposé ou calculé.",
      keyTechniques: [
        {
          title: "Le Don Préalable Non Sollicité",
          desc: "Offrir un cadeau sans qu'on l'ait demandé (fleur, stylo, boisson, audit gratuit) crée une dette psychologique inconsciente qui pousse à accorder une contrepartie disproportionnée."
        },
        {
          title: "La Technique du Rejet-Retrait (Door-in-the-face)",
          desc: "Faire d'abord une demande exorbitante vouée à être refusée. Suite au refus, faire une concession vers une demande plus modeste. La cible perçoit le recul comme un geste généreux et se sent obligée d'y répondre par une concession (accepter la seconde demande)."
        },
        {
          title: "L'Échantillon 'Gratuit' (Exemple Amway BUG)",
          desc: "Déposer des produits chez un prospect 'juste pour tester sans obligation'. La possession temporaire et la gratuité perçue forcent moralement à acheter une partie des produits lors de la récupération."
        }
      ],
      famousStudies: [
        {
          title: "L'expérience des bouteilles de Coca-Cola (Dennis Regan, 1971)",
          summary: "Un compère (Joe) assiste à une séance d'évaluation d'art avec des volontaires. Pendant la pause, dans un cas Joe revient avec deux Coca (un pour lui, un offert au participant). Dans l'autre, il revient les mains vides. À la fin, Joe demande s'ils veulent lui acheter des billets de tombola à 25 cents. Les participants ayant reçu le Coca non sollicité ont acheté DEUX FOIS PLUS de billets, peu importe qu'ils apprécient Joe ou non !"
        },
        {
          title: "Les délinquants au zoo (Cialdini, 1975)",
          summary: "Des étudiants se voient proposer d'accompagner bénévolement des mineurs délinquants au zoo 2 heures : 83% refusent. À un autre groupe, on propose d'abord un engagement bénévole de 2 heures PAR SEMAINE pendant 2 ANS (100% de refus), puis immédiatement après : 'Au moins, accepteriez-vous de faire juste une sortie de 2h au zoo ce samedi ?'. Le taux d'acceptation triple à 50% !"
        }
      ],
      manipulatorTricks: [
        "Le café ou la gourmandise offerte dès l'entrée dans une concession automobile.",
        "Les dons caritatifs accompagnés d'étiquettes personnalisées ou de stylos dans la boîte aux lettres.",
        "Le commercial qui 'fait semblant de se battre avec son patron' pour vous accorder une fausse concession tarifaire."
      ],
      defenseStrategies: [
        "Requalification cognitive : Si le geste initial n'était pas un acte de générosité mais une ruse commerciale préméditée, vous n'êtes plus tenu par la réciprocité. La règle exige de payer la politesse par la politesse, mais une ruse se neutralise par le recul.",
        "La formule bouclier : « Merci pour cet échantillon/ce café. Si je décide d'acheter votre produit, ce sera pour ses qualités intrinsèques et non pour la boisson que vous venez de m'offrir. »"
      ],
      ethicalUse: "Rendez de véritables services désintéressés en amont. Aidez spontanément vos collègues ou clients sans condition d'achat immédiat : la valeur perçue reviendra naturellement et sincèrement."
    },
    {
      id: "commitment",
      number: 2,
      title: "Engagement & Cohérence",
      nameEn: "Commitment and Consistency",
      icon: "check-circle",
      color: "blue",
      badge: "Alignement identitaire & Maintien des actes",
      quote: "« Une fois que nous avons pris position, nous éprouvons une tendance quasi obsessionnelle à agir de façon cohérente avec cet engagement. »",
      summary: "L'incohérence est perçue par notre société comme une faiblesse morale ou intellectuelle. Pour économiser l'effort de réflexion, nous préférons nous en tenir aveuglément à nos décisions antérieures.",
      psychologicalMechanism: "La dissonance cognitive (Leon Festinger) : notre cerveau ne supporte pas l'écart entre nos convictions et nos actions. Une fois qu'un individu effectue un premier pas (même minime) ou formule un engagement public ou écrit, son auto-perception change. Il se dit : 'Je suis le genre de personne qui soutient cette cause'.",
      keyTechniques: [
        {
          title: "Le Pied-dans-la-porte (Foot-in-the-door)",
          desc: "Obtenir un petit accord insignifiant pour amorcer la pompe. Une fois le premier pas validé, la personne acceptera une demande colossale ultérieure pour rester cohérente avec son premier geste."
        },
        {
          title: "L'Effet de l'Écrit & l'Engagement Public",
          desc: "Faire écrire son engagement à la cible ou lui faire déclarer publiquement devant des témoins. Ce qui est écrit et vu fige l'identité de façon quasi indélébile."
        },
        {
          title: "La Justification par l'Effort (Les Rites d'Initiation)",
          desc: "Plus une épreuve est douloureuse, difficile ou humiliante pour entrer dans un groupe (bizutages, concours extrêmes), plus le candidat valorise et sacralise son appartenance au groupe."
        },
        {
          title: "La Technique de l'Amorce (Low-balling)",
          desc: "Proposer une offre alléchante (ex: rabais de 1000€ sur une voiture). Le client prend la décision, commence à remplir les papiers et invente lui-même plein de bonnes raisons d'acheter. Au dernier moment, le vendeur annonce une 'erreur de calcul' et retire le rabais. Dans l'immense majorité des cas, le client achète quand même car il s'est engagé mentalement !"
        }
      ],
      famousStudies: [
        {
          title: "Le panneau géant de sécurité routière (Freedman & Fraser, 1966)",
          summary: "Des chercheurs demandent à des propriétaires de pavillons de planter un énorme panneau hideux 'CONDUISEZ PRUDEMMENT' sur leur pelouse : 83% refusent. Chez un autre groupe, on leur avait demandé 2 semaines plus tôt de coller un autocollant minuscule de 7 cm 'Soyez un conducteur prudent'. Résultat : 76% d'entre eux acceptent d'installer le panneau géant hideux !"
        },
        {
          title: "Le lavage de cerveau des prisonniers américains en Corée",
          summary: "Les Chinois n'ont pas utilisé la torture physique mais des engagements écrits progressifs. Ils demandaient aux soldats d'écrire des platitudes comme 'Les États-Unis ne sont pas parfaits'. Puis de lister un défaut. Puis de lire leur texte devant les autres prisonniers. Progressivement, les soldats devenaient des collaborateurs zélés pour rester cohérents avec leurs écrits."
        },
        {
          title: "Le robot interdit (Jonathan Freedman, 1965)",
          summary: "Chez des enfants, une grosse menace ('Si tu touches au robot, je me fâche') empêche l'acte temporairement mais ne crée aucun engagement moral. Une consigne simple sans menace forte pousse l'enfant à s'approprier intérieurement la règle : 'Je ne touche pas au robot parce que je ne veux pas être désobéissant'. Six semaines plus tard, l'enfant s'auto-censure encore !"
        }
      ],
      manipulatorTricks: [
        "Les associations dans la rue qui vous demandent d'abord : « Bonjour, avez-vous 2 minutes pour la planète ? Êtes-vous sensible à l'écologie ? » (Obligé de répondre oui, ce qui piège l'étape suivante).",
        "Les vendeurs de jouets qui font des pubs intenses avant Noël pour un modèle précis, provoquent une rupture de stock volontaire, forcent les parents à acheter un autre cadeau, puis réapprovisionnent en janvier pour contraindre les parents à honorer leur promesse.",
        "Le devis initial sous-évalué d'un artisan qui gonfle au fur et à mesure que vous avez dit oui aux premiers travaux."
      ],
      defenseStrategies: [
        "Les signaux de l'estomac (Stomach signs) : cette sensation de creux et de malaise viscéral quand vous réalisez que vous êtes en train de vous faire piéger par votre propre parole.",
        "Les signaux du fond du cœur (Heart-of-hearts) : fermez les yeux et posez-vous la question clé : « Sachant exactement ce que je sais aujourd'hui, si je pouvais remonter le temps au moment de mon premier choix, ferais-je le même engagement ? » Si la réponse est non, brisez la cohérence sans remords."
      ],
      ethicalUse: "Faites formuler à vos clients ou collaborateurs leurs propres objectifs par écrit. Ne leur dictez pas ce qu'ils doivent faire : amenez-les à s'engager librement par eux-mêmes pour un impact sincère et durable."
    },
    {
      id: "social-proof",
      number: 3,
      title: "La Preuve Sociale",
      nameEn: "Social Proof",
      icon: "users",
      color: "amber",
      badge: "Effet de foule & Validation collective",
      quote: "« Nous jugeons qu'un comportement est plus approprié lorsqu'il est adopté par d'autres personnes. »",
      summary: "Lorsque nous sommes hésitants ou incertains, nous considérons que les autres savent mieux que nous ce qu'il faut faire. Ce réflexe grégaire peut mener à l'inaction collective ou à l'hystérie mimétique.",
      psychologicalMechanism: "L'heuristique sociale : 95% des gens sont des imitateurs et seulement 5% des initiateurs. Suivre la masse a été un gage de survie ancestral (si la horde court, cours sans chercher à comprendre le prédateur). Mais en milieu urbain et numérique moderne, ce filtre produit des angles morts catastrophiques.",
      keyTechniques: [
        {
          title: "L'Ignorance Pluraliste (Pluralistic Ignorance)",
          desc: "Dans une situation d'urgence ou d'ambiguïté, chacun regarde les autres pour savoir comment réagir. Comme tout le monde feint le calme pour ne pas perdre la face, chacun en conclut qu'il n'y a pas de réel danger, et personne n'intervient !"
        },
        {
          title: "Le Principe de Similarité",
          desc: "La preuve sociale a un pouvoir démultiplié lorsque les personnes observées nous ressemblent étroitement (âge, milieu social, style, problématiques identiques)."
        },
        {
          title: "L'Effet Werther & l'Imitation Mortifère",
          desc: "Découvert par le sociologue David Phillips : suite à la médiatisation sensationnaliste d'un suicide, les suicides et accidents mortels augmentent brutalement dans la population partageant des caractéristiques similaires avec la victime."
        }
      ],
      famousStudies: [
        {
          title: "L'expérience de la fumée sous la porte (Latané & Darley, 1968)",
          summary: "Un étudiant remplit un questionnaire dans une pièce. De la fumée commence à sortir sous la porte. S'il est seul, 75% des sujets signalent la fumée en moins de 2 minutes. S'il est avec 2 acteurs complices qui feignent l'indifférence, seulement 10% des étudiants bougent, même lorsque la pièce devient irrespirable !"
        },
        {
          title: "Le meurtre de Kitty Genovese (1964)",
          summary: "Agressée et assassinée à New York pendant 35 minutes sous les yeux de 38 voisins à leurs fenêtres, sans qu'aucun n'appelle la police. Cialdini démontre que ce n'est pas de la cruauté ou de l'indifférence, mais le résultat pur de l'ignorance pluraliste : chacun pensait qu'un autre avait déjà alerté les secours."
        },
        {
          title: "Le drame de Jonestown (1978)",
          summary: "910 adeptes de la secte du Temple du Peuple boivent du poison létal avec leurs enfants sur l'ordre de Jim Jones au Guyana. Cialdini explique que dans cette jungle isolée, en terre inconnue et en proie au doute extrême, le mimétisme social des premiers adeptes a entraîné la conformité totale de la foule."
        }
      ],
      manipulatorTricks: [
        "Les rires enregistrés dans les sitcoms (pourtant détestés par les spectateurs, ils font objectivement rire plus souvent et plus longtemps).",
        "La boîte à pourboires du barman déjà garnie de plusieurs billets de 10€ dès l'ouverture.",
        "Les faux avis en ligne et les files d'attente artificiellement créées devant les boîtes de nuit pour simuler un engouement irrésistible."
      ],
      defenseStrategies: [
        "Déconnecter le pilote automatique dès qu'on perçoit des preuves sociales fabriquées ou manipulées.",
        "Parade d'urgence vitale en cas d'accident ou de malaise : Si vous avez besoin d'aide dans la foule, ne criez pas 'À l'aide !'. Isolez UNE seule personne : « Vous, monsieur avec la veste rouge, appelez les pompiers tout de suite ! ». Vous détruisez instantanément l'ignorance pluraliste et l'effet témoin."
      ],
      ethicalUse: "Montrez de vrais témoignages de clients semblables à vos cibles. Partagez des statistiques réelles d'adoption sans jamais inventer de fausses métriques."
    },
    {
      id: "liking",
      number: 4,
      title: "La Sympathie",
      nameEn: "Liking",
      icon: "heart",
      color: "rose",
      badge: "Attrait, Similarité & Coopération",
      quote: "« En règle générale, nous acquiesçons plus volontiers aux requêtes de personnes qui nous sont sympathiques ou familières. »",
      summary: "Nous disons oui beaucoup plus facilement à ceux qui nous plaisent, qui nous ressemblent, qui nous complimentent ou qui collaborent avec nous.",
      psychologicalMechanism: "L'effet de halo (Halo effect) : lorsqu'une caractéristique positive dominante (comme la beauté physique, le charisme ou l'élégance) induit un préjugé favorable généralisé sur l'intelligence, la gentillesse et l'intégrité de la personne sans aucune preuve objective.",
      keyTechniques: [
        {
          title: "L'Attrait Physique & Effet de Halo",
          desc: "Les personnes physiquement séduisantes reçoivent des peines de justice plus légères, obtiennent des salaires plus élevés et convainquent plus facilement, sans même que les interlocuteurs en aient conscience."
        },
        {
          title: "La Similarité & le Mimétisme",
          desc: "Nous aimons ceux qui nous ressemblent (opinions, style vestimentaire, origine, loisirs). Les négociateurs d'élite imitent discrètement la posture corporelle et les tournures de phrases de leurs cibles (matching/mirroring)."
        },
        {
          title: "Les Compliments & la Flatterie",
          desc: "Même lorsqu'ils sont transparents ou intéressés, les compliments déclenchent une réaction affective positive immédiate. Joe Girard, 'meilleur vendeur automobile au monde', envoyait chaque mois 13 000 cartes avec écrit simplement : 'Je vous apprécie'."
        },
        {
          title: "Le Contact & la Coopération (Buts Supra-ordonnés)",
          desc: "La collaboration face à une difficulté commune soude les individus. C'est le fondement de la technique policière du 'Bon flic / Mauvais flic' : le bon flic apparaît comme un sauveur et un allié contre le mauvais flic agressif."
        },
        {
          title: "Le Conditionnement & l'Association",
          desc: "Associer son message ou son produit à des stimuli agréables (repas raffinés, belles personnes, musiques entraînantes, célébrités aimées, victoires sportives locales)."
        }
      ],
      famousStudies: [
        {
          title: "La colonie des Robbers Cave (Muzafer Sherif, 1954)",
          summary: "Deux groupes de jeunes garçons normaux sont mis en compétition acharnée dans un camp : haine féroce, insultes, pillages de cabanes. Pour restaurer la paix, le simple contact amical échoue. En revanche, introduire un but commun imposant la coopération (réparer ensemble le camion citerne bloqué qui apporte l'eau au camp) dissipe instantanément les hostilités."
        },
        {
          title: "La technique du repas (Gregory Razran, 1938)",
          summary: "Des sujets jugent des déclarations politiques beaucoup plus favorablement et avec bien plus d'enthousiasme lorsqu'elles leur sont présentées pendant qu'ils sont en train de déguster un repas succulent."
        }
      ],
      manipulatorTricks: [
        "Les réunions de vente à domicile (Tupperware) où la vente repose sur la culpabilité de refuser un achat à son amie organisatrice.",
        "Le vendeur qui prétend par magie être né dans la même région que vous ou avoir exactement le même hobby.",
        "L'utilisation de stars du sport ou de la musique pour promouvoir des assurances ou des sodas sans aucun rapport logique."
      ],
      defenseStrategies: [
        "Surveillance du rythme affectif : Si vous vous prenez d'une affection inhabituellement rapide et chaleureuse pour un interlocuteur après 15 minutes d'échange, allumez vos warnings.",
        "Dissociation chirurgicale : Séparez mentalement la personne (sympathique, charmante, drôle) de l'objet de la transaction (le contrat, le prix, la voiture). Achetez le bien pour sa valeur propre, pas pour faire plaisir au vendeur."
      ],
      ethicalUse: "Trouvez des points communs RÉELS et sincères avec vos interlocuteurs. Exprimez des compliments authentiques sur des réalisations concrètes. Travaillez en véritable partenaire solidaire."
    },
    {
      id: "authority",
      number: 5,
      title: "L'Autorité",
      nameEn: "Authority",
      icon: "award",
      color: "indigo",
      badge: "Hiérarchie, Obéissance & Statut",
      quote: "« Dès l'enfance, on nous enseigne que l'obéissance aux autorités légitimes est un devoir moral absolu et indispensable au bon ordre social. »",
      summary: "Nous sommes éduqués à obéir aveuglément aux figures d'autorité légitimes ou supposées. En situation de doute, nous déléguons notre esprit critique à l'uniforme ou au titre.",
      psychologicalMechanism: "L'état agentique (Stanley Milgram) : l'individu ne se considère plus comme responsable de ses propres actes, mais comme le simple instrument d'exécution de la volonté d'une autorité supérieure. L'obéissance évite le fardeau de la délibération morale.",
      keyTechniques: [
        {
          title: "Les Symboles de l'Autorité : Les Titres",
          desc: "Professeur, Docteur, Expert, Directeur, Juge. Les études démontrent qu'un même homme est perçu comme mesurant plusieurs centimètres de plus lorsqu'on le présente comme 'Professeur' plutôt que comme 'Étudiant'."
        },
        {
          title: "Les Symboles de l'Autorité : Les Vêtements & Uniformes",
          desc: "La blouse blanche, l'uniforme de policier, le costume trois-pièces taillé sur mesure. Les passants obéissent sans poser de questions à des ordres insensés donnés par une personne portant un uniforme de gardien de sécurité."
        },
        {
          title: "Les Accessoires & Marques de Statut",
          desc: "Voitures de prestige, montres de luxe, diplômes encadrés, bureaux d'angle au sommet des tours. Les automobilistes attendent beaucoup plus longtemps avant de klaxonner derrière une voiture haut de gamme calée au feu vert."
        },
        {
          title: "La Faible Faille Concédée (Vincent le Serveur)",
          desc: "Pour asseoir une autorité d'expert désintéressé, confesser d'abord un petit défaut ou déconseiller un plat coûteux en murmurant : 'Ce soir, le homard n'est pas exceptionnel, prenez plutôt le veau'. Le client est désormais convaincu de son intégrité absolue et suit aveuglément toutes ses suggestions suivantes (vin et desserts hors de prix)."
        }
      ],
      famousStudies: [
        {
          title: "L'expérience de Milgram (Yale, 1961-1963)",
          summary: "Sous les ordres d'un scientifique en blouse grise, 65% des sujets ordinaires vont jusqu'au bout du tableau de commandes et infligent ce qu'ils croient être des décharges électriques mortelles de 450 volts à un cobaye hurlant de douleur et suppliant d'arrêter, simplement parce que l'autorité déclare posément : « L'expérience exige que vous continuiez »."
        },
        {
          title: "Le syndrome de l'oreille droite 'R. ear' en milieu hospitalier",
          summary: "Un médecin prescrit des gouttes pour une infection de l'oreille droite d'un patient et écrit hâtivement 'Place in R. ear'. L'infirmière lit 'Rear' (fessier) et instille docilement les gouttes auriculaires dans le rectum du patient, sans que personne ne s'interroge sur l'absurdité totale de la consigne."
        }
      ],
      manipulatorTricks: [
        "Des acteurs engagés pour jouer des docteurs avec un stéthoscope dans les publicités de dentifrice ou de compléments alimentaires.",
        "Les escrocs en faux costumes de techniciens EDF ou d'agents de police pour pénétrer chez des personnes vulnérables.",
        "L'argument d'autorité fallacieux (« Des études scientifiques ont prouvé que... » sans jamais citer la moindre source vérifiable)."
      ],
      defenseStrategies: [
        "Les deux questions de désactivation :",
        "1. « Cette figure d'autorité est-elle véritablement une experte qualifiée dans CE domaine précis ? » (Un prix Nobel de physique n'a aucune autorité en nutrition).",
        "2. « À quel point cette autorité est-elle sincère et désintéressée ? Quel est son intérêt financier personnel dans mes choix ? »"
      ],
      ethicalUse: "Faites valoir vos compétences réelles avec humilité. Présentez vos qualifications en toute transparence avant d'entamer une mission complexe pour rassurer légitimement vos partenaires."
    },
    {
      id: "scarcity",
      number: 6,
      title: "La Rareté",
      nameEn: "Scarcity",
      icon: "clock",
      color: "purple",
      badge: "Peur de la perte & Réactance psychologique",
      quote: "« Pour aimer une chose, il suffit de prendre conscience qu'on peut la perdre. »",
      summary: "Ce qui est rare, exclusif, en voie d'épuisement ou limité dans le temps gagne instantanément une valeur disproportionnée à nos yeux. La peur de la perte motive deux fois plus que l'espoir du gain.",
      psychologicalMechanism: "La théorie de la réactance psychologique (Jack Brehm) : chaque fois que notre liberté de choix est menacée, restreinte ou supprimée, nous éprouvons une réaction viscérale de rébellion qui nous pousse à désirer la ressource interdite avec une intensité décuplée.",
      keyTechniques: [
        {
          title: "La Limite de Quantité (Édition Limitée / Stock Épuisé)",
          desc: "« Plus que 2 exemplaires disponibles ! ». La sensation que l'objet va disparaître déclenche la peur immédiate du regret."
        },
        {
          title: "La Limite de Temps (Deadline / Compte à Rebours)",
          desc: "« Offre exclusive valable uniquement jusqu'à ce soir minuit ». Empêche l'analyse réfléchie et force une pulsion d'achat précipitée."
        },
        {
          title: "La Censure & l'Information Exclusive",
          desc: "Une information interdite ou confidentielle devient immédiatement plus attrayante, plus recherchée et plus convaincante pour le public que si elle était en libre accès."
        },
        {
          title: "La Rareté Récente vs Permanente",
          desc: "Une abondance récemment perdue provoque une rébellion bien plus violente qu'une privation habituelle continue (James C. Davies et la courbe en J des révolutions)."
        },
        {
          title: "La Concurrence Directe pour une Ressource Limitée",
          desc: "Voir d'autres personnes se battre pour le même objet (salle d'enchères, cohue du Black Friday, visites immobilières simultanées) fait grimper l'adrénaline et éteint tout discernement rationnel."
        }
      ],
      famousStudies: [
        {
          title: "L'expérience des biscuits dans le bocal (Stephen Worchel, 1975)",
          summary: "Des sujets goûtent des biscuits au chocolat provenant soit d'un bocal plein (10 biscuits), soit d'un bocal presque vide (2 biscuits). Les biscuits du bocal rare sont jugés plus délicieux, plus désirables et plus chers, alors qu'ils sont rigoureusement identiques ! L'effet est maximal lorsque le bocal passe de 10 à 2 sous les yeux du sujet en prétextant une demande des autres participants."
        },
        {
          title: "La réactance chez les tout-petits (Brehm & Weintraub, 1977)",
          summary: "Des garçons de 2 ans sont placés face à deux jouets identiques. L'un est posé derrière une barrière transparente de 30 cm (facile à enjamber), l'autre derrière une barrière de 60 cm (obstacle réel). Les enfants ignorent le jouet libre pour contourner immédiatement la barrière haute et saisir le jouet défendu !"
        }
      ],
      manipulatorTricks: [
        "Les sites de réservation hôtelière affichant en rouge clignotant : « 14 autres personnes regardent cette chambre en ce moment même ! »",
        "L'agent immobilier qui fait exprès de convoquer 4 acheteurs potentiels à la même demi-heure pour créer une panique d'achat.",
        "Le vendeur qui prétend : « Ce modèle est réservé par un autre client, mais si vous signez tout de suite, je peux voir si mon directeur vous l'attribue »."
      ],
      defenseStrategies: [
        "Détection du signal physiologique : Le signal d'alarme de la rareté est physique : une bouffée d'agitation émotionnelle et un pic d'adrénaline.",
        "La règle de distinction de Cialdini : Rappelez-vous que la rareté d'une chose ne la rend pas meilleure à l'USAGE. Un gâteau rare n'a pas meilleur goût dans la bouche. Une voiture rare ne roule pas mieux. Demandez-vous : « Est-ce que je veux cet objet pour l'UTILISER, ou seulement pour le POSSÉDER avant les autres ? »"
      ],
      ethicalUse: "Ne mentez jamais sur les délais ou les stocks. En revanche, si une opportunité réelle a une date de fin incontournable, informez-en honnêtement vos clients pour les aider à saisir le moment."
    },
    {
      id: "unity",
      number: 7,
      title: "L'Unité",
      nameEn: "Unity",
      icon: "shield",
      color: "cyan",
      badge: "Le « Nous », Identité Partagée & Co-Création",
      quote: "« L'Unité ne consiste pas à dire 'Ces gens me ressemblent' ; elle proclame 'Ces gens sont des miens, ils font partie de moi'. »",
      summary: "Introduit par Cialdini dans son édition augmentée, le 7ᵉ principe dépasse la simple sympathie : il touche à la fusion d'identité, au sentiment tribal et à l'appartenance collective indéfectible.",
      psychologicalMechanism: "L'identité partagée : dès que nous considérons qu'une personne appartient au groupe 'NOUS' (famille, ethnie, patrie, confrérie, communauté passionnée), les barrières de méfiance tombent. Le bien-être de l'autre devient indissociable du nôtre.",
      keyTechniques: [
        {
          title: "Être Ensemble (Being Together)",
          desc: "Les liens de parenté biologique et les métaphores familiales ('mes frères', 'la famille de notre entreprise'). Warren Buffett dans ses lettres annuelles aux actionnaires : 'Je gère vos actifs comme je le ferais pour ma propre famille'."
        },
        {
          title: "Agir Ensemble (Acting Together)",
          desc: "La synchronie motrice et émotionnelle (chanter en chœur, défiler au pas cadencé, applaudir en rythme, danser, surmonter une épreuve sportive ensemble). L'action synchronisée crée une fusion affective immédiate."
        },
        {
          title: "La Co-Création : Demander un Conseil",
          desc: "Découverte majeure de Cialdini : lorsque vous demandez un 'avis' ou une 'opinion' à quelqu'un, il prend du recul critique comme un juge extérieur. Mais lorsque vous lui demandez un 'CONSEIL', il fait un pas en avant, s'associe mentalement à votre projet et se sent co-responsable de sa réussite !"
        }
      ],
      famousStudies: [
        {
          title: "L'effet du conseil vs avis sur l'investissement financier",
          summary: "Des participants évaluent le concept d'une nouvelle chaîne de restaurants. À certains, on demande : 'Quel est votre avis sur ce concept ?'. À d'autres : 'Quels conseils nous donneriez-vous pour l'améliorer ?'. Les personnes sollicitées pour un conseil expriment ensuite une intention de fréquentation et un désir d'investir 40% supérieurs, car elles sont devenues co-créatrices du projet."
        },
        {
          title: "L'effet de la synchronie musicale chez les enfants",
          summary: "Des enfants de 4 ans qui jouent d'un instrument en rythme synchronisé avec un adulte sont ensuite 3 fois plus enclins à aider spontanément cet adulte à ramasser des objets tombés qu'après une activité asynchrone."
        }
      ],
      manipulatorTricks: [
        "Les dirigeants ou recruteurs qui martèlent « Nous sommes une grande famille » pour exiger des heures supplémentaires gratuites et du dévouement sacrificiel.",
        "Les partis politiques ou tribus en ligne qui créent des ennemis désignés pour cimenter le fanatisme de leur communauté interne.",
        "Le commercial qui instrumentalise une passion de niche commune (alumni de la même école, club de motards) pour faire passer un contrat désavantageux."
      ],
      defenseStrategies: [
        "Audit de réciprocité du 'Nous' : Posez-vous la question : « Est-ce que cette personne ou cette organisation me traite véritablement comme un membre de sa famille quand MOI j'ai besoin d'aide, ou seulement quand elle a besoin de moi ? »",
        "Ne pas confondre proximité identitaire et pertinence technique de la proposition."
      ],
      ethicalUse: "Invitez vos collègues, clients et étudiants à co-construire vos solutions. Demandez-leur des 'conseils' sincères pour vos défis stratégiques afin d'en faire de véritables alliés passionnés."
    }
  ],

  // 10 GRANDES ÉTUDES SCIENTIFIQUES POUR LA BIBLIOTHÈQUE INTERACTIVE
  studiesLibrary: [
    {
      id: "milgram",
      title: "L'Expérience de Soumission à l'Autorité",
      lead: "Stanley Milgram (Université Yale, 1961-1963)",
      principle: "Autorité",
      score: "65% de soumission maximale létale",
      imageTag: "Chocs électriques simulés",
      synopsis: "Des citoyens ordinaires acceptent d'envoyer des chocs jusqu'à 450V à un innocent attaché sur une chaise électrique fictive, sous l'ordre impassible d'un scientifique.",
      takeaway: "La capacité destructrice de l'obéissance aveugle lorsque la responsabilité morale est transférée à une figure d'autorité perçue comme légitime."
    },
    {
      id: "photocopier",
      title: "L'Expérience de la Photocopieuse & l'Heuristique du « Parce que »",
      lead: "Ellen Langer (Harvard, 1978)",
      principle: "Les Armes d'Influence (Déclic, Déclenchement)",
      score: "93% d'acceptation avec un prétexte vide",
      imageTag: "File d'attente bibliothèque",
      synopsis: "Demander à passer devant tout le monde avec la phrase '...parce que je dois faire des copies' obtient quasi le même résultat qu'une urgence réelle.",
      takeaway: "Le mot 'parce que' active le raccourci mental de rationalité sans que notre cerveau ne vérifie la substance de l'argument."
    },
    {
      id: "door-in-face",
      title: "La Technique du Rejet-Retrait (Zoo de délinquants)",
      lead: "Robert B. Cialdini (1975)",
      principle: "Réciprocité",
      score: "+200% d'acceptation de la seconde requête",
      imageTag: "Concession réciproque",
      synopsis: "Une demande extrême refusée (2 ans de bénévolat) débloque instantanément l'accord sur la demande cible (2h au zoo), perçue comme un compromis généreux.",
      takeaway: "Le recul d'un négociateur impose moralement à l'autre de faire lui aussi un pas en avant."
    },
    {
      id: "foot-in-door",
      title: "Le Panneau Géant de Sécurité Routière",
      lead: "Jonathan Freedman & Scott Fraser (Stanford, 1966)",
      principle: "Engagement & Cohérence",
      score: "76% d'accord après un autocollant de 7cm",
      imageTag: "Pied-dans-la-porte",
      synopsis: "Faire accepter un minuscule autocollant civique prépare les habitants à accepter un panneau de 3 mètres qui défigure leur jardin 15 jours plus tard.",
      takeaway: "Un engagement minime altère notre identité : nous agissons ensuite pour maintenir la cohérence de cette nouvelle image de nous-mêmes."
    },
    {
      id: "smoke-room",
      title: "L'Expérience de la Pièce Enfumée (Ignorance Pluraliste)",
      lead: "Bibb Latané & John Darley (Columbia, 1968)",
      principle: "Preuve Sociale",
      score: "10% d'intervention en groupe vs 75% seul",
      imageTag: "Inaction collective",
      synopsis: "Des étudiants restent assis dans une salle se remplissant de fumée suffocante tant que les personnes autour d'eux font semblant de ne rien remarquer.",
      takeaway: "En situation d'incertitude, nous copions l'apparence de calme d'autrui, créant une paralysie de groupe mortelle."
    },
    {
      id: "robbers-cave",
      title: "La Colonie de Vacances des Robbers Cave",
      lead: "Muzafer Sherif (Université d'Oklahoma, 1954)",
      principle: "Sympathie & Coopération",
      score: "Résolution totale du conflit par but supra-ordonné",
      imageTag: "Coopération fraternelle",
      synopsis: "Des garçons devenus ennemis mortels par simple compétition de groupe retrouvent une fraternité indéfectible lorsqu'ils doivent réparer ensemble la citerne d'eau vitale.",
      takeaway: "Ce ne sont pas les discours qui unissent les adversaires, mais l'action conjointe face à un obstacle commun."
    },
    {
      id: "cookies-jar",
      title: "L'Expérience des Biscuits au Chocolat",
      lead: "Stephen Worchel (1975)",
      principle: "Rareté",
      score: "Valeur et désirabilité doublées",
      imageTag: "Bocal de cookies",
      synopsis: "Un biscuit identique est perçu comme plus délicieux et plus précieux lorsqu'il provient d'un bocal qui vient de passer de 10 à 2 biscuits sous les yeux du sujet.",
      takeaway: "La rareté soudaine et la concurrence sociale transforment instantanément la perception hédonique d'un bien ordinaire."
    },
    {
      id: "advice-cocreation",
      title: "L'Effet Co-Création : Conseil vs Avis",
      lead: "Cialdini & collaborateurs (2016)",
      principle: "Unité",
      score: "+40% de soutien et d'investissement",
      imageTag: "Demander conseil",
      synopsis: "Demander à des parties prenantes un 'conseil' plutôt qu'un 'avis' transforme les observateurs distants en partenaires engagés corps et âme.",
      takeaway: "Le mot conseil invite à l'alliance identitaire et active le principe d'Unité."
    }
  ],

  // GRANDES HISTOIRES & ANECDOTES VÉCUES DU LIVRE (EDITION FRANÇAISE ORIGINALE)
  bookAnecdotes: [
    {
      id: "anecdote-turquoise",
      chapter: "Chapitre 1 : Les armes de l'influence",
      title: "Les bijoux de turquoise en Arizona",
      characters: "Une amie bijoutière de Cialdini et sa vendeuse",
      concept: "Le raccourci automatique « cher = de bonne qualité »",
      summary: "Une commerçante en Arizona ne parvenait pas à écouler un lot de bijoux en turquoise malgré l'affluence estivale. Désespérée avant de partir en voyage d'achats, elle laissa une note griffonnée : « Tout ce présentoir, prix x 1/2 ». À son retour, tout était vendu... parce que l'employée avait lu « x 2 » ! Les touristes, guidés par la règle machinale « cher = de bonne qualité », s'étaient rués sur les bijoux perçus comme bien plus précieux dès lors que leur prix avait doublé.",
      takeaway: "Dans un monde moderne complexe, nous utilisons le prix comme substitut rapide de la valeur pour économiser l'effort d'évaluation technique."
    },
    {
      id: "anecdote-drubeck",
      chapter: "Chapitre 1 : Les armes de l'influence",
      title: "Les frères tailleurs Sid et Harry Drubeck (Années 1930)",
      characters: "Sid (au comptoir, feignant la surdité) et Harry (couturier en arrière-boutique)",
      concept: "Le judo psychologique et le piège de la fausse bonne affaire",
      summary: "Quand un client essayait un costume, Sid feignait d'être dur d'oreille et criait vers l'arrière-boutique : « Harry, combien pour ce costume ? ». Harry répondait : « Pour ce magnifique modèle pure laine ? Quarante-deux dollars ! ». Sid redemandait, Harry répétait « Quarante-deux dollars ! ». Sid se tournait alors vers le client et disait doucement : « Vingt-deux dollars ». Le client, croyant profiter d'une erreur d'inattention, s'empressait de payer et de s'enfuir avec son « affaire en or » sous le bras.",
      takeaway: "Une mise en scène exploitant l'avidité et la fausse aubaine déclenche une précipitation d'achat sans négociation."
    },
    {
      id: "anecdote-sharon",
      chapter: "Chapitre 1 : Les armes de l'influence",
      title: "La lettre de l'étudiante Sharon à ses parents",
      characters: "Sharon (étudiante à l'université) et ses parents",
      concept: "Le principe de contraste perceptuel poussé au génie",
      summary: "Sharon écrit à ses parents une lettre alarmiste : dortoir incendié, saut par la fenêtre, fracture du crâne, hospitalisation, hébergement dans la cave d'un pompiste, projet de mariage hâtif en raison d'une grossesse... Avant de conclure avec brio : « En fait, il n'y a eu ni incendie, ni fracture, ni fiancé, ni grossesse. Mais j'ai eu un D en histoire et un F en chimie, et je voulais que vous relativisiez ! ». Après un tel séisme imaginaire, un mauvais bulletin scolaire paraît dérisoire.",
      takeaway: "Tout stimulus est perçu par contraste avec ce qui le précède. Présenter le pire rend l'inconvénient réel parfaitement acceptable."
    },
    {
      id: "anecdote-tranchees",
      chapter: "Chapitre 2 : La réciprocité",
      title: "Le soldat dans les tranchées et le morceau de pain",
      characters: "Un soldat d'élite allemand et un soldat français (Guerre 14-18)",
      concept: "L'obligation universelle de réciprocité annihilant l'hostilité",
      summary: "Rapporté par le chercheur Eibl-Eibesfeldt : un commando allemand traverse de nuit le no man's land pour capturer un ennemi et le ramener pour interrogatoire. Il surprend un soldat français seul en train de manger. Pris au dépourvu et désarmé, le Français accomplit un geste instinctif : il partage son morceau de pain et le tend à son ravisseur. Décontenancé et troublé par ce don nourricier, le soldat allemand est incapable d'accomplir sa mission : il tourne les talons et repart les mains vides.",
      takeaway: "Le don alimentaire active une dette morale si puissante qu'elle peut suspendre l'ordre militaire et l'animosité nationale."
    },
    {
      id: "anecdote-scout",
      chapter: "Chapitre 2 : La réciprocité",
      title: "La rencontre de Cialdini avec le jeune scout",
      characters: "Robert Cialdini et un jeune scout vendeur",
      concept: "La technique du rejet-retrait (concession réciproque)",
      summary: "Dans la rue, un scout propose à Cialdini des billets pour la fête annuelle des scouts à 5 dollars pièce. Cialdini refuse poliment. Le scout enchaîne aussitôt : « Bon, si vous ne voulez pas de billets, que diriez-vous d'une de nos barres de chocolat géantes à 1 dollar seulement ? ». Cialdini en achète deux, avant de réaliser qu'il n'aime pas le chocolat, qu'il tient à son argent, et qu'il s'est fait piéger : la concession feinte du scout avait forcé une concession en retour.",
      takeaway: "Le recul d'une demande extrême vers une demande modeste est perçu comme un compromis qui oblige la cible à céder à son tour."
    },
    {
      id: "anecdote-watergate",
      chapter: "Chapitre 2 : La réciprocité",
      title: "L'opération insensée du cambriolage du Watergate",
      characters: "G. Gordon Liddy, John Mitchell, Jeb Magruder (1972)",
      concept: "La somme terrifiante du rejet-retrait et du contraste",
      summary: "Comment des stratèges politiques chevronnés ont-ils pu approuver l'idée absurde et illégale d'aller cambrioler les bureaux démocrates du Watergate ? L'explication tient aux concessions préalables : Liddy avait d'abord proposé un plan démentiel à 1 million de dollars (commandos d'enlèvement, avion de chasse, call-girls pour chantage). Rejeté. Il revient avec un plan à 500 000 $. Rejeté. Puis il propose le « plan minimum » à 250 000 $ : les dirigeants ont consenti pour 'ne pas le laisser repartir les mains vides'.",
      takeaway: "Après deux refus successifs d'offres exorbitantes, une proposition folle mais réduite de 75% est perçue comme un compromis raisonnable."
    },
    {
      id: "anecdote-jouets",
      chapter: "Chapitre 3 : Engagement et cohérence",
      title: "Le circuit de course de Christopher après Noël",
      characters: "Robert Cialdini, son fils Christopher, et un ancien fabricant de jouets",
      concept: "Le verrouillage par la promesse et la rupture de stock orchestrée",
      summary: "Cialdini se retrouve en janvier dans un magasin de jouets bondé à acheter un circuit automobile hors de prix pour son fils, alors qu'il venait d'acheter des charretées de cadeaux à Noël. Un ami du secteur lui révèle le secret : les marques diffusent des pubs massives avant Noël pour un jouet phare, sous-approvisionnent volontairement les rayons, forcent les parents à acheter un jouet de substitution, puis relancent la pub en janvier pour que les enfants crient « Mais papa, tu avais promis ! ».",
      takeaway: "Le besoin d'être un parent cohérent et fidèle à sa parole rend les adultes prisonniers de leurs engagements verbaux antérieurs."
    },
    {
      id: "anecdote-vincent",
      chapter: "Chapitre 6 : L'autorité",
      title: "Vincent le serveur d'élite et l'art de parler contre ses intérêts",
      characters: "Vincent (serveur dans un restaurant chic) et ses clients",
      concept: "La crédibilité absolue établie par une faille concédée",
      summary: "Vincent observait la première personne à commander dans une grande tablée. Quand elle choisissait un plat, il se penchait d'un air conspirateur : « Ce plat n'est pas aussi réussi ce soir que d'habitude... puis-je vous suggérer plutôt celui-ci ? » (légèrement moins cher). Par ce geste, il prouvait son honnêteté désintéressée. Une fois sa crédibilité et son autorité établies, les clients lui faisaient une confiance aveugle pour recommander des bouteilles de vin prestigieuses et des desserts onéreux, faisant exploser l'addition et ses pourboires.",
      takeaway: "Reconnaître un petit défaut ou désavantage apparent établit une sincérité incontestable pour remporter l'accord sur l'essentiel."
    },
    {
      id: "anecdote-claque",
      chapter: "Chapitre 4 : La preuve sociale",
      title: "L'institution de la claque à l'Opéra de Paris (1820)",
      characters: "Sauton et Porcher (L'Assurance des Succès Dramatiques)",
      concept: "La fabrication commerciale éhontée de la preuve sociale",
      summary: "En 1820, deux entrepreneurs parisiens fondent une agence louant des applaudisseurs professionnels aux théâtres et opéras. Ils créent des rôles spécialisés : la pleureuse (pour pleurer sur commande aux scènes tristes), le bisseur (qui crie 'bis !' et 'encore !'), et le rieur (pour rire bruyamment aux comédies). La supercherie était si officielle que les journaux de l'époque publiaient leur grille tarifaire (25 lires pour applaudir l'entrée d'un monsieur, 50 lires pour un rappel jusqu'à satisfaction).",
      takeaway: "Même quand le public sait pertinemment qu'une réaction collective est factice ou enregistrée, le cerveau y cède mécaniquement."
    },
    {
      id: "anecdote-richard",
      chapter: "Chapitre 7 : La rareté",
      title: "Les rendez-vous simultanés de Richard Cialdini",
      characters: "Richard Cialdini (le frère de l'auteur) et ses acheteurs de voitures",
      concept: "La rivalité physique directe pour une ressource limitée",
      summary: "Pour financer ses études, le frère de Cialdini achetait des voitures d'occasion, les nettoyait et publiait une petite annonce le dimanche. Son coup de génie : donner rendez-vous à TOUS les acheteurs intéressés exactement à la même heure (ex: 14h00). Dès que le deuxième acheteur arrivait, le premier se sentait immédiatement menacé de perdre l'affaire. La rivalité visible provoquait un pic d'adrénaline et coupait toute velléité de négocier : la voiture partait au prix fort en quelques minutes.",
      takeaway: "La concurrence visible et immédiate pour un bien convoité éteint le raisonnement rationnel et déclenche la peur viscérale de perdre."
    }
  ],

  scenarios: [
    {
      id: "sc-car-dealer",
      category: "Vente & Négociation",
      title: "L'achat d'une voiture neuve en concession",
      context: "Vous négociez l'achat d'un SUV familial. Le vendeur vous propose un rabais exceptionnel de 1 500€ 'si vous signez la promesse aujourd'hui'. Vous acceptez, remplissez les formalités pendant 45 minutes. Soudain, le directeur revient confus : 'Le vendeur a fait une erreur sur les options d'usine, le rabais réel n'est que de 300€'.",
      principlesDetected: ["Engagement & Cohérence", "Rareté", "Principe de Contraste"],
      techniquesActive: "Technique de l'Amorce (Low-balling) combinée à une fausse urgence de date limite.",
      psychologicalTrap: "Vous vous êtes déjà projeté au volant de cette voiture. Vous avez trouvé mille justifications intérieures. Annuler pour 1200€ d'écart vous coûterait plus de douleur psychologique que d'avaler la pilule.",
      immediateDefense: "Invoquez le signal de l'estomac. Dites calmement : « L'erreur de calcul est votre problème, pas le mien. Si le prix convenu n'est pas honoré à l'euro près, la transaction est annulée immédiatement ». Levez-vous pour partir : le rabais réapparaît comme par enchantement dans 80% des cas.",
      ethicalWay: "Un vendeur éthique (Détective) annonce le juste prix dès le départ et ne revient jamais sur un engagement contractuel."
    },
    {
      id: "sc-salary-negotiation",
      category: "Carrière & Entreprise",
      title: "Négociation de salaire annuel",
      context: "Vous sollicitez une augmentation de 12% justifiée par d'excellents résultats. Votre manager vous rétorque : 'Le budget est gelé, c'est impossible'. Il ajoute ensuite : 'Par contre, je peux t'accorder 4% et deux jours de télétravail supplémentaires'.",
      principlesDetected: ["Réciprocité", "Principe de Contraste", "Autorité"],
      techniquesActive: "Rejet-retrait inversé et contraste perceptuel (4% paraît généreux après un refus de 12%).",
      psychologicalTrap: "Vous vous sentez redevable du geste de votre manager qui 's'est battu pour vous trouver 4%' et vous hésitez à insister de peur de paraître ingrat.",
      immediateDefense: "Remerciez poliment pour les 4%, mais séparez le geste de la question de votre valeur marchande : « J'apprécie cet effort sur les 4%, mais fixons dès aujourd'hui par écrit les 3 objectifs précis qui déclencheront les 8% restants dans 6 mois ».",
      ethicalWay: "Utiliser le principe de cohérence : faire valider en amont les critères de performance avant d'aborder le montant."
    },
    {
      id: "sc-charity-street",
      category: "Vie Quotidienne",
      title: "Le démarcheur associatif avec le sourire éclatant",
      context: "Dans une artère commerçante piétonne, un bénévole tout sourire s'approche : 'Bonjour ! Vous avez l'air d'une personne qui a du cœur. Avez-vous 30 secondes pour les enfants hospitalisés ?'. Vous répondez oui. Il vous accroche un badge autocollant sur le manteau, puis vous demande un prélèvement mensuel récurrent de 15€.",
      principlesDetected: ["Sympathie", "Réciprocité", "Engagement & Cohérence"],
      techniquesActive: "Compliment de cadrage ('personne de cœur'), don préalable non sollicité (badge), pied-dans-la-porte.",
      psychologicalTrap: "Si vous refusez de donner, vous vous infligez une dissonance : vous refusez d'aider les enfants alors que vous venez d'accepter d'être étiqueté 'personne de cœur' et que vous portez déjà leur badge.",
      immediateDefense: "Retirez calmement le badge et rendez-le-lui : « Votre cause est noble, mais je ne prends jamais d'engagement financier dans la rue sous le coup de l'émotion. Donnez-moi l'adresse de votre site et j'étudierai votre dossier chez moi à froid ».",
      ethicalWay: "Proposer de l'information transparente sans forcer de qualification morale préalable."
    },
    {
      id: "sc-ecommerce-panic",
      category: "Achats Numériques",
      title: "La réservation d'hôtel avec compte à rebours",
      context: "Vous cherchez un hôtel pour le week-end. Une bannière rouge clignote : 'Attention ! Plus qu'une seule chambre à ce tarif ! 9 autres personnes consultent cette offre en ce moment. Prix garanti pendant 04:59 minutes'.",
      principlesDetected: ["Rareté", "Preuve Sociale"],
      techniquesActive: "Limite de quantité artificielle, concurrence directe pour ressource limitée, deadline d'urgence.",
      psychologicalTrap: "La bouffée d'adrénaline et la peur de passer à côté (FOMO) coupent vos capacités réflexives : vous validez sans vérifier l'emplacement ni les conditions d'annulation.",
      immediateDefense: "Appliquez la règle de Cialdini : La rareté ne rend pas la literie plus confortable. Fermez l'onglet pendant 10 minutes, buvez un verre d'eau. Rouvrez en navigation privée : la chambre est souvent toujours là au même prix.",
      ethicalWay: "N'afficher les alertes de disponibilité que si elles reflètent une réalité technique authentique d'inventaire."
    },
    {
      id: "sc-corporate-family",
      category: "Management & Travail",
      title: "« Ici, nous sommes tous une grande famille »",
      context: "Votre direction vous demande de travailler tout le week-end en urgence pour boucler un appel d'offres sans compensation financière ni récupération : 'Tu sais bien que dans notre famille d'entreprise, on ne compte pas ses heures quand le navire a besoin de tout le monde'.",
      principlesDetected: ["Unité", "Autorité", "Engagement & Cohérence"],
      techniquesActive: "Invocation opportuniste du 7ᵉ principe (l'Unité et la métaphore familiale).",
      psychologicalTrap: "Refuser d'aider sa 'famille' génère une immense culpabilité de trahison collective.",
      immediateDefense: "L'audit de réciprocité du 'Nous' : « Une vraie famille veille aussi sur la santé et le repos de ses membres. Travaillons à trouver une solution d'urgence équitable : quelle compensation ou récupération planifions-nous dès lundi ? »",
      ethicalWay: "Créer un véritable esprit de corps où la solidarité fonctionne dans les deux sens (l'entreprise protège ses membres avec la même ferveur)."
    },
    {
      id: "sc-free-taste",
      category: "Consommation",
      title: "L'artisan fromager du marché et son couteau bien garni",
      context: "Au marché, un fromager coupe un généreux morceau de comté 24 mois affiné et vous le tend avec un grand sourire complice : 'Goûtez-moi cette merveille, ça ne vous engage à rien !'. Vous le savourez, le trouvez délicieux. Il vous demande alors : 'Je vous en coupe un demi-kilo ou une livre ?'.",
      principlesDetected: ["Réciprocité", "Principe du Contraste"],
      techniquesActive: "Don non sollicité et question à double alternative fermée (qui présuppose l'achat).",
      psychologicalTrap: "L'obligation de recevoir a été activée. Ne rien acheter après avoir mangé vous fait passer pour un profiteur impoli.",
      immediateDefense: "« Merci beaucoup, il est effectivement remarquable. Aujourd'hui je ne prévois pas d'acheter de fromage, mais je retiens l'adresse pour un prochain repas ». Souriez et partez sans vous justifier.",
      ethicalWay: "Offrir la dégustation avec détachement sincère, sans forcer la question de fermeture."
    },
    {
      id: "sc-fake-guru",
      category: "Réseaux Sociaux",
      title: "Le formateur miracle en costume sur mesure",
      context: "Une publicité vidéo montre un jeune homme de 25 ans sortant d'une voiture de sport devant une villa à Dubaï. Il affirme : 'Déjà 14 000 personnes ont quitté le salariat grâce à mon système. 97% de réussite attestée par huissier. Les inscriptions ferment ce soir pour les 5 derniers privilégiés'.",
      principlesDetected: ["Autorité", "Preuve Sociale", "Rareté"],
      techniquesActive: "Symboles superficiels d'autorité (voiture, costume), fausse preuve sociale chiffrée, fausse rareté d'inscriptions.",
      psychologicalTrap: "L'association visuelle de richesse et les chiffres d'adhésion massifs anesthésient l'esprit critique.",
      immediateDefense: "Les 2 questions d'or de l'autorité : « Cet homme est-il un expert reconnu par ses pairs ou juste un comédien ? Quel est son business model réel (vendre des formations ou appliquer la méthode) ? »",
      ethicalWay: "Prouver son expertise par des contenus de fond à haute valeur ajoutée et des témoignages vérifiables."
    },
    {
      id: "sc-good-bad-cop",
      category: "Négociation B2B",
      title: "Le duo acheteur agressif / acheteur compréhensif",
      context: "En négociation client, le directeur des achats hurle, rejette violemment votre devis et quitte la pièce en claquant la porte. Son adjoint reste, vous sert un verre d'eau et vous murmure avec empathie : 'Écoutez, je vous comprends, mais il est intraitable. Baissez votre prix de 8% et je me charge personnellement de lui faire signer le contrat avant qu'il ne choisisse votre concurrent'.",
      principlesDetected: ["Sympathie", "Réciprocité", "Rareté"],
      techniquesActive: "Technique du Bon Flic / Mauvais Flic, but supra-ordonné factice.",
      psychologicalTrap: "Vous voyez le second acheteur comme un ami et un protecteur. Vous lui accordez la remise par gratitude pour son 'intervention'.",
      immediateDefense: "Identifiez le piège théâtral : « J'apprécie votre bienveillance, mais mes tarifs reflètent exactement les coûts de prestation nécessaires à votre qualité de service. Prenez le temps de délibérer tous les deux : mon offre reste disponible jusqu'à vendredi ».",
      ethicalWay: "Conduire des discussions transparentes sans jeux de rôles manipulateurs."
    }
  ],

  // BOUCLIER ANTI-MANIPULATION & RÉFLEXES DE DÉFENSE
  shieldGuide: {
    visceralSignals: [
      {
        organ: "L'Estomac (Stomach Signs)",
        trigger: "Technique de l'Amorce ou Engagement Forcé",
        sensation: "Nœud ou serrement douloureux dans le creux de l'estomac.",
        meaning: "Votre corps sait que vous êtes sur le point de dire OUI à quelque chose que vous n'avez aucune envie de faire, simplement pour ne pas paraître incohérent ou malpoli.",
        action: "STOP immédiat. Expliquez clairement que vous avez démasqué le piège de la fausse cohérence."
      },
      {
        organ: "Le Fond du Cœur (Heart-of-Hearts)",
        trigger: "Doute persistant sur une décision déjà prise",
        sensation: "Une intuition fulgurante de malaise intérieur qui survient une fraction de seconde avant que votre intellect ne commence à rationaliser.",
        meaning: "Si vous deviez tout recommencer depuis le début avec vos connaissances actuelles, vous refuseriez tout net.",
        action: "Faites confiance à cette première étincelle avant la rationalisation de votre mental."
      },
      {
        organ: "Le Pic d'Adrénaline & l'Agitation",
        trigger: "Piège de la Rareté ou Concurrence Fictive",
        sensation: "Accélération du rythme cardiaque, souffle court, impression de panique qu'une opportunité vous échappe.",
        meaning: "La machine émotionnelle a pris le contrôle sur votre cortex préfrontal.",
        action: "Règle des 24 heures : Aucune décision majeure sous pic d'adrénaline. Sortez de la pièce, respirez profondément."
      }
    ],

    verbalCounterShields: [
      {
        situation: "Face à un cadeau ou service forcé",
        phrase: "« C'est très gentil de votre part, mais si j'accepte votre offre, ce sera uniquement pour la valeur du service et non en remboursement de votre cadeau. »"
      },
      {
        situation: "Face à une concession réciproque suspecte (Rejet-Retrait)",
        phrase: "« Je remarque que votre seconde proposition arrive très vite après le refus de la première. Traitons-la comme une offre totalement indépendante. »"
      },
      {
        situation: "Face à une urgence de signature ('Seulement aujourd'hui')",
        phrase: "« Si cette proposition est bonne pour moi aujourd'hui, elle le sera encore lundi prochain. Si elle disparaît d'ici là, c'est qu'elle n'était pas faite pour moi. »"
      },
      {
        situation: "Face à un argument d'autorité non étayé",
        phrase: "« Quelle est l'étude précise et indépendante qui corrobore cette affirmation ? »"
      },
      {
        situation: "Face à la pression de la foule ('Tout le monde fait ça')",
        phrase: "« Ce qui convient au plus grand nombre n'est pas nécessairement ce qui répond à mes besoins spécifiques actuels. »"
      },
      {
        situation: "Face à l'amorce (Low-balling)",
        phrase: "« Puisque les conditions initiales qui ont motivé mon accord ont été modifiées unilatéralement, mon engagement est nul et non avenu. »"
      }
    ],

    fiveSecondAudit: [
      "1. Si cette personne ne m'avait rien offert au début, aurais-je acheté ce produit ?",
      "2. Est-ce que je prends cette décision pour être utile à mes objectifs ou par peur de décevoir mon interlocuteur ?",
      "3. L'expert en face de moi a-t-il un intérêt financier direct dans ma réponse ?",
      "4. Vais-je utiliser cet objet au quotidien ou veux-je simplement le gagner dans une compétition ?",
      "5. Suis-je en train de me conformer aveuglément au comportement des personnes qui m'entourent ?"
    ]
  },

  // LE GUIDE DU DÉTECTIVE ÉTHIQUE (INFLUENCER AVEC INTÉGRITÉ)
  ethicalPersuasionGuide: {
    mantra: "Le secret de l'influence éthique : Ne jamais fabriquer artificiellement un principe. Trouver le principe légitimement présent dans la réalité et le porter à la lumière.",
    principlesRules: [
      {
        principle: "Réciprocité Éthique",
        rule: "Donnez d'abord de la valeur sans calcul d'arrière-pensée.",
        script: "« J'ai remarqué ce point d'amélioration dans votre dossier et je vous ai préparé cette note d'analyse pour vous faire gagner du temps. Prenez-en connaissance librement. »"
      },
      {
        principle: "Cohérence Éthique",
        rule: "Demandez des micro-engagements volontaires et sincères.",
        script: "« Seriez-vous d'accord pour que nous définissions ensemble les 3 critères incontournables de notre collaboration ? »"
      },
      {
        principle: "Preuve Sociale Éthique",
        rule: "Partagez des retours d'expérience véridiques de clients similaires.",
        script: "« Trois de nos clients qui avaient exactement la même contrainte budgétaire que vous ont opté pour cette méthode avec ces résultats mesurés. »"
      },
      {
        principle: "Sympathie Éthique",
        rule: "Cherchez la véritable convergence d'intérêts et travaillez comme un allié dévoué.",
        script: "« Mon objectif n'est pas de vous vendre un contrat de plus, mais de faire en sorte que votre équipe atteigne ses objectifs avec succès. »"
      },
      {
        principle: "Autorité Éthique",
        rule: "Montrez vos compétences réelles et reconnaissez honnêtement vos limites.",
        script: "« Sur cette partie précise de la mission, nous sommes parmi les rares spécialistes certifiés. En revanche, sur cet autre point, je vous orienterai vers un confrère plus pointu. »"
      },
      {
        principle: "Rareté Éthique",
        rule: "Avertissez de façon factuelle des vraies contraintes de planning ou de stock.",
        script: "« Notre équipe n'accepte que 4 projets d'envergure ce trimestre pour garantir une qualité irréprochable. Si vous souhaitez démarrer en octobre, nous devons planifier avant le 15. »"
      },
      {
        principle: "Unité Éthique",
        rule: "Sollicitez un conseil sincère pour co-construire la solution.",
        script: "« Avec votre expérience du terrain, quels conseils me donneriez-vous pour adapter notre offre aux réalités quotidiennes de vos équipes ? »"
      }
    ]
  },

  // TEST D'ÉVALUATION DU PROFIL DE VULNÉRABILITÉ (21 QUESTIONS - 3 PAR PRINCIPE)
  quizQuestions: [
    {
      id: 1,
      principleId: "reciprocity",
      question: "Un collègue avec qui vous avez peu d'affinités vous dépose spontanément un café et une viennoiserie sur votre bureau le matin. Deux heures plus tard, il vous demande de relire son rapport urgent de 40 pages.",
      options: [
        { text: "J'accepte sans hésiter, je me sentirais trop mal à l'aise de refuser après son attention.", vulnerabilityScore: 3 },
        { text: "J'hésite fortement, je négocie pour n'en relire qu'une dizaine de pages.", vulnerabilityScore: 2 },
        { text: "Je le remercie pour le café mais j'évalue ma disponibilité réelle : s'il s'agit d'une tentative de redevabilité, je décline sans culpabilité.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 2,
      principleId: "commitment",
      question: "Vous avez signé une pétition pour soutenir une cause locale. Une semaine plus tard, l'organisateur vous sollicite pour tenir un stand tout le week-end sous la pluie.",
      options: [
        { text: "J'accepte car j'ai signé et je veux rester fidèle à mes engagements jusqu'au bout.", vulnerabilityScore: 3 },
        { text: "Je cherche une excuse polie pour décliner, tout en me sentant coupable d'être incohérent.", vulnerabilityScore: 2 },
        { text: "Je sais qu'une signature symbolique n'a rien à voir avec un don de mon temps de repos : je refuse tranquillement si je n'ai pas le temps.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 3,
      principleId: "social-proof",
      question: "Dans un restaurant inconnu, vous hésitez entre deux plats. Le serveur vous dit : « Le premier est notre plat le plus commandé et 90% des clients le choisissent ».",
      options: [
        { text: "Je choisis immédiatement ce plat : si tout le monde le prend, c'est forcément le meilleur choix.", vulnerabilityScore: 3 },
        { text: "Cela influence mon choix à 70%, même si j'avais envie d'autre chose au départ.", vulnerabilityScore: 2 },
        { text: "Je m'interroge sur mes propres goûts du jour : la popularité d'un plat ne garantit pas qu'il corresponde à mes envies.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 4,
      principleId: "liking",
      question: "Un vendeur particulièrement charmant, élégant et attentionné vous fait des compliments sur votre style et découvre par hasard qu'il pratique le même sport que vous.",
      options: [
        { text: "Je baisse ma garde immédiatement, le courant passe si bien que je lui fais une confiance aveugle.", vulnerabilityScore: 3 },
        { text: "Je me sens flatté et j'ai tendance à être beaucoup plus conciliant sur le prix.", vulnerabilityScore: 2 },
        { text: "J'apprécie l'échange mais je dissocie complètement la sympathie du vendeur de la qualité intrinsèque du produit proposé.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 5,
      principleId: "authority",
      question: "Une personnalité médicale prestigieuse portant une blouse et arborant de multiples titres affirme dans une vidéo qu'il faut consommer un complément alimentaire précis.",
      options: [
        { text: "S'il est docteur, je lui fais confiance et je commande le produit.", vulnerabilityScore: 3 },
        { text: "Je suis impressionné par ses titres, mais je demande l'avis de mon pharmacien avant d'acheter.", vulnerabilityScore: 2 },
        { text: "Je vérifie si la nutrition est sa spécialité et si cette personne a des liens d'intérêts financiers avec la marque.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 6,
      principleId: "scarcity",
      question: "Vous repérez une veste qui vous plaît modérément. Le vendeur s'exclame : « Ah, c'est la dernière pièce de cette collection, et un client vient juste de m'appeler pour la réserver ! ».",
      options: [
        { text: "Mon cœur s'emballe, je dis tout de suite que je la prends avant que l'autre ne l'achète !", vulnerabilityScore: 3 },
        { text: "J'hésite fébrilement et je demande au vendeur de me la garder 15 minutes pendant que je réfléchis avec anxiété.", vulnerabilityScore: 2 },
        { text: "Je me demande si je la voulais vraiment pour la porter ou seulement par peur de la perdre. Si j'hésitais, je la laisse.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 7,
      principleId: "unity",
      question: "Un candidat à une élection ou un dirigeant d'entreprise utilise fréquemment les termes « notre grande famille », « nous contre les autres » et vous invite à vous sacrifier pour le groupe.",
      options: [
        { text: "Je ressens une vive fierté d'appartenance et je suis prêt à donner beaucoup sans compter.", vulnerabilityScore: 3 },
        { text: "Je me sens obligé moralement de suivre le mouvement collectif pour ne pas décevoir le groupe.", vulnerabilityScore: 2 },
        { text: "J'examine les actes concrets : cette entité me protège-t-elle avec la même dévotion qu'elle attend de moi ?", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 8,
      principleId: "reciprocity",
      question: "Un artisan vous envoie un devis détaillé accompagné d'un diagnostic gratuit de 20 pages sans que vous ne lui ayez rien demandé.",
      options: [
        { text: "Je me sens obligé de signer avec lui pour ne pas gaspiller son travail bénévole.", vulnerabilityScore: 3 },
        { text: "Je me sens gêné de comparer avec d'autres artisans moins chers.", vulnerabilityScore: 2 },
        { text: "Je le remercie pour le diagnostic mais je choisis l'artisan le plus compétent et au juste prix sans sentiment de dette.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 9,
      principleId: "commitment",
      question: "Un vendeur vous annonce un véhicule à un prix imbattable. Après 1h d'essai et de constitution du dossier, il vous annonce que l'option GPS obligatoire rajoute 800€ au prix.",
      options: [
        { text: "Tant pis, maintenant que j'ai fait toutes ces démarches, j'achète quand même.", vulnerabilityScore: 3 },
        { text: "Je suis frustré mais je négocie pour payer 400€ au lieu de 800€.", vulnerabilityScore: 2 },
        { text: "J'identifie la technique de l'amorce : je refuse catégoriquement et je suis prêt à partir sans acheter.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 10,
      principleId: "social-proof",
      question: "Dans la rue, une personne s'effondre au sol. Il y a une quinzaine de passants autour qui marchent sans s'arrêter en regardant droit devant eux.",
      options: [
        { text: "Puisque personne ne s'arrête, je suppose qu'il s'agit d'une personne ivre ou sans danger immédiat et je continue mon chemin.", vulnerabilityScore: 3 },
        { text: "Je ralentis le pas, j'observe les réactions des autres avec inquiétude en attendant que quelqu'un intervienne.", vulnerabilityScore: 2 },
        { text: "Je brise l'ignorance pluraliste : je m'approche directement de la personne et je désigne un passant précis pour appeler le 15.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 11,
      principleId: "liking",
      question: "Un ami proche vous invite à une réunion de vente à domicile chez lui pour des produits ménagers chers dont vous n'avez aucun besoin.",
      options: [
        { text: "J'achète au moins deux articles pour lui faire plaisir et pour qu'il touche sa commission.", vulnerabilityScore: 3 },
        { text: "J'achète le produit le moins cher du catalogue juste pour sauver les apparences.", vulnerabilityScore: 2 },
        { text: "J'explique chaleureusement à mon ami que je suis ravi de le voir mais que je n'achète pas de produits dont je n'ai pas l'usage.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 12,
      principleId: "authority",
      question: "Votre supérieur hiérarchique vous demande d'insérer un chiffre manifestement erroné dans un rapport officiel car 'la direction l'exige'.",
      options: [
        { text: "J'obéis, c'est lui le chef et c'est lui qui assume la responsabilité légale finale.", vulnerabilityScore: 3 },
        { text: "J'insère le chiffre mais je garde un mail de preuve pour me couvrir en cas d'audit.", vulnerabilityScore: 2 },
        { text: "Je refuse fermement d'engager ma signature sur une inexactitude et je propose la correction légale.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 13,
      principleId: "scarcity",
      question: "Un site d'e-commerce affiche un compte à rebours de 5 minutes avec un prix barré de -50% sur un article que vous découvrez pour la première fois.",
      options: [
        { text: "Je valide mon panier immédiatement pour ne pas rater cette opportunité exceptionnelle !", vulnerabilityScore: 3 },
        { text: "Je cherche rapidement des avis sur Google mais je cède souvent avant la fin du décompte.", vulnerabilityScore: 2 },
        { text: "Je ferme la fenêtre : une réduction urgente sur un besoin que je n'avais pas 5 minutes plus tôt est une manipulation classique.", vulnerabilityScore: 0 }
      ]
    },
    {
      id: 14,
      principleId: "unity",
      question: "Un ancien camarade de votre promotion d'école que vous n'avez pas vu depuis 10 ans vous contacte pour investir dans sa nouvelle start-up au nom de 'la solidarité des anciens'.",
      options: [
        { text: "J'investis ou je l'aide activement, nous faisons partie de la même famille d'alumni.", vulnerabilityScore: 3 },
        { text: "Je lui accorde un rendez-vous très bienveillant et j'ai du mal à dire non.", vulnerabilityScore: 2 },
        { text: "J'audite son projet avec la même rigueur critique et distante que pour un parfait inconnu.", vulnerabilityScore: 0 }
      ]
    }
  ],

  // ÉCOSYSTÈME D'INFLUENCE ÉTHIQUE (LES 5 NOUVEAUX AUTEURS & MODULES UX)
  behavioralEcosystem: {
    authors: [
      {
        id: "kahneman",
        name: "Daniel Kahneman",
        work: "Système 1 / Système 2 : Les deux vitesses de la pensée",
        badge: "Prix Nobel d'Économie",
        icon: "🧠",
        color: "blue",
        coreConcept: "Système 1 (rapide, automatique, émotionnel, stéréotypé) vs Système 2 (lent, délibératif, logique, énergivore).",
        application: "Forcer un ralentissement cognitif pour planifier les tâches complexes au lieu de dresser des to-do lists impulsives."
      },
      {
        id: "ariely",
        name: "Dan Ariely",
        work: "C'est (vraiment ?) moi qui décide ! (Predictably Irrational)",
        badge: "Psychologie & Économie Comportementale",
        icon: "🎭",
        color: "purple",
        coreConcept: "L'Irrationalité Prévisible : Biais de Relativité, Effet de Leurre (Decoy Effect), le Coût du « Gratuit », et la frontière Normes Sociales vs Normes du Marché.",
        application: "Tarification relative irrésistible et onboarding fondé sur la norme sociale du gratuit sans carte bancaire."
      },
      {
        id: "thaler",
        name: "Richard Thaler & Cass Sunstein",
        work: "Nudge : La méthode douce pour inspirer la bonne décision",
        badge: "Prix Nobel d'Économie",
        icon: "🎯",
        color: "emerald",
        coreConcept: "L'Architecture des Choix & le Paternalisme Libertarien : Options par défaut optimales, incitations bienveillantes sans contrainte.",
        application: "Préréglage par défaut du rythme d'accompagnement sans friction, respectant la liberté de l'utilisateur."
      },
      {
        id: "eyal",
        name: "Nir Eyal",
        work: "Hooked : Comment créer des produits qui créent des habitudes",
        badge: "Habit-Forming Products",
        icon: "🔄",
        color: "amber",
        coreConcept: "Le Modèle Hook en 4 étapes : Déclencheur (Trigger) ➔ Action ➔ Récompense Variable ➔ Investissement (Stored Value).",
        application: "Notifications à récompense variable imprévisible et capitalisation de données personnalisées à chaque tâche."
      },
      {
        id: "voss",
        name: "Chris Voss",
        work: "Ne coupez jamais la poire en deux (Never Split the Difference)",
        badge: "Négociateur d'Élite FBI",
        icon: "🤝",
        color: "rose",
        coreConcept: "L'Empathie Tactique : Étiquetage Émotionnel (« Il semble que... »), Ancrage Extrême de Valeur et Questions Calibrées.",
        application: "Désamorcer la culpabilité de la procrastination dans les rappels et ancrer la valeur perçue du service."
      }
    ],

    // MODULE A : ONBOARDING
    moduleA: {
      title: "Module A : Onboarding & Inscription Éthique",
      authorsUsed: ["Thaler (Option par Défaut)", "Ariely (Coût du Gratuit)", "Eyal (Déclencheur Externe)"],
      description: "Convertir dès la 1ère minute en éliminant la barrière monétaire (Ariely), en sélectionnant le rythme optimal par défaut (Thaler) et en amorçant la boucle d'habitude (Eyal).",
      defaultFrequency: "Coach de Clarté (1 point focal à 8h30)",
      freePeriod: "30 jours offerts — Sans carte bancaire requise",
      firstExternalTrigger: "Votre espace est prêt. Quelle est la seule chose importante que vous souhaitez accomplir avant midi ? (Tapez 1 mot)"
    },

    // MODULE B : TO-DO & SYSTÈME 2
    moduleB: {
      title: "Module B : To-Do Délibérative Système 2 & Focus Collectif",
      authorsUsed: ["Kahneman (Système 2)", "Eyal (Investissement)", "Cialdini/Thaler (Preuve Sociale & Rareté)"],
      description: "Transformer les to-do anxiogènes en plans d'action concrets (Kahneman), capitaliser sur l'historique (Eyal) et mobiliser l'énergie collective (Preuve sociale + Rareté).",
      sprintFocus: {
        activeUsers: 342,
        durationMinutes: 90,
        closingInMinutes: 12
      }
    },

    // MODULE C : MOTEUR DE NOTIFICATIONS INTELLIGENTES
    moduleC: {
      title: "Module C : Rétention Empathique & Récompenses Variables",
      authorsUsed: ["Eyal (Récompenses Variables)", "Voss (Étiquetage Émotionnel)"],
      sampleNotifications: [
        {
          id: "notif-1",
          type: "labeling",
          category: "Tâche en souffrance (Chris Voss)",
          title: "Pause clarté",
          body: "Il semble que la tâche « Finaliser le budget » soit devenue pesante ou floue... Voulez-vous la scinder en 2 min ou l'archiver sans culpabilité ?",
          actions: ["Diviser en 2 micro-pas", "Reporter à lundi", "Archiver sans remords"]
        },
        {
          id: "notif-2",
          type: "variable-reward",
          category: "Curiosité & Chasse (Nir Eyal)",
          title: "Un insight vous attend...",
          body: "En analysant vos 5 derniers jours, un schéma surprenant est apparu sur vos heures de pic d'énergie mentale. Venez voir ce que votre rythme révèle.",
          actions: ["Découvrir mon pic d'énergie", "Plus tard"]
        },
        {
          id: "notif-3",
          type: "empathy-reset",
          category: "Empathie d'imprévu (Chris Voss)",
          title: "Journée bousculée ?",
          body: "On dirait que les urgences ont bousculé votre planning aujourd'hui. Respirez : 82% des journées productives commencent après un simple bouton reset.",
          actions: ["Réinitialiser ma journée", "Tout va bien"]
        }
      ]
    },

    // MODULE D : TUNNEL D'ACHAT & EFFET DE LEURRE
    moduleD: {
      title: "Module D : Tunnel d'Achat Éthique & Effet de Leurre",
      authorsUsed: ["Dan Ariely (Effet de Leurre)", "Chris Voss (Ancrage & Question Calibrée)"],
      anchorText: "Un coaching exécutif individuel coûte en moyenne 180 € / heure. Bénéficiez d'un copilote décisionnel quotidien pour l'équivalent d'un café par semaine.",
      calibratedRefusal: "Serait-ce une mauvaise idée de tester la version Pro pendant vos 14 prochains jours sans aucun engagement ?",
      tiers: [
        {
          id: "tier-monthly",
          name: "Mensuel Flexible",
          pricePerMonth: "14,99 €",
          billed: "Sans engagement, résiliable en 1 clic",
          isDecoy: false,
          isBestValue: false,
          badge: "Flexibilité",
          features: ["To-do list délibérative Système 2", "Rappels empathiques quotidiens", "Accès mobile PWA"]
        },
        {
          id: "tier-decoy",
          name: "Annuel Essentiel",
          pricePerMonth: "9,99 €",
          billed: "119,88 € facturés par an",
          isDecoy: true,
          isBestValue: false,
          badge: "Leurre (Asymétrique)",
          features: ["To-do list seule", "SANS module de décision Système 2", "SANS analyses de rythme prédictives", "SANS sprints de focus collectifs"]
        },
        {
          id: "tier-pro",
          name: "Annuel Pro Décision",
          pricePerMonth: "9,99 €",
          billed: "119,88 € facturés par an (5 mois offerts)",
          isDecoy: false,
          isBestValue: true,
          badge: "78% des décideurs",
          features: ["Accès TOTAL illimité", "Module d'activation Système 2", "Moteur de notifications empathiques", "Sprints de focus collectifs", "Toutes les futures mises à jour"]
        }
      ]
    }
  }
};
