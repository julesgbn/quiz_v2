/*
  Quiz Géant V2 - validation manuelle
  Nouveau projet indépendant de la V1.
*/

const API_BASE = "https://script.google.com/macros/s/AKfycbybZO6qWko3hrPhELT49h63TeTbsNEj1FabkhMK-eJv2m6u6UcjZvuFb1Jk9mpUwC5k/exec";

const BLOCKS = [
  {
    "id": 1,
    "type": "classic",
    "questions": [
      {
        "id": "q01",
        "label": "1)",
        "points": 1,
        "text": "Quel est le musée d’art le plus visité au monde ?"
      },
      {
        "id": "q01-a",
        "label": "a)",
        "points": 2,
        "text": "Quel célèbre sculpteur français a un grand nombre de ses œuvres dans ce musée ?"
      },
      {
        "id": "q01-i",
        "label": "i.",
        "points": 3,
        "text": "Rodin a une exposition commune au Louvre, avec un autre sculpteur célèbre, qui est-ce ?"
      },
      {
        "id": "q01-end",
        "label": "–",
        "points": 4,
        "text": "Il existe une autre ville française dans laquelle se trouve un musée du Louvre, laquelle ?"
      }
    ]
  },
  {
    "id": 2,
    "type": "classic",
    "questions": [
      {
        "id": "q02",
        "label": "2)",
        "points": 1,
        "text": "Dans quelle ville est apparu en premier le Covid-19 ?"
      },
      {
        "id": "q02-a",
        "label": "a)",
        "points": 3,
        "text": "À 30 % près, combien de morts dans le monde ont été attribués à ce virus ?"
      },
      {
        "id": "q02-i",
        "label": "i.",
        "points": 2,
        "text": "Citer 3 laboratoires fournisseurs de vaccins de ce virus."
      },
      {
        "id": "q02-end",
        "label": "–",
        "points": 3,
        "text": "Quel roman de Camus raconte une histoire faisant grandement penser à l’épidémie du Covid ?"
      }
    ]
  },
  {
    "id": 3,
    "type": "classic",
    "questions": [
      {
        "id": "q03",
        "label": "3)",
        "points": 1,
        "text": "Citer le pays le plus peuplé d’Amérique du Sud."
      },
      {
        "id": "q03-a",
        "label": "a)",
        "points": 1,
        "text": "Citer le pays le plus peuplé d’Asie."
      },
      {
        "id": "q03-i",
        "label": "i.",
        "points": 2,
        "text": "Citer le pays le plus peuplé d’Afrique."
      },
      {
        "id": "q03-end",
        "label": "–",
        "points": 3,
        "text": "Citer le pays le plus peuplé d’Europe."
      }
    ]
  },
  {
    "id": 4,
    "type": "classic",
    "questions": [
      {
        "id": "q04",
        "label": "4)",
        "points": 1,
        "text": "Lequel de ces évènements a causé le plus de morts : la Première Guerre mondiale, les attentats du 11 septembre, la Peste Noire ?"
      },
      {
        "id": "q04-a",
        "label": "a)",
        "points": 2,
        "text": "Lequel de ces évènements constitue le record d’audience sur une chaîne en France : la finale de la Coupe du monde 2022, la cérémonie d’ouverture des Jeux de Paris, l’allocution du Président annonçant le confinement ?"
      },
      {
        "id": "q04-i",
        "label": "i.",
        "points": 2,
        "text": "Lequel de ces règnes a duré le plus longtemps : Mao Zedong, Louis XIV, Élisabeth II ?"
      },
      {
        "id": "q04-end",
        "label": "–",
        "points": 3,
        "text": "Laquelle de ces œuvres est la plus vendue : Astérix, Lucky Luke, Dragon Ball ?"
      }
    ]
  },
  {
    "id": 5,
    "type": "classic",
    "questions": [
      {
        "id": "q05",
        "label": "5)",
        "points": 2,
        "text": "À 10 ans près, en quelle année éclata l’Affaire Dreyfus ?"
      },
      {
        "id": "q05-a",
        "label": "a)",
        "points": 2,
        "text": "Qui initia la tribune J’accuse… visant à défendre Dreyfus ?"
      },
      {
        "id": "q05-i",
        "label": "i.",
        "points": 3,
        "text": "Dans quel journal est parue cette tribune ?"
      },
      {
        "id": "q05-end",
        "label": "–",
        "points": 5,
        "text": "Dans quelle version de Pokémon le personnage d’Aurore accompagne Sasha ?"
      }
    ]
  },
  {
    "id": 6,
    "type": "multi",
    "title": "Choisis ton thème",
    "themes": [
      {
        "id": "tennis",
        "name": "Tennis",
        "emoji": "🎾",
        "questions": [
          {
            "id": "q06-tennis",
            "label": "1)",
            "points": 2,
            "text": "Comment s’appelle le court central à Roland-Garros ?"
          },
          {
            "id": "q06-tennis-a",
            "label": "a)",
            "points": 2,
            "text": "Quel joueur détient le record de titres à l’Open d’Australie ?"
          },
          {
            "id": "q06-tennis-i",
            "label": "i.",
            "points": 3,
            "text": "Qui est le plus jeune joueur à avoir remporté un Grand Chelem ?"
          },
          {
            "id": "q06-tennis-end",
            "label": "–",
            "points": 4,
            "text": "Qui était surnommé la Tour de Tandil ?"
          }
        ]
      },
      {
        "id": "f1",
        "name": "Formule 1",
        "emoji": "🏎️",
        "questions": [
          {
            "id": "q06-f1",
            "label": "1)",
            "points": 2,
            "text": "Qui sont les deux seuls pilotes à avoir gagné 7 titres de champion du monde ?"
          },
          {
            "id": "q06-f1-a",
            "label": "a)",
            "points": 2,
            "text": "Comment s’appelle le Directeur Sportif de l’équipe Mercedes (en 2026) ?"
          },
          {
            "id": "q06-f1-i",
            "label": "i.",
            "points": 3,
            "text": "Pour quelle équipe pilotait Ayrton Senna lors de son accident mortel en 1994 ?"
          },
          {
            "id": "q06-f1-end",
            "label": "–",
            "points": 4,
            "text": "Lors de quel Grand Prix Jules Bianchi a-t-il eu son accident ?"
          }
        ]
      },
      {
        "id": "football",
        "name": "Football",
        "emoji": "⚽",
        "questions": [
          {
            "id": "q06-foot",
            "label": "1)",
            "points": 1,
            "text": "En quelles années la France a-t-elle gagné la Coupe du monde ?"
          },
          {
            "id": "q06-foot-a",
            "label": "a)",
            "points": 2,
            "text": "Quelle équipe a remporté le plus de championnats d’Italie ?"
          },
          {
            "id": "q06-foot-i",
            "label": "i.",
            "points": 3,
            "text": "Citer 4 clubs de Buenos Aires."
          },
          {
            "id": "q06-foot-end",
            "label": "–",
            "points": 3,
            "text": "Comment s’appelle le stade dans lequel joue Brest ?"
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "type": "classic",
    "questions": [
      {
        "id": "q07",
        "label": "7)",
        "points": 4,
        "text": "Qui a tué le président américain JF Kennedy ?"
      },
      {
        "id": "q07-a",
        "label": "a)",
        "points": 4,
        "text": "Qui a tué Henri IV ?"
      },
      {
        "id": "q07-i",
        "label": "i.",
        "points": 5,
        "text": "Qui a commandité l’assassinat de Sharon Tate ?"
      },
      {
        "id": "q07-end",
        "label": "–",
        "points": 5,
        "text": "Qui a tué Marat, personnage de la Révolution Française ?"
      }
    ]
  },
  {
    "id": 8,
    "type": "classic",
    "questions": [
      {
        "id": "q08",
        "label": "8)",
        "points": 2,
        "text": "Citer 3 membres des Beatles."
      },
      {
        "id": "q08-a",
        "label": "a)",
        "points": 2,
        "text": "Quel est l’album de musique le plus vendu de tous les temps ?"
      },
      {
        "id": "q08-i",
        "label": "i.",
        "points": 3,
        "text": "En quelle année est mort Michael Jackson ?"
      },
      {
        "id": "q08-end",
        "label": "–",
        "points": 3,
        "text": "En 2009 apparaît la grippe H1N1, classée pandémie mondiale, dans quel pays a-t-elle fait son apparition ?"
      }
    ]
  },
  {
    "id": 9,
    "type": "classic",
    "questions": [
      {
        "id": "q09",
        "label": "9)",
        "points": 1,
        "text": "Comment s’appelle le présentateur historique de Koh-Lanta ?"
      },
      {
        "id": "q09-a",
        "label": "a)",
        "points": 2,
        "text": "Sur quelle épreuve mythique les 5 derniers aventuriers s’affrontent pour se qualifier à l’épreuve des poteaux ?"
      },
      {
        "id": "q09-i",
        "label": "i.",
        "points": 2,
        "text": "Comment s’appelle ce célèbre joueur tahitien, ayant participé plusieurs fois à l’émission ?"
      },
      {
        "id": "q09-end",
        "label": "–",
        "points": 3,
        "text": "Quelle est la capitale de la Polynésie française ?"
      }
    ]
  },
  {
    "id": 10,
    "type": "classic",
    "questions": [
      {
        "id": "q10",
        "label": "10)",
        "points": 1,
        "text": "Comment s’appelle le chien de Tintin ?"
      },
      {
        "id": "q10-a",
        "label": "a)",
        "points": 2,
        "text": "Comment s’appelle le cheval de Lucky Luke ?"
      },
      {
        "id": "q10-i",
        "label": "i.",
        "points": 3,
        "text": "Comment s’appelle le chat de Gargamel ?"
      },
      {
        "id": "q10-end",
        "label": "–",
        "points": 4,
        "text": "Comment s’appelle l’écureuil de Spirou ?"
      }
    ]
  },
  {
    "id": 11,
    "type": "classic",
    "questions": [
      {
        "id": "q11",
        "label": "11)",
        "points": 2,
        "text": "Qui est Satoshi Nakamoto ?"
      },
      {
        "id": "q11-a",
        "label": "a)",
        "points": 3,
        "text": "Quel est le premier pays à avoir adopté le Bitcoin comme monnaie nationale ?"
      },
      {
        "id": "q11-i",
        "label": "i.",
        "points": 3,
        "text": "Quelle était la monnaie nationale italienne avant l’adoption de l’euro ?"
      },
      {
        "id": "q11-end",
        "label": "–",
        "points": 4,
        "text": "Quel héros est considéré comme l’unificateur de l’Italie ?"
      }
    ]
  },
  {
    "id": 12,
    "type": "multi",
    "title": "Choisis ton thème",
    "themes": [
      {
        "id": "romans",
        "name": "Romans",
        "emoji": "📚",
        "questions": [
          {
            "id": "q12-romans",
            "label": "1)",
            "points": 1,
            "text": "Comment s’appelle ce célèbre auteur de romans d’épouvante tels que Shining, Ça, ou La Ligne Verte ?"
          },
          {
            "id": "q12-romans-a",
            "label": "a)",
            "points": 2,
            "text": "Comment s’appelle le personnage principal du roman Les Misérables de Victor Hugo ?"
          },
          {
            "id": "q12-romans-i",
            "label": "i.",
            "points": 3,
            "text": "Dans La Ferme des Animaux de George Orwell, quelle espèce animale se prend à diriger la ferme ?"
          },
          {
            "id": "q12-romans-end",
            "label": "–",
            "points": 3,
            "text": "Quels sont les noms de famille de Roméo et Juliette ?"
          }
        ]
      },
      {
        "id": "bd",
        "name": "Bandes dessinées",
        "emoji": "💥",
        "questions": [
          {
            "id": "q12-bd",
            "label": "1)",
            "points": 1,
            "text": "Qui est le célèbre auteur de fictions Marvel telles que Spider-Man, Thor, Hulk, Daredevil, etc. ?"
          },
          {
            "id": "q12-bd-a",
            "label": "a)",
            "points": 2,
            "text": "Quelle est la nourriture préférée du personnage Garfield ?"
          },
          {
            "id": "q12-bd-i",
            "label": "i.",
            "points": 3,
            "text": "Parmi ces 4 albums de Tintin, lequel n’existe pas ? Les Cigares du Pharaon, L’Etoile Mystérieuse, Opération Tournesol, Le Temple du soleil."
          },
          {
            "id": "q12-bd-end",
            "label": "–",
            "points": 4,
            "text": "Qui est l’auteur de la bande dessinée Maus ?"
          }
        ]
      },
      {
        "id": "mangas",
        "name": "Mangas",
        "emoji": "🍥",
        "questions": [
          {
            "id": "q12-mangas",
            "label": "1)",
            "points": 2,
            "text": "Qui est l’auteur de Dragon Ball ?"
          },
          {
            "id": "q12-mangas-a",
            "label": "a)",
            "points": 2,
            "text": "Dans Hunter x Hunter, comment s’appelle le clan dont le leader est Kuroro ? Ce clan est aussi appelé l’Araignée."
          },
          {
            "id": "q12-mangas-i",
            "label": "i.",
            "points": 3,
            "text": "Citer les 10 membres de l’Akatsuki du manga Naruto."
          },
          {
            "id": "q12-mangas-end",
            "label": "–",
            "points": 4,
            "text": "Comment s’appellent les trois murs dans lesquels est enfermée l’Humanité dans l’Attaque des Titans ?"
          }
        ]
      }
    ]
  },
  {
    "id": 13,
    "type": "classic",
    "questions": [
      {
        "id": "q13",
        "label": "13)",
        "points": 2,
        "text": "Citer un pays ayant une arme sur son drapeau."
      },
      {
        "id": "q13-a",
        "label": "a)",
        "points": 2,
        "text": "Citer un pays ayant un dragon sur son drapeau."
      },
      {
        "id": "q13-i",
        "label": "i.",
        "points": 3,
        "text": "Citer un pays ayant la forme du pays en question sur son drapeau."
      },
      {
        "id": "q13-end",
        "label": "–",
        "points": 4,
        "text": "Citer un pays ayant des humains sur son drapeau."
      }
    ]
  },
  {
    "id": 14,
    "type": "classic",
    "questions": [
      {
        "id": "q14",
        "label": "14)",
        "points": 2,
        "text": "Quel général français fut un grand acteur de la guerre d’indépendance Américaine des années 1770 ?"
      },
      {
        "id": "q14-a",
        "label": "a)",
        "points": 2,
        "text": "Qui fut avec Robespierre, l’un des grands personnages de la Révolution Française ?"
      },
      {
        "id": "q14-i",
        "label": "i.",
        "points": 3,
        "text": "De quelle nationalité était Marie-Antoinette avant de se marier à Louis XVI ?"
      },
      {
        "id": "q14-end",
        "label": "–",
        "points": 5,
        "text": "Député du Tiers-Etat, il fut la première personne inhumée au Panthéon, qui était-ce ?"
      }
    ]
  },
  {
    "id": 15,
    "type": "classic",
    "questions": [
      {
        "id": "q15",
        "label": "15)",
        "points": 1,
        "text": "Lequel de ces films a remporté le César du meilleur film : Les choristes, Intouchables, Le fabuleux destin d’Amélie Poulain, Bac nord ?"
      },
      {
        "id": "q15-a",
        "label": "a)",
        "points": 2,
        "text": "À cinquante ans près, en quelle année est né Jules César ?"
      },
      {
        "id": "q15-i",
        "label": "i.",
        "points": 3,
        "text": "C’est en franchissant quel fleuve que César déclencha une guerre civile l’opposant à Pompée ?"
      },
      {
        "id": "q15-end",
        "label": "–",
        "points": 3,
        "text": "Auguste, premier empereur romain, était le fils adoptif de César, quel était son nom de jeunesse ?"
      }
    ]
  },
  {
    "id": 16,
    "type": "classic",
    "questions": [
      {
        "id": "q16",
        "label": "16)",
        "points": 1,
        "text": "De quelle langue vient le mot Tsunami ?"
      },
      {
        "id": "q16-a",
        "label": "a)",
        "points": 1,
        "text": "De quelle langue vient le mot Aquarium ?"
      },
      {
        "id": "q16-i",
        "label": "i.",
        "points": 2,
        "text": "De quelle langue vient le mot Zénith ?"
      },
      {
        "id": "q16-end",
        "label": "–",
        "points": 3,
        "text": "De quelle langue vient le mot Safari ?"
      }
    ]
  },
  {
    "id": 17,
    "type": "classic",
    "questions": [
      {
        "id": "q17",
        "label": "17)",
        "points": 2,
        "text": "En quelle année a démarré le mouvement des Gilets Jaunes ?"
      },
      {
        "id": "q17-a",
        "label": "a)",
        "points": 2,
        "text": "Que signifie RIC ?"
      },
      {
        "id": "q17-i",
        "label": "i.",
        "points": 3,
        "text": "Citer tous les Premiers ministres des quinquennats Macron."
      },
      {
        "id": "q17-end",
        "label": "–",
        "points": 4,
        "text": "De quelle ville François Bayrou est-il le maire historique ?"
      }
    ]
  },
  {
    "id": 18,
    "type": "classic",
    "questions": [
      {
        "id": "q18",
        "label": "18)",
        "points": 1,
        "text": "Quel sport est le thème du film Brice de Nice ?"
      },
      {
        "id": "q18-a",
        "label": "a)",
        "points": 1,
        "text": "Quel sport est le thème du film Space Jam ?"
      },
      {
        "id": "q18-i",
        "label": "i.",
        "points": 2,
        "text": "Quel sport est le thème du film Rasta Rockett ?"
      },
      {
        "id": "q18-end",
        "label": "–",
        "points": 4,
        "text": "Quel sport est le thème du film Les Triplettes de Belleville ?"
      }
    ]
  },
  {
    "id": 19,
    "type": "classic",
    "questions": [
      {
        "id": "q19",
        "label": "19)",
        "points": 1,
        "text": "Comment s’appelle le seul porte-avions français actuellement en activité ?"
      },
      {
        "id": "q19-a",
        "label": "a)",
        "points": 2,
        "text": "En quelle année Charles de Gaulle a-t-il enregistré l’appel du 18 juin ?"
      },
      {
        "id": "q19-i",
        "label": "i.",
        "points": 4,
        "text": "Dans quelle ville vivait Charles de Gaulle ?"
      },
      {
        "id": "q19-end",
        "label": "–",
        "points": 5,
        "text": "Comment appelle-t-on l’attentat dont il fut rescapé en 1962 ?"
      }
    ]
  },
  {
    "id": 20,
    "type": "classic",
    "questions": [
      {
        "id": "q20",
        "label": "20)",
        "points": 2,
        "text": "Quel pays détient le record du nombre de Coupe du monde de Rugby remportées ?"
      },
      {
        "id": "q20-a",
        "label": "a)",
        "points": 2,
        "text": "Combien de temps Nelson Mandela fut-il incarcéré avant de devenir président de l’Afrique du Sud ? 7 ans, 17 ans, 27 ans, 37 ans."
      },
      {
        "id": "q20-i",
        "label": "i.",
        "points": 2,
        "text": "Comment s’appelle le film mettant en scène l’équipe d’Afrique du Sud de Rugby et Nelson Mandela en l’année 1995 ?"
      },
      {
        "id": "q20-end",
        "label": "–",
        "points": 3,
        "text": "Qui a réalisé ce film ?"
      }
    ]
  },
  {
    "id": 21,
    "type": "multi",
    "title": "Choisis ton thème",
    "themes": [
      {
        "id": "amerique-sud",
        "name": "Amérique du Sud",
        "emoji": "🌎",
        "questions": [
          {
            "id": "q21-amerique-sud",
            "label": "1)",
            "points": 1,
            "text": "Quel pays sud-américain tient son nom d’un célèbre navigateur ?"
          },
          {
            "id": "q21-amerique-sud-a",
            "label": "a)",
            "points": 2,
            "text": "De quel pays parle-t-on lorsqu’on évoque la pampa ?"
          },
          {
            "id": "q21-amerique-sud-i",
            "label": "i.",
            "points": 4,
            "text": "De quel pays est originaire celui qu’on surnomme El Libertador, Simon Bolivar ?"
          },
          {
            "id": "q21-amerique-sud-end",
            "label": "–",
            "points": 4,
            "text": "Quelle est la capitale du Paraguay ?"
          }
        ]
      },
      {
        "id": "afrique",
        "name": "Afrique",
        "emoji": "🌍",
        "questions": [
          {
            "id": "q21-afrique",
            "label": "1)",
            "points": 1,
            "text": "Quel est le plus haut sommet d’Afrique ?"
          },
          {
            "id": "q21-afrique-a",
            "label": "a)",
            "points": 2,
            "text": "À quel pays est rattachée l’île de Zanzibar ?"
          },
          {
            "id": "q21-afrique-i",
            "label": "i.",
            "points": 3,
            "text": "De quelle nationalité était Thomas Sankara ?"
          },
          {
            "id": "q21-afrique-end",
            "label": "–",
            "points": 4,
            "text": "Quelle est la capitale de l’Erythrée ?"
          }
        ]
      },
      {
        "id": "asie",
        "name": "Asie",
        "emoji": "🌏",
        "questions": [
          {
            "id": "q21-asie",
            "label": "1)",
            "points": 1,
            "text": "À quel pays rattache-t-on aujourd’hui l’empire de Genghis Khan ?"
          },
          {
            "id": "q21-asie-a",
            "label": "a)",
            "points": 2,
            "text": "Macao, ville chinoise, est une ancienne colonie de quel pays ?"
          },
          {
            "id": "q21-asie-i",
            "label": "i.",
            "points": 3,
            "text": "Qui est considéré comme le héros de l’indépendance Vietnamienne ?"
          },
          {
            "id": "q21-asie-end",
            "label": "–",
            "points": 4,
            "text": "Quelle est la capitale du Laos ?"
          }
        ]
      }
    ]
  },
  {
    "id": 22,
    "type": "classic",
    "questions": [
      {
        "id": "q22",
        "label": "22)",
        "points": 1,
        "text": "Dans quelle ville se déroule le roman Au Bonheur des Dames d’Émile Zola ?"
      },
      {
        "id": "q22-a",
        "label": "a)",
        "points": 2,
        "text": "Dans quelle ville se déroule le roman L’Étranger d’Albert Camus ?"
      },
      {
        "id": "q22-i",
        "label": "i.",
        "points": 3,
        "text": "Dans quelle ville se déroule le roman L’Attrape-Cœurs de Salinger ?"
      },
      {
        "id": "q22-end",
        "label": "–",
        "points": 5,
        "text": "Dans quelle ville fictive se déroule le roman Madame Bovary de Flaubert ?"
      }
    ]
  },
  {
    "id": 23,
    "type": "classic",
    "questions": [
      {
        "id": "q23",
        "label": "23)",
        "points": 1,
        "text": "Qui est le premier roi de France (roi des Francs) ?"
      },
      {
        "id": "q23-a",
        "label": "a)",
        "points": 2,
        "text": "De quelle dynastie fait-il partie ?"
      },
      {
        "id": "q23-i",
        "label": "i.",
        "points": 3,
        "text": "Comment s’appelle le vase qu’on associe à une célèbre victoire de Clovis ?"
      },
      {
        "id": "q23-end",
        "label": "–",
        "points": 5,
        "text": "Comment s’appelle son petit-fils, qui a refusé la royauté pour devenir ermite ?"
      }
    ]
  },
  {
    "id": 24,
    "type": "classic",
    "questions": [
      {
        "id": "q24",
        "label": "24)",
        "points": 2,
        "text": "Quels sont les nom et prénom de Johnny Hallyday ?"
      },
      {
        "id": "q24-a",
        "label": "a)",
        "points": 3,
        "text": "Quels sont les nom et prénom du Che ?"
      },
      {
        "id": "q24-i",
        "label": "i.",
        "points": 4,
        "text": "Quels sont les nom et prénom de Molière ?"
      },
      {
        "id": "q24-end",
        "label": "–",
        "points": 5,
        "text": "Quels sont les nom et prénom de Lénine ?"
      }
    ]
  },
  {
    "id": 25,
    "type": "classic",
    "questions": [
      {
        "id": "q25",
        "label": "25)",
        "points": 2,
        "text": "Comment s’appelle le traité ayant mis fin à la Première Guerre Mondiale ?"
      },
      {
        "id": "q25-a",
        "label": "a)",
        "points": 2,
        "text": "Comment s’appelle le traité actant la création de l’UE telle qu’on la connaît aujourd’hui ?"
      },
      {
        "id": "q25-i",
        "label": "i.",
        "points": 3,
        "text": "Comment s’appellent les accords ayant mis fin à la Guerre d’Algérie ?"
      },
      {
        "id": "q25-end",
        "label": "–",
        "points": 4,
        "text": "Comment s’appellent les accords qui ont tenté de mettre fin au conflit Israélo-Palestinien en 1993 ?"
      }
    ]
  },
  {
    "id": 26,
    "type": "multi",
    "title": "Choisis ton thème",
    "themes": [
      {
        "id": "harry-potter",
        "name": "Harry Potter",
        "emoji": "🪄",
        "questions": [
          {
            "id": "q26-harry-potter",
            "label": "1)",
            "points": 2,
            "text": "Quel est le vrai nom de Voldemort ?"
          },
          {
            "id": "q26-harry-potter-a",
            "label": "a)",
            "points": 3,
            "text": "Qui est le prince de Sang-Mêlé ?"
          },
          {
            "id": "q26-harry-potter-i",
            "label": "i.",
            "points": 3,
            "text": "Comment s’appelle la ville à côté de Poudlard dans laquelle peuvent se rendre les élèves de l’école ?"
          },
          {
            "id": "q26-harry-potter-end",
            "label": "–",
            "points": 4,
            "text": "Citer les 7 horcruxes de Voldemort."
          }
        ]
      },
      {
        "id": "star-wars",
        "name": "Star Wars",
        "emoji": "⭐",
        "questions": [
          {
            "id": "q26-star-wars",
            "label": "1)",
            "points": 2,
            "text": "Quel est le nom de famille d’Obi-Wan ?"
          },
          {
            "id": "q26-star-wars-a",
            "label": "a)",
            "points": 2,
            "text": "De quelle planète est originaire Padmé ?"
          },
          {
            "id": "q26-star-wars-i",
            "label": "i.",
            "points": 3,
            "text": "Qui est le rival d’Anakin lors de la course de module du film La Menace Fantôme ?"
          },
          {
            "id": "q26-star-wars-end",
            "label": "–",
            "points": 4,
            "text": "Sur quelle planète les clones ont-ils été créés ?"
          }
        ]
      },
      {
        "id": "pirates",
        "name": "Pirates des Caraïbes",
        "emoji": "🏴‍☠️",
        "questions": [
          {
            "id": "q26-pirates",
            "label": "1)",
            "points": 2,
            "text": "Quel est le nom de famille d’Elisabeth ?"
          },
          {
            "id": "q26-pirates-a",
            "label": "a)",
            "points": 2,
            "text": "Comment s’appelle le bateau de Davy Jones ?"
          },
          {
            "id": "q26-pirates-i",
            "label": "i.",
            "points": 3,
            "text": "Quel est le nom de l’île sur laquelle Jack Sparrow se rend pour recruter des matelots ?"
          },
          {
            "id": "q26-pirates-end",
            "label": "–",
            "points": 3,
            "text": "Comment s’appelle le père de Will Turner ?"
          }
        ]
      }
    ]
  },
  {
    "id": 27,
    "type": "classic",
    "questions": [
      {
        "id": "q27",
        "label": "27)",
        "points": 2,
        "text": "Quel nom a été donné au projet scientifique international ayant pour but de développer la fusion nucléaire à grande échelle ?"
      },
      {
        "id": "q27-a",
        "label": "a)",
        "points": 3,
        "text": "Quel scientifique donne son nom au tableau périodique des éléments ?"
      },
      {
        "id": "q27-i",
        "label": "i.",
        "points": 3,
        "text": "Citer les deux premiers atomes de ce tableau."
      },
      {
        "id": "q27-end",
        "label": "–",
        "points": 5,
        "text": "Quels sont les deux isotopes de l’atome d’hydrogène utilisés pour la fusion nucléaire ?"
      }
    ]
  },
  {
    "id": 28,
    "type": "classic",
    "questions": [
      {
        "id": "q28",
        "label": "28)",
        "points": 1,
        "text": "Quel est le pays d’origine de Numérobis ?"
      },
      {
        "id": "q28-a",
        "label": "a)",
        "points": 2,
        "text": "Quel est le pays d’origine de Mowgli ?"
      },
      {
        "id": "q28-i",
        "label": "i.",
        "points": 3,
        "text": "Quel est le pays d’origine de Viktor Krum ?"
      },
      {
        "id": "q28-end",
        "label": "–",
        "points": 4,
        "text": "Quel est le pays d’origine de Borat ?"
      }
    ]
  },
  {
    "id": 29,
    "type": "classic",
    "questions": [
      {
        "id": "q29",
        "label": "29)",
        "points": 1,
        "text": "Comment s’appelle l’actuel président de l’Ukraine (années 2020) ?"
      },
      {
        "id": "q29-a",
        "label": "a)",
        "points": 4,
        "text": "À quoi est-ce que je fais référence lorsque je parle de la ville ukrainienne de Pripiat ?"
      },
      {
        "id": "q29-i",
        "label": "i.",
        "points": 3,
        "text": "À 5 ans près, en quelle année s’est déroulé l’accident de Tchernobyl ?"
      },
      {
        "id": "q29-end",
        "label": "–",
        "points": 4,
        "text": "Quels étaient les noms donnés par les USA aux deux bombes atomiques envoyées sur le Japon en 1945 ?"
      }
    ]
  },
  {
    "id": 30,
    "type": "classic",
    "questions": [
      {
        "id": "q30",
        "label": "30)",
        "points": 1,
        "text": "Quelles sont les deux villes qui accueillent un musée Guggenheim ?"
      },
      {
        "id": "q30-a",
        "label": "a)",
        "points": 2,
        "text": "Comment s’appelle ce fleuve long de 500 km qui se jette dans la ville de New York ?"
      },
      {
        "id": "q30-i",
        "label": "i.",
        "points": 3,
        "text": "Quel était le précédent nom de la ville ?"
      },
      {
        "id": "q30-end",
        "label": "–",
        "points": 5,
        "text": "Comment s’appelait le bateau transportant les dissidents anglais, pionniers de la civilisation étasunienne ?"
      }
    ]
  }
];

const TOTAL_BLOCKS = BLOCKS.length;

const $ = (id) => document.getElementById(id);

const screenStart = $("screen-start");
const screenQuiz = $("screen-quiz");
const screenEnd = $("screen-end");
const nameInput = $("nameInput");
const startError = $("startError");
const progressEl = $("progress");
const scoreEl = $("score");
const kickerEl = $("kicker");
const questionTextEl = $("questionText");
const questionPointsEl = $("questionPoints");
const questionStatsEl = $("questionStats");
const themeChoicesEl = $("themeChoices");
const answerControlsEl = $("answerControls");
const btnStart = $("btnStart");
const btnRight = $("btnRight");
const btnWrong = $("btnWrong");
const btnUndo = $("btnUndo");
const btnQuit = $("btnQuit");
const finalScoreEl = $("finalScore");
const leaderboardStatusEl = $("leaderboardStatus");
const leaderboardEl = $("leaderboard");
const btnRestart = $("btnRestart");

let playerName = "";
let score = 0;
let blockIndex = 0;
let levelIndex = 0;
let selectedThemeId = null;
let selectedTheme = null;
let startedAt = null;
let history = [];
let questionStats = {};
let themeStats = {};

function normalizeName(s) {
  return (s || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function show(screen) {
  screenStart.classList.add("hidden");
  screenQuiz.classList.add("hidden");
  screenEnd.classList.add("hidden");
  screen.classList.remove("hidden");
}

function currentBlock() {
  if (blockIndex >= TOTAL_BLOCKS) return null;
  return BLOCKS[blockIndex];
}

function currentQuestions() {
  const block = currentBlock();
  if (!block) return [];
  if (block.type === "multi") {
    return selectedTheme ? selectedTheme.questions : [];
  }
  return block.questions;
}

function currentItem() {
  const questions = currentQuestions();
  return questions[levelIndex] || null;
}

function isThemeChoiceStep() {
  const block = currentBlock();
  return block && block.type === "multi" && !selectedTheme;
}

function updateHeader() {
  const blockNo = Math.min(blockIndex + 1, TOTAL_BLOCKS);
  if (blockIndex >= TOTAL_BLOCKS) {
    progressEl.textContent = "Fin";
  } else if (isThemeChoiceStep()) {
    progressEl.textContent = `Bloc ${blockNo}/${TOTAL_BLOCKS} · Thème`;
  } else {
    const item = currentItem();
    progressEl.textContent = `Bloc ${blockNo}/${TOTAL_BLOCKS} · ${item ? item.label : ""}`;
  }
  scoreEl.textContent = `Score : ${score}`;
}

function statText(stat, emptyText) {
  if (stat && stat.attempts > 0) return `Réussite : ${stat.rate}% (${stat.success}/${stat.attempts})`;
  return emptyText || "Réussite : pas encore de données";
}

function selectionText(blockId, themeId) {
  const key = `b${blockId}-${themeId}`;
  const s = themeStats.selections && themeStats.selections[key];
  const total = themeStats.players || 0;
  if (!s || !total) return "Choisi : pas encore de données";
  const rate = Math.round((s.count / total) * 100);
  return `Choisi : ${rate}% (${s.count}/${total})`;
}

function themeSuccessText(blockId, themeId) {
  const key = `b${blockId}-${themeId}`;
  const s = themeStats.success && themeStats.success[key];
  return statText(s, "Réussite : pas encore de données");
}

function clearQuizUI() {
  themeChoicesEl.innerHTML = "";
  themeChoicesEl.classList.add("hidden");
  answerControlsEl.classList.remove("hidden");
  questionStatsEl.textContent = "";
}

function renderThemeChoice() {
  const block = currentBlock();
  clearQuizUI();
  answerControlsEl.classList.add("hidden");
  themeChoicesEl.classList.remove("hidden");

  kickerEl.textContent = `Bloc ${block.id} · Choix du thème`;
  questionTextEl.textContent = block.title || "Choisis ton thème";
  questionPointsEl.textContent = "";

  for (const theme of block.themes) {
    const card = document.createElement("div");
    card.className = "theme-card";

    const title = document.createElement("div");
    title.className = "theme-title";
    title.textContent = `${theme.emoji || ""} ${theme.name}`;

    const selection = document.createElement("div");
    selection.className = "theme-stat";
    selection.textContent = selectionText(block.id, theme.id);

    const success = document.createElement("div");
    success.className = "theme-stat";
    success.textContent = themeSuccessText(block.id, theme.id);

    const btn = document.createElement("button");
    btn.className = "btn primary";
    btn.textContent = "Choisir";
    btn.addEventListener("click", () => chooseTheme(theme));

    card.appendChild(title);
    card.appendChild(selection);
    card.appendChild(success);
    card.appendChild(btn);
    themeChoicesEl.appendChild(card);
  }

  btnUndo.disabled = history.length === 0;
  updateHeader();
}

function renderQuestion() {
  if (blockIndex >= TOTAL_BLOCKS) return;
  if (isThemeChoiceStep()) {
    renderThemeChoice();
    return;
  }

  clearQuizUI();
  const block = currentBlock();
  const item = currentItem();
  if (!item) return;

  const themeLabel = selectedTheme ? ` · ${selectedTheme.name}` : "";
  kickerEl.textContent = `Bloc ${block.id} · ${item.label}${themeLabel}`;
  questionTextEl.textContent = item.text;
  questionPointsEl.textContent = `${item.points} point${item.points > 1 ? "s" : ""}`;
  questionStatsEl.textContent = statText(questionStats[item.id]);

  btnUndo.disabled = history.length === 0;
  updateHeader();
}

function snapshot(actionType) {
  return {
    prevBlockIndex: blockIndex,
    prevLevelIndex: levelIndex,
    prevScore: score,
    prevSelectedThemeId: selectedThemeId,
    actionType
  };
}

function moveToNextBlock() {
  blockIndex += 1;
  levelIndex = 0;
  selectedThemeId = null;
  selectedTheme = null;
}

function chooseTheme(theme) {
  const block = currentBlock();
  const prev = snapshot("theme");
  prev.themeSelection = { blockId: block.id, themeId: theme.id, themeName: theme.name };
  history.push(prev);

  selectedThemeId = theme.id;
  selectedTheme = theme;
  levelIndex = 0;
  renderQuestion();
}

function registerAnswer(correct) {
  const item = currentItem();
  const block = currentBlock();
  if (!item || !block) return;

  const prev = snapshot(correct ? "right" : "wrong");
  prev.answer = {
    questionId: item.id,
    blockId: block.id,
    level: levelIndex,
    points: item.points,
    correct,
    themeId: selectedTheme ? selectedTheme.id : null,
    themeName: selectedTheme ? selectedTheme.name : null
  };

  if (correct) score += item.points;

  if (correct && levelIndex < currentQuestions().length - 1) {
    levelIndex += 1;
  } else {
    moveToNextBlock();
  }

  history.push(prev);

  if (blockIndex >= TOTAL_BLOCKS) finishQuiz();
  else renderQuestion();
}

function undo() {
  const last = history.pop();
  if (!last) return;
  blockIndex = last.prevBlockIndex;
  levelIndex = last.prevLevelIndex;
  score = last.prevScore;
  selectedThemeId = last.prevSelectedThemeId;

  const block = currentBlock();
  selectedTheme = null;
  if (block && block.type === "multi" && selectedThemeId) {
    selectedTheme = block.themes.find(t => t.id === selectedThemeId) || null;
  }

  show(screenQuiz);
  renderQuestion();
}

function quit() {
  if (!confirm("Quitter le quiz ? Ton score ne sera pas enregistré.")) return;
  resetAll();
}

function resetAll() {
  playerName = "";
  score = 0;
  blockIndex = 0;
  levelIndex = 0;
  selectedThemeId = null;
  selectedTheme = null;
  history = [];
  startedAt = null;
  leaderboardEl.innerHTML = "";
  leaderboardStatusEl.textContent = "";
  startError.textContent = "";
  nameInput.value = "";
  questionStats = {};
  themeStats = {};
  updateHeader();
  show(screenStart);
}

async function apiGet(action, params = {}) {
  const url = new URL(API_BASE);
  url.searchParams.set("action", action);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), { method: "GET", cache: "no-store" });
  const json = await res.json();
  if (!json.ok && json.error) throw new Error(json.error);
  return json;
}

async function apiPost(action, payload = {}) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, ...payload })
  });
  const json = await res.json();
  if (!json.ok && json.error) {
    const err = new Error(json.error);
    err.status = json.status;
    throw err;
  }
  return json;
}

