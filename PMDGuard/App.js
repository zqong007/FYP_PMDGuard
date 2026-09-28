// PMDGuard - PMD Fire Preparedness App for Singapore
// Built with React Native and Expo
//
// App.js manages the main application state, progress persistence, screen navigation, badge progress, and bottom tab navigation.
//
// User progress is stored locally using AsyncStorage.
// The active screen and temporary screen state are not persisted, allowing the app to open on the Home screen each time.

// react native components
import { View, Text, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

// local storage
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLORS } from './constants/colors';
import { tabBars } from './constants/tabBars';

import { RESOURCES } from './data/resources';
import { CHECKLIST_ITEMS } from './data/checklist';
import { BADGES } from './data/badges';

import { styles } from './styles/styles';

import HomeScreen from './screens/HomeScreen';
import AssessmentScreen from './screens/AssessmentScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import BadgesScreen from './screens/BadgesScreen';
import MapScreen from './screens/MapScreen';

export default function App() {

  // main application state
  const [activeTabBar, setActiveTabBar] = useState('Home');
  const [completedQuizzes, setCompletedQuizzes] = useState(new Set());
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [readArticles, setReadArticles] = useState(new Set());
  const [badges, setBadges] = useState(BADGES);
  const [hasOpenedSafetyMap, setHasOpenedSafetyMap] = useState(false);
  const [hasLoadedProgress, setHasLoadedProgress] = useState(false);

  // calculate progress value
  const quizCount = completedQuizzes.size;
  const badgeCount = badges.filter((badge) => badge.earned).length;

  // unlock badge with its unique badgeId
  const awardBadge = (badgeId) => {
    setBadges((currentBadges) =>
      currentBadges.map((badge) =>
        badge.id === badgeId
          ? { ...badge, earned: true }
          : badge
      )
    );
  };

  // record completion of quiz and award related badges
  const handleQuizComplete = (score, totalQuestions, quizType) => {

    setCompletedQuizzes((currentQuizzes) => {
      const updatedQuizzes = new Set(currentQuizzes);

      updatedQuizzes.add(quizType);

      // Complete first unique quiz
      if (updatedQuizzes.size >= 1) {
        awardBadge('first_quiz');
      }

      // Complete both unique quizzes
      if (updatedQuizzes.size >= 2) {
        awardBadge('quiz_master');
      }

      return updatedQuizzes;
    });

    // Score 100% on any quiz
    if (score === totalQuestions) {
      awardBadge('perfect_score');
    }
  };

  // toggle checklist items and award the badge for completion
  const handleChecklistToggle = (index) => {
    setCheckedItems((currentItems) => {
      const updatedItems = new Set(currentItems);

      if (updatedItems.has(index)) {
        updatedItems.delete(index);
      } else {
        updatedItems.add(index);
      }

      // award badge when the checklist is completed
      if (updatedItems.size === CHECKLIST_ITEMS.length) {
        awardBadge('checklist_complete');
      }

      return updatedItems;
    });
  };

  // award the emeregency ready badge when the safety map is opened for the first time
  const handleEmergencyReady = () => {
    if (!hasOpenedSafetyMap) {
      setHasOpenedSafetyMap(true);
      awardBadge( 'emergency_ready');
    }
  };

  // record all the view resources and award the badge when all resources are view
  const handleResourceRead = (index) => {
    setReadArticles((currentArticles) => {
      const updatedArticles = new Set(currentArticles);
      updatedArticles.add(index);

      if (updatedArticles.size === RESOURCES.length) {
        awardBadge('resource_reader');
      }
      return updatedArticles;
    });
  }

  // load the saved progress from asyncstorage when the app is loaded
  useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedCompletedQuizzes  = await AsyncStorage.getItem('completedQuizzes');
        const savedReadArticles = await AsyncStorage.getItem('readArticles');
        const savedBadges = await AsyncStorage.getItem('badges');
        const savedSafetyMap = await AsyncStorage.getItem('hasOpenedSafetyMap');
        const savedCheckedItems = await AsyncStorage.getItem('checkedItems');

        // restore each saved value to is coressponding state
        if (savedCompletedQuizzes) setCompletedQuizzes(new Set(JSON.parse(savedCompletedQuizzes)));
        if (savedReadArticles) setReadArticles(new Set(JSON.parse(savedReadArticles)));
        if (savedBadges) setBadges(JSON.parse(savedBadges));
        if (savedSafetyMap) setHasOpenedSafetyMap(JSON.parse(savedSafetyMap));
        if (savedCheckedItems) setCheckedItems(new Set(JSON.parse(savedCheckedItems)));
      } catch (error) {

        console.log('Error loading progress', error);

      } finally {
        // allow progress to be saved after loading is done
        setHasLoadedProgress(true);
      }
    };

    loadProgress();
  }, []);

  // save completed quizzes
  useEffect(() => {
    if (!hasLoadedProgress) return;

    const saveCompletedQuizzes  = async () => {
      try {
        await AsyncStorage.setItem(
          'completedQuizzes',
          JSON.stringify([...completedQuizzes])
        );
      } catch (error) {
        console.log('Error saving completed quizzes', error);
      }
    };

    saveCompletedQuizzes();
  }, [hasLoadedProgress, completedQuizzes]);

  // save checklist progress
  useEffect(() => {
  if (!hasLoadedProgress) return;

  const saveCheckedItems = async () => {
    try {
      await AsyncStorage.setItem(
        'checkedItems',
        JSON.stringify([...checkedItems])
      );
    } catch (error) {
      console.log('Error saving checklist items', error);
    }
  };

  saveCheckedItems();
}, [hasLoadedProgress, checkedItems]);

