import { z } from "zod";
import { servicePageSchema, type ServicePage } from "@/lib/content/schemas";
import type { Locale } from "@/i18n/routing";

// Page copy for each service, keyed by service id and language. Each page
// targets the keyword given for it in SEO.md.
export const servicePages: Record<string, Record<Locale, ServicePage>> = z
  .record(z.string(), z.object({ es: servicePageSchema, ca: servicePageSchema, fr: servicePageSchema }))
  .parse({
  "interiorismo": {
    "es": {
      "h1": "Interiorismo en la Cerdanya",
      "description": "Interiorismo y mobiliario a medida para chalets y casas de piedra en la Cerdanya: carpintería, muebles, tejidos y arte, elegidos para durar.",
      "intro": "Diseñamos el interior completo de la casa, de la distribución al último cojín. Trabajamos con pocos materiales, a la vista, y hacemos a medida lo que no existe en catálogo.",
      "includes": [
        {
          "title": "Proyecto de interior",
          "text": "Distribución, iluminación y materiales, con planos y muestras antes de decidir."
        },
        {
          "title": "Carpintería a medida",
          "text": "Librerías, armarios, cabeceros y cocinas dibujados para cada pared."
        },
        {
          "title": "Mobiliario y tejidos",
          "text": "Sofás, mesas, alfombras, cortinas y ropa de cama, en lana, lino y roble."
        },
        {
          "title": "Arte y puesta a punto",
          "text": "Cuadros, lámparas y objetos. Entregamos la casa lista para entrar a vivir."
        }
      ],
      "approach": "Empezamos por cómo usa usted la casa: cuántos son, cuándo vienen, dónde dejan las botas. De ahí salen la distribución y el almacenaje. Los materiales los elige usted sobre muestras reales; nosotros nos ocupamos de pedidos, plazos y montaje.",
      "faq": [
        {
          "q": "¿Pueden encargarse solo del interiorismo, sin obra?",
          "a": "Sí. Muchas casas no necesitan tocar la estructura: basta con carpintería, mobiliario, luz y tejidos."
        },
        {
          "q": "¿Tengo que subir a elegir cada pieza?",
          "a": "No. Le enviamos muestras y propuestas, y decidimos por videollamada o en una sola visita."
        }
      ]
    },
    "ca": {
      "h1": "Interiorisme a la Cerdanya",
      "description": "Interiorisme i mobiliari a mida per a xalets i cases de pedra a la Cerdanya: fusteria, mobles, teixits i art, triats per durar.",
      "intro": "Dissenyem l'interior complet de la casa, de la distribució a l'últim coixí. Treballem amb pocs materials, a la vista, i fem a mida allò que no existeix en catàleg.",
      "includes": [
        {
          "title": "Projecte d'interior",
          "text": "Distribució, il·luminació i materials, amb plànols i mostres abans de decidir."
        },
        {
          "title": "Fusteria a mida",
          "text": "Llibreries, armaris, capçals i cuines dibuixats per a cada paret."
        },
        {
          "title": "Mobiliari i teixits",
          "text": "Sofàs, taules, catifes, cortines i roba de llit, en llana, lli i roure."
        },
        {
          "title": "Art i posada a punt",
          "text": "Quadres, llums i objectes. Lliurem la casa a punt per entrar-hi a viure."
        }
      ],
      "approach": "Comencem per com feu servir la casa: quants sou, quan hi veniu, on deixeu les botes. D'aquí en surten la distribució i l'emmagatzematge. Els materials els trieu vosaltres sobre mostres reals; nosaltres ens ocupem de comandes, terminis i muntatge.",
      "faq": [
        {
          "q": "Us podeu encarregar només de l'interiorisme, sense obra?",
          "a": "Sí. Moltes cases no necessiten tocar l'estructura: n'hi ha prou amb fusteria, mobiliari, llum i teixits."
        },
        {
          "q": "He de pujar a triar cada peça?",
          "a": "No. Us enviem mostres i propostes, i decidim per videotrucada o en una sola visita."
        }
      ]
    },
    "fr": {
      "h1": "Architecture d'intérieur en Cerdagne",
      "description": "Architecture d'intérieur et mobilier sur mesure pour chalets et maisons en pierre en Cerdagne : menuiserie, meubles, textiles et art, choisis pour durer.",
      "intro": "Nous concevons l'intérieur complet de la maison, de la distribution au dernier coussin. Nous travaillons avec peu de matériaux, laissés apparents, et nous faisons sur mesure ce qui n'existe pas en catalogue.",
      "includes": [
        {
          "title": "Projet d'intérieur",
          "text": "Distribution, éclairage et matériaux, avec plans et échantillons avant de décider."
        },
        {
          "title": "Menuiserie sur mesure",
          "text": "Bibliothèques, placards, têtes de lit et cuisines dessinés pour chaque mur."
        },
        {
          "title": "Mobilier et textiles",
          "text": "Canapés, tables, tapis, rideaux et linge de lit, en laine, lin et chêne."
        },
        {
          "title": "Art et mise au point",
          "text": "Tableaux, luminaires et objets. Nous livrons la maison prête à vivre."
        }
      ],
      "approach": "Nous partons de votre usage de la maison : combien vous êtes, quand vous venez, où vous posez les chaussures de ski. La distribution et les rangements en découlent. Vous choisissez les matériaux sur de vrais échantillons ; nous nous chargeons des commandes, des délais et de la pose.",
      "faq": [
        {
          "q": "Pouvez-vous intervenir uniquement sur l'intérieur, sans travaux ?",
          "a": "Oui. Beaucoup de maisons n'ont pas besoin de toucher à la structure : menuiserie, mobilier, lumière et textiles suffisent."
        },
        {
          "q": "Dois-je monter pour choisir chaque pièce ?",
          "a": "Non. Nous vous envoyons échantillons et propositions, et nous décidons en visioconférence ou en une seule visite."
        }
      ]
    }
  },
  "cocinas-y-banos": {
    "es": {
      "h1": "Reforma de cocinas y baños en la Cerdanya",
      "description": "Cocinas y baños a medida en Puigcerdà y la Cerdanya: roble, piedra y acero, con instalaciones nuevas y un solo interlocutor.",
      "intro": "Son las dos estancias que más se usan y las que antes envejecen. Las rehacemos enteras, instalaciones incluidas, con materiales que aguantan el uso de una casa de montaña.",
      "includes": [
        {
          "title": "Cocinas abiertas",
          "text": "Islas y mesas largas de roble, pensadas para cocinar mirando a la sala."
        },
        {
          "title": "Baños de piedra y madera",
          "text": "Piedra natural, roble estriado y grifería que envejece bien."
        },
        {
          "title": "Instalaciones nuevas",
          "text": "Fontanería, electricidad y ventilación renovadas, no solo los acabados."
        },
        {
          "title": "Carpintería y encimeras a medida",
          "text": "Cada frente, cada hueco y cada encimera se dibujan para su sitio."
        }
      ],
      "approach": "Una cocina o un baño pueden reformarse sin tocar el resto de la casa. Planificamos la obra para que sea corta y limpia, y coordinamos todos los oficios para que usted no tenga que hablar con ninguno.",
      "faq": []
    },
    "ca": {
      "h1": "Reforma de cuines i banys a la Cerdanya",
      "description": "Cuines i banys a mida a Puigcerdà i la Cerdanya: roure, pedra i acer, amb instal·lacions noves i un sol interlocutor.",
      "intro": "Són les dues estances que més es fan servir i les que abans envelleixen. Les refem senceres, instal·lacions incloses, amb materials que aguanten l'ús d'una casa de muntanya.",
      "includes": [
        {
          "title": "Cuines obertes",
          "text": "Illes i taules llargues de roure, pensades per cuinar mirant la sala."
        },
        {
          "title": "Banys de pedra i fusta",
          "text": "Pedra natural, roure estriat i aixetes que envelleixen bé."
        },
        {
          "title": "Instal·lacions noves",
          "text": "Lampisteria, electricitat i ventilació renovades, no només els acabats."
        },
        {
          "title": "Fusteria i taulells a mida",
          "text": "Cada front, cada forat i cada taulell es dibuixen per al seu lloc."
        }
      ],
      "approach": "Una cuina o un bany es poden reformar sense tocar la resta de la casa. Planifiquem l'obra perquè sigui curta i neta, i coordinem tots els oficis perquè no hàgiu de parlar amb cap.",
      "faq": []
    },
    "fr": {
      "h1": "Rénovation de cuisines et salles de bains en Cerdagne",
      "description": "Cuisines et salles de bains sur mesure à Puigcerdà et en Cerdagne : chêne, pierre et acier, réseaux neufs et un seul interlocuteur.",
      "intro": "Ce sont les deux pièces les plus utilisées et celles qui vieillissent le plus vite. Nous les refaisons entièrement, réseaux compris, avec des matériaux qui résistent à l'usage d'une maison de montagne.",
      "includes": [
        {
          "title": "Cuisines ouvertes",
          "text": "Îlots et longues tables en chêne, pour cuisiner face au séjour."
        },
        {
          "title": "Salles de bains en pierre et bois",
          "text": "Pierre naturelle, chêne cannelé et robinetterie qui vieillit bien."
        },
        {
          "title": "Réseaux neufs",
          "text": "Plomberie, électricité et ventilation refaites, pas seulement les finitions."
        },
        {
          "title": "Menuiserie et plans de travail sur mesure",
          "text": "Chaque façade, chaque niche et chaque plan de travail est dessiné pour sa place."
        }
      ],
      "approach": "Une cuisine ou une salle de bains peut être rénovée sans toucher au reste de la maison. Nous planifions un chantier court et propre, et nous coordonnons tous les artisans pour que vous n'ayez à parler à aucun.",
      "faq": []
    }
  },
  "reforma-integral": {
    "es": {
      "h1": "Reforma integral de chalets en la Cerdanya",
      "description": "Reforma integral de chalets en la Cerdanya, de la estructura al mobiliario. Proyecto, permisos, obra y llaves con un solo interlocutor.",
      "intro": "Nos ocupamos de la casa entera: cubierta, estructura, instalaciones, distribución e interior. Usted elige los materiales y recibe un informe cada semana; nosotros coordinamos todo lo demás.",
      "includes": [
        {
          "title": "Cubierta y envolvente",
          "text": "Pizarra, aislamiento y carpintería exterior, respetando la silueta de la casa."
        },
        {
          "title": "Distribución",
          "text": "Abrimos estancias, ampliamos huecos hacia las vistas y ordenamos el almacenaje."
        },
        {
          "title": "Instalaciones",
          "text": "Calefacción, electricidad, fontanería y ventilación nuevas."
        },
        {
          "title": "Interior completo",
          "text": "Carpintería, cocina, baños, mobiliario y tejidos."
        }
      ],
      "approach": "Antes de empezar hay planos, materiales elegidos y un presupuesto detallado por partidas. Durante la obra, un informe semanal con fotos. Al final, la casa amueblada, limpia y con las llaves en la mano.",
      "faq": [
        {
          "q": "¿Hace falta estar en la Cerdanya durante la obra?",
          "a": "No. Gestionamos permisos, oficios y entregas, y le enviamos cada semana un informe con fotos. Puede venir cuando quiera, pero no hace falta."
        },
        {
          "q": "¿Cuánto dura una reforma integral?",
          "a": "Depende de la casa y del alcance. En montaña, además, el invierno condiciona los trabajos de exterior. Le damos un calendario con el proyecto, antes de empezar."
        }
      ]
    },
    "ca": {
      "h1": "Reforma integral de xalets a la Cerdanya",
      "description": "Reforma integral de xalets a la Cerdanya, de l'estructura al mobiliari. Projecte, permisos, obra i claus amb un sol interlocutor.",
      "intro": "Ens ocupem de la casa sencera: coberta, estructura, instal·lacions, distribució i interior. Vosaltres trieu els materials i rebeu un informe cada setmana; nosaltres coordinem tota la resta.",
      "includes": [
        {
          "title": "Coberta i envolupant",
          "text": "Pissarra, aïllament i fusteria exterior, respectant la silueta de la casa."
        },
        {
          "title": "Distribució",
          "text": "Obrim estances, ampliem obertures cap a les vistes i endrecem l'emmagatzematge."
        },
        {
          "title": "Instal·lacions",
          "text": "Calefacció, electricitat, lampisteria i ventilació noves."
        },
        {
          "title": "Interior complet",
          "text": "Fusteria, cuina, banys, mobiliari i teixits."
        }
      ],
      "approach": "Abans de començar hi ha plànols, materials triats i un pressupost detallat per partides. Durant l'obra, un informe setmanal amb fotos. Al final, la casa moblada, neta i amb les claus a la mà.",
      "faq": [
        {
          "q": "Cal ser a la Cerdanya durant l'obra?",
          "a": "No. Gestionem permisos, oficis i lliuraments, i us enviem cada setmana un informe amb fotos. Podeu venir quan vulgueu, però no cal."
        },
        {
          "q": "Quant dura una reforma integral?",
          "a": "Depèn de la casa i de l'abast. A muntanya, a més, l'hivern condiciona els treballs d'exterior. Us donem un calendari amb el projecte, abans de començar."
        }
      ]
    },
    "fr": {
      "h1": "Rénovation de chalets en Cerdagne",
      "description": "Rénovation complète de chalets en Cerdagne, de la structure au mobilier. Projet, autorisations, chantier et clés avec un seul interlocuteur.",
      "intro": "Nous prenons en charge la maison entière : toiture, structure, réseaux, distribution et intérieur. Vous choisissez les matériaux et recevez un compte rendu chaque semaine ; nous coordonnons tout le reste.",
      "includes": [
        {
          "title": "Toiture et enveloppe",
          "text": "Ardoise, isolation et menuiseries extérieures, dans le respect de la silhouette de la maison."
        },
        {
          "title": "Distribution",
          "text": "Nous ouvrons les pièces, agrandissons les baies vers la vue et organisons les rangements."
        },
        {
          "title": "Réseaux",
          "text": "Chauffage, électricité, plomberie et ventilation neufs."
        },
        {
          "title": "Intérieur complet",
          "text": "Menuiserie, cuisine, salles de bains, mobilier et textiles."
        }
      ],
      "approach": "Avant de commencer : des plans, des matériaux choisis et un devis détaillé poste par poste. Pendant le chantier, un compte rendu hebdomadaire en photos. À la fin, la maison meublée, propre, et les clés en main.",
      "faq": [
        {
          "q": "Faut-il être en Cerdagne pendant les travaux ?",
          "a": "Non. Nous gérons autorisations, artisans et livraisons, et nous vous envoyons chaque semaine un compte rendu en photos. Vous pouvez venir quand vous voulez, mais ce n'est pas nécessaire."
        },
        {
          "q": "Combien de temps dure une rénovation complète ?",
          "a": "Cela dépend de la maison et du périmètre. En montagne, l'hiver conditionne aussi les travaux extérieurs. Nous vous remettons un calendrier avec le projet, avant de commencer."
        }
      ]
    }
  },
  "casas-de-piedra": {
    "es": {
      "h1": "Rehabilitación de casas de piedra y bordas en la Cerdanya",
      "description": "Rehabilitación de casas de piedra, casas pairales y bordas en la Cerdanya: conservar muros, cubiertas y estructura, y añadir el confort de hoy.",
      "intro": "Una casa pairal o una borda tienen algo que no se puede construir de nuevo. Lo conservamos: el muro, la cubierta, la madera. Y añadimos lo que les falta: calor, luz y aire seco.",
      "includes": [
        {
          "title": "Muros de piedra",
          "text": "Limpieza y rejuntado con cal. La piedra queda a la vista."
        },
        {
          "title": "Cubiertas",
          "text": "Pizarra nueva sobre aislamiento, con las mismas líneas."
        },
        {
          "title": "Estructura de madera",
          "text": "Conservamos las vigas y cerchas que sirven; las que no, se sustituyen por madera de la misma sección."
        },
        {
          "title": "Humedad y aislamiento",
          "text": "Aislamos por dentro o por fuera según la casa, con materiales que dejan respirar el muro."
        }
      ],
      "approach": "Empezamos por entender cómo está construida la casa y qué está sano. Intervenimos lo justo en lo que se ve y a fondo en lo que no se ve: instalaciones, aislamiento y ventilación.",
      "faq": [
        {
          "q": "¿Se puede convertir una borda en vivienda?",
          "a": "Depende del planeamiento de cada municipio y de la situación de la finca. Lo comprobamos con el ayuntamiento antes de proponer nada."
        },
        {
          "q": "¿Se pierde la piedra al aislar?",
          "a": "No tiene por qué. Según el muro, aislamos por una sola cara y dejamos la otra a la vista."
        }
      ]
    },
    "ca": {
      "h1": "Rehabilitació de cases de pedra i bordes a la Cerdanya",
      "description": "Rehabilitació de cases de pedra, cases pairals i bordes a la Cerdanya: conservar murs, cobertes i estructura, i afegir-hi el confort d'avui.",
      "intro": "Una casa pairal o una borda tenen una cosa que no es pot construir de nou. La conservem: el mur, la coberta, la fusta. I hi afegim el que els falta: escalfor, llum i aire sec.",
      "includes": [
        {
          "title": "Murs de pedra",
          "text": "Neteja i rejuntat amb calç. La pedra queda a la vista."
        },
        {
          "title": "Cobertes",
          "text": "Pissarra nova sobre aïllament, amb les mateixes línies."
        },
        {
          "title": "Estructura de fusta",
          "text": "Conservem les bigues i encavallades que serveixen; les que no, se substitueixen per fusta de la mateixa secció."
        },
        {
          "title": "Humitat i aïllament",
          "text": "Aïllem per dins o per fora segons la casa, amb materials que deixen respirar el mur."
        }
      ],
      "approach": "Comencem per entendre com està construïda la casa i què és sa. Intervenim el just en allò que es veu i a fons en allò que no es veu: instal·lacions, aïllament i ventilació.",
      "faq": [
        {
          "q": "Es pot convertir una borda en habitatge?",
          "a": "Depèn del planejament de cada municipi i de la situació de la finca. Ho comprovem amb l'ajuntament abans de proposar res."
        },
        {
          "q": "Es perd la pedra en aïllar?",
          "a": "No necessàriament. Segons el mur, aïllem per una sola cara i deixem l'altra a la vista."
        }
      ]
    },
    "fr": {
      "h1": "Rénovation de maisons en pierre et de granges en Cerdagne",
      "description": "Rénovation de maisons en pierre, de maisons de maître et de granges en Cerdagne : conserver murs, toitures et charpente, et ajouter le confort d'aujourd'hui.",
      "intro": "Une maison de maître ou une grange ont quelque chose que l'on ne peut pas reconstruire. Nous le conservons : le mur, le toit, le bois. Et nous ajoutons ce qui manque : la chaleur, la lumière et un air sec.",
      "includes": [
        {
          "title": "Murs en pierre",
          "text": "Nettoyage et rejointoiement à la chaux. La pierre reste apparente."
        },
        {
          "title": "Toitures",
          "text": "Ardoise neuve sur isolant, sur les mêmes lignes."
        },
        {
          "title": "Charpente",
          "text": "Nous conservons les poutres et les fermes saines ; les autres sont remplacées par du bois de même section."
        },
        {
          "title": "Humidité et isolation",
          "text": "Isolation par l'intérieur ou par l'extérieur selon la maison, avec des matériaux qui laissent respirer le mur."
        }
      ],
      "approach": "Nous commençons par comprendre comment la maison est construite et ce qui est sain. Nous intervenons peu sur ce qui se voit et en profondeur sur ce qui ne se voit pas : réseaux, isolation et ventilation.",
      "faq": [
        {
          "q": "Peut-on transformer une grange en habitation ?",
          "a": "Cela dépend des règles d'urbanisme de chaque commune et de la situation du terrain. Nous vérifions auprès de la mairie avant toute proposition."
        },
        {
          "q": "Perd-on la pierre en isolant ?",
          "a": "Pas forcément. Selon le mur, nous isolons une seule face et laissons l'autre apparente."
        }
      ]
    }
  },
  "wellness": {
    "es": {
      "h1": "Sauna, hammam y piscina interior en la Cerdanya",
      "description": "Wellness privado en chalets de la Cerdanya: sauna, hammam, piscina interior y cuarto de esquís con secabotas, integrados en la casa.",
      "intro": "Volver de esquiar y encontrar la sauna caliente. Diseñamos espacios de wellness dentro de la casa, a menudo en sótanos, establos o garajes que nadie usaba.",
      "includes": [
        {
          "title": "Sauna",
          "text": "De abeto, con ventana cuando la casa lo permite."
        },
        {
          "title": "Hammam y duchas",
          "text": "Piedra y gres, con la ventilación bien resuelta."
        },
        {
          "title": "Piscina interior",
          "text": "Vaso, climatización y deshumidificación proyectados juntos."
        },
        {
          "title": "Cuarto de esquís",
          "text": "Bancos, armarios y secabotas calefactados junto a la entrada."
        }
      ],
      "approach": "El agua y el vapor exigen cuidado: impermeabilización, ventilación y control de la humedad se proyectan antes que los acabados. Así el wellness no perjudica al resto de la casa.",
      "faq": []
    },
    "ca": {
      "h1": "Sauna, hammam i piscina interior a la Cerdanya",
      "description": "Wellness privat en xalets de la Cerdanya: sauna, hammam, piscina interior i cambra d'esquís amb assecabotes, integrats a la casa.",
      "intro": "Tornar d'esquiar i trobar la sauna calenta. Dissenyem espais de wellness dins de la casa, sovint en soterranis, estables o garatges que no feia servir ningú.",
      "includes": [
        {
          "title": "Sauna",
          "text": "D'avet, amb finestra quan la casa ho permet."
        },
        {
          "title": "Hammam i dutxes",
          "text": "Pedra i gres, amb la ventilació ben resolta."
        },
        {
          "title": "Piscina interior",
          "text": "Vas, climatització i deshumidificació projectats alhora."
        },
        {
          "title": "Cambra d'esquís",
          "text": "Bancs, armaris i assecabotes calefactats al costat de l'entrada."
        }
      ],
      "approach": "L'aigua i el vapor demanen cura: impermeabilització, ventilació i control de la humitat es projecten abans que els acabats. Així el wellness no perjudica la resta de la casa.",
      "faq": []
    },
    "fr": {
      "h1": "Sauna, hammam et piscine intérieure en Cerdagne",
      "description": "Espace bien-être privé dans les chalets de Cerdagne : sauna, hammam, piscine intérieure et local à skis avec sèche-chaussures, intégrés à la maison.",
      "intro": "Rentrer du ski et trouver le sauna chaud. Nous concevons des espaces bien-être à l'intérieur de la maison, souvent dans des sous-sols, des étables ou des garages inutilisés.",
      "includes": [
        {
          "title": "Sauna",
          "text": "En sapin, avec une fenêtre quand la maison le permet."
        },
        {
          "title": "Hammam et douches",
          "text": "Pierre et grès, avec une ventilation bien traitée."
        },
        {
          "title": "Piscine intérieure",
          "text": "Bassin, chauffage et déshumidification conçus ensemble."
        },
        {
          "title": "Local à skis",
          "text": "Bancs, rangements et sèche-chaussures chauffants près de l'entrée."
        }
      ],
      "approach": "L'eau et la vapeur demandent du soin : étanchéité, ventilation et maîtrise de l'humidité sont conçues avant les finitions. Ainsi, l'espace bien-être ne nuit pas au reste de la maison.",
      "faq": []
    }
  },
  "confort-y-eficiencia": {
    "es": {
      "h1": "Aerotermia, aislamiento y suelo radiante en la Cerdanya",
      "description": "Confort y eficiencia para casas de montaña en la Cerdanya: aislamiento, aerotermia, suelo radiante, ventilación con recuperación de calor y triple vidrio.",
      "intro": "Una casa de montaña cómoda es una casa caliente, seca y silenciosa. Lo conseguimos con aislamiento, buenas ventanas y una calefacción pensada para una vivienda que pasa días vacía.",
      "includes": [
        {
          "title": "Aislamiento",
          "text": "En cubierta y muros, por dentro o por fuera según la casa."
        },
        {
          "title": "Aerotermia y suelo radiante",
          "text": "Calor parejo desde el suelo, sin radiadores ni gasóleo."
        },
        {
          "title": "Ventanas",
          "text": "Triple vidrio con marco de madera, en los huecos de siempre."
        },
        {
          "title": "Ventilación",
          "text": "Recuperación de calor para renovar el aire sin enfriar la casa."
        }
      ],
      "approach": "Primero reducimos lo que la casa pierde; después dimensionamos la calefacción. El orden importa: una instalación nueva en una casa sin aislar gasta más y calienta peor.",
      "faq": []
    },
    "ca": {
      "h1": "Aerotèrmia, aïllament i terra radiant a la Cerdanya",
      "description": "Confort i eficiència per a cases de muntanya a la Cerdanya: aïllament, aerotèrmia, terra radiant, ventilació amb recuperació de calor i triple vidre.",
      "intro": "Una casa de muntanya còmoda és una casa calenta, seca i silenciosa. Ho aconseguim amb aïllament, bones finestres i una calefacció pensada per a un habitatge que passa dies buit.",
      "includes": [
        {
          "title": "Aïllament",
          "text": "A coberta i murs, per dins o per fora segons la casa."
        },
        {
          "title": "Aerotèrmia i terra radiant",
          "text": "Escalfor uniforme des de terra, sense radiadors ni gasoil."
        },
        {
          "title": "Finestres",
          "text": "Triple vidre amb marc de fusta, als forats de sempre."
        },
        {
          "title": "Ventilació",
          "text": "Recuperació de calor per renovar l'aire sense refredar la casa."
        }
      ],
      "approach": "Primer reduïm el que la casa perd; després dimensionem la calefacció. L'ordre importa: una instal·lació nova en una casa sense aïllar gasta més i escalfa pitjor.",
      "faq": []
    },
    "fr": {
      "h1": "Pompe à chaleur, isolation et plancher chauffant en Cerdagne",
      "description": "Confort et efficacité énergétique pour les maisons de montagne en Cerdagne : isolation, pompe à chaleur, plancher chauffant, ventilation double flux et triple vitrage.",
      "intro": "Une maison de montagne confortable est une maison chaude, sèche et silencieuse. Nous y arrivons avec de l'isolation, de bonnes fenêtres et un chauffage pensé pour un logement qui reste vide plusieurs jours.",
      "includes": [
        {
          "title": "Isolation",
          "text": "En toiture et sur les murs, par l'intérieur ou par l'extérieur selon la maison."
        },
        {
          "title": "Pompe à chaleur et plancher chauffant",
          "text": "Une chaleur régulière qui vient du sol, sans radiateurs ni fioul."
        },
        {
          "title": "Fenêtres",
          "text": "Triple vitrage à cadre bois, dans les baies existantes."
        },
        {
          "title": "Ventilation",
          "text": "Double flux, pour renouveler l'air sans refroidir la maison."
        }
      ],
      "approach": "Nous réduisons d'abord ce que la maison perd ; ensuite nous dimensionnons le chauffage. L'ordre compte : une installation neuve dans une maison non isolée consomme plus et chauffe moins bien.",
      "faq": []
    }
  },
  "domotica-y-seguridad": {
    "es": {
      "h1": "Domótica y seguridad para casas de montaña en la Cerdanya",
      "description": "Domótica y seguridad para segundas residencias en la Cerdanya: calefacción a distancia, accesos, cámaras y avisos cuando la casa está vacía.",
      "intro": "La casa está vacía buena parte de la semana. Con la domótica adecuada, la calefacción se enciende antes de que usted llegue y sabe en todo momento que todo está en orden.",
      "includes": [
        {
          "title": "Calefacción a distancia",
          "text": "Encender, apagar y programar desde el móvil."
        },
        {
          "title": "Accesos",
          "text": "Cerraduras electrónicas para familia, invitados y mantenimiento."
        },
        {
          "title": "Cámaras y sensores",
          "text": "Avisos de intrusión, de fuga de agua y de temperatura baja."
        },
        {
          "title": "Un sistema sencillo",
          "text": "Pocas aplicaciones, bien configuradas y explicadas."
        }
      ],
      "approach": "Instalamos lo que se va a usar. Preferimos un sistema corto y fiable a uno que lo controla todo y nadie entiende. Si la casa se alquila, lo dejamos preparado para la gestión.",
      "faq": []
    },
    "ca": {
      "h1": "Domòtica i seguretat per a cases de muntanya a la Cerdanya",
      "description": "Domòtica i seguretat per a segones residències a la Cerdanya: calefacció a distància, accessos, càmeres i avisos quan la casa és buida.",
      "intro": "La casa és buida bona part de la setmana. Amb la domòtica adequada, la calefacció s'encén abans que arribeu i sabeu en tot moment que tot està en ordre.",
      "includes": [
        {
          "title": "Calefacció a distància",
          "text": "Encendre, apagar i programar des del mòbil."
        },
        {
          "title": "Accessos",
          "text": "Panys electrònics per a família, convidats i manteniment."
        },
        {
          "title": "Càmeres i sensors",
          "text": "Avisos d'intrusió, de fuita d'aigua i de temperatura baixa."
        },
        {
          "title": "Un sistema senzill",
          "text": "Poques aplicacions, ben configurades i explicades."
        }
      ],
      "approach": "Instal·lem el que es farà servir. Preferim un sistema curt i fiable a un que ho controla tot i que ningú entén. Si la casa es lloga, el deixem preparat per a la gestió.",
      "faq": []
    },
    "fr": {
      "h1": "Domotique et sécurité pour les maisons de montagne en Cerdagne",
      "description": "Domotique et sécurité pour les résidences secondaires en Cerdagne : chauffage à distance, accès, caméras et alertes quand la maison est vide.",
      "intro": "La maison est vide une bonne partie de la semaine. Avec la bonne domotique, le chauffage se met en route avant votre arrivée et vous savez à tout moment que tout est en ordre.",
      "includes": [
        {
          "title": "Chauffage à distance",
          "text": "Allumer, éteindre et programmer depuis le téléphone."
        },
        {
          "title": "Accès",
          "text": "Serrures électroniques pour la famille, les invités et l'entretien."
        },
        {
          "title": "Caméras et capteurs",
          "text": "Alertes d'intrusion, de fuite d'eau et de température basse."
        },
        {
          "title": "Un système simple",
          "text": "Peu d'applications, bien réglées et expliquées."
        }
      ],
      "approach": "Nous installons ce qui sera utilisé. Nous préférons un système court et fiable à un système qui contrôle tout et que personne ne comprend. Si la maison est louée, nous le préparons pour la gestion.",
      "faq": []
    }
  },
  "llave-en-mano": {
    "es": {
      "h1": "Reforma llave en mano en la Cerdanya",
      "description": "Reforma llave en mano en la Cerdanya para propietarios a distancia: un solo interlocutor, informe semanal y, si quiere, gestión del alquiler con Cerdanya Privé.",
      "intro": "Pensado para quien vive en Barcelona, Toulouse o París. Usted decide; nosotros gestionamos permisos, arquitecto, oficios, muebles, limpieza y llaves.",
      "includes": [
        {
          "title": "Un solo interlocutor",
          "text": "Una persona que conoce su obra y responde."
        },
        {
          "title": "Informe semanal",
          "text": "Fotos y avance, cada semana, sin tener que pedirlo."
        },
        {
          "title": "Entrega completa",
          "text": "La casa amueblada, equipada y limpia."
        },
        {
          "title": "Gestión del alquiler",
          "text": "Si quiere, Cerdanya Privé la gestiona después como alquiler vacacional."
        }
      ],
      "approach": "Las decisiones se toman por videollamada y sobre muestras que le enviamos. Las visitas a la obra son las que usted quiera hacer, no las que la obra necesite.",
      "faq": [
        {
          "q": "¿Puedo reformar sin subir ni una vez?",
          "a": "Es posible. Recomendamos al menos una visita al principio y otra antes de la entrega, pero no son imprescindibles."
        },
        {
          "q": "¿Qué pasa cuando termina la obra?",
          "a": "Le entregamos las llaves. Si quiere alquilar la casa cuando no la usa, Cerdanya Privé puede ocuparse de la gestión."
        }
      ]
    },
    "ca": {
      "h1": "Reforma clau en mà a la Cerdanya",
      "description": "Reforma clau en mà a la Cerdanya per a propietaris a distància: un sol interlocutor, informe setmanal i, si voleu, gestió del lloguer amb Cerdanya Privé.",
      "intro": "Pensat per a qui viu a Barcelona, Tolosa o París. Vosaltres decidiu; nosaltres gestionem permisos, arquitecte, oficis, mobles, neteja i claus.",
      "includes": [
        {
          "title": "Un sol interlocutor",
          "text": "Una persona que coneix la vostra obra i respon."
        },
        {
          "title": "Informe setmanal",
          "text": "Fotos i avenç, cada setmana, sense haver-lo de demanar."
        },
        {
          "title": "Lliurament complet",
          "text": "La casa moblada, equipada i neta."
        },
        {
          "title": "Gestió del lloguer",
          "text": "Si voleu, Cerdanya Privé la gestiona després com a lloguer de vacances."
        }
      ],
      "approach": "Les decisions es prenen per videotrucada i sobre mostres que us enviem. Les visites a l'obra són les que vulgueu fer, no les que l'obra necessiti.",
      "faq": [
        {
          "q": "Puc reformar sense pujar ni una vegada?",
          "a": "És possible. Recomanem almenys una visita al principi i una altra abans del lliurament, però no són imprescindibles."
        },
        {
          "q": "Què passa quan s'acaba l'obra?",
          "a": "Us lliurem les claus. Si voleu llogar la casa quan no la feu servir, Cerdanya Privé es pot ocupar de la gestió."
        }
      ]
    },
    "fr": {
      "h1": "Rénovation clé en main en Cerdagne",
      "description": "Rénovation clé en main en Cerdagne pour les propriétaires à distance : un seul interlocuteur, compte rendu hebdomadaire et, si vous le souhaitez, gestion locative avec Cerdanya Privé.",
      "intro": "Pensé pour ceux qui vivent à Toulouse, Perpignan, Paris ou Barcelone. Vous décidez ; nous gérons autorisations, architecte, artisans, mobilier, ménage et clés.",
      "includes": [
        {
          "title": "Un seul interlocuteur",
          "text": "Une personne qui connaît votre chantier et qui répond."
        },
        {
          "title": "Compte rendu hebdomadaire",
          "text": "Photos et avancement, chaque semaine, sans avoir à le demander."
        },
        {
          "title": "Livraison complète",
          "text": "La maison meublée, équipée et propre."
        },
        {
          "title": "Gestion locative",
          "text": "Si vous le souhaitez, Cerdanya Privé la gère ensuite en location de vacances."
        }
      ],
      "approach": "Les décisions se prennent en visioconférence et sur les échantillons que nous vous envoyons. Les visites de chantier sont celles que vous voulez faire, pas celles dont le chantier a besoin.",
      "faq": [
        {
          "q": "Puis-je rénover sans monter une seule fois ?",
          "a": "C'est possible. Nous recommandons au moins une visite au début et une autre avant la livraison, mais elles ne sont pas indispensables."
        },
        {
          "q": "Que se passe-t-il à la fin des travaux ?",
          "a": "Nous vous remettons les clés. Si vous souhaitez louer la maison quand vous ne l'occupez pas, Cerdanya Privé peut s'en charger."
        }
      ]
    }
  }
});