async function loadStats() {
  if (!API_BASE || API_BASE.includes("PASTE_YOUR")) {
    questionStats = {};
    themeStats = {};
    return;
  }
  try {
    const data = await apiGet("stats");
    questionStats = data.questions || {};
    themeStats = data.themes || {};
  } catch (e) {
    console.warn("Stats indisponibles", e);
    questionStats = {};
    themeStats = {};
  }
}

function renderLeaderboard(entries) {
  leaderboardEl.innerHTML = "";
  for (const e of entries) {
    const li = document.createElement("li");
    const row = document.createElement("div");
    row.className = "lbRow";
    const name = document.createElement("span");
    name.className = "lbName";
    name.textContent = e.name;
    const sc = document.createElement("span");
    sc.className = "lbScore";
    sc.textContent = `${e.score}`;
    row.appendChild(name);
    row.appendChild(sc);
    li.appendChild(row);
    leaderboardEl.appendChild(li);
  }
}

async function checkNameAvailable(name) {
  const norm = normalizeName(name);
  if (!norm) return { ok: false, msg: "Entre un prénom." };
  if (!API_BASE || API_BASE.includes("PASTE_YOUR")) return { ok: true, msg: "" };
  try {
    const data = await apiGet("leaderboard");
    const names = new Set((data.entries || []).map(e => normalizeName(e.name)));
    if (names.has(norm)) return { ok: false, msg: "Prénom déjà utilisé." };
    return { ok: true, msg: "" };
  } catch (e) {
    return { ok: false, msg: `Impossible de vérifier le prénom (${e.message}).` };
  }
}

