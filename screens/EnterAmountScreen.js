import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppStyles } from '../styles/AppStyles'; // Reference to global styles

const EnterAmountScreen = () => {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const navigation = useNavigation();

  const handlePay = () => {
    if (amount) {
      navigation.navigate('EnterPIN'); // Navigate to EnterPIN screen
    }
  };

  return (
    <View style={[AppStyles.background, styles.container]}>
      <Text style={AppStyles.text}>Enter Amount:</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter Amount"
        keyboardType="numeric"
        style={[AppStyles.input, styles.input]}
      />
      <Text style={AppStyles.text}>Enter Note:</Text>
      <TextInput
        value={note}
        onChangeText={setNote}
        placeholder="Enter Note"
        style={[AppStyles.input, styles.input]}
      />
      <TouchableOpacity style={AppStyles.button} onPress={handlePay}>
        <Text style={AppStyles.buttonText}>Pay</Text>
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
    borderColor: '#49A078', // Consistent border color
    borderWidth: 1,
    padding: 10,
    borderRadius: 5, // Rounded corners for a softer look
    marginBottom: 20,
  },
});

export default EnterAmountScreen;
