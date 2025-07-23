// Import shared types
import Spell from '../types/Spell';

/**
 * List of additional spells to be included in the spell list
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
];

export default additionalSpells;
