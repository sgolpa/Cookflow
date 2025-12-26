const recipes = [
  {
    id: "tomato-soup",
    title: "Tomatsoppa",
    description: "",
    tags: ["soppa", "snabb", "lättsam", "vegetariskt"],
    time: 60,
    servings: 4,

    nutrition: {
      calories_per_serving: 320,
      
      carbs_g: null,
      fiber_g: null,
      sugar_g: null,

      protein_g: null,

      fat_g: null,
      saturated_fat_g: null,
      unsaturated_fat_g: null,

      cholesterol_mg: null,
      sodium_mg: null,
      potassium_mg: null  
    },

    ingredients: [
      { key: "tomato", label: "Tomater", amount: 400, unit: "g" },
      { key: "bell_pepper", label: "Paprika", amount: 1, unit: "st" },
      { key: "onion", label: "Lök", amount: 2, unit: "st" },
      { key: "garlic", label: "Vitlök", amount: 1, unit: "st" },

      { key: "olive_oil", label: "Olivolja", amount: null, unit: "" },
      { key: "salt", label: "Salt", amount: null, unit: "" },
      { key: "black_pepper", label: "Peppar", amount: null, unit: "" },
      { key: "chili_flakes", label: "Chiliflakes", amount: null, unit: "" },
      { key: "oregano", label: "Oregano", amount: null, unit: "" },

      { key: "basil", label: "Basilika", amount: 1, unit: "näve" },
      { key: "tomato_puree", label: "Tomatpuré", amount: 4, unit: "msk" },
      { key: "vegetable_broth", label: "Grönsaksbuljong", amount: 1, unit: "st" },
      { key: "whipped_cream", label: "Vispgrädde", amount: 2, unit: "dl" },

      { key: "water", label: "Vatten", amount: 2, unit: "dl", note: "2–3 dl beroende på konsistens" }
    ],

    steps: [
      "Sätt ugnen på 200°C.",
      "Dela paprikorna och den gula löken i halvor. Skär av toppen på vitlöken så att klyftornas snittyta syns.",
      "Lägg paprika, lök, vitlök och tomater i en ugnsform. Ringla över rikligt med olivolja och extra olja direkt på vitlöken. Krydda med oregano, salt och peppar.",
      "Rosta i ugnen i 30–40 minuter tills grönsakerna fått fin färg och blivit mjuka. Låt sedan svalna en stund då vitlöken är väldigt varma.",
      "Lägg de rostade grönsakerna i en kastrull. Tillsätt färsk basilika och pressa ut de mjuka vitlöksklyftorna. Mixa slätt med stavmixer.",
      "Rör ner tomatpuré, grönsaksbuljong, vispgrädde och vatten. Koka upp och smaka av med salt och peppar."
    ]
  },

  {
    id: "ghorme-sabzi",
    title: "Ghorme Sabzi",
    description: "",
    tags: ["gryta", "persiskt", "comfort food", "långkok"],
    time: 120,
    servings: 4,

    nutrition: {
      calories_per_serving: 780,
      
      carbs_g: null,
      fiber_g: null,
      sugar_g: null,

      protein_g: null,

      fat_g: null,
      saturated_fat_g: null,
      unsaturated_fat_g: null,

      cholesterol_mg: null,
      sodium_mg: null,
      potassium_mg: null  
    },

    ingredients: [
      { key: "herb_stew", label: "Örtgryta (Kamchin, utan bönor)", amount: 1, unit: "burk" },
      { key: "onion", label: "Gul lök", amount: 1, unit: "st" },

      { key: "dried_lime", label: "Torkad lime", amount: 3, unit: "st", note: "3–4 st" },

      { key: "beef", label: "Högrev", amount: 900, unit: "g" },

      { key: "curry", label: "Curry", amount: 1, unit: "tsk" },
      { key: "turmeric", label: "Gurkmeja", amount: 3, unit: "tsk" },
      { key: "garlic_powder", label: "Vitlökspulver", amount: 2, unit: "tsk" },
      { key: "black_pepper", label: "Svartpeppar", amount: 0.5, unit: "tsk" },

      { key: "kidney_beans", label: "Kidneybönor", amount: 2, unit: "förpackningar" }
    ],

    steps: [
      "Hacka löken.",
      "Fräs löken i olja i en gryta.",
      "Skär köttet i bitar. Putsa och skölj under vatten.",
      "Blanchera köttet snabbt, skumma av och skölj av.",
      "Stek kött och lök tillsammans.",
      "Krydda med curry, gurkmeja, vitlökspulver och svartpeppar.",
      "Häll i örtgrytan (Kamchin). Låt steka några minuter.",
      "Häll i kokande vatten så att det knappt täcker.",
      "Gör hål i de torkade limen med en gaffel (3–4 st) och lägg dem i ett glas vatten.",
      "Låt koka tills köttet är klart, ca 1,5 timme. Fyll på kokande vatten vid behov.",
      "När köttet är klart, tillsätt kidneybönor och de blötlagda limen. Tillsätt eventuellt mer vatten.",
      "Låt puttra i ca 20 minuter.",
      "Servera med ris."
    ]
  },

  {
    id: "cod-dill-sauce",
    title: "Torsk med dillsås",
    description: "",
    tags: ["fisk", "torsk", "husmanskost"],
    time: 40,
    servings: 4,

    nutrition: {
      calories_per_serving: 550,

      carbs_g: 4.2,
      fiber_g: 0.1,
      sugar_g: 1.8,

      protein_g: 21.4,

      fat_g: 5.1,
      saturated_fat_g: 3,
      unsaturated_fat_g: 1.6,

      cholesterol_mg: 0,
      sodium_mg: 348.2,
      potassium_mg: 16.1
  },

    ingredients: [
      { key: "cod", label: "Torskrygg (eller torskfilé)", amount: 800, unit: "g", section: "fisk" },
      { key: "potato", label: "Potatis, kokt, kall och riven", amount: null, unit: "", section: "fisk" },
      { key: "butter", label: "Smör", amount: 1, unit: "msk", section: "fisk" },

      { key: "cooking_cream", label: "Matlagningsgrädde", amount: 2.5, unit: "dl", section: "sås" },
      { key: "fish_stock", label: "Fiskbuljongtärning", amount: 1, unit: "st", section: "sås" },
      { key: "creme_fraiche", label: "Crème fraîche", amount: 2, unit: "dl", section: "sås" },
      { key: "lemon", label: "Citron, pressad", amount: 0.5, unit: "msk", section: "sås", note: "0,5–1 msk efter smak" },
      { key: "dill", label: "Färsk dill, finhackad", amount: 1, unit: "dl", section: "sås" }
    ],

    steps: [
      "Sätt ugnen på 200°C. Täck fisken med potatis och en klick smör. Stek i 20 minuter.",
      "Gör såsen medan fisken står i ugnen: Koka upp grädde och fiskbuljong. Tillsätt crème fraîche och koka upp under omrörning.",
      "Smaka av med citron, dill, salt och peppar.",
      "Häll en spegel av sås på varma tallrikar. Servera med potatis."
    ]
  },

  {
    id: "taco-pie",
    title: "Tacopaj med crème fraîche",
    description: "",
    tags: ["paj", "mexikanskt"],
    time: 60,
    servings: 4,

    nutrition: {
      calories_per_serving: 950,
      
      carbs_g: null,
      fiber_g: null,
      sugar_g: null,

      protein_g: null,

      fat_g: null,
      saturated_fat_g: null,
      unsaturated_fat_g: null,

      cholesterol_mg: null,
      sodium_mg: null,
      potassium_mg: null  
    },

    ingredients: [
      { key: "butter", label: "Smör", amount: 100, unit: "g", section: "pajdeg" },
      { key: "flour", label: "Vetemjöl", amount: 3.5, unit: "dl", section: "pajdeg" },
      { key: "water", label: "Vatten", amount: 3, unit: "msk", section: "pajdeg" },
      { key: "salt", label: "Salt", amount: 1, unit: "tsk", section: "pajdeg" },

      { key: "beef", label: "Nötfärs", amount: 500, unit: "g", section: "fyllning" },
      { key: "taco_mix", label: "Taco kryddmix", amount: 1, unit: "förpackning", section: "fyllning" },
      { key: "lime", label: "Lime, skal och saft", amount: 1, unit: "st", section: "fyllning" },
      { key: "chili", label: "Chilifrukt", amount: 1, unit: "st", section: "fyllning" },
      { key: "coriander", label: "Färsk koriander", amount: 1, unit: "kruka", section: "fyllning" },
      { key: "onion", label: "Gul lök", amount: 1, unit: "st", section: "fyllning" },
      { key: "tomato", label: "Kvisttomat", amount: 1, unit: "st", section: "fyllning" },

      { key: "creme_fraiche", label: "Crème fraîche", amount: 4, unit: "dl", section: "toppning" },
      { key: "cheese", label: "Lagrad ost, riven", amount: 150, unit: "g", section: "toppning" }
    ],

    steps: [
      "Sätt ugnen på 225°C.",
      "Blanda smör, vetemjöl, vatten och salt till pajdegen i maskin eller för hand.",
      "Tryck ut degen i en pajform och se till att den går upp ordentligt längs kanterna.",
      "Förgrädda pajskalet i ca 10 minuter tills det fått lite färg (valfritt).",

      "Stek nötfärsen i olja i en stekpanna.",
      "Tillsätt taco kryddmix enligt instruktionerna på förpackningen.",
      "Hacka chilin och rör ner i färsen.",
      "Riv skalet av limen och pressa ur saften. Tillsätt till färsen.",
      "Hacka en kruka koriander och blanda i färsen.",
      "Fyll pajskalet med tacofärsen.",

      "Skiva gul lök och tomat. Lägg ett lager ovanpå färsen.",
      "Bred ut crème fraîche som nästa lager.",
      "Toppa med riven ost.",

      "Grädda pajen i ca 20 minuter tills osten fått fin färg.",
      "Om pajen får färg för snabbt, täck med folie så den inte bränns."
    ]
  },

  {
    id: "tabbouleh",
    title: "Tabbouleh",
    description: "",
    tags: ["sallad", "mellanöstern", "vegetariskt", "snabb", "syrlig" ],
    time: 30,
    servings: 4,

    nutrition: {
      calories_per_serving: 277,
      
      carbs_g: null,
      fiber_g: null,
      sugar_g: null,

      protein_g: null,

      fat_g: null,
      saturated_fat_g: null,
      unsaturated_fat_g: null,

      cholesterol_mg: null,
      sodium_mg: null,
      potassium_mg: null  
    },

    ingredients: [
      { key: "bulgur", label: "Bulgur", amount: 200, unit: "g" },
      { key: "salt", label: "Salt", amount: null, unit: ""},
      { key: "black_pepper", label: "Svartpeppar", amount: null, unit: "" },

      { key: "pistachios", label: "Pistagenötter", amount: 50, unit: "g" },
      { key: "mint", label: "Färsk mynta", amount: 1, unit: "knippe" },
      { key: "parsley", label: "Färsk bladpersilja", amount: 2, unit: "knippen" },

      { key: "spring_onion", label: "Salladslök", amount: 4, unit: "st" },
      { key: "tomato", label: "Tomater", amount: 4, unit: "st" },

      { key: "lemon_juice", label: "Citronsaft", amount: 2, unit: "st" },
      { key: "olive_oil", label: "Olivolja", amount: 4, unit: "msk" },

      { key: "pomegranate", label: "Granatäpple", amount: 1, unit: "st" },
      { key: "sumac", label: "Sumak", amount: 0.5, unit: "tsk" }
    ],

    steps: [
      "Skölj bulgurn i kallt vatten och koka den enligt anvisningarna på förpackningen i saltat vatten.",
      "Häll av och låt bulgurn svalna helt.",
      "Rosta pistagenötterna i en torr stekpanna på medelvärme, grovhacka dem och lägg i en stor skål.",
      "Finhacka mynta och persilja (endast bladen) och lägg i skålen.",
      "Trimma salladslöken och grovhacka dem. Hacka tomaterna och lägg allt i skålen.",
      "Tillsätt citronsaft, olivolja, salt och svartpeppar och blanda väl.",
      "Fluffa upp bulgurn med en gaffel och blanda ner i skålen.",
      "Halvera granatäpplet och slå ut kärnorna över skålen.",
      "Smaka av, strö över sumak och servera."
    ]
  }
];

export default recipes;
