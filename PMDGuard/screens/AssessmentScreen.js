import {  View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { styles } from '../styles/styles';
import { COLORS } from '../constants/colors';

import { CHECKLIST_ITEMS, CHECKLIST_RECOMMENDATIONS } from '../data/checklist';
import QuizScreen from './QuizScreen';

// screen to display the assessment options and handle user interactions
export default function AssessmentScreen({ onQuizComplete, checkedItems, onChecklistToggle, completedQuizzes }) {

  // track which assessment type user has selected either quiz or checklist
  const [assessmentType, setAssessmentType] = useState(null);
  
  // calculate the checklist completion percentage
  const completed = checkedItems.size;
  const total = CHECKLIST_ITEMS.length;
  const percentage = Math.round((completed / total) * 100);

  // display the quiz screen if user selected the quiz assessment
  if (assessmentType === 'quiz') {
    return (<QuizScreen onQuizComplete={onQuizComplete} completedQuizzes={completedQuizzes} />);
  }
  
  // display the checklist screen if user selected the checklist assessment
  if (assessmentType === 'checklist') {
    return (
      <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>

        <TouchableOpacity style={styles.backButton} onPress={() => setAssessmentType(null)}>
          <Text style={styles.backButtonText}>← Back to Assessment</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Safety Checklist</Text>

        <Text style={styles.quizSubtitle}>Tick the safety practices that currently apply to you</Text>

        <View style={styles.checklistProgressCard}>
          <Text style={styles.checklistProgressTitle}>Checklist Progress</Text>

          <Text style={styles.checklistPercentage}>{percentage}% Complete</Text>

          <View style={styles.checklistProgressBar}>
            <View style={[styles.checklistProgressFill, { width: `${percentage}%` }]}/>
          </View>

          <Text style={styles.checklistProgressText}>{completed}/{total} safety checks completed</Text>
        </View>

        {/* display the checklist items with checkboxes */}
        {CHECKLIST_ITEMS.map((item, index) => {
          // check if the checklist item is selected
          const isChecked = checkedItems.has(index);

          return (
            <TouchableOpacity
              key={index}
              style={[styles.checklistItem, isChecked && styles.checklistItemSelected]}
              onPress={() => onChecklistToggle(index)}
              activeOpacity={0.8}
            >
              <View style={[styles.checkBox, isChecked && styles.checkBoxSelected]}>
                {isChecked && (<Text style={styles.checkTickMark}>✓</Text>)}
              </View>

              <Text style={[styles.checklistText, isChecked && {color: COLORS.successColor}]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}

        {/* display the safety recommendations if not all checklist items are selected */}
        {completed < total && (
          <View style={styles.recommendationSection}>

            <Text style={styles.recommendationTitle}>
              Safety Recommendations
            </Text>

            <Text style={styles.recommendationSubtitle}>
              Based on the safety practices you have not selected:
            </Text>

            {CHECKLIST_RECOMMENDATIONS.map((recommendation, index) => {

              if (checkedItems.has(index)) return null;

              return (
                <View key={index} style={styles.recommendationItem}>

                  <Text style={styles.recommendationBullet}>
                    •
                  </Text>

                  <Text style={styles.recommendationText}>
                    {recommendation}
                  </Text>

                </View>
              );
            })}

          </View>
        )}

        <View style={{ height: 30 }} />
      </ScrollView>
    );
  }

  // display the assessment selection screen if no assessment type is selected
  return (
    <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Assessment Centre</Text>

      <Text style={styles.quizSubtitle}>Choose an assessment activity to continue</Text>

      {/* knowledge assessment section */}
      <Text style={styles.assessmentHeader}>Knowledge Assessment</Text>
      <Text style={styles.assessmentText}>Test your understanding of PMD battery safety and emergency response procedures.</Text>

      <TouchableOpacity style={styles.quizSelectionCard} onPress={() => setAssessmentType('quiz')} activeOpacity={0.8}>
        <View style={{ flex: 1 }}>
          <Text style={styles.quizCategory}>KNOWLEDGE ASSESSMENT</Text>

          <Text style={styles.quizTitle}>Start Quiz</Text>

          <Text style={styles.quizPreview}>Test your PMD fire safety knowledge.</Text>
        </View>

        <Text style={styles.resourceArrow}>›</Text>
      </TouchableOpacity>

      {/* safety self-assessment section */}
      <Text style={[styles.assessmentHeader, { marginTop: 20 }]}>Safety Self-Assessment</Text>
      <Text style={styles.assessmentText}>Review your current charging habits and PMD fire safety practices.</Text>

      <TouchableOpacity
        style={styles.quizSelectionCard}
        onPress={() => setAssessmentType('checklist')}
        activeOpacity={0.8}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.quizCategory}>SAFETY SELF-ASSESSMENT</Text>
          <Text style={styles.quizTitle}>Open Safety Checklist</Text>
          <Text style={styles.quizPreview}>Review your current PMD charging and fire safety practices.</Text>
        </View>

        <Text style={styles.resourceArrow}>›</Text>
      </TouchableOpacity>
      <View style={{ height: 30 }} />
    </ScrollView>
  );
}