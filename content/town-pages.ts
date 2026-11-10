import { z } from "zod";
import { townPageSchema, type TownPage } from "@/lib/content/schemas";
import type { Locale } from "@/i18n/routing";

// Copy for each town landing, keyed by town slug and language. Planning notes
// are general guidance: nothing here states a specific local rule.
export const townPages: Record<string, Record<Locale, TownPage>> = z
  .record(z.string(), z.object({ es: townPageSchema, ca: townPageSchema, fr: townPageSchema }))
  .parse({
  "puigcerda": {
    "es": {
      "h1": "Reformas en Puigcerdà",
      "description": "Reformas de casas, áticos y torres en Puigcerdà: interiorismo, cocinas y baños y reforma integral, con un solo interlocutor y gestión a distancia.",
      "intro": "Puigcerdà es la capital de la Cerdanya y donde más conviven tipos de vivienda distintos: pisos y áticos en el centro, torres de veraneo alrededor del lago y casas en los barrios que bajan hacia el valle.",
      "houses": [
        {
          "title": "Áticos y pisos del centro",
          "text": "Buenas vistas y distribuciones antiguas. Suelen pedir cocina abierta, baños nuevos y carpintería a medida."
        },
        {
          "title": "Torres junto al lago",
          "text": "Casas de veraneo con jardín y mucho carácter. La reforma respeta la fachada y renueva todo el interior."
        },
        {
          "title": "Casas de los alrededores",
          "text": "Chalets y casas de piedra a pocos minutos del centro, a menudo sin aislar."
        }
      ],
      "note": "Las normas de fachada, cubierta y carpintería exterior dependen de cada ayuntamiento. Las comprobamos antes de proponerle nada y tramitamos la licencia por usted."
    },
    "ca": {
      "h1": "Reformes a Puigcerdà",
      "description": "Reformes de cases, àtics i torres a Puigcerdà: interiorisme, cuines i banys i reforma integral, amb un sol interlocutor i gestió a distància.",
      "intro": "Puigcerdà és la capital de la Cerdanya i on conviuen més tipus d'habitatge diferents: pisos i àtics al centre, torres d'estiueig al voltant de l'estany i cases als barris que baixen cap a la vall.",
      "houses": [
        {
          "title": "Àtics i pisos del centre",
          "text": "Bones vistes i distribucions antigues. Solen demanar cuina oberta, banys nous i fusteria a mida."
        },
        {
          "title": "Torres a tocar de l'estany",
          "text": "Cases d'estiueig amb jardí i molt de caràcter. La reforma respecta la façana i renova tot l'interior."
        },
        {
          "title": "Cases dels voltants",
          "text": "Xalets i cases de pedra a pocs minuts del centre, sovint sense aïllar."
        }
      ],
      "note": "Les normes de façana, coberta i fusteria exterior depenen de cada ajuntament. Les comprovem abans de proposar-vos res i tramitem la llicència per vosaltres."
    },
    "fr": {
      "h1": "Rénovation à Puigcerdà",
      "description": "Rénovation de maisons, d'attiques et de villas à Puigcerdà, en Cerdagne espagnole : intérieur, cuisines, salles de bains et rénovation complète, gérées à distance.",
      "intro": "Puigcerdà est la capitale de la Cerdagne espagnole, à deux pas de Bourg-Madame. On y trouve des appartements et des attiques dans le centre, des villas de villégiature autour du lac et des maisons dans les quartiers qui descendent vers la vallée.",
      "houses": [
        {
          "title": "Attiques et appartements du centre",
          "text": "De belles vues et des plans anciens. On y demande souvent une cuisine ouverte, des salles de bains neuves et de la menuiserie sur mesure."
        },
        {
          "title": "Villas près du lac",
          "text": "Des maisons de villégiature avec jardin et beaucoup de caractère. La rénovation respecte la façade et renouvelle tout l'intérieur."
        },
        {
          "title": "Maisons des environs",
          "text": "Chalets et maisons en pierre à quelques minutes du centre, souvent sans isolation."
        }
      ],
      "note": "Côté espagnol, les règles de façade, de toiture et de menuiserie extérieure dépendent de chaque mairie. Nous les vérifions avant toute proposition et nous déposons la demande de permis pour vous."
    }
  },
  "alp": {
    "es": {
      "h1": "Reformas en Alp",
      "description": "Reformas de chalets, casas de piedra y apartamentos en Alp, cerca de La Molina y Masella: reforma integral, interiorismo y wellness.",
      "intro": "Alp reúne el pueblo antiguo, con sus casas de piedra, y las urbanizaciones de chalets y apartamentos que crecieron con las estaciones de La Molina y Masella. Son casas muy usadas en invierno, y eso marca la reforma.",
      "houses": [
        {
          "title": "Casas pairales y de pueblo",
          "text": "Muros de granito y cubiertas de pizarra. Se conservan y se aíslan."
        },
        {
          "title": "Chalets de esquí",
          "text": "Construidos para fines de semana de invierno. Piden cuarto de esquís, buena calefacción y estancias abiertas."
        },
        {
          "title": "Apartamentos de estación",
          "text": "Superficies pequeñas donde la carpintería a medida lo cambia todo."
        }
      ],
      "note": "Las normas de fachada, cubierta y carpintería exterior dependen de cada ayuntamiento. Las comprobamos antes de proponerle nada y tramitamos la licencia por usted."
    },
    "ca": {
      "h1": "Reformes a Alp",
      "description": "Reformes de xalets, cases de pedra i apartaments a Alp, a prop de la Molina i la Masella: reforma integral, interiorisme i wellness.",
      "intro": "Alp aplega el poble antic, amb les seves cases de pedra, i les urbanitzacions de xalets i apartaments que van créixer amb les estacions de la Molina i la Masella. Són cases molt usades a l'hivern, i això marca la reforma.",
      "houses": [
        {
          "title": "Cases pairals i de poble",
          "text": "Murs de granit i cobertes de pissarra. Es conserven i s'aïllen."
        },
        {
          "title": "Xalets d'esquí",
          "text": "Construïts per a caps de setmana d'hivern. Demanen cambra d'esquís, bona calefacció i estances obertes."
        },
        {
          "title": "Apartaments d'estació",
          "text": "Superfícies petites on la fusteria a mida ho canvia tot."
        }
      ],
      "note": "Les normes de façana, coberta i fusteria exterior depenen de cada ajuntament. Les comprovem abans de proposar-vos res i tramitem la llicència per vosaltres."
    },
    "fr": {
      "h1": "Rénovation à Alp",
      "description": "Rénovation de chalets, de maisons en pierre et d'appartements à Alp, près de La Molina et de Masella : rénovation complète, intérieur et bien-être.",
      "intro": "Alp réunit le vieux village, avec ses maisons en pierre, et les lotissements de chalets et d'appartements nés avec les stations de La Molina et de Masella. Ce sont des maisons très utilisées l'hiver, et la rénovation en tient compte.",
      "houses": [
        {
          "title": "Maisons de maître et de village",
          "text": "Murs de granit et toits en ardoise. On les conserve et on les isole."
        },
        {
          "title": "Chalets de ski",
          "text": "Construits pour les week-ends d'hiver. Ils demandent un local à skis, un bon chauffage et des pièces ouvertes."
        },
        {
          "title": "Appartements de station",
          "text": "De petites surfaces où la menuiserie sur mesure change tout."
        }
      ],
      "note": "Côté espagnol, les règles de façade, de toiture et de menuiserie extérieure dépendent de chaque mairie. Nous les vérifions avant toute proposition et nous déposons la demande de permis pour vous."
    }
  },
  "bolvir-fontanals": {
    "es": {
      "h1": "Reformas en Bolvir y Fontanals de Cerdanya",
      "description": "Reformas de chalets en Bolvir y Fontanals de Cerdanya, junto a los campos de golf: reforma integral, interiorismo, eficiencia y wellness.",
      "intro": "Entre Bolvir y Fontanals están algunas de las casas más grandes del valle, muchas junto a los campos de golf. Abundan los chalets de los años ochenta a dos mil, bien construidos y con interiores que han envejecido.",
      "houses": [
        {
          "title": "Chalets junto al golf",
          "text": "Parcelas amplias y vistas abiertas. La reforma suele ampliar los huecos y rehacer cocina, baños y calefacción."
        },
        {
          "title": "Casas grandes para familia y alquiler",
          "text": "Muchos dormitorios, a veces sin baño propio. Se reorganizan pensando también en el alquiler."
        },
        {
          "title": "Masías y casas de pueblo",
          "text": "En los núcleos antiguos, con piedra y madera que merece conservarse."
        }
      ],
      "note": "Las normas de fachada, cubierta y carpintería exterior dependen de cada ayuntamiento. Las comprobamos antes de proponerle nada y tramitamos la licencia por usted."
    },
    "ca": {
      "h1": "Reformes a Bolvir i Fontanals de Cerdanya",
      "description": "Reformes de xalets a Bolvir i Fontanals de Cerdanya, a tocar dels camps de golf: reforma integral, interiorisme, eficiència i wellness.",
      "intro": "Entre Bolvir i Fontanals hi ha algunes de les cases més grans de la vall, moltes a tocar dels camps de golf. Hi abunden els xalets dels anys vuitanta a dos mil, ben construïts i amb interiors que han envellit.",
      "houses": [
        {
          "title": "Xalets a tocar del golf",
          "text": "Parcel·les àmplies i vistes obertes. La reforma sol ampliar les obertures i refer cuina, banys i calefacció."
        },
        {
          "title": "Cases grans per a família i lloguer",
          "text": "Molts dormitoris, de vegades sense bany propi. Es reorganitzen pensant també en el lloguer."
        },
        {
          "title": "Masies i cases de poble",
          "text": "Als nuclis antics, amb pedra i fusta que val la pena conservar."
        }
      ],
      "note": "Les normes de façana, coberta i fusteria exterior depenen de cada ajuntament. Les comprovem abans de proposar-vos res i tramitem la llicència per vosaltres."
    },
    "fr": {
      "h1": "Rénovation à Bolvir et Fontanals de Cerdanya",
      "description": "Rénovation de chalets à Bolvir et Fontanals de Cerdanya, près des golfs : rénovation complète, intérieur, efficacité énergétique et bien-être.",
      "intro": "Entre Bolvir et Fontanals se trouvent quelques-unes des plus grandes maisons de la vallée, souvent en bordure des golfs. Beaucoup de chalets datent des années 1980 à 2000 : bien construits, avec des intérieurs qui ont vieilli.",
      "houses": [
        {
          "title": "Chalets près du golf",
          "text": "De grands terrains et des vues dégagées. La rénovation agrandit souvent les baies et refait cuisine, salles de bains et chauffage."
        },
        {
          "title": "Grandes maisons pour la famille et la location",
          "text": "Beaucoup de chambres, parfois sans salle de bains. On les réorganise en pensant aussi à la location."
        },
        {
          "title": "Mas et maisons de village",
          "text": "Dans les noyaux anciens, avec une pierre et un bois qui méritent d'être conservés."
        }
      ],
      "note": "Côté espagnol, les règles de façade, de toiture et de menuiserie extérieure dépendent de chaque mairie. Nous les vérifions avant toute proposition et nous déposons la demande de permis pour vous."
    }
  },
  "llivia": {
    "es": {
      "h1": "Reformas en Llívia",
      "description": "Reformas de chalets y casas de piedra en Llívia: reforma integral, wellness y llave en mano para propietarios que viven lejos.",
      "intro": "Llívia es un municipio español rodeado de territorio francés, con un casco antiguo de piedra y chalets grandes en las afueras. Muchos propietarios vienen de lejos y necesitan que la obra avance sin ellos.",
      "houses": [
        {
          "title": "Casas del casco antiguo",
          "text": "Piedra, calles estrechas y poca luz. Se abren por dentro y se aíslan."
        },
        {
          "title": "Chalets grandes",
          "text": "Sótanos y garajes sin uso que pueden convertirse en wellness o cuarto de esquís."
        },
        {
          "title": "Casas para alquilar",
          "text": "Reformadas para vivirlas unas semanas y alquilarlas el resto del año."
        }
      ],
      "note": "Las normas de fachada, cubierta y carpintería exterior dependen de cada ayuntamiento. Las comprobamos antes de proponerle nada y tramitamos la licencia por usted."
    },
    "ca": {
      "h1": "Reformes a Llívia",
      "description": "Reformes de xalets i cases de pedra a Llívia: reforma integral, wellness i clau en mà per a propietaris que viuen lluny.",
      "intro": "Llívia és un municipi envoltat de territori francès, amb un nucli antic de pedra i xalets grans als afores. Molts propietaris venen de lluny i necessiten que l'obra avanci sense ells.",
      "houses": [
        {
          "title": "Cases del nucli antic",
          "text": "Pedra, carrers estrets i poca llum. S'obren per dins i s'aïllen."
        },
        {
          "title": "Xalets grans",
          "text": "Soterranis i garatges sense ús que es poden convertir en wellness o cambra d'esquís."
        },
        {
          "title": "Cases per llogar",
          "text": "Reformades per viure-hi unes setmanes i llogar-les la resta de l'any."
        }
      ],
      "note": "Les normes de façana, coberta i fusteria exterior depenen de cada ajuntament. Les comprovem abans de proposar-vos res i tramitem la llicència per vosaltres."
    },
    "fr": {
      "h1": "Rénovation à Llívia",
      "description": "Rénovation de chalets et de maisons en pierre à Llívia, enclave espagnole en Cerdagne : rénovation complète, bien-être et clé en main à distance.",
      "intro": "Llívia est une commune espagnole entourée de territoire français, avec un centre ancien en pierre et de grands chalets en périphérie. Beaucoup de propriétaires viennent de loin et ont besoin que le chantier avance sans eux.",
      "houses": [
        {
          "title": "Maisons du centre ancien",
          "text": "Pierre, rues étroites et peu de lumière. On les ouvre de l'intérieur et on les isole."
        },
        {
          "title": "Grands chalets",
          "text": "Des sous-sols et des garages inutilisés qui peuvent devenir un espace bien-être ou un local à skis."
        },
        {
          "title": "Maisons à louer",
          "text": "Rénovées pour y vivre quelques semaines et les louer le reste de l'année."
        }
      ],
      "note": "Côté espagnol, les règles de façade, de toiture et de menuiserie extérieure dépendent de chaque mairie. Nous les vérifions avant toute proposition et nous déposons la demande de permis pour vous."
    }
  },
  "bellver-de-cerdanya": {
    "es": {
      "h1": "Reformas en Bellver de Cerdanya",
      "description": "Reformas y rehabilitación de casas de pueblo y casas de piedra en Bellver de Cerdanya: aislamiento, eficiencia e interiorismo.",
      "intro": "Bellver tiene un casco antiguo en alto, sobre el Segre, y muchos pueblos pequeños a su alrededor, al pie del Cadí. Predominan las casas de pueblo de piedra, a menudo frías y húmedas, con mucho por ganar.",
      "houses": [
        {
          "title": "Casas de pueblo",
          "text": "Entre medianeras, con patio o corral. La reforma empieza por la humedad y el aislamiento."
        },
        {
          "title": "Casas de los pueblos agregados",
          "text": "Piedra, pajares y eras. Rehabilitaciones tranquilas, sin cambiar el aspecto del pueblo."
        },
        {
          "title": "Bordas y pajares",
          "text": "Volúmenes altos que pueden convertirse en vivienda cuando el planeamiento lo permite."
        }
      ],
      "note": "Las normas de fachada, cubierta y carpintería exterior dependen de cada ayuntamiento. Las comprobamos antes de proponerle nada y tramitamos la licencia por usted."
    },
    "ca": {
      "h1": "Reformes a Bellver de Cerdanya",
      "description": "Reformes i rehabilitació de cases de poble i cases de pedra a Bellver de Cerdanya: aïllament, eficiència i interiorisme.",
      "intro": "Bellver té un nucli antic enlairat, damunt del Segre, i molts pobles petits al voltant, al peu del Cadí. Hi predominen les cases de poble de pedra, sovint fredes i humides, amb molt per guanyar.",
      "houses": [
        {
          "title": "Cases de poble",
          "text": "Entre mitgeres, amb pati o corral. La reforma comença per la humitat i l'aïllament."
        },
        {
          "title": "Cases dels pobles agregats",
          "text": "Pedra, pallers i eres. Rehabilitacions tranquil·les, sense canviar l'aspecte del poble."
        },
        {
          "title": "Bordes i pallers",
          "text": "Volums alts que es poden convertir en habitatge quan el planejament ho permet."
        }
      ],
      "note": "Les normes de façana, coberta i fusteria exterior depenen de cada ajuntament. Les comprovem abans de proposar-vos res i tramitem la llicència per vosaltres."
    },
    "fr": {
      "h1": "Rénovation à Bellver de Cerdanya",
      "description": "Rénovation et réhabilitation de maisons de village et de maisons en pierre à Bellver de Cerdanya : isolation, efficacité énergétique et intérieur.",
      "intro": "Bellver a un centre ancien perché au-dessus du Sègre et de nombreux petits villages autour, au pied du Cadí. Les maisons de village en pierre y dominent, souvent froides et humides, avec beaucoup à gagner.",
      "houses": [
        {
          "title": "Maisons de village",
          "text": "Mitoyennes, avec patio ou cour. La rénovation commence par l'humidité et l'isolation."
        },
        {
          "title": "Maisons des hameaux",
          "text": "Pierre, fenils et aires de battage. Des réhabilitations discrètes, sans changer l'aspect du village."
        },
        {
          "title": "Granges et fenils",
          "text": "De hauts volumes qui peuvent devenir une habitation quand les règles d'urbanisme le permettent."
        }
      ],
      "note": "Côté espagnol, les règles de façade, de toiture et de menuiserie extérieure dépendent de chaque mairie. Nous les vérifions avant toute proposition et nous déposons la demande de permis pour vous."
    }
  },
  "das-urus": {
    "es": {
      "h1": "Reformas en Das y Urús",
      "description": "Reformas de chalets y casas de piedra en Das y Urús, en la solana del Cadí: reforma integral, eficiencia e interiorismo.",
      "intro": "Das y Urús son dos pueblos pequeños al pie del Cadí, cerca de la boca norte del túnel. Hay casas de piedra en los núcleos y chalets en las urbanizaciones, muchos de fin de semana.",
      "houses": [
        {
          "title": "Chalets de fin de semana",
          "text": "Pensados para estancias cortas. Agradecen una calefacción que se encienda a distancia."
        },
        {
          "title": "Casas de piedra",
          "text": "En los núcleos antiguos, con pajares anexos que pueden incorporarse a la vivienda."
        },
        {
          "title": "Casas con terreno",
          "text": "Parcelas grandes y vistas al valle, donde merece la pena abrir la casa al sur."
        }
      ],
      "note": "Las normas de fachada, cubierta y carpintería exterior dependen de cada ayuntamiento. Las comprobamos antes de proponerle nada y tramitamos la licencia por usted."
    },
    "ca": {
      "h1": "Reformes a Das i Urús",
      "description": "Reformes de xalets i cases de pedra a Das i Urús, al peu del Cadí: reforma integral, eficiència i interiorisme.",
      "intro": "Das i Urús són dos pobles petits al peu del Cadí, a prop de la boca nord del túnel. Hi ha cases de pedra als nuclis i xalets a les urbanitzacions, molts de cap de setmana.",
      "houses": [
        {
          "title": "Xalets de cap de setmana",
          "text": "Pensats per a estades curtes. Agraeixen una calefacció que s'encengui a distància."
        },
        {
          "title": "Cases de pedra",
          "text": "Als nuclis antics, amb pallers annexos que es poden incorporar a l'habitatge."
        },
        {
          "title": "Cases amb terreny",
          "text": "Parcel·les grans i vistes a la vall, on val la pena obrir la casa al sud."
        }
      ],
      "note": "Les normes de façana, coberta i fusteria exterior depenen de cada ajuntament. Les comprovem abans de proposar-vos res i tramitem la llicència per vosaltres."
    },
    "fr": {
      "h1": "Rénovation à Das et Urús",
      "description": "Rénovation de chalets et de maisons en pierre à Das et Urús, au pied du Cadí : rénovation complète, efficacité énergétique et intérieur.",
      "intro": "Das et Urús sont deux petits villages au pied du Cadí, près de l'entrée nord du tunnel. On y trouve des maisons en pierre dans les noyaux anciens et des chalets dans les lotissements, souvent occupés le week-end.",
      "houses": [
        {
          "title": "Chalets de week-end",
          "text": "Pensés pour de courts séjours. Un chauffage qui se lance à distance y est précieux."
        },
        {
          "title": "Maisons en pierre",
          "text": "Dans les noyaux anciens, avec des fenils attenants que l'on peut intégrer au logement."
        },
        {
          "title": "Maisons avec terrain",
          "text": "De grandes parcelles et des vues sur la vallée, où il vaut la peine d'ouvrir la maison au sud."
        }
      ],
      "note": "Côté espagnol, les règles de façade, de toiture et de menuiserie extérieure dépendent de chaque mairie. Nous les vérifions avant toute proposition et nous déposons la demande de permis pour vous."
    }
  },
  "font-romeu-bolquere": {
    "es": {
      "h1": "Reformas en Font-Romeu y Bolquère",
      "description": "Reformas de chalets y apartamentos en Font-Romeu y Bolquère, en la Cerdanya francesa: interior, aislamiento y cuarto de esquís.",
      "intro": "Font-Romeu y Bolquère comparten estación de esquí y mucho sol. Abundan los chalets de los años sesenta y setenta y los apartamentos en edificios de copropiedad, con madera oscura y poco aislamiento.",
      "houses": [
        {
          "title": "Chalets de los años setenta",
          "text": "Bien orientados y mal aislados. Se abren al sur y se aíslan conservando la madera exterior."
        },
        {
          "title": "Apartamentos de estación",
          "text": "La reforma es de interior: cocina, baño, almacenaje y un buen sitio para los esquís."
        },
        {
          "title": "Casas de pueblo",
          "text": "En Odeillo, Via y Bolquère, de piedra y con más carácter."
        }
      ],
      "note": "En el lado francés, las normas urbanísticas del municipio y, en los edificios en copropiedad, el reglamento de la comunidad marcan lo que se puede modificar. Lo comprobamos antes de proponerle nada."
    },
    "ca": {
      "h1": "Reformes a Font-romeu i Bolquera",
      "description": "Reformes de xalets i apartaments a Font-romeu i Bolquera, a l'Alta Cerdanya: interior, aïllament i cambra d'esquís.",
      "intro": "Font-romeu i Bolquera comparteixen estació d'esquí i molt de sol. Hi abunden els xalets dels anys seixanta i setanta i els apartaments en edificis de copropietat, amb fusta fosca i poc aïllament.",
      "houses": [
        {
          "title": "Xalets dels anys setanta",
          "text": "Ben orientats i mal aïllats. S'obren al sud i s'aïllen conservant la fusta exterior."
        },
        {
          "title": "Apartaments d'estació",
          "text": "La reforma és d'interior: cuina, bany, emmagatzematge i un bon lloc per als esquís."
        },
        {
          "title": "Cases de poble",
          "text": "A Odelló, Vià i Bolquera, de pedra i amb més caràcter."
        }
      ],
      "note": "Al costat francès, les normes urbanístiques del municipi i, als edificis en copropietat, el reglament de la comunitat marquen el que es pot modificar. Ho comprovem abans de proposar-vos res."
    },
    "fr": {
      "h1": "Rénovation de chalets à Font-Romeu et Bolquère",
      "description": "Rénovation de chalets et d'appartements à Font-Romeu et Bolquère : intérieur, isolation, ouvertures au sud et local à skis.",
      "intro": "Font-Romeu et Bolquère partagent un domaine skiable et beaucoup de soleil. On y trouve surtout des chalets des années 1960 et 1970 et des appartements en copropriété, avec du bois sombre et peu d'isolation.",
      "houses": [
        {
          "title": "Chalets des années 1970",
          "text": "Bien orientés et mal isolés. On les ouvre au sud et on les isole en gardant le bardage bois."
        },
        {
          "title": "Appartements de station",
          "text": "Une rénovation d'intérieur : cuisine, salle de bains, rangements et une vraie place pour les skis."
        },
        {
          "title": "Maisons de village",
          "text": "À Odeillo, Via et Bolquère, en pierre et avec plus de caractère."
        }
      ],
      "note": "Les règles d'urbanisme de la commune et, en copropriété, le règlement de l'immeuble encadrent ce qui peut être modifié. Nous les vérifions avant toute proposition."
    }
  },
  "bourg-madame": {
    "es": {
      "h1": "Reformas en Bourg-Madame",
      "description": "Reformas de casas y pisos en Bourg-Madame, en la Cerdanya francesa, junto a Puigcerdà: interior, aislamiento y cocinas y baños.",
      "intro": "Bourg-Madame está pegado a Puigcerdà, al otro lado de la frontera. Es un pueblo de casas de calle y viviendas de todo el año, con algunas casas con jardín en las afueras.",
      "houses": [
        {
          "title": "Casas de calle",
          "text": "Entre medianeras, con comercio en planta baja en algunos casos. Se renuevan por dentro."
        },
        {
          "title": "Casas con jardín",
          "text": "En las afueras, hacia el valle. Suelen necesitar aislamiento y ventanas."
        },
        {
          "title": "Pisos",
          "text": "Cocina, baños y carpintería a medida para ganar sitio."
        }
      ],
      "note": "En el lado francés, las normas urbanísticas del municipio y, en los edificios en copropiedad, el reglamento de la comunidad marcan lo que se puede modificar. Lo comprobamos antes de proponerle nada."
    },
    "ca": {
      "h1": "Reformes a la Guingueta d'Ix",
      "description": "Reformes de cases i pisos a la Guingueta d'Ix (Bourg-Madame), a tocar de Puigcerdà: interior, aïllament i cuines i banys.",
      "intro": "La Guingueta d'Ix és a tocar de Puigcerdà, a l'altra banda de la frontera. És un poble de cases de carrer i habitatges de tot l'any, amb algunes cases amb jardí als afores.",
      "houses": [
        {
          "title": "Cases de carrer",
          "text": "Entre mitgeres, amb comerç a la planta baixa en alguns casos. Es renoven per dins."
        },
        {
          "title": "Cases amb jardí",
          "text": "Als afores, cap a la vall. Solen necessitar aïllament i finestres."
        },
        {
          "title": "Pisos",
          "text": "Cuina, banys i fusteria a mida per guanyar lloc."
        }
      ],
      "note": "Al costat francès, les normes urbanístiques del municipi i, als edificis en copropietat, el reglament de la comunitat marquen el que es pot modificar. Ho comprovem abans de proposar-vos res."
    },
    "fr": {
      "h1": "Rénovation de maisons à Bourg-Madame",
      "description": "Rénovation de maisons et d'appartements à Bourg-Madame, à côté de Puigcerdà : intérieur, isolation, cuisines et salles de bains.",
      "intro": "Bourg-Madame touche Puigcerdà, de l'autre côté de la frontière. C'est un bourg de maisons de rue et de logements habités à l'année, avec quelques maisons avec jardin en périphérie.",
      "houses": [
        {
          "title": "Maisons de rue",
          "text": "Mitoyennes, parfois avec un commerce au rez-de-chaussée. On les renouvelle de l'intérieur."
        },
        {
          "title": "Maisons avec jardin",
          "text": "En périphérie, vers la vallée. Elles demandent souvent de l'isolation et des fenêtres."
        },
        {
          "title": "Appartements",
          "text": "Cuisine, salles de bains et menuiserie sur mesure pour gagner de la place."
        }
      ],
      "note": "Les règles d'urbanisme de la commune et, en copropriété, le règlement de l'immeuble encadrent ce qui peut être modifié. Nous les vérifions avant toute proposition."
    }
  },
  "saillagouse-err": {
    "es": {
      "h1": "Reformas en Saillagouse y Err",
      "description": "Reformas de casas de piedra y chalets en Saillagouse y Err, en la Cerdanya francesa: rehabilitación, aislamiento e interior.",
      "intro": "Saillagouse está en el centro del valle francés y Err, al pie del Puigmal. Son pueblos de casas de piedra con cubierta de pizarra, y de chalets más recientes en las laderas.",
      "houses": [
        {
          "title": "Casas de piedra",
          "text": "Muros gruesos y poca luz. Se conservan por fuera y se abren por dentro."
        },
        {
          "title": "Chalets de ladera",
          "text": "Buenas vistas y construcción sencilla. Mejoran mucho con aislamiento y ventanas."
        },
        {
          "title": "Antiguas granjas",
          "text": "Pajares y establos que pueden sumarse a la vivienda cuando las normas lo permiten."
        }
      ],
      "note": "En el lado francés, las normas urbanísticas del municipio y, en los edificios en copropiedad, el reglamento de la comunidad marcan lo que se puede modificar. Lo comprobamos antes de proponerle nada."
    },
    "ca": {
      "h1": "Reformes a Sallagosa i Er",
      "description": "Reformes de cases de pedra i xalets a Sallagosa i Er, a l'Alta Cerdanya: rehabilitació, aïllament i interior.",
      "intro": "Sallagosa és al centre de la vall i Er, al peu del Puigmal. Són pobles de cases de pedra amb coberta de pissarra, i de xalets més recents als vessants.",
      "houses": [
        {
          "title": "Cases de pedra",
          "text": "Murs gruixuts i poca llum. Es conserven per fora i s'obren per dins."
        },
        {
          "title": "Xalets de vessant",
          "text": "Bones vistes i construcció senzilla. Milloren molt amb aïllament i finestres."
        },
        {
          "title": "Antigues granges",
          "text": "Pallers i estables que es poden sumar a l'habitatge quan les normes ho permeten."
        }
      ],
      "note": "Al costat francès, les normes urbanístiques del municipi i, als edificis en copropietat, el reglament de la comunitat marquen el que es pot modificar. Ho comprovem abans de proposar-vos res."
    },
    "fr": {
      "h1": "Rénovation à Saillagouse et Err",
      "description": "Rénovation de maisons en pierre et de chalets à Saillagouse et Err, en Cerdagne : réhabilitation, isolation et intérieur.",
      "intro": "Saillagouse est au centre de la vallée et Err, au pied du Puigmal. Ce sont des villages de maisons en pierre aux toits d'ardoise, avec des chalets plus récents sur les versants.",
      "houses": [
        {
          "title": "Maisons en pierre",
          "text": "Des murs épais et peu de lumière. On les conserve dehors et on les ouvre dedans."
        },
        {
          "title": "Chalets de versant",
          "text": "De belles vues et une construction simple. L'isolation et les fenêtres y changent beaucoup."
        },
        {
          "title": "Anciennes fermes",
          "text": "Des granges et des étables que l'on peut joindre au logement quand les règles le permettent."
        }
      ],
      "note": "Les règles d'urbanisme de la commune et, en copropriété, le règlement de l'immeuble encadrent ce qui peut être modifié. Nous les vérifions avant toute proposition."
    }
  },
  "osseja-palau": {
    "es": {
      "h1": "Reformas en Osséja y Palau-de-Cerdagne",
      "description": "Reformas de casas de piedra y chalets en Osséja y Palau-de-Cerdagne, en la Cerdanya francesa: rehabilitación, eficiencia e interior.",
      "intro": "Osséja y Palau-de-Cerdagne están en el extremo sur de la Cerdanya francesa, junto a la frontera y a pocos minutos de Puigcerdà. Son pueblos tranquilos, con casas de piedra y algunas residencias secundarias.",
      "houses": [
        {
          "title": "Casas de pueblo",
          "text": "De piedra, con huerto o patio. La reforma se centra en el confort de invierno."
        },
        {
          "title": "Residencias secundarias",
          "text": "Casas que pasan semanas cerradas. Agradecen domótica sencilla y buena ventilación."
        },
        {
          "title": "Chalets",
          "text": "En las afueras, con vistas al valle y margen para abrirse al sol."
        }
      ],
      "note": "En el lado francés, las normas urbanísticas del municipio y, en los edificios en copropiedad, el reglamento de la comunidad marcan lo que se puede modificar. Lo comprobamos antes de proponerle nada."
    },
    "ca": {
      "h1": "Reformes a Oceja i Palau de Cerdanya",
      "description": "Reformes de cases de pedra i xalets a Oceja i Palau de Cerdanya, a l'Alta Cerdanya: rehabilitació, eficiència i interior.",
      "intro": "Oceja i Palau de Cerdanya són a l'extrem sud de l'Alta Cerdanya, a tocar de la frontera i a pocs minuts de Puigcerdà. Són pobles tranquils, amb cases de pedra i algunes segones residències.",
      "houses": [
        {
          "title": "Cases de poble",
          "text": "De pedra, amb hort o pati. La reforma se centra en el confort d'hivern."
        },
        {
          "title": "Segones residències",
          "text": "Cases que passen setmanes tancades. Agraeixen domòtica senzilla i bona ventilació."
        },
        {
          "title": "Xalets",
          "text": "Als afores, amb vistes a la vall i marge per obrir-se al sol."
        }
      ],
      "note": "Al costat francès, les normes urbanístiques del municipi i, als edificis en copropietat, el reglament de la comunitat marquen el que es pot modificar. Ho comprovem abans de proposar-vos res."
    },
    "fr": {
      "h1": "Rénovation à Osséja et Palau-de-Cerdagne",
      "description": "Rénovation de maisons en pierre et de chalets à Osséja et Palau-de-Cerdagne : réhabilitation, efficacité énergétique et intérieur.",
      "intro": "Osséja et Palau-de-Cerdagne sont à l'extrémité sud de la Cerdagne française, contre la frontière et à quelques minutes de Puigcerdà. Des villages calmes, avec des maisons en pierre et quelques résidences secondaires.",
      "houses": [
        {
          "title": "Maisons de village",
          "text": "En pierre, avec potager ou cour. La rénovation vise le confort d'hiver."
        },
        {
          "title": "Résidences secondaires",
          "text": "Des maisons fermées pendant des semaines. Une domotique simple et une bonne ventilation y sont utiles."
        },
        {
          "title": "Chalets",
          "text": "En périphérie, avec vue sur la vallée et de quoi s'ouvrir au soleil."
        }
      ],
      "note": "Les règles d'urbanisme de la commune et, en copropriété, le règlement de l'immeuble encadrent ce qui peut être modifié. Nous les vérifions avant toute proposition."
    }
  }
});
