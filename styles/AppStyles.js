// In AppStyles.js
import { StyleSheet } from 'react-native';

export const AppStyles = StyleSheet.create({
  background: {
    backgroundColor: '#DCE1DE', // Background color for all screens
    flex: 1,
    padding: 20,
  },
  text: {
    color: '#49A078', // Text color
  },
  button: {
    backgroundColor: '#49A078', // Button color
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
