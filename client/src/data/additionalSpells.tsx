// Import shared types
import Spell from '../types/Spell';

/**
 * List of additional spells to be included in the spell list,
 * but that are not part of the basic 5e spells from the scraper
 * @author Gabe Abrams
 */
const additionalSpells: Spell[] = [
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
];


export default additionalSpells;
