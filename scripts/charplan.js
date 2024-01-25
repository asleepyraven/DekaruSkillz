(function ($) {
  var skills, credits, methods;

  credits = [
    0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 23, 26, 29, 32, 35, 40,
    45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125,
    130, 140, 150, 160, 180, 200, 225, 250, 275,
  ];

  skills = {
    Alchemy: {
      name: "Alchemy",
      formula: "(C+F)/3",
      train: 4,
      spec: 4,
      status: "Unusable",
    },
    "Arcane Lore": {
      name: "Arcane Lore",
      formula: "F/3",
      train: 0,
      spec: 2,
      status: "Trained",
    },
    Assess: {
      name: "Assess",
      formula: "(F+W)/2",
      train: 4,
      spec: 2,
      status: "Unusable",
    },
    Cooking: {
      name: "Cooking",
      formula: "(C+F)/3",
      train: 4,
      spec: 4,
      status: "Unusable",
    },
    Deception: {
      name: "Deception",
      formula: "(C+W)/4",
      train: 2,
      spec: 2,
      status: "Unusable",
    },
    "Dual Wield": {
      name: "Dual Wield",
      formula: "(C+C)/3",
      train: 2,
      spec: 2,
      status: "Unusable",
    },
    Dagger: {
      name: "Dagger",
      formula: "(C+Q)/3",
      train: 6,
      spec: 4,
      status: "Untrained",
    },
    "Spear and Staff": {
      name: "Spear and Staff",
      formula: "(C+Q)/3",
      train: 6,
      spec: 4,
      status: "Untrained",
    },
    "Axe and Mace": {
      name: "Axe and Mace",
      formula: "(S+C)/3",
      train: 6,
      spec: 4,
      status: "Untrained",
    },
    "Thrown Weapons": {
      name: "Thrown Weapons",
      formula: "(S+C)/3",
      train: 6,
      spec: 6,
      status: "Untrained",
    },
    "Unarmed Combat": {
      name: "Unarmed Combat",
      formula: "(F+C)/3",
      train: 6,
      spec: 4,
      status: "Untrained",
    },
    Armor: {
      name: "Armor",
      formula: "(S+15)/2",
      train: 4,
      spec: 2,
      status: "Untrained",
    },
    Appraisal: {
      name: "Appraisal",
      formula: "(F+W)/2",
      train: 4,
      spec: 2,
      status: "Unusable",
    },
    Fletching: {
      name: "Fletching",
      formula: "(C+F)/3",
      train: 4,
      spec: 4,
      status: "Unusable",
    },
    Healing: {
      name: "Healing",
      formula: "(F+C)/3",
      train: 6,
      spec: 4,
      status: "Unusable",
    },
    Sword: {
      name: "Sword",
      formula: "(S+C)/3",
      train: 6,
      spec: 6,
      status: "Untrained",
    },
    Jump: {
      name: "Jump",
      formula: "(S+C)/2",
      train: 0,
      spec: 4,
      status: "N/A",
    },
    Leadership: {
      name: "Leadership",
      formula: "W/4",
      train: 4,
      spec: 2,
      status: "Untrained",
    },
    "Life Magic": {
      name: "Life Magic",
      formula: "(F+W)/4",
      train: 12,
      spec: 8,
      status: "Unusable",
    },
    Lockpick: {
      name: "Lockpick",
      formula: "(C+F)/3",
      train: 6,
      spec: 4,
      status: "Unusable",
    },
    Loyalty: {
      name: "Loyalty",
      formula: "W/4",
      train: 0,
      spec: 2,
      status: "N/A",
    },
    "Magic Defense": {
      name: "Magic Defense",
      formula: "(F+W)/7",
      train: 0,
      spec: 12,
      status: "N/A",
    },
    "Mana Conversion": {
      name: "Mana Conversion",
      formula: "(F+W)/6",
      train: 6,
      spec: 6,
      status: "Unusable",
    },
    "Melee Defense": {
      name: "Melee Defense",
      formula: "(Q+C)/3",
      train: 10,
      spec: 10,
      status: "Untrained",
    },
    "Missile Defense": {
      name: "Missile Defense",
      formula: "(Q+C)/5",
      train: 6,
      spec: 4,
      status: "Untrained",
    },
    "Bow and Crossbow": {
      name: "Bow and Crossbow",
      formula: "C/2",
      train: 6,
      spec: 6,
      status: "Untrained",
    },
    Sneaking: {
      name: "Sneaking",
      formula: "(C+F)/2",
      train: 4,
      spec: 4,
      status: "Untrained",
    },
    Awareness: {
      name: "Awareness",
      formula: "(C+F)/3",
      train: 4,
      spec: 4,
      status: "Untrained",
    },
    Run: {
      name: "Run",
      formula: "Q",
      train: 0,
      spec: 4,
      status: "N/A",
    },
    Salvaging: {
      name: "Salvaging",
      formula: "(C+F)/2",
      train: 2,
      spec: 0,
      status: "Untrained",
    },
    Shield: {
      name: "Shield",
      formula: "(S+C)/4",
      train: 4,
      spec: 2,
      status: "Unusable",
    },
    "War Magic": {
      name: "War Magic",
      formula: "(F+W)/4",
      train: 12,
      spec: 8,
      status: "Unusable",
    },
  };

  methods = {
    creditsAt: function (level) {
      var c = 0;
      $.each(credits, function (i, v) {
        if (v > level) {
          return false;
        }
        c = i;
      });

      return 50 + c;
    },
    levelFor: function (c) {
      var cc = c > 50 ? c - 50 : c;
      return credits[cc] || 275;
    },
  };

  window.GameData = $.extend(
    {
      skills: skills,
    },
    methods
  );
})(jQuery);
