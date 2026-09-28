// questions, answers and explaination for all the quizzes in the app
export const BATTERY_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'What type of battery do most PMDs and e-bikes use?',
    options: [
      'Lead-acid battery',
      'Nickel-metal hydride',
      'Lithium-ion battery',
      'Alkaline battery',
    ],
    answer: 2,
    explanation:
      'Most PMDs and e-bikes use lithium-ion batteries due to their high energy density and rechargeability — but they pose serious fire risks when mishandled.',
  },

  {
    id: 2,
    question: 'According to SCDF, what was the increase in PMD-related fires in 2023?',
    options: ['10%', '21%', '31%', '41%'],
    answer: 2,
    explanation:
      'SCDF reported a 31% increase in fires involving active mobility devices in 2023, many occurring in HDB flats.',
  },

  {
    id: 3,
    question: 'Which of the following is a SAFE charging practice for PMD batteries?',
    options: [
      'Leave charging overnight unattended',
      'Use only original chargers from the manufacturer',
      'Charge inside your bedroom for convenience',
      'Use a higher-voltage charger to charge faster',
    ],
    answer: 1,
    explanation:
      'Always use the original charger from the manufacturer. Non-original chargers can overcharge the battery, leading to thermal runaway and fire.',
  },

  {
    id: 4,
    question: 'Why are lithium-ion battery fires especially dangerous?',
    options: [
      'They produce only smoke, no flames',
      'They are easy to extinguish with water',
      'They can self-sustain and release toxic gases even after flames are put out',
      'They only affect the device itself',
    ],
    answer: 2,
    explanation:
      'Lithium-ion fires can self-sustain inside sealed battery packs and release toxic gases, making them far more dangerous than ordinary fires.',
  },

  {
    id: 5,
    question: 'What should you do if you notice your PMD battery is swollen or deformed?',
    options: [
      'Continue using it but reduce charging time',
      'Puncture it to release pressure',
      'Stop using it immediately and contact the manufacturer',
      'Place it in water to cool it down',
    ],
    answer: 2,
    explanation:
      'A swollen battery is a major warning sign of imminent failure. Stop use immediately, do not puncture it, and seek professional guidance for safe disposal.',
  },

  {
    id: 6,
    question: 'Where should you ideally charge your PMD?',
    options: [
      'Inside the bedroom at night',
      'In a well-ventilated area, away from flammable materials',
      'In a confined cupboard for safety',
      'In the living room sofa area',
    ],
    answer: 1,
    explanation:
      'Charge PMDs in well-ventilated areas away from flammable materials. Never charge in bedrooms or confined spaces.',
  },

  {
    id: 7,
    question: 'In a PMD fire emergency in an HDB flat, what is the FIRST thing you should do?',
    options: [
      'Try to extinguish the fire yourself',
      'Open all windows to ventilate',
      'Alert others, evacuate, and call 995',
      'Pack your belongings first',
    ],
    answer: 2,
    explanation:
      'Your life comes first. Alert others nearby, evacuate immediately, and call SCDF at 995. Do not re-enter the premises.',
  },

  {
    id: 8,
    question: 'Which app by SCDF allows community members to respond to nearby emergencies?',
    options: ['SGSecure', 'myResponder', 'LifeSG', 'OneService'],
    answer: 1,
    explanation:
      'myResponder by SCDF alerts nearby community members about cardiac arrests and small fires, and shows the location of the nearest AED.',
  },
];

export const EMERGENCY_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'What should you do first when a PMD battery catches fire?',
    options: [
      'Try to save the PMD',
      'Alert others, evacuate, and call 995',
      'Pour water immediately',
      'Open all windows first',
    ],
    answer: 1,
    explanation:
      'Life safety comes first. Alert others, evacuate immediately, and call SCDF at 995.',
  },

  {
    id: 2,
    question: 'Should you use the lift during a fire evacuation?',
    options: ['Yes', 'No', 'Only if the stairs are far', 'Only in HDB flats'],
    answer: 1,
    explanation:
      'Never use the lift during a fire. Use the stairs and follow evacuation routes.',
  },

  {
    id: 3,
    question: 'Why should you close doors behind you during evacuation?',
    options: [
      'To lock the fire inside',
      'To slow down smoke and fire spread',
      'To stop people from entering',
      'To protect belongings',
    ],
    answer: 1,
    explanation:
      'Closing doors can help slow smoke and fire spread, giving others more time to evacuate.',
  },

  {
    id: 4,
    question: 'What number should you call for SCDF emergency assistance?',
    options: ['999', '995', '1777', '911'],
    answer: 1,
    explanation:
      '995 is the emergency number for SCDF fire and ambulance assistance in Singapore.',
  },

  {
    id: 5,
    question: 'After leaving a burning flat, what should you do?',
    options: [
      'Re-enter to check the fire',
      'Wait at a safe assembly area',
      'Go back for belongings',
      'Stand near the corridor',
    ],
    answer: 1,
    explanation:
      'Do not re-enter. Move to a safe assembly area and wait for emergency responders.',
  },
];