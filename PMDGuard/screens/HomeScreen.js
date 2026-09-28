import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../styles/styles';
import { emergencyContacts } from '../data/emergencyContacts';

import ProgressCard from '../components/ProgressCard';
import SOSbutton from '../components/SOSButton';


// home screen to display the app name, tagline, progress and quick actions
export default function HomeScreen({ onNavigate, quizCount, readCount, badgeCount }) {
  return (
    <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>

    {/* home header */}
    <View style={styles.homeHeader}>
      <View>
        <Text style={styles.appName}>PMDGuard</Text>
        <Text style={styles.appTagline}>Singapore PMD Fire Preparedness</Text>
      </View>

      <SOSbutton />
    </View>

    {/* fire awareness banner */}
    <View style={styles.alertBanner}>
      <Text style={styles.alertIcon}>⚠</Text>

      <View style={{ flex: 1 }}>
        <Text style={styles.alertTitle}>PMD Fire Awareness</Text>

        <Text style={styles.alertText}>
          SCDF reports a 31% rise in PMD-related fires in 2023.
          Stay prepared.
        </Text>
      </View>
    </View>

    {/* progress section showing user's progress */}
    <Text style={styles.sectionTitle}>Your Progress</Text>

    <View style={styles.progressRow}>
      <ProgressCard value={quizCount} label="Quizzes Done"/>

      <ProgressCard value={badgeCount} label="Badges Earned"/>

      <ProgressCard value={readCount} label="Articles Read"/>
    </View>

    {/* quick actions to navigate to other features */}
    <Text style={styles.sectionTitle}>Quick Actions</Text>

    <View style={styles.quickActionGrid}>

      <TouchableOpacity style={styles.quickActionCard} onPress={() => onNavigate('Assessment')}>
        <Text style={styles.quickIcon}>🧠</Text>
        <Text style={styles.quickLabel}>Assessment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.quickActionCard} onPress={() => onNavigate('Map')}>
        <Text style={styles.quickIcon}>🗺️</Text>
        <Text style={styles.quickLabel}>Safety Map</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.quickActionCard} onPress={() => onNavigate('Resources')}>
        <Text style={styles.quickIcon}>📚</Text>
        <Text style={styles.quickLabel}>Resources</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.quickActionCard} onPress={() => onNavigate('Badges')}>
        <Text style={styles.quickIcon}>🏅</Text>
        <Text style={styles.quickLabel}>My Badges</Text>
      </TouchableOpacity>

    </View>

    {/* emergency contacts number */}
    <Text style={styles.sectionTitle}>Emergency Contacts</Text>

    <View style={styles.contactsContainer}>

      {emergencyContacts.map((contact) => (

        // open the phone dialer with the contact number when pressed
        <TouchableOpacity key={contact.name} style={styles.contactRow} onPress={() => Linking.openURL(`tel:${contact.number}`)} activeOpacity={0.75}>

          <View style={styles.contactAbbrBox}>
            <Text style={styles.contactAbbrText}>{contact.abbr}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.contactName}>{contact.name}</Text>
          </View>

          <View style={styles.contactNumber}>
            <Text style={styles.contactNumberText}>{contact.number}</Text>
          </View>

        </TouchableOpacity>

      ))}

    </View>

    </ScrollView>
  );
}