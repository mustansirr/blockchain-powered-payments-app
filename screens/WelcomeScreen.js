import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>PaySafe</Text>
      {/* Add your app logo here */}
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      <Text style={{ marginTop: 20 }}>Already have an account? <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Login')}>Sign in</Text></Text>
    </View>
  );
};

export default WelcomeScreen;
