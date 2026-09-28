// badge definitions used by the achievement system
// every badge starts as locked and is unlocked when its requirement is met
export const BADGES = [
  {
    id: 'first_quiz',
    icon: '🎯',
    title: 'First Responder',
    description: 'Complete your first quiz',
    earned: false,
  },
  {
    id: 'perfect_score',
    icon: '🏆',
    title: 'Fire Marshal',
    description: 'Score 100% on any quiz',
    earned: false,
  },
  {
    id: 'resource_reader',
    icon: '📚',
    title: 'Safety Scholar',
    description: 'Read all 5 resources',
    earned: false,
  },
  {
    id: 'quiz_master',
    icon: '⭐',
    title: 'PMD Guardian',
    description: 'Complete all quizzes',
    earned: false,
  },
  {
    id: 'emergency_ready',
    icon: '🚒',
    title: 'Emergency Ready',
    description: 'Open the Safety Map',
    earned: false,
  },
  {
    id: 'checklist_complete',
    icon: '✅',
    title: 'Safety Champion',
    description: 'Complete the PMD safety checklist',
    earned: false,
  },
];