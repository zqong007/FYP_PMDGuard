import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { COLORS } from '../constants/colors';
import { styles } from '../styles/styles';

// screen to display all the badges the user has earned
export default function BadgesScreen({ badges, onResetProgress }) {
  return (
    <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>

      {/* display the badges section */}
      <Text style={styles.sectionTitle}>My Badges</Text>

      <Text style={styles.badgeSubtitle}>Earn badges by using the app</Text>

      {/* display the availble badges*/}
      <View style={styles.badgeGrid}>
        {badges.map((badge) => (

          <View key={badge.id} style={[styles.badgeCard, !badge.earned && styles.badgeCardLocked]}>

            {/* display the badge as unlocked if earned, otherwise locked */}
            <View style={[ styles.badgeCircle, badge.earned && styles.badgeCircleUnlocked]}>
              <Text style={styles.badgeIcon}>{badge.icon}</Text>
            </View>
            <Text style={[ styles.badgeTitle, badge.earned && {color: COLORS.successColor}]}>{badge.title}</Text>

            <Text style={styles.badgeDescription}>{badge.description}</Text>

            {/* show earned status only for unlocked badges */}
            {badge.earned && (<Text style={styles.badgeStatus}>✅ Earned</Text>)}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.resetProgressButton} onPress={onResetProgress}>
        <Text style={styles.resetProgressText}>Reset Progress</Text>
      </TouchableOpacity>

      <View style={{ height: 30 }} />

    </ScrollView>
  );
}