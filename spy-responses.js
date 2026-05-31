// ============================================================
// SPY RESPONSE BANK
// 16 combinations x 6 variations = 96 total responses
// Variations 0-2: Gemini | Variations 3-5: Claude
// Key format: "ANIMAL_INDEX-DISTRACTION_INDEX"
// ============================================================

const SPY_RESPONSES = {

  // ── ANIMAL 0: Dramatic Pigeon ─────────────────────────────

  "0-0": [ // Dramatic Pigeon + K-Pop
    "The dramatic pigeon flapped wildly to the beat, staring directly into the guard's eyes while loud bass music echoed down the corridor.",
    "Headbanging in perfect sync with the drop, the pigeon puff-chested its way across the security desk while a tiny speaker blasted bubblegum pop.",
    "The pigeon synchronized its wing flaps to a fast-paced choreography, completely mesmerizing the guard who immediately pulled out his phone to record it.",
    "The pigeon thrust its chest forward like a concert headliner and body-rolled directly into the spotlight, forcing every guard in the building to stop and film it.",
    "Riding the bassline like a professional, the pigeon stomped its tiny feet in perfect rhythm while the guard completely forgot he had a job.",
    "The pigeon locked eyes with the security camera, spread its wings dramatically on the beat drop, and did not look away for eleven full seconds."
  ],

  "0-1": [ // Dramatic Pigeon + Wet Cheese
    "With perfect aim, the pigeon dropped a soggy slice of American cheese directly onto the guard's forehead, completely blinding them with dairy.",
    "Flying at terminal velocity, the pigeon deployed a wet slice of cheddar directly onto the security camera lens, sealing it shut with cold cheese precision.",
    "The pigeon slapped a soggy slice of cheese onto the guard's shoulder and let out a piercing, theatrical coo, sending the terrified guard into a frantic spiral.",
    "The pigeon swooped low, released the soggy cheese slice like a precision airdrop, and pulled up just before it landed directly on the guard's clipboard.",
    "With the confidence of someone who has done this before, the pigeon placed the wet cheese flat on the guard's keyboard and walked away slowly.",
    "The pigeon hovered for exactly two seconds, then dropped the cheese onto the security monitor with a slap loud enough to echo down the hallway."
  ],

  "0-2": [ // Dramatic Pigeon + Pretend to Fall
    "The pigeon rolled across the floor dramatically, gasping for air and clutching its wing like a soap opera actor until the guard ran over to help.",
    "Taking a plunge off the water cooler, the pigeon tumbled down the hallway head over heels, faking a devastating leg injury to distract the checkpoint.",
    "The pigeon tripped over its own feet, spun twice, and dramatically collapsed on the floor, peeking out with one eye to make sure the guard was watching.",
    "The pigeon staggered forward three steps, paused for effect, then collapsed completely onto its back with one wing stretched toward the ceiling.",
    "It stumbled into the guard station, knocked over a coffee cup with its wing, and lay motionless on the floor until someone came running.",
    "The pigeon tripped, caught itself, tripped again harder, then slid six inches across the floor and let out a single devastating coo."
  ],

  "0-3": [ // Dramatic Pigeon + Breakdance
    "Spinning on its back like a professional b-boy, the pigeon executed a flawless windmill breakdance that left the security team entirely speechless.",
    "The pigeon attempted a chaotic backflip, crashed into a mop bucket, and started aggressively spinning on its beak to distract the guards.",
    "Flailing its wings and sliding across the shiny linoleum floor, the pigeon initiated an utterly unhinged worm dance that paralyzed the room with confusion.",
    "The pigeon launched into a windmill with zero warning, clipping the guard's ankle on the first rotation and not stopping for forty-five seconds.",
    "It started with a simple head nod, escalated to a full body pop, and ended upside down against the wall doing a freeze that defied physics.",
    "The pigeon slid across the floor on its belly, spun onto its back, and began aggressively flapping in a move that can only be described as the Chaos Worm."
  ],

  // ── ANIMAL 1: Very Chill Capybara ────────────────────────

  "1-0": [ // Chill Capybara + K-Pop
    "The capybara sat completely motionless while a neon speaker blasted bubblegum pop, confusing the guard into questioning reality itself.",
    "Maintaining 100% steady eye contact, the unbothered capybara slowly glided past the desk on a skateboard while high-tempo bass shook the room.",
    "A speaker strapped to its back thumped loud techno music, but the capybara simply stood there blinking slowly, radiating absolute, supreme calmness.",
    "The capybara walked directly through the security checkpoint at half speed while the music played, radiating such calm that the guard assumed it was authorized.",
    "It sat down next to the speaker, closed its eyes, and began swaying almost invisibly, creating a vibe so peaceful the guard sat down too.",
    "The capybara simply existed near the music with its eyes half open, and somehow that was more distracting than anything else in the building."
  ],

  "1-1": [ // Chill Capybara + Wet Cheese
    "The capybara slowly balanced a wet slice of cheese on its own head, maintaining absolute, unbothered silence until the guard just walked away.",
    "With an incredibly lazy flick of its snout, the capybara launched a slimy piece of cheese right onto the guard's walkie-talkie.",
    "The capybara sat entirely still as a soggy slice of cheddar slid off its back and onto the floor, causing the guard to look down in absolute bewilderment.",
    "The capybara carried the cheese on its head for thirty meters without acknowledging it, and the guard spent so long trying to understand the situation that the agent was already gone.",
    "It dropped the cheese near the guard's foot, looked at it, looked at the guard, looked back at the cheese, and waited with infinite patience.",
    "The capybara placed the wet cheese slice gently against the door sensor and sat in front of it like it was meditating, blocking the alarm with pure vibes."
  ],

  "1-2": [ // Chill Capybara + Pretend to Fall
    "The capybara gently tipped over like a fallen tree, slowly rolling an inch to the left, paralyzed by its own absolute commitment to relaxation.",
    "Operating in extreme slow motion, the capybara tilted sideways, rested its head on the floor, and faked a faint that looked suspiciously like a nap.",
    "The giant rodent slowly slumped against the wall, rolled onto its back with legs in the air, and stayed perfectly frozen until the guard went to check its pulse.",
    "The capybara leaned slowly to the left until it tipped over, then lay completely still for four minutes while the confused guard radioed for backup.",
    "It took one step, went down in slow motion, and hit the floor so gently it barely made a sound, yet somehow the entire hallway stopped to watch.",
    "The capybara sat, then slid forward onto its chin, closed its eyes, and entered what looked like the most peaceful nap in security camera history."
  ],

  "1-3": [ // Chill Capybara + Breakdance
    "The capybara moved its head exactly two millimeters to the left in a rhythmic fashion, creating an intense, low-energy breakdance aura.",
    "Attempting a low-speed spin, the heavy capybara slowly shuffled its feet in a circle, entirely out of rhythm but giving maximum casual effort.",
    "The capybara sat completely rigid while its tail twitched faintly, radiating a bizarre, unmoving breakdance energy that forced the guard to stare in awe.",
    "The capybara shifted its weight from one foot to the other exactly twice, and the energy in the room changed completely.",
    "It rotated forty-five degrees to the left over the course of eight seconds, which somehow counted as dancing, and the guard could not look away.",
    "The capybara did one slow, deliberate head roll, paused, then did it again, and the guard pulled out his phone to record what he was witnessing."
  ],

  // ── ANIMAL 2: Angry Fluffy Kitten ────────────────────────

  "2-0": [ // Angry Kitten + K-Pop
    "The angry kitten hissed furiously in sync with the high-tempo track, looking like a tiny, terrifying rock star ready to destroy the speakers.",
    "Puffing up its fur to double its size, the tiny kitten marched down the hallway like a heavy metal band leader while a speaker boomed bubblegum pop.",
    "The fierce kitten stared down the guard, letting out a sharp screech right as the heavy bass dropped, completely terrifying the security staff.",
    "The kitten marched straight toward the speaker like it was personally offended by the song, and the guard spent the entire time worried about the speaker's safety.",
    "It hissed on every beat with terrifying precision, turning the K-Pop track into something that sounded like a threat, which drew every guard in earshot.",
    "The kitten puffed to twice its size, locked onto the nearest guard, and screamed along with the chorus in a way that froze everyone in the corridor."
  ],

  "2-1": [ // Angry Kitten + Wet Cheese
    "The kitten slung the wet slice of cheese across the room like a frisbee, slapping it against the security camera lens with perfect precision.",
    "Hissing aggressively, the fluffy kitten swatted a wet slice of provolone directly onto the guard's shiny boots with maximum feline attitude.",
    "The kitten lunged forward and threw a soggy slice of cheese straight into the guard's morning coffee cup, causing an immediate emergency.",
    "The kitten batted the cheese across the floor like a hockey puck, chased it into the guard's legs, and began attacking his shoelaces as a bonus.",
    "It carried the wet cheese in its mouth, dropped it directly into the guard's coffee, and sat back to watch the reaction with cold, satisfied eyes.",
    "The kitten launched the cheese from six feet away with a single swipe, hit the security panel dead center, and triggered three buttons simultaneously."
  ],

  "2-2": [ // Angry Kitten + Pretend to Fall
    "The kitten did a dramatic front-flip, landed on its back, and let out a tiny meow of defeat, causing the guard to melt from the pure cuteness.",
    "The fluffy ball of rage intentionally tripped over a data cable, rolled three times, and hissed at the floor to make its fake fall look realistic.",
    "It threw itself sideways onto the floor, kicked its tiny legs in the air angrily, and pretended to be stuck just long enough for the guard to run over.",
    "The kitten threw itself sideways onto the floor, lay completely flat, and let out a sound so pitiful that four guards immediately abandoned their posts.",
    "It ran at full speed, hit an invisible wall, and tumbled forward three times before lying still with its paws in the air and one eye open.",
    "The kitten collapsed dramatically in the center of the hallway, refused to move, and hissed at anyone who came close enough to check on it."
  ],

  "2-3": [ // Angry Kitten + Breakdance
    "The fluffy kitten puffed out its tail and began crumping aggressively, bouncing off the walls like a tiny tennis ball of absolute chaos.",
    "Spinning frantically on its side while swatting at invisible laser beams, the angry kitten invented a brand new, high-intensity breakdance style.",
    "The kitten scrambled across the floor, did an accidental headspin into a trash can, and continued to flail wildly to distract the guard station.",
    "The kitten spun on its back so fast it generated static electricity, and every guard within ten feet had their radio short out simultaneously.",
    "It started zoomies, converted them mid-stride into a floor slide, popped up into a freeze, and the guard genuinely did not know what to do with that information.",
    "The kitten bounced off three walls, landed in a split it did not plan, and stared at the guard with the fury of someone who meant to do that."
  ],

  // ── ANIMAL 3: Tiny Tactical Hamster ──────────────────────

  "3-0": [ // Tactical Hamster + K-Pop
    "The tactical hamster sprinted inside its wheel at terminal velocity, generating enough kinetic energy to power the booming K-Pop track.",
    "Wearing a tiny headset, the hamster ran circles around the guard's keyboard while loud music erupted from a hidden micro-speaker.",
    "The hamster stood on its hind legs, saluted, and pressed the master volume button on the PA system to blast pop music through the entire facility.",
    "The hamster had already wired the speaker system before anyone arrived, and when the music hit, it was coming from inside every room at once.",
    "It sprinted across the guard's desk, knocked the volume to maximum with a single tap, and was gone before the first chorus.",
    "The hamster deployed a speaker no larger than a thumbnail directly under the guard's chair and triggered it remotely from inside the ceiling vent."
  ],

  "3-1": [ // Tactical Hamster + Wet Cheese
    "The hamster deployed the single slice of cheese like a tactical blanket, throwing it over the guard's shoe and biting their shoelaces.",
    "Using a tiny built-in slingshot, the hamster launched a wet, sticky square of cheese directly onto the main security monitor screen.",
    "The hamster dragged a soggy piece of cheese across the floor, creating a slippery dairy hazard that the guard immediately slipped on.",
    "The hamster folded the cheese into a perfect square, slid it under the door sensor with millimeter precision, and disabled the alarm without breaking stride.",
    "It constructed a small ramp from a paperclip and a pen cap, launched the cheese onto the security camera, and was already three floors up by the time it landed.",
    "The hamster dragged the cheese across twelve meters of polished floor, creating a trail so slippery that the guard went down before he knew what happened."
  ],

  "3-2": [ // Tactical Hamster + Pretend to Fall
    "The hamster tripped over a single piece of dust, dramatically tumbled across the floor three times, and pretended to faint on the spot.",
    "Running at full speed, the hamster suddenly hit the brakes, rolled into a tiny ball, and squeaked in mock agony to lure the guard away from the door.",
    "The hamster climbed a desk leg, lost its grip intentionally, dropped onto a stack of papers, and lay there dramatically waving a tiny white flag.",
    "The hamster rolled off the edge of the desk on purpose, bounced once, and lay spread-eagle on the floor with its tiny arms out like a crime scene outline.",
    "It ran directly at the guard's boot, faked a trip, tumbled four times, and squeaked once with such conviction that the guard knelt down and forgot everything else.",
    "The hamster climbed to the top of the printer, paused for dramatic effect, then fell off the side in a controlled spiral that lasted longer than seemed physically possible."
  ],

  "3-3": [ // Tactical Hamster + Breakdance
    "The tiny hamster stood on its hind legs and began popping and locking with absolute robotic precision, distracting the entire room.",
    "The hamster started spinning on its back at 500 RPM like a fuzzy Beyblade, creating a miniature dust storm that completely blinded the guard.",
    "Executing a series of lightning-fast, chaotic flips and floor slides, the hamster executed an unpredictable dance routine right on the guard's desk.",
    "The hamster executed a perfect six-step, transitioned into a freeze, and held it for so long the guard took a photo and posted it before remembering he was on duty.",
    "It popped and locked across the entire desk surface in under three seconds, sending pens and papers flying, and was gone before the mess settled.",
    "The hamster spun on its head at a speed that made it look like a small furry drill bit, boring through the guard's attention span completely."
  ],

  // ── HIDDEN ANIMAL 4: Placeholder ─────────────────────────
  // To activate: remove style="display:none" from the option element
  // Then add your animal name and fill in responses below

  "4-0": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "4-1": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "4-2": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "4-3": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "4-4": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "4-5": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],

  // ── HIDDEN ANIMAL 5: Placeholder ─────────────────────────

  "5-0": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "5-1": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "5-2": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "5-3": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "5-4": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "5-5": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],

  // ── HIDDEN DISTRACTION 4: Placeholder ────────────────────
  // To activate: remove style="display:none" from the option element
  // Then fill in responses for all animal combos below

  "0-4": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "1-4": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "2-4": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "3-4": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],

  // ── HIDDEN DISTRACTION 5: Placeholder ────────────────────

  "0-5": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "1-5": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "2-5": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],
  "3-5": ["RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED", "RESPONSE NEEDED"],

};
