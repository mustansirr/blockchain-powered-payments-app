import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.blackTitle}>Pay</Text>
        <Text style={styles.greenTitle}>Safe</Text>
      </Text>
      <Text style={styles.caption}>Experience Security, Seamlessness,</Text>
      <Text style={styles.caption}>and Simplicity with PaySafe</Text>

      {/* Image placed below the second caption */}
      <Image
        source={require('../assets/welcome.png')} // Adjust the path as per your project structure
        style={styles.image} // Apply styles to ensure it's centered and scaled appropriately
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.signInPrompt}>
        Already have an account?{' '}
        <Text style={styles.signInLink} onPress={() => navigation.navigate('Login')}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCE1DE', // Background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  blackTitle: {
    color: '#000000', // Black color for "Pay"
  },
  greenTitle: {
    color: '#49A078', // Green color for "Safe"
  },
  caption: {
    fontSize: 14,
    color: 'grey',
  },
  button: {
    backgroundColor: '#49A078', // Button color
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff', // Button text color
    fontSize: 16,
  },
  image: {
    width: 200, // Adjust width as needed
    height: 150, // Adjust height as needed
    marginVertical: 20, // Adds space between elements
    resizeMode: 'contain', // Ensures the image scales properly without distortion
  },
  signInPrompt: {
    marginTop: 20,
    fontSize: 14,
    color: '#000000', // Text color for the prompt
  },
  signInLink: {
    color: '#49A078', // Consistent color for the link
    textDecorationLine: 'underline', // Underline to indicate it's a link
  },
});

export default WelcomeScreen;
