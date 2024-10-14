import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { app } from '../firebaseconfig'; // Your Firebase setup
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Firebase Auth functions

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const auth = getAuth(app); // Get Firebase Auth instance

    signInWithEmailAndPassword(auth, email, password) // Firebase function to sign in a user
      .then((userCredential) => {
        // User logged in successfully
        console.log('Logged in:', userCredential.user);
        navigation.navigate('Home'); // Navigate to the home screen or desired screen
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        alert('Login Error:', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      /><br></br>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity><br></br>
      <Text>
        Don't have an account?{' '}
        <Text
          style={styles.signUpLink}
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
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
    fontFamily: 'san-serif'
  },
  input: {
    height: 40,
    width: '30%', // Reduced width from 80% to 60%
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5, // Added a slight border radius to improve the look
    backgroundColor: '#fff', // Added a white background to improve the look
    fontSize: 16, // Increased font size for better readability
  },
  button: {
    backgroundColor: '#49A078',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signUpLink: {
    color: '#49A078',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
