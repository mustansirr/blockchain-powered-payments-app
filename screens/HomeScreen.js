import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { AppStyles } from '../styles/AppStyles';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[AppStyles.background, styles.container]}>
      {/* Search bar section */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={[styles.searchInput, AppStyles.text]}
          placeholder="Search..."
          placeholderTextColor="#49A078"
        />
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="user" type="font-awesome" color="#49A078" />
        </TouchableOpacity>
      </View>

      {/* Bank image between search and payment options */}
      <Image source={require('../assets/bank.png')} style={styles.image} />

      {/* Payment options section */}
      <View style={styles.contentContainer}>
        <View style={styles.tileContainer}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => navigation.navigate('PayByQRCode')}
          >
            <Text style={styles.tileText}>Pay by QR Code</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tile}
            onPress={() => navigation.navigate('PayByUserID')}
          >
            <Text style={styles.tileText}>Pay by User ID</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tileContainer}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => alert('Save User ID feature')}
          >
            <Text style={styles.tileText}>Save a User ID</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tile}
            onPress={() => navigation.navigate('RequestMoney')}
          >
            <Text style={styles.tileText}>Request Money</Text>
          </TouchableOpacity>
        </View>

        {/* Payment image between payment options and see transactions */}
        <Image
          source={require('../assets/payment.png')}
          style={styles.image}
        />

        {/* Transaction history and account balance section */}
        <View style={styles.textButtonContainer}>
          <TouchableOpacity
            style={styles.textButton}
            onPress={() => alert('Transaction History')}
          >
            <Text style={styles.textButtonText}>See Transaction History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.textButton}
            onPress={() => alert('Check Account Balance')}
          >
            <Text style={styles.textButtonText}>Check Account Balance</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns icon and search bar correctly
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#49A078',
    padding: 8,
    color: '#49A078',
    borderRadius: 5, // Rounded edges
  },
  iconContainer: {
    padding: 8,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  tileContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Ensures symmetric alignment
    marginBottom: 16,
  },
  tile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#49A078', // Consistent tile background color
    padding: 16,
    marginHorizontal: 8, // Horizontal spacing for consistent layout
    borderRadius: 10, // Rounded corners for a softer look
  },
  tileText: {
    color: '#FFFFFF', // Text color for tiles
    fontSize: 16, // Consistent font size
  },
  textButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Symmetric alignment for text buttons
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  textButton: {
    padding: 8,
    marginHorizontal: 10,
  },
  textButtonText: {
    fontSize: 14,
    color: '#49A078', // Consistent text color
    textDecorationLine: 'none', // To indicate clickable text
  },
  image: {
    width: 200, // Width of the image
    height: 200, // Height of the image
    marginVertical: 20, // Spacing between image and other elements
    alignSelf: 'center', // Center-align the image
  },
});

export default HomeScreen;
