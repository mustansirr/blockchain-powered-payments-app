import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { app } from '../firebaseconfig'; // Your Firebase setup
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase Auth functions

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUp = () => {
    const auth = getAuth(app); // Get Firebase Auth instance

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
    } else {
      createUserWithEmailAndPassword(auth, email, password) // Firebase function to create a new user
        .then((userCredential) => {
          // User signed up successfully
          console.log('User    created:', userCredential.user);
          navigation.navigate('Login'); // Navigate to login screen or home screen
        })
        .catch((error) => {
          // Handle error
          console.error(error);
          setErrorMessage(`Sign-Up Error: ${error.message}`);
        });
    }
  };

  const handleDismissError = () => {
    setErrorMessage(null);
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
      {errorMessage && (
        <View style={{ backgroundColor: 'red', padding: 10 }}>
          <Text style={{ color: 'white' }}>{errorMessage}</Text>
          <TouchableOpacity onPress={handleDismissError}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}>X</Text>
          </TouchableOpacity>
        </View>
      )}
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
