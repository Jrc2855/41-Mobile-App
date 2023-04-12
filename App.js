import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import registerNNPushToken from 'native-notify';

export default function App() {
  registerNNPushToken(7343, 'kLSLoG1jbixi26v9bDCpbU');
  const [count, setCount] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true
    }),
  });

  Notifications.scheduleNotificationAsync({
    content: {
      title: 'Look at the notification',
      body: 'You pet the cat!'
    },
    trigger: { seconds: 2 },
  });


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.opacityCounter}>Count: {count}</Text>
      <View style={styles.opacityButton}>
        <TouchableOpacity style={styles.opacityButton} onPress={onPress}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        style={styles.textStyles}
        defaultValue="Hello World"
      />
      {/* <Switch
        style={styles.switchStyles}
        trackColor={{ false: '#767577', true: '#74B72E' }}
        ios_backgroundColor='#FF0000'
        onValueChange={toggleSwitch} //I never thought about how this switch has to be coded to stay in the direction it's flipped towards
        value={isEnabled}
      /> */}
      {/* <ActivityIndicator /> */}
      {/* <Text style={styles.freeTextStyles}>The loading indicator doesn't do anything, it's just there to show that I learned about it.</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Found the Dark Mode! #000000
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    marginTop: 25,
    alignItems: 'center',
    height: 40,
    borderColor: '#028A0F',
    padding: 40,
    borderWidth: 5,
    backgroundColor: '#ffffff',
    color: '#000000'
  },
  freeTextStyles: {
    color: '#ffffff'
  },
  switchStyles: {
    marginTop: 25,
    marginRight: 200,
  },
  opacityButton: {
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 15,
    backgroundColor: '#dddddd',
  },
  opacityCounter: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 50,
    paddingVertical: 15,

  }
});