// save safety map progress
useEffect(() => {
  if (!hasLoadedProgress) return;

  const saveSafetyMap = async () => {
    try {
      await AsyncStorage.setItem(
        'hasOpenedSafetyMap',
        JSON.stringify(hasOpenedSafetyMap)
      );
    } catch (error) {
      console.log('Error saving safety map progress', error);
    }
  };

  saveSafetyMap();

}, [hasLoadedProgress, hasOpenedSafetyMap]);

  // save read resources
  useEffect(() => {
    if (!hasLoadedProgress) return;

    const saveReadArticles = async () => {
      try {
        await AsyncStorage.setItem(
          'readArticles',
          JSON.stringify([...readArticles])
        );
      } catch (error) {console.log('Error saving read articles', error);
      }
    };

    saveReadArticles();
  }, [hasLoadedProgress, readArticles]);

  // save badges progress
  useEffect(() => {
    if (!hasLoadedProgress) return;

    const saveBadges = async () => {
      try {
        await AsyncStorage.setItem(
          'badges',
          JSON.stringify(badges)
        );
      } catch (error) {
        console.log('Error saving badges', error);
      }
    };

    saveBadges();
  }, [hasLoadedProgress, badges]);

  // confirms and clear all progress user saved locally
  const resetProgress = () => {
    Alert.alert(
      'Reset Progress',
      'Are you sure you want to reset all your progress? This cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },

        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            try {

              // remove all progress value from asyncstorage
              await AsyncStorage.multiRemove([
                'completedQuizzes',
                'readArticles',
                'badges',
                'hasOpenedSafetyMap',
                'checkedItems',
              ]);

              // reset to its initial value
              setCompletedQuizzes(new Set());
              setReadArticles(new Set());
              setBadges(BADGES);
              setHasOpenedSafetyMap(false);
              setCheckedItems(new Set());

            } catch (error) {
              console.log('Error resetting progress', error);
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.appContainer}>

        <StatusBar barStyle="light-content"  backgroundColor={COLORS.background} />

        {/* display the currently selected screen */}
        <View style={{ flex: 1 }}>
          {activeTabBar === 'Home' && ( <HomeScreen onNavigate={(tab) => setActiveTabBar(tab)} quizCount={quizCount} readCount={readArticles.size} badgeCount={badgeCount} /> )}

          {activeTabBar === 'Assessment' && ( <AssessmentScreen onQuizComplete={handleQuizComplete} checkedItems={checkedItems} onChecklistToggle={handleChecklistToggle} completedQuizzes={completedQuizzes} />)}

          {activeTabBar === 'Map' && ( <MapScreen onEmergencyReady={handleEmergencyReady} /> )}

          {activeTabBar === 'Resources' && ( <ResourcesScreen onResourceRead={handleResourceRead} readArticles={readArticles} /> )}

          {activeTabBar === 'Badges' && ( <BadgesScreen badges={badges} onResetProgress={resetProgress} /> )}

        </View>

        {/* bottom tab navigation */}
        <View style={styles.tabBar}>
          {tabBars.map((tab) => {

            const isActive = activeTabBar === tab.key;

            return (
              <TouchableOpacity key={tab.key} style={styles.tabItem} onPress={() => setActiveTabBar(tab.key)} >
                <Text style={[ styles.tabIcon, isActive && styles.tabIconSelected]}>
                  {tab.icon}
                </Text>

                <Text style={[ styles.tabLabel, isActive && styles.tabLabelActive]}>
                  {tab.label}
                </Text>

                {/* show indicator below at the currently selected tab */}
                {isActive && <View style={styles.tabIndicator} />}
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
