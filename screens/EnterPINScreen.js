import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppStyles } from '../styles/AppStyles';

const EnterPINScreen = () => {
  const [pin, setPin] = useState('');

  const handleSubmit = () => {
    if (pin.length === 4) {
      alert('Transaction Successful'); // Simulating a successful transaction
    } else {
      alert('Invalid PIN');
    }
  };

  return (
    <View style={[AppStyles.background, styles.container]}>
      <Text style={AppStyles.text}>Enter PIN:</Text>
      <TextInput
        value={pin}
        onChangeText={setPin}
        placeholder="Enter PIN"
        secureTextEntry={true}
        style={[AppStyles.input, styles.input]}
      />
      <TouchableOpacity style={AppStyles.button} onPress={handleSubmit}>
        <Text style={AppStyles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center alignment
    padding: 16,
  },
  input: {
    borderColor: '#49A078',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default EnterPINScreen;
