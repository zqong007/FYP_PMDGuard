import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  screenContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  appName: {
    fontSize: 35,
    fontWeight: '800',
    color: COLORS.primaryText,
  },

  appTagline: {
    fontSize: 15,
    color: COLORS.secondaryText,
    marginTop: 2,
  },


  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.componentBackground,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },

  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },

  tabIcon: {
    fontSize: 28,
    color: COLORS.secondaryText,
  },

  tabIconSelected: {
    color: COLORS.highlightColor,
  },

  tabLabel: {
    fontSize: 13,
    color: COLORS.secondaryText,
    marginTop: 3,
  },

  tabLabelActive: {
    color: COLORS.highlightColor,
    fontWeight: '700',
  },

  tabIndicator: {
    position: 'absolute',
    top: 0,
    width: 24,
    height: 2,
    backgroundColor: COLORS.highlightColor,
  },

  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 4,
  },

  sectionTitle: {
    color: COLORS.primaryText,
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 4,
  },

  alertBanner: {
    flexDirection: 'row',
    backgroundColor: COLORS.alertColour + '18',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.alertColour + '40',
    padding: 14,
    marginBottom: 22,
    alignItems: 'flex-start',
  },

  alertIcon: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 2,
    color: COLORS.alertColour,
    fontWeight: '700',
  },

  alertTitle: {
    color: COLORS.alertColour,
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 3,
  },

  alertText: {
    color: COLORS.secondaryText,
    fontSize: 13,
    lineHeight: 17,
  },

  progressRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 22,
  },

  progressCard: {
    flex: 1,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  progressValue: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.primaryText,
  },

  progressLabel: {
    color: COLORS.secondaryText,
    fontSize: 16,
    marginTop: 3,
    textAlign: 'center',
  },

  quickActionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 22,
  },

  quickActionCard: {
    width: '48%',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 14,
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  quickIcon: {
    fontSize: 26,
    marginBottom: 8,
  },

  quickLabel: {
    fontWeight: '700',
    fontSize: 17,
    color: COLORS.primaryText,
  },

  sosButton: {
    backgroundColor: COLORS.emergencyColor,
    borderRadius: 40,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: COLORS.emergencyColor,
    shadowRadius: 12,
    shadowOpacity: 0.7,
    elevation: 8,
  },

  sosText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 17,
  },

  sosSubText: {
    color: '#FFFFFF',
    fontSize: 9,
  },

  contactsContainer: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 60,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  contactAbbrBox: {
    width: 65,
    height: 30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  contactAbbrText: {
    color: COLORS.secondaryText,
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.5,
  },

  contactName: {
    color: COLORS.primaryText,
    fontWeight: '600',
    fontSize: 18,
  },

  contactNumber: {
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  contactNumberText: {
    fontWeight: '800',
    fontSize: 18,
    color: COLORS.primaryText,
  },

  // assessment
  assessmentHeader: {
    color: COLORS.primaryText,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },

  assessmentText: {
    color: COLORS.secondaryText,
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 12,
  },

  quizSubtitle: {
    color: COLORS.secondaryText,
    fontSize: 12,
    marginBottom: 14,
  },

  quizSelectionCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  quizCategory: {
    color: COLORS.secondaryText,
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 1.5,
    marginBottom: 3,
  },

  quizTitle: {
    color: COLORS.primaryText,
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 4,
  },

  quizPreview: {
    color: COLORS.secondaryText,
    fontSize: 15,
  },

  quizCompletedTick: {
    color: COLORS.successColor,
    fontSize: 20,
    fontWeight: '800',
  },

  questionProgress: {
    color: COLORS.secondaryText,
    fontSize: 15,
    marginBottom: 16,
  },

  questionCard: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  questionText: {
    color: COLORS.primaryText,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
  },

  answerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 2,
  },

  answerLetter: {
    fontWeight: '800',
    fontSize: 17,
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },

  answerText: {
    flex: 1,
    fontSize: 17,
    lineHeight: 20,
  },

  explanationBox: {
    backgroundColor: COLORS.componentBackground,
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  explanationTitle: {
    fontWeight: '700',
    marginBottom: 6,
    fontSize: 17,
  },

  explanationText: {
    color: COLORS.secondaryText,
    fontSize: 16,
    lineHeight: 22,
  },

  primaryButton: {
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.highlightColor,
    marginTop: 16,
  },

  primaryButtonText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 16,
  },

  resultContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  resultTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.primaryText,
    marginBottom: 8,
  },

  resultScore: {
    fontSize: 52,
    fontWeight: '900',
    color: COLORS.highlightColor,
    marginTop: 8,
  },

  resultPercentage: {
    fontSize: 18,
    color: COLORS.secondaryText,
    marginTop: 4,
    marginBottom: 20,
  },

  secondaryButton: {
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.border,
    marginTop: 12,
  },

  secondaryButtonText: {
    color: COLORS.secondaryText,
    fontWeight: '700',
    fontSize: 16,
  },

  checklistProgressCard: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
  },

  checklistProgressTitle: {
    color: COLORS.primaryText,
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 8,
  },

  checklistPercentage: {
    fontSize: 18,
    color: COLORS.secondaryText,
    marginBottom: 10,
  },

  checklistProgressBar: {
    height: 8,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    overflow: 'hidden',
  },

  checklistProgressFill: {
    height: 8,
    backgroundColor: COLORS.highlightColor,
    borderRadius: 4,
  },

  checklistProgressText: {
    color: COLORS.secondaryText,
    fontSize: 17,
    marginTop: 8,
  },

  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  checklistItemSelected: {
    borderColor: COLORS.successColor,
  },

  recommendationSection: {
  backgroundColor: COLORS.cardBackground,
  borderRadius: 14,
  padding: 16,
  marginTop: 8,
  borderWidth: 1,
  borderColor: COLORS.border,
},

  recommendationTitle: {
    color: COLORS.primaryText,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },

  recommendationSubtitle: {
    color: COLORS.secondaryText,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },

  recommendationItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  recommendationBullet: {
    color: COLORS.alertColour,
    fontSize: 25,
    fontWeight: '700',
    marginRight: 8,
  },

  recommendationText: {
    flex: 1,
    color: COLORS.primaryText,
    fontSize: 17,
    lineHeight: 20,
  },

  checkBox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  checkBoxSelected: {
    backgroundColor: COLORS.successColor,
    borderColor: COLORS.successColor,
  },

  checkTickMark: {
    color: '#000000',
    fontWeight: '800',
    fontSize: 13,
  },

  checklistText: {
    flex: 1,
    color: COLORS.primaryText,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },

  // map
  mapContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  mapHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },

  mapSubtitle: {
    color: COLORS.secondaryText,
    fontSize: 12,
  },

  mapWebView: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // resource
  resourceSubtitle: {
    color: COLORS.secondaryText,
    fontSize: 15,
    marginBottom: 10,
  },

  resourceCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  resourceNumber: {
    width: 34,
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  resourceNumberText: {
    color: COLORS.secondaryText,
    fontWeight: '700',
    fontSize: 25,
  },

  resourceCategory: {
    color: COLORS.secondaryText,
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 1.5,
    marginBottom: 3,
  },

  resourceTitle: {
    color: COLORS.primaryText,
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 4,
  },

  resourcePreview: {
    color: COLORS.secondaryText,
    fontSize: 13,
  },

  resourceHeader: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },

  resourceBody: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  resourceContent: {
    color: COLORS.primaryText,
    fontSize: 16,
    lineHeight: 26,
  },

  resourceReadTick: {
    color: COLORS.successColor,
    fontSize: 20,
    fontWeight: '800',
  },

  backButton: {
    paddingVertical: 10,
    marginBottom: 12,
  },

  backButtonText: {
    color: COLORS.primaryText,
    fontWeight: '600',
    fontSize: 16,
  },

  resourceArrow: {
    color: COLORS.secondaryText,
    fontSize: 18,
  },

  // badge
  badgeSubtitle: {
    color: COLORS.secondaryText,
    fontSize: 12,
    marginBottom: 10,
  },

  badgeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },

  badgeCard: {
    width: '48%',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  badgeCardLocked: {
    opacity: 0.4,
  },

  badgeCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  badgeCircleUnlocked: {
    borderColor: COLORS.successColor,
    backgroundColor: COLORS.successColor + '15',
  },

  badgeIcon: {
    fontSize: 26,
  },

  badgeTitle: {
    color: COLORS.primaryText,
    fontWeight: '700',
    fontSize: 13,
    textAlign: 'center',
  },

  badgeDescription: {
    color: COLORS.secondaryText,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 4,
    lineHeight: 16,
  },

  badgeStatus: {
    color: COLORS.successColor,
    fontSize: 11,
    marginTop: 6,
    fontWeight: '600',
  },

  // reset progress button
  resetProgressButton: {
    marginTop: 10,
    marginBottom: 30,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.emergencyColor,
    alignItems: 'center',
  },

  resetProgressText: {
    color: COLORS.emergencyColor,
    fontSize: 13,
    fontWeight: '700',
  },
  });