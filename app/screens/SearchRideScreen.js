import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHourglassStart,
  faMapMarkerAlt,
  faStreetView,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

import colors from '../config/colors';
import MenuBar from '../common/MenuBar';

function SearchRideScreen(props) {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon style={styles.inputIcon} icon={faStreetView} size={22} />
            <TextInput
              style={styles.input}
              placeholder={'Location'}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon style={styles.inputIcon} icon={faMapMarkerAlt} size={20} />
            <TextInput
              style={styles.input}
              placeholder={'Destination'}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon style={styles.inputIcon} icon={faHourglassStart} size={20} />
            <TextInput
              style={styles.input}
              placeholder={'Time'}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon style={styles.inputIcon} icon={faUsers} size={24} />
            <TextInput
              style={styles.input}
              placeholder={'No of Riders'}
            />
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>Go</Text>
          </View>
        </View>
      </ScrollView>
      <MenuBar screen={'ride'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: 280,
    marginTop: 90,
    marginBottom: 30,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    color: '#fff'
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 25
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60,
  },
  icon: {
    color: colors.secondary,
    marginBottom: 30
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    padding: 10,
  },
  inputIcon: {
    marginTop: 23
  },
  inputContainer: {
    flexDirection: 'row',
    width: 280,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary
  },
  riderContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10
  },
  riderTextSec: {
    color: colors.secondary
  },
  safeView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff'
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  scrollView: {
    width: '100%',
  }
});

export default SearchRideScreen;