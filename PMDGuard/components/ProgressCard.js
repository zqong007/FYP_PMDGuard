// react native components
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

// reusable card to display progress value and label
export default function ProgressCard({ value, label }) {
  return (
    <View style={styles.progressCard}>
      <Text style={styles.progressValue}>{value}</Text>
      <Text style={styles.progressLabel}>{label}</Text>
    </View>
  );
}