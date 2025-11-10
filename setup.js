Hooks.once('init', () => {

	//Adds new class feature types
	CONFIG.DND5E.featureTypes.class.subtypes.mythicTale = "Mythic Tale";
	CONFIG.DND5E.featureTypes.class.subtypes.feralSwipe = "Feral Swipe";
	CONFIG.DND5E.featureTypes.class.subtypes.beastlordsAspect = "Beastlord's Aspect";
	CONFIG.DND5E.featureTypes.class.subtypes.runemark = "Runemark";
	CONFIG.DND5E.featureTypes.class.subtypes.enhancedRunemark = "Enhanced Runemark";
	CONFIG.DND5E.featureTypes.class.subtypes.forgewroughtAugmentation = "Forgewrought Augmentation";

  // Make Psionics a valid spellcasting school
  CONFIG.DND5E.spellSchools.psi = {
    label: 'KCCC.SchoolPsi',
    icon: 'modules/kibbles-compendium-of-craft-and-creation/assets/psionics.svg',
    fullKey: 'psionic',
    reference: '',
  };
 });
 