Hooks.once('init', async function() {
  // Add new class feature types for validation
  foundry.utils.mergeObject(CONFIG.DND5E.featureTypes.class.subtypes, {
    bloodragerDiscipline: "SpellboundSea.BloodragerDiscipline",
    debonairDeed: "SpellboundSea.DebonairDeed",
    mysticSong: "SpellboundSea.MysticSong",
    trickOfTheTrade: "SpellboundSea.TrickOfTheTrade"
  });

  CONFIG.DND5E.itemProperties.flintlock = {
    label: "SpellboundSea.Flintlock.Label",
    abbreviation: "SpellboundSea.Flintlock.Abbreviation",
    reference: "Compendium.songs-of-the-spellbound-sea.sbs-text.JournalEntry.kozQfLt5294RRRJo"
  }
  CONFIG.DND5E.validProperties.weapon.add("flintlock");

  CONFIG.DND5E.itemProperties.matchlock = {
    label: "SpellboundSea.Matchlock.Label",
    abbreviation: "SpellboundSea.Matchlock.Abbreviation",
    reference: "Compendium.songs-of-the-spellbound-sea.sbs-text.JournalEntry.kozQfLt5294RRRJo"
  }
  CONFIG.DND5E.validProperties.weapon.add("matchlock");

//  CONFIG.DND5E.itemProperties.ferromancy = {
//    label: "SpellboundSea.Ferromancy.Label",
//    abbreviation: "SpellboundSea.Ferromancy.Abbreviation",
//    reference: "TBD"
//  }
//  CONFIG.DND5E.validProperties.spell.add("ferromancy");
//
//  CONFIG.DND5E.itemProperties.stormSpell = {
//    label: "SpellboundSea.StormSpell.Label",
//    abbreviation: "SpellboundSea.StormSpell.Abbreviation",
//    reference: "TBD"
//  }
//  CONFIG.DND5E.validProperties.spell.add("stormSpell");
//
//  CONFIG.DND5E.itemProperties.wildMagic = {
//    label: "SpellboundSea.WildMagic.Label",
//    abbreviation: "SpellboundSea.WildMagic.Abbreviation",
//    reference: "TBD"
//  }
//  CONFIG.DND5E.validProperties.spell.add("wildMagic");

});
