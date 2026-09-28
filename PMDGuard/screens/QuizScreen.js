import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

import { COLORS } from '../constants/colors';
import { styles } from '../styles/styles';

import { BATTERY_QUIZ_QUESTIONS, EMERGENCY_QUIZ_QUESTIONS } from '../data/quizzes';

// screen to display the quiz questions and handle user interactions
export default function QuizScreen({ onQuizComplete, completedQuizzes }) {

  // track which quiz type user has selected
  const [quizType, setQuizType] = useState(null);

  // select the quiz questions based on selected quiz type
  const questions =
    quizType === 'emergency'
      ? EMERGENCY_QUIZ_QUESTIONS
      : BATTERY_QUIZ_QUESTIONS;

  // track the current question index, selected answer, score, and quiz completion status
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);
  const [completionRecorded, setCompletionRecorded] = useState(false);

  // record the quiz completion and score when the quiz is finished
  useEffect(() => {
    if (finished && !completionRecorded) {
      onQuizComplete(score, questions.length, quizType);
      setCompletionRecorded(true);
    }
  }, [finished, completionRecorded, onQuizComplete, score, questions.length, quizType]);

  // display the quiz selection screen before the user selects a quiz type
  if (!quizType) {
    return (
      <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Choose a Quiz</Text>

        <Text style={styles.quizSubtitle}>Select a topic to test your PMD fire preparedness knowledge</Text>

        {/* battery quiz */}
        <TouchableOpacity style={styles.quizSelectionCard} onPress={() => setQuizType('battery')} activeOpacity={0.8}>

          <View style={{ flex: 1 }}>
            <Text style={styles.quizCategory}>BATTERY SAFETY</Text>

            <Text style={styles.quizTitle}>PMD Battery Safety Quiz</Text>

            <Text style={styles.quizPreview}>Test your knowledge on charging, batteries, and fire risks.</Text>
          </View>

          {/* show a tick when this quiz is completed */}
          {completedQuizzes.has('battery') ? (
            <Text style={styles.quizCompletedTick}>✓</Text>
          ) : (
            <Text style={styles.resourceArrow}>›</Text>
          )}

        </TouchableOpacity>

        {/* emergency response quiz */}
        <TouchableOpacity style={styles.quizSelectionCard} onPress={() => setQuizType('emergency')} activeOpacity={0.8}>

          <View style={{ flex: 1 }}>
            <Text style={styles.quizCategory}>EMERGENCY RESPONSE</Text>

            <Text style={styles.quizTitle}>PMD Fire Emergency Quiz</Text>

            <Text style={styles.quizPreview}>Test what to do during evacuation and emergency situations.</Text>
          </View>

          {/* show a tick when this quiz is completed */}
          {completedQuizzes.has('emergency') ? (
            <Text style={styles.quizCompletedTick}>✓</Text>
          ) : (
            <Text style={styles.resourceArrow}>›</Text>
          )}

        </TouchableOpacity>
      </ScrollView>
    );
  }

  // get current question based on the current question index
  const question = questions[currentQuestion];

  // record the seleced answer, update the score, and show the explanation when an answer is selected
  const handleAnswerSelect = (index) => {
    if (hasAnswered) return;

    setSelectedAnswer(index);
    setHasAnswered(true);
    setShowExplanation(true);

    if (index === question.answer) {
      setScore((currentScore) => currentScore + 1);
    }
  };

  // move to next question of finish the quiz
  const handleNextQuestion = () => {
    if (currentQuestion + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
      setShowExplanation(false);
    }
  };

  // reset the quiz and allow the user to try again
  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setScore(0);
    setFinished(false);
    setShowExplanation(false);
    setCompletionRecorded(false);
  };

  // return to the quiz selection screen and reset the quiz state
  const handleContinue = () => {
    setQuizType(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setScore(0);
    setFinished(false);
    setShowExplanation(false);
    setCompletionRecorded(false);
  };

  // displaythe quiz results when the quiz is finished
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    const isPerfect = score === questions.length;

    return (
      <ScrollView style={styles.screenContainer} contentContainerStyle={styles.resultContainer} showsVerticalScrollIndicator={false}>

        {/* display the quiz results based on the user's score */}
        <Text style={styles.resultTitle}>{isPerfect ? '🏆 Perfect Score' : percentage >= 60 ? '🎯 Well Done' : '📖 Keep Learning'}</Text>

        <Text style={styles.resultScore}>{score}/{questions.length}</Text>

        <Text style={styles.resultPercentage}>{percentage}% Correct</Text>

        {/*return to the quiz selection screen*/}
        <TouchableOpacity style={styles.primaryButton} onPress={handleContinue}>
          <Text style={styles.primaryButtonText}>Continue</Text>
        </TouchableOpacity>

        {/*reset the quiz and allow the user to try again*/}
        <TouchableOpacity style={styles.secondaryButton} onPress={handleTryAgain}>
          <Text style={styles.secondaryButtonText}>Try Again</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }

  // display the current quiz question
  return (
    <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>

      {/* question progress */}
      <Text style={styles.questionProgress}>Question {currentQuestion + 1} of {questions.length}</Text>

      {/* current question */}
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{question.question}</Text>
      </View>

      {/* answer options */}
      {question.options.map((option, index) => {

        let backgroundColor = COLORS.cardBackground;
        let borderColor = COLORS.border;
        let textColor = COLORS.primaryText;

        if (hasAnswered) {

          // highlight correct answer
          if (index === question.answer) {borderColor = COLORS.successColor; textColor = COLORS.successColor;}

          // highlight wrong answer selected by user
          else if (index === selectedAnswer && index !== question.answer) {borderColor = COLORS.emergencyColor; textColor = COLORS.emergencyColor;}
        }

        return (
          <TouchableOpacity
            key={index}
            style={[styles.answerButton, {backgroundColor,borderColor}]}
            onPress={() => handleAnswerSelect(index)}
            activeOpacity={hasAnswered ? 1 : 0.75}
          >
            {/* convert answer index to A, B, C, D */}
            <Text style={[styles.answerLetter, { color: borderColor }]}> {String.fromCharCode(65 + index)}</Text>
            <Text style={[styles.answerText, { color: textColor }]}>{option}</Text>

          </TouchableOpacity>
        );
      })}

      {/* explanation of the current question */}
      {showExplanation && (
        <View style={styles.explanationBox}>

          <Text style={[styles.explanationTitle, {color:selectedAnswer === question.answer ? COLORS.successColor : COLORS.emergencyColor}]}>
            {selectedAnswer === question.answer ? '✅ Correct' : '❌ Incorrect'}
          </Text>

          <Text style={styles.explanationText}>{question.explanation}</Text>

        </View>
      )}

      {/* show next question button when the user has answered */}
      {hasAnswered && (

          <TouchableOpacity style={styles.primaryButton} onPress={handleNextQuestion}>
            <Text style={styles.primaryButtonText}>
              {currentQuestion + 1 >= questions.length ? 'See Results' : 'Next Question →'}
            </Text>
          </TouchableOpacity>

        )}

      <View style={{ height: 30 }} />

    </ScrollView>
  );
}