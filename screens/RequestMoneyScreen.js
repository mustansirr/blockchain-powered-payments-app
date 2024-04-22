import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppStyles } from '../styles/AppStyles';

const RequestMoneyScreen = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = React.useState('');
  const [amount, setAmount] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Money</Text>

      <Text style={styles.label}>Enter User ID:</Text>
      <TextInput
        style={styles.input}
        value={userId}
        onChangeText={setUserId}
        placeholder="User ID"
        placeholderTextColor="#49A078"
      />

      <Text style={styles.label}>Enter Amount:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Amount"
        keyboardType="numeric"
        placeholderTextColor="#49A078"
      />

      <TouchableOpacity
        style={styles.requestButton}
        onPress={() => {
          // Handle request money logic here
          console.log(`Requesting ${amount} from user ID: ${userId}`);
          // Navigate back to home screen or show success message
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCE1DE',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#49A078',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#49A078',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#49A078',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    color: '#49A078',
  },
  requestButton: {
    backgroundColor: '#49A078',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RequestMoneyScreen;
