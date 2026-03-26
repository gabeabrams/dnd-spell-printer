// Import shared types
import Spell from '../types/Spell';

/**
 * List of additional spells to be included in the spell list,
 * but that are not part of the basic 5e spells from the scraper
 * @author Gabe Abrams
 */
const additionalSpells: Spell[] = [
  {
    id: 'alustriels-mooncloak',
    name: 'Alustriel\'s Mooncloak',
    level: 5,
    isAttack: false,
    castingTime: 'Action',
    range: 'Self',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: 'a moonstone worth 50+ GP',
    isConcentration: true,
    duration: '1m',
    descriptionHTML: `
For the duration, moonlight fills a 20-foot Emanation originating from you with Dim Light. While in that area, you and your allies have Half Cover and Resistance to Cold, Lightning, and Radiant damage.
While the spell lasts, you can use one of the following options, ending the spell immediately:
<strong>Liberation.</strong> When you fail a saving throw to avoid or end the Frightened, Grappled, or Restrained condition, you can take a Reaction to succeed on the save instead.
<strong>Respite.</strong> As a Magic action, you or an ally within the area regains Hit Points equal to 4d10 plus your spellcasting ability modifier.
    `.trim(),
    classes: ['Bard', 'Druid', 'Ranger', 'Wizard'],
  },
  {
    id: 'backlash',
    name: 'Backlash',
    castingTime: 'Reaction',
    level: 4,
    isAttack: false,
    range: '60 feet',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: false,
    materialCost: '',
    isConcentration: false,
    duration: 'Instantaneous',
    descriptionHTML: `
    Reaction, which you take in response to taking damage.
You ward yourself against destructive energy, reducing the damage taken by 4d6 plus your spellcasting ability modifier.
If the triggering damage was from a creature within range, you can force the creature to make a Constitution saving throw. The creature takes 4d6 Force damage on a failed save or half as much damage on a successful one.
Using a Higher - Level Spell Slot. The damage reduction and Force damage from this spell both increase by 1d6 for every spell slot level above 4.
    `.trim(),
    classes: ['Bard', 'Sorcerer', 'Warlock', 'Wizard'],
  },
  {
    id: 'blade-of-disaster',
    name: 'Blade of Disaster',
    level: 9,
    castingTime: 'Bonus',
    isAttack: true,
    range: '60 feet',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: false,
    materialCost: '',
    isConcentration: true,
    duration: '1m',
    descriptionHTML: `
You create a 3-foot-long blade-shaped planar rift that lasts for the duration. The rift appears within range in a space of your choice, and you can immediately make up to two melee spell attacks, each one against a creature or object within 5 feet of the rift. On a hit, the target takes 10d6 Force damage. This attack scores a Critical Hit if the number on the d20 is 18 or higher.
As a Bonus Action on your later turns, you can move the rift up to 60 feet and repeat the two attacks against a creature or an object within 5 feet of it. You can direct the attacks at the same target or at different ones.
The blade can harmlessly pass through any barrier, including ones created by spells like Wall of Force.
    `.trim(),
    classes: ['Sorcerer', 'Warlock', 'Wizard'],
  },
  {
    id: 'cacophonic-shield',
    name: 'Cacophonic Shield',
    level: 3,
    isAttack: false,
    castingTime: 'Action',
    range: 'Self',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: false,
    materialCost: '',
    isConcentration: true,
    duration: '1m',
    descriptionHTML: `
Thunderous reverberations fill a 10-foot Emanation originating from you for the duration. Whenever the Emanation enters a creature\'s space and whenever a creature enters the Emanation or ends its turn there, the creature makes a Constitution saving throw. On a failed save, the creature takes 3d6 Thunder damage and has the Deafened condition until the start of your next turn. On a successful save, the creature takes half as much damage only. A creature makes this save only once per turn. When you cast this spell, you can designate creatures to be unaffected by it.
In addition, you have Resistance to Thunder damage, and ranged attack rolls against you are made with Disadvantage.
Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3.
    `.trim(),
    classes: ['Bard', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'conjure-constructs',
    name: 'Conjure Constructs',
    level: 3,
    isAttack: true,
    range: '60 feet',
    isRitual: false,
    castingTime: 'Action',
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: 'a brass cog',
    isConcentration: true,
    duration: 'Concentration, up to 10 minutes',
    descriptionHTML: `
      You conjure a group of intangible, orderly spirits that appear as a Medium group of modrons or other Constructs in an unoccupied space you can see within range. The spirits last for the duration.
When you cast this spell and as a Magic action on subsequent turns, you can command the spirits to target one creature or object you can see within 5 feet of the spirits and create one of the following effects:
Clockwork Force. The target makes a Dexterity saving throw, taking 3d6 Force damage on a failed save or half as much damage on a successful one.
Orderly Ward. The target gains Temporary Hit Points equal to 1d6 plus your spellcasting ability modifier.
When you move on your turn, you can also move the spirits up to 30 feet to an unoccupied space you can see.
Using a Higher-Level Spell Slot. The damage and Temporary Hit Points both increase by 1d6 for each spell slot level above 3.
    `.trim(),
    classes: ['Wizard'],
  },
  {
    id: 'death-armor',
    name: 'Death Armor',
    level: 2,
    isAttack: false,
    range: 'Touch',
    castingTime: 'Action',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: 'an onyx worth 50 GP, which the spell consumes',
    isConcentration: false,
    duration: '1 hour',
    descriptionHTML: `
For the duration, an inky aura surrounds one creature you touch. The target has Advantage on Death Saving Throws, and once per turn, when a creature within 5 feet of the target hits it with a melee attack roll, the attacker takes 2d4 Necrotic damage.
    `.trim(),
    classes: ['Sorcerer', 'Wizard'],
  },
  {
    id: 'deryans-helpful-homunculi',
    name: 'Deryan\'s Helpful Homunculi',
    level: 2,
    isAttack: false,
    range: 'Self',
    isRitual: true,
    castingTime: 'Action',
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: 'powdered gemstones worth 100 GP, which the spell consumes, and one set of Artisan\'s Tools with which you have proficiency',
    isConcentration: false,
    duration: '8 hours',
    descriptionHTML: `
You summon a group of helpful spirits, which lasts for the duration. The spirits appear as homunculi or as another Construct of your choice but are intangible and invulnerable, and they are considered to have proficiency in the Arcana skill and with the set of Artisan\'s Tools used in the spell\'s casting.
If you are crafting an item, the spirits function as a single assistant for your crafting, halving the crafting time.
    `.trim(),
    classes: ['Cleric', 'Wizard'],
  },
  {
    id: 'dirge',
    name: 'Dirge',
    level: 6,
    isAttack: false,
    castingTime: 'Action',
    materialCost: '',
    range: 'Self',
    isRitual: false,
    isVerbal: true,
    isSomatic: false,
    isMaterial: false,
    isConcentration: true,
    duration: '1m',
    descriptionHTML: `
Deathly power fills a 60-foot Emanation originating from you for the duration.
When you cast this spell, you can designate creatures to be unaffected by it. Any other creature can\'t regain Hit Points while in the Emanation. Whenever the Emanation enters a creature\'s space and whenever a creature enters the Emanation or ends its turn there, the creature makes a Constitution saving throw. On a failed save, the creature takes 3d10 Necrotic damage and has the Prone condition. On a successful save, the creature takes half as much damage and its Speed is halved. A creature makes this save only once per turn.
Casting as a Circle Spell. Casting this as a Circle spell requires a minimum of two secondary casters. If the spell is cast as a Circle spell, its duration becomes Concentration, up to 10 minutes.
A creature that fails its save against the spell\'s effect also gains 1 Exhaustion level. While the creature has Exhaustion levels, finishing a Long Rest neither restores lost Hit Points nor reduces the creature\'s Exhaustion level.
When the spell is cast, each secondary caster must expend a level 4 + spell slot; otherwise, the spell fails.
    `.trim(),
    classes: ['Bard', 'Cleric'],
  },
  {
    id: 'doomtide',
    name: 'Doomtide',
    castingTime: 'Action',
    level: 4,
    isAttack: false,
    range: '120 feet',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: 'soot and a dried eel',
    isConcentration: true,
    duration: '1m',
    descriptionHTML: `
You create a 20-foot-radius Sphere of inky fog within range. The fog is magical Darkness and lasts for the duration or until a strong wind (such as the one created by the Gust of Wind spell) disperses it, ending the spell.
Each creature in the Sphere when it appears makes a Wisdom saving throw. On a failed save, a creature takes 5d6 Psychic damage and subtracts 1d6 from its saving throws until the end of its next turn. On a successful save, a creature takes half as much damage only. A creature also makes this save when the Sphere moves into its space, when it enters the Sphere, or when it ends its turn inside the Sphere. A creature makes this save only once per turn.
The Sphere moves 10 feet away from you at the start of each of your turns.
    `.trim(),
    classes: ['Bard', 'Cleric', 'Warlock'],
  },
  {
    id: 'elminsters-effulgent-spheres',
    name: 'Elminster\'s Effulgent Spheres',
    level: 6,
    isAttack: true,
    range: 'Self',
    castingTime: 'Action',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: 'an opal worth 1,000 GP or more',
    isConcentration: false,
    duration: '1 hour',
    descriptionHTML: `
Six chromatic spheres orbit you for the duration.
While the spheres are present, you can expend spheres to create the following effects:
Absorb Energy. When you take Acid, Cold, Fire, Lightning, or Thunder damage, you can take a Reaction to expend one sphere and give yourself Resistance to the triggering damage type until the start of your next turn.
Energy Blast. As a Bonus Action, you send one sphere hurtling toward a target within 120 feet of yourself. Make a ranged spell attack. On a hit, the target takes 3d6 Acid, Cold, Fire, Lightning, or Thunder damage (your choice). Regardless of whether you hit, the sphere is expended.
The spell ends early if you have no more spheres remaining.
Using a Higher-Level Spell Slot. The number of spheres increases by 1 for every spell slot level above 6.
    `.trim(),
    classes: ['Druid', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'elminsters-elusion',
    name: 'Elminster\'s Elusion',
    level: 2,
    materialCost: '',
    isAttack: false,
    castingTime: 'Bonus',
    range: 'Self',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: false,
    isConcentration: true,
    duration: '10m',
    descriptionHTML: `
Arcane wards protect you against magic for the duration. You have Advantage on saving throws against spells and magical effects. Additionally, if you succeed on a saving throw against a spell or magical effect and would normally take half as much damage, you instead take no damage.
    `.trim(),
    classes: ['Wizard'],
  },
  {
    id: 'holy-star-of-mystra',
    name: 'Holy Star of Mystra',
    level: 8,
    isAttack: true,
    range: 'Self',
    castingTime: 'Bonus',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: false,
    materialCost: '',
    isConcentration: true,
    duration: '1m',
    descriptionHTML: `
You create a glowing mote of energy that hovers above you for the duration.The mote sheds Bright Light in a 5 - foot radius and Dim Light for an additional 5 feet.
When you cast this spell and as a Bonus Action on later turns, you can unleash a shining bolt from the mote, targeting one creature within 120 feet of yourself.Make a ranged spell attack.On a hit, the target takes Force or Radiant damage(your choice) equal to 4d10 plus your spellcasting ability modifier.
In addition, while the mote is present, you have Three - Quarters Cover, and if you succeed on a saving throw against a spell of level 7 or lower that targeted only you and didn’t create an area of effect, you can take a
  Reaction to deflect that spell back at the spell’s caster; the caster makes a saving throw against that spell using that caster’s own spell save DC.
    `.trim(),
    classes: ['Cleric', 'Wizard'],
  },
  {
    id: 'laerals-silver-lance',
    name: 'Laeral\'s Silver Lance',
    level: 3,
    isAttack: true,
    range: 'Self',
    isRitual: false,
    castingTime: 'Action',
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: 'a silver pin worth 250+ GP',
    isConcentration: false,
    duration: 'Instantaneous',
    descriptionHTML: `
Silver energy bursts out from you in a 120-foot-long, 5-foot-wide Line. Each creature of your choice in the Line makes a Strength saving throw. On a failed save, a creature takes 3d10 Force damage and has the Prone condition. On a successful save, a creature takes half as much damage only.
Using a Higher-Level Spell Slot. The damage increases by 1d10 for every spell slot level above 3rd.
    `.trim(),
    classes: ['Cleric', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'simbuls-synostodweomer',
    name: 'Simbul\'s Synostodweomer',
    level: 7,
    castingTime: 'Action',
    isAttack: false,
    range: 'Touch',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: false,
    materialCost: '',
    isConcentration: false,
    duration: '1 hour',
    descriptionHTML: `
You imbue one creature you touch with magical healing energy for the duration. Whenever the target casts a spell using a spell slot, the target can immediately roll a number of unexpended Hit Point Dice equal to the spell slot\'s level and regain Hit Points equal to the roll\'s total plus your spellcasting ability modifier; those dice are then expended.
    `.trim(),
    classes: ['Sorcerer', 'Wizard'],
  },
  {
    id: 'songals-elemental-suffusion',
    name: 'Songal\'s Elemental Suffusion',
    level: 5,
    isAttack: false,
    range: 'Self',
    isRitual: false,
    castingTime: 'Action',
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: 'a pearl worth 100+ GP',
    isConcentration: true,
    duration: '1m',
    descriptionHTML: `
You imbue yourself with the elemental power of genies. You gain the following benefits until the spell ends:
<strong>Elemental Immunity.</strong> When you cast this spell, choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. You have Resistance to the chosen damage type.
<strong>Elemental Pulse.</strong> When you cast this spell and at the start of each of your subsequent turns, you release a burst of elemental energy in a 15-foot Emanation originating from yourself. Each creature of your choice in that area makes a Dexterity saving throw. On a failed save, a creature takes 2d6 Acid, Cold, Fire, Lightning, or Thunder damage (your choice) and has the Prone condition. On a successful save, a creature takes half as much damage only.
<strong>Flight.</strong> You gain a Fly Speed of 30 feet and can hover.
    `.trim(),
    classes: ['Druid', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'spellfire-flare',
    name: 'Spellfire Flare',
    level: 1,
    isAttack: true,
    range: '60 feet',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: false,
    castingTime: 'Action',
    materialCost: '',
    isConcentration: false,
    duration: 'Instantaneous',
    descriptionHTML: `
You unleash a blast of brilliant fire. Make a ranged spell attack against a target within range; a target gains no benefit from Half Cover or Three-Quarters Cover for this attack roll. On a hit, the target takes 2d10 Radiant damage.
Using a Higher-Level Spell Slot. You create an additional blast for each spell slot level above 1st. You can direct the blasts at the same target or at different ones. Make a separate attack roll for each blast.
    `.trim(),
    classes: ['Sorcerer', 'Wizard'],
  },
  {
    id: 'spellfire-storm',
    name: 'Spellfire Storm',
    level: 4,
    isAttack: false,
    range: '60 feet',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    castingTime: 'Action',
    isMaterial: false,
    materialCost: '',
    isConcentration: true,
    duration: '1m',
    descriptionHTML: `
You conjure a pillar of spellfire in a 20 - foot - radius, 20 - foot - high Cylinder centered on a point within range.The area of the Cylinder is Bright Light, and each creature in it when it appears makes a Constitution saving throw, taking 4d10 Radiant damage on a failed save or half as much damage on a successful one.A creature also makes this save when it enters the spell\'s area for the first time on a turn or ends its turn there.A creature makes this save only once per turn.
In addition, whenever a creature in the Cylinder casts a spell, that creature makes a Constitution saving throw.On a failed save, the spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted.If that spell was cast with a spell slot, the slot isn\'t expended.
When you cast this spell, you can designate creatures to be unaffected by it.
Casting as a Circle Spell.In addition to the spell\'s usual components, you must provide a special component(a blue star sapphire worth 25,000 + GP), which the spell consumes.The spell\'s range increases to 1 mile, and it no longer requires Concentration.When the spell is cast, each secondary caster must expend a level 3 + spell slot; otherwise, the spell fails.
Using a Higher - Level Spell Slot.The damage increases by 1d10 for every spell slot level above 4.
The number of secondary casters determines the spell\'s area of effect and duration, as shown in the table below.The spell ends early if any caster who participated in this casting contributes to another casting of Spellfire Storm as a Circle spell.
Secondary Casters	Area of Effect	Duration
1–3	40 - foot - radius, 40 - foot - high Cylinder	1 hour
4–6	60 - foot - radius, 60 - foot - high Cylinder	8 hours
7 + 100 - foot - radius, 100 - foot - high Cylinder	24 hours
    `.trim(),
    classes: ['Sorcerer', 'Wizard'],
  },
  {
    id: 'sylunes-viper',
    name: 'Sylune\'s Viper',
    level: 3,
    isAttack: false,
    range: 'Self',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    castingTime: 'Bonus',
    materialCost: 'a snake fang',
    isConcentration: false,
    duration: '1 hour',
    descriptionHTML: `
    A shimmering, spectral snake encircles your body for the duration. You gain 15 Temporary Hit Points; the spell ends early if you have no Temporary Hit Points left.
While the spell is active, you gain the following benefits:
Climbing. You gain a Climb Speed equal to your Speed.
Venomous Bite. As a Magic action, you can make a ranged spell attack using the snake against one creature within 50 feet. On a hit, the target takes 1d6 Force damage and has the Poisoned condition until the start of your next turn. While Poisoned, the target has the Incapacitated condition.
Using a Higher-Level Spell Slot. For each spell slot level above 3, the number of Temporary Hit Points you gain from this spell increases by 5, and the damage of Venomous Bite increases by 1d6.
    `.trim(),
    classes: ['Druid', 'Wizard'],
  },
  {
    id: 'wardaway',
    name: 'Wardaway',
    level: 1,
    isAttack: false,
    range: '60 feet',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: 'a miniature clay hand',
    isConcentration: false,
    duration: 'Instantaneous',
    castingTime: 'Action',
    descriptionHTML: `
      You hurl a disorienting magical force toward one creature within range. The target makes a Constitution saving throw; Constructs and Undead automatically succeed on this save.
On a failed save, the target takes 2d4 Force damage, its Speed is halved until the start of your next turn, and on its next turn, it can take only an action or a Bonus Action (but not both). On a successful save, the target takes half as much damage only.
Using a Higher-Level Spell Slot. The damage increases by 2d4 for every spell slot level above 1.
    `.trim(),
    classes: ['Bard', 'Cleric', 'Paladin', 'Wizard'],
  },
  {
    id: 'absorb-elements',
    name: 'Absorb Elements',
    level: 1,
    isAttack: false,
    range: 'Self',
    isRitual: false,
    isVerbal: false,
    isSomatic: true,
    isMaterial: false,
    castingTime: 'Reaction',
    materialCost: '',
    isConcentration: false,
    duration: '1 round',
    descriptionHTML: `
    he spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.
    `.trim(),
    classes: ['Artificier', 'Druid', 'Ranger', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'air-bubble',
    name: 'Air Bubble',
    level: 2,
    isAttack: false,
    range: '60 feet',
    isRitual: false,
    isVerbal: false,
    isSomatic: true,
    isMaterial: false,
    castingTime: 'Action',
    materialCost: '',
    isConcentration: false,
    duration: '24 hours',
    descriptionHTML: `
You create a spectral globe around the head of a willing creature you can see within range. The globe is filled with fresh air that lasts until the spell ends. If the creature has more than one head, the globe of air appears around only one of its heads (which is all the creature needs to avoid suffocation, assuming that all its heads share the same respiratory system).
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can create two additional globes of fresh air for each slot level above 2nd.
    `.trim(),
    classes: ['Artificer', 'Druid', 'Ranger', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'beast-bond',
    name: 'Beast Bond',
    level: 1,
    isAttack: false,
    range: 'Touch',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    castingTime: 'Action',
    materialCost: 'a bit of fur wrapped in a cloth',
    isConcentration: true,
    duration: '10m',
    descriptionHTML: `
You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence score is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.
    `.trim(),
    classes: ['Bard', 'Druid', 'Ranger'],
  },
  {
    id: 'dust-devil',
    name: 'Dust Devil',
    level: 2,
    isAttack: true,
    range: '60 feet',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    castingTime: 'Action',
    materialCost: 'a pinch of dust',
    isConcentration: true,
    duration: '1m',
    descriptionHTML: `
Choose an unoccupied 5-foot cube of air that you can see within range.An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration.
Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw.On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away from the dust devil.On a successful save, the creature takes half as much damage and isn't pushed.
As a bonus action, you can move the dust devil up to 30 feet in any direction.If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot - radius cloud of debris around itself that lasts until the start of your next turn.The cloud heavily obscures its area.
At Higher Levels.When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.
    `.trim(),
    classes: ['Druid', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'earth-tremor',
    name: 'Earth Tremor',
    level: 1,
    isAttack: true,
    range: '10 feet',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: false,
    castingTime: 'Action',
    materialCost: '',
    isConcentration: false,
    duration: 'Instantaneous',
    descriptionHTML: `
You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand.
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
    `.trim(),
    classes: ['Druid', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'flame-arrows',
    name: 'Flame Arrows',
    level: 3,
    isAttack: true,
    range: 'Touch',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: false,
    castingTime: 'Action',
    materialCost: '',
    isConcentration: true,
    duration: '1 hour',
    descriptionHTML: `
You touch a quiver containing arrows or bolts.When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage.The spell's magic ends on a piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver.
At Higher Levels.When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd.
    `.trim(),
    classes: ['Artificier', 'Druid', 'Ranger', 'Sorcerer', 'Wizard'],
  },
  // New above
  {
    id: 'wild-shape',
    name: 'Wild Shape',
    level: 2,
    isAttack: false,
    isRitual: false,
    castingTime: 'Bonus',
    range: 'Self',
    isVerbal: false,
    isSomatic: true,
    isMaterial: false,
    isConcentration: false,
    materialCost: 'None',
    duration: '⌊LV÷2⌋',
    descriptionHTML: `
      Power of nature allows you to assume form of an animal. As bonus action, shape-shift into a Beast form that you have learned. You stay in that form for num hours equal to half druid level unless incapacitated or die. You can leave form early as bonus action.
      <br>
      2 wild shape uses to start, 3 starting level 6, 4 starting level 17.
      Regain one use on short rest, regain all uses on long rest. Starting at level 5, can expend one level 1 spell slot to regain wild shape (no action required), once per long rest can do the other direction.
      <br>
      Know X beast forms, can change on long rest (4 to start, 6 starting level 4, 8 starting level 8). Max challenge rating (1/4 to start, 1/2 starting level 4, 1 starting level 8). Can only choose flying animal starting level 8.
      <br>
      Retain personality, memories, ability to speak. Gain temp HP equal to your level. Stats are replaced by beast stat block, but retain creature type, HP, hit dice, intelligence, wisdom, and charisma scores, class features, languages, feats. Retain skill and save throw proficiencies, prof bonus, in addition to gaining proficiences of the creature. If beast skill/save modifier is higher, use it.
      <br>
      You can't cast spells, but shape-shifting doesn't break concentration or interfere with existing spells.
      <br>
      Handle objects sensibly with beast's limbs. Equipment falls off, merges, or is worn if practical. Equipment doesn't change shape or size and has no effect if merged.
    `.trim(),
    classes: ['Druid'],
  },
  {
    id: 'wild-companion',
    name: 'Wild Companion',
    level: 2,
    isAttack: false,
    range: '10ft',
    isRitual: true,
    isVerbal: true,
    isSomatic: true,
    castingTime: '1 hour',
    isMaterial: true,
    materialCost: '',
    isConcentration: false,
    duration: 'Instantaneous',
    descriptionHTML: `You gain the service of a familiar, a spirit that takes an animal form you choose: <strong><a href="https://www.aidedd.org/monster/bat">Bat</a>, <a href="https://www.aidedd.org/monster/cat">Cat</a>, <a href="https://www.aidedd.org/monster/frog">Frog</a>, <a href="https://www.aidedd.org/monster/hawk">Hawk</a>, <a href="https://www.aidedd.org/monster/lizard">Lizard</a>, <a href="https://www.aidedd.org/monster/octopus">Octopus</a>, <a href="https://www.aidedd.org/monster/owl">Owl</a>, <a href="https://www.aidedd.org/monster/rat">Rat</a>, <a href="https://www.aidedd.org/monster/raven">Raven</a>, <a href="https://www.aidedd.org/monster/spider">Spider</a>, <a href="https://www.aidedd.org/monster/weasel">Weasel</a></strong>, or another Beast that has a Challenge Rating of 0. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a Celestial, Fey, or Fiend (your choice) instead of a Beast. Your familiar acts independently of you, but it obeys your commands.<br><strong>Telepathic Connection</strong>. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as a Bonus Action, you can see through the familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses it has.<br>Finally, when you cast a spell with a range of touch, your familiar can deliver the touch. Your familiar must be within 100 feet of you, and it must take a Reaction to deliver the touch when you cast the spell.<br><strong>Combat</strong>. The familiar is an ally to you and your allies. It rolls its own Initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.<br><strong>Disappearance of the Familiar</strong>. When the familiar drops to 0 Hit Points, it disappears. It reappears after you cast this spell again. As a Magic action, you can temporarily dismiss the familiar to a pocket dimension. Alternatively, you can dismiss it forever. As a Magic action while it is temporarily dismissed, you can cause it to reappear in an unoccupied space within 30 feet of you. Whenever the familiar drops to 0 Hit Points or disappears into the pocket dimension, it leaves behind in its space anything it was wearing or carrying.<br><strong>One Familiar Only</strong>. You can't have more than one familiar at a time. If you cast this spell while you have a familiar, you instead cause it to adopt a new eligible form.<br>`,
    classes: ['Druid'],
  },
  {
    id: 'healing-spirit',
    name: 'Healing Spirit',
    level: 2,
    isAttack: false,
    range: '60ft',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isConcentration: true,
    isMaterial: false,
    materialCost: '',
    duration: '1m',
    castingTime: 'Bonus',
    descriptionHTML: `
You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice).
<br>
Until the spell ends, whenever you or a creature you can see moves into the spirit's space for the first time on a turn or starts its turn there, you can cause the spirit to restore 1d6 hit points to that creature (no action required). The spirit can't heal constructs or undead.
<br>
As a bonus action on your turn, you can move the Spirit up to 30 feet to a space you can see. The spirit can heal a number of times equal to 1 + your spellcasting ability modifier (minimum of twice). After healing that number of times, the spirit disappears.
<br>
<strong><em>At Higher Levels.</em></strong> When you cast this spell using a spell slot of 3rd level or higher, the healing increases 1d6 for each slot level above 2nd.
<br>
<strong><em>Spell Lists.</em></strong> <a href="http://dnd5e.wikidot.com/spells:druid">Druid</a>, <a href="http://dnd5e.wikidot.com/spells:ranger">Ranger</a>
<br>
`.trim(),
    classes: ['Druid', 'Ranger'],
  },
  {
    id: 'shape-water',
    name: 'Shape Water',
    level: 0,
    isAttack: false,
    range: '30ft',
    isRitual: false,
    isVerbal: false,
    isSomatic: true,
    isMaterial: false,
    materialCost: '',
    isConcentration: false,
    duration: 'Inst/1hr',
    castingTime: 'Action',
    descriptionHTML: `
You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:
<br>
• You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.
<br>
• You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.
<br>
• You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.
<br>
• You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.
<br>
If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.
    `.trim(),
    classes: ['Druid', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'magic-stone',
    name: 'Magic Stone',
    level: 0,
    isAttack: true,
    range: '60ft',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: false,
    materialCost: '',
    isConcentration: false,
    duration: '1m',
    castingTime: 'Bonus',
    descriptionHTML: `
You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone.
<br>
<br>
If you cast this spell again, the spell ends early on any pebbles still affected by it.
    `.trim(),
    classes: ['Druid', 'Artificier', 'Warlock'],
  },
  {
    id: 'erupting-earth',
    name: 'Erupting Earth',
    level: 3,
    isAttack: true,
    range: '120ft',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: '1 piece of obsidian',
    isConcentration: false,
    duration: 'Instantaneous',
    castingTime: 'Action',
    descriptionHTML: `
  Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand.
  <br>
  <strong>At Higher Levels.</strong>
  When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd.
  
  `.trim(),
    classes: ['Druid', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'starry-form',
    name: 'Starry Form',
    level: 2,
    isAttack: false,
    range: 'Self',
    isRitual: false,
    isVerbal: false,
    isSomatic: false,
    isMaterial: false,
    materialCost: '',
    isConcentration: false,
    duration: '10m',
    castingTime: 'Bonus',
    descriptionHTML: `
As a Bonus Action, you can expend a use of your Wild Shape feature to take on a starry form rather than shape-shifting.
<br>
While in your starry form, you retain your game statistics, but your body becomes luminous, your joints glimmer like stars, and glowing lines connect them as on a star chart. This form sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet. The form lasts for 10 minutes. It ends early if you dismiss it (no action required), have the Incapacitated condition, or use this feature again.
<br>
Whenever you assume your starry form, choose which of the following constellations glimmers on your body; your choice gives you certain benefits while in the form.
<br>
<strong>Archer.</strong> A constellation of an archer appears on you. When you activate this form and as a Bonus Action on your subsequent turns while it lasts, you can make a ranged spell attack, hurling a luminous arrow that targets one creature within 60 feet of yourself. On a hit, the attack deals Radiant damage equal to 1d8 plus your Wisdom modifier.
<br>
<strong>Chalice.</strong> A constellation of a life-giving goblet appears on you. Whenever you cast a spell using a spell slot that restores Hit Points to a creature, you or another creature within 30 feet of you can regain Hit Points equal to 1d8 plus your Wisdom modifier.
<br>
<strong>Dragon.</strong> A constellation of a wise dragon appears on you. When you make an Intelligence or a Wisdom check or a Constitution saving throw to maintain Concentration, you can treat a roll of 9 or lower on the d20 as a 10.
    `.trim(),
    classes: ['Druid'],
  },
  {
    id: 'earthbind',
    name: 'Earthbind',
    level: 2,
    isAttack: true,
    range: '300ft',
    isRitual: false,
    isVerbal: true,
    isSomatic: false,
    isMaterial: false,
    materialCost: '',
    isConcentration: true,
    duration: '1 minute',
    castingTime: 'Action',
    descriptionHTML: `
    Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell’s duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends.
    `.trim(),
    classes: ['Druid', 'Sorcerer', 'Warlock', 'Wizard'],
  },
  {
    id: 'mold-earth',
    name: 'Mold Earth',
    level: 0,
    isAttack: false,
    range: '30ft',
    isRitual: false,
    isVerbal: false,
    isSomatic: true, 
    isMaterial: false,
    materialCost: '',
    isConcentration: false,
    duration: 'Instantaneous',
    castingTime: 'Action',
    descriptionHTML: `
You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:
<br>
<br>
• If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn’t have enough force to cause damage.
<br>
• You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.
<br>
• If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.
<br>
<br>
If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.
    `.trim(),
    classes: ['Druid', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'barbarian-rage',
    name: 'Barbarian Rage',
    level: 1,
    isAttack: true,
    range: 'Self',
    isRitual: false,
    isVerbal: false,
    isSomatic: false,
    isMaterial: false,
    materialCost: '',
    isConcentration: false,
    duration: '10 min',
    castingTime: 'Bonus',
    descriptionHTML: `
You can rage the number of times shown in the Barbarian table. Regain one expended use on short rest, all on long rest.
<br>
<strong>Resistance:</strong> Bludgeoning, Piercing, and Slashing damage.
<br>
<strong>Rage Damage:</strong> On Strength attack (weapon/Unarmed), deal bonus damage as shown in Barbarian table.
<br>
<strong>Strength Advantage:</strong> Advantage on Strength checks and saves.
<br>
<strong>No Concentration or Spells</strong>
<br>
<strong>Duration:</strong> Lasts until end of next turn or if incapacitated or don heavy armor. Can extend another round by:
<br>
• Attacking an enemy
<br>
• Forcing enemy to make a save
<br>
• Take Bonus Action to extend
`.trim(),
    classes: ['Barbarian'],
  },
  {
    id: 'elemental-bane',
    name: 'Elemental Bane',
    level: 4,
    isAttack: true,
    range: '90ft',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: '',
    isConcentration: true,
    duration: '1 minute',
    castingTime: 'Action',
    descriptionHTML: `
      Choose one creature you can see within range, and choose one of the following damage types: acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends.
      <br>
      <strong>At Higher Levels.</strong> When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them.
    `.trim(),
    classes: ['Artificier', 'Druid', 'Warlock', 'Wizard'],
  },
  {
    id: 'guardian-of-nature',
    name: 'Guardian of Nature',
    level: 4,
    isAttack: false,
    range: 'Self',
    isRitual: false,
    isVerbal: true,
    isSomatic: false,
    isMaterial: false,
    materialCost: '',
    isConcentration: true,
    duration: '1 minute',
    castingTime: 'Bonus',
    descriptionHTML: `
A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree.
<br>
<em><strong>Primal Beast.</strong></em> Bestial fur covers your body, your facial features become feral, and you gain the following benefits:
<br>
• Your walking speed increases by 10 feet.
<br>
• You gain darkvision with a range of 120 feet.
<br>
• You make Strength-based attack rolls with advantage.
<br>
• Your melee weapon attacks deal an extra 1d6 force damage on a hit.
<br>
<em><strong>Great Tree.</strong></em> Your skin appears barky, leaves sprout from your hair, and you gain the following benefits:
<br>
• You gain 10 temporary hit points.
<br>
• You make Constitution saving throws with advantage.
<br>
• You make Dexterity- and Wisdom-based attack rolls with advantage.
<br>
• While you are on the ground, the ground within 15 feet of you is <a class="tooltip-hover rule-tooltip" href="https://www.dndbeyond.com/sources/basic-rules/adventuring#DifficultTerrain" data-tooltip-href="//www.dndbeyond.com/rules/86-tooltip?disable-webm=1&amp;disable-webm=1">difficult terrain</a> for your enemies.
<br>
    `.trim(),
    classes: ['Druid', 'Ranger'],
  },
  {
    id: 'watery-sphere',
    name: 'Watery Sphere',
    level: 4,
    isAttack: true,
    range: '90ft',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: 'a droplet of water',
    isConcentration: true,
    duration: '1 minute',
    castingTime: 'Action',
    descriptionHTML: `
You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration.
<br>
Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success.
<br>
The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it.
<br>
As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw.
<br>
When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes.
    `.trim(),
    classes: ['Druid', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'wither-and-bloom',
    name: 'Wither and Bloom',
    level: 2,
    isAttack: true,
    range: '60ft',
    isRitual: false,
    isVerbal: true,
    isSomatic: true,
    isMaterial: true,
    materialCost: 'a withered vine twisted into a loop',
    isConcentration: false,
    duration: 'Instantaneous',
    castingTime: 'Action',
    descriptionHTML: `
    You invoke both death and life upon a 10-foot-radius sphere centered on a point within range. Each creature of your choice in that area must make a Constitution saving throw, taking 2d6 necrotic damage on a failed save, or half as much damage on a successful one. Nonmagical vegetation in that area withers.
    <br>
    In addition, one creature of your choice in that area can spend and roll one of its unspent Hit Dice and regain a number of hit points equal to the roll plus your spellcasting ability modifier.
    <br>
    <strong>At Higher Levels.</strong>When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot above 2nd, and the number of Hit Dice that can be spent and added to the healing roll increases by one for each slot above 2nd.
    `.trim(),
    classes: ['Druid', 'Sorcerer', 'Wizard'],
  },
  {
    id: 'warding-wind',
    name: 'Warding Wind',
    level: 2,
    isAttack: false,
    range: 'Self (10ft radius)',
    isRitual: false,
    isVerbal: true,
    isSomatic: false,
    isMaterial: false,
    isConcentration: true,
    duration: 'Up to 10 minutes',
    materialCost: '',
    castingTime: 'Action',
    descriptionHTML: `
    A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration.
    <br><br>
    The wind has the following effects:
    <br><br>
    • It deafens you and other creatures in its area.
    <br><br>
    • It extinguishes unprotected flames in its area that are torch-sized or smaller.
    <br><br>
    • It hedges out vapor, gas, and fog that can be dispersed by strong wind.
    <br><br>
    • The area is difficult terrain for creatures other than you.
    <br><br>
    • The attack rolls of ranged weapon attacks have disadvantage if the attacks pass in or out of the wind.
    `.trim(),
    classes: ['Druid', 'Bard', 'Sorcerer', 'Wizard'],
  },
];


export default additionalSpells;