async function start() {
  startError.textContent = "";
  const name = nameInput.value.trim();
  const check = await checkNameAvailable(name);
  if (!check.ok) {
    startError.textContent = check.msg;
    return;
  }

  playerName = name;
  startedAt = new Date().toISOString();
  score = 0;
  blockIndex = 0;
  levelIndex = 0;
  selectedThemeId = null;
  selectedTheme = null;
  history = [];

  show(screenQuiz);
  await loadStats();
  renderQuestion();
}

function getAnswers() {
  return history.filter(h => h.answer).map(h => h.answer);
}

function getThemeSelections() {
  return history.filter(h => h.themeSelection).map(h => h.themeSelection);
}

async function finishQuiz() {
  finalScoreEl.textContent = `${score}`;
  show(screenEnd);
  leaderboardStatusEl.textContent = "Enregistrement du score…";
  leaderboardEl.innerHTML = "";

  const payload = {
    name: playerName,
    score,
    startedAt,
    finishedAt: new Date().toISOString(),
    details: {
      blocks: TOTAL_BLOCKS,
      answers: getAnswers(),
      themeSelections: getThemeSelections(),
      userAgent: navigator.userAgent
    }
  };

  if (!API_BASE || API_BASE.includes("PASTE_YOUR")) {
    leaderboardStatusEl.textContent = "Mode local : score non enregistré.";
    return;
  }

  try {
    const data = await apiPost("submitScore", payload);
    leaderboardStatusEl.textContent = data.message || "Score enregistré.";
    renderLeaderboard(data.entries || []);
  } catch (e) {
    leaderboardStatusEl.textContent = `Erreur: ${e.message}`;
    try {
      const lb = await apiGet("leaderboard");
      renderLeaderboard(lb.entries || []);
    } catch (_) {}
  }
  updateHeader();
}

btnStart.addEventListener("click", start);
nameInput.addEventListener("keydown", (e) => { if (e.key === "Enter") start(); });
btnRight.addEventListener("click", () => registerAnswer(true));
btnWrong.addEventListener("click", () => registerAnswer(false));
btnUndo.addEventListener("click", undo);
btnQuit.addEventListener("click", quit);
btnRestart.addEventListener("click", resetAll);

updateHeader();
show(screenStart);
