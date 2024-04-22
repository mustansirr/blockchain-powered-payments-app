import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppStyles } from '../styles/AppStyles'; // Ensure you're importing global styles

const PayByUserIDScreen = () => {
  const [receiverUserID, setReceiverUserID] = useState('');
  const navigation = useNavigation();

  const handleContinue = () => {
    if (receiverUserID) {
      navigation.navigate('EnterAmount', { receiverUserID }); // Navigate with user ID
    }
  };

  return (
    <View style={styles.container}>
      <Text style={AppStyles.text}>Enter Receiver's User ID:</Text> {/* Consistent text color */}
      <TextInput
        value={receiverUserID}
        onChangeText={setReceiverUserID}
        placeholder="Enter User ID"
        placeholderTextColor="#49A078" // Consistent placeholder color
        style={[AppStyles.input, styles.input]} // Applying input style from global styles
      />
      <TouchableOpacity
        style={AppStyles.button} // Consistent button style
        onPress={handleContinue}
      >
        <Text style={AppStyles.buttonText}>Continue</Text> {/* Consistent button text color */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#DCE1DE', // Matching background color
  },
  input: {
    borderColor: '#49A078', // Matching border color
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: '#49A078', // Text color inside TextInput
  },
});

export default PayByUserIDScreen;
