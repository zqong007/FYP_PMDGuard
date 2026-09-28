// react native components
import { Animated, TouchableOpacity, Text, Alert, Linking } from 'react-native';
import { useEffect, useRef } from 'react';

import { styles } from '../styles/styles';

// sos button for quick access to scdf number
export default function SOSbutton() {

  const pulseAnimation = useRef(
    new Animated.Value(1)
  ).current;

  // continously pulse the sos button
  useEffect(() => {

    Animated.loop(
      Animated.sequence([

        // make the button larger
        Animated.timing(pulseAnimation, {
          toValue: 1.12,
          duration: 800,
          useNativeDriver: true,
        }),

        // return the button to normal
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),

      ])
    ).start();

  }, [pulseAnimation]);

  // ask for confirmation before opening the phone dialer
  const handleSOSPress = () => {

    Alert.alert(
      'Call SCDF Emergency?',
      'This will call 995 (Singapore Civil Defence Force) immediately.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },

        {
          text: 'CALL 995',
          style: 'destructive',

          // open the phone dialer with scdf number
          onPress: () => Linking.openURL('tel:995'),
        },
      ]
    );

  };


  return (
    // apply the pulse animation to the sos button
    <Animated.View
      style={{transform: [{ scale: pulseAnimation }]}}>

      <TouchableOpacity style={styles.sosButton} onPress={handleSOSPress} activeOpacity={0.85}>

        <Text style={styles.sosText}>SOS</Text>

        <Text style={styles.sosSubText}>Call 995</Text>

      </TouchableOpacity>

    </Animated.View>
  );
}