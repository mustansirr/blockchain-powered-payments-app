import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { app } from '../firebaseconfig'; // Your Firebase setup
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase Auth functions

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    const auth = getAuth(app); // Get Firebase Auth instance

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password) // Firebase function to create a new user
      .then((userCredential) => {
        // User signed up successfully
        console.log('User created:', userCredential.user);
        navigation.navigate('Login'); // Navigate to login screen or home screen
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        alert('Sign-Up Error:', error.message);
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
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#49A078',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 16,
  },
  signInPrompt: {
    marginTop: 20,
    fontSize: 14,
    color: '#000000', // Text color for the prompt
  },
  signInLink: {
    color: '#49A078',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
