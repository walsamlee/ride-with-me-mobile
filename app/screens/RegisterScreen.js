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
  faCheck,
  faEnvelope,
  faKey,
  faMobileAlt,
  faUser,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

import colors from '../config/colors';

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.signupContainer}>
          <FontAwesomeIcon
            size={65}
            style={styles.icon}
            icon={faUserPlus}
          />

          <View style={styles.inputContainer}>
            <FontAwesomeIcon
              icon={faEnvelope}
              size={20}
              style={styles.inputIcon}
            />

            <TextInput
              style={styles.input}
              placeholder={'Email'}
              keyboardType={'email-address'}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesomeIcon
              icon={faMobileAlt}
              size={20}
              style={styles.inputIcon}
            />

            <TextInput
              style={styles.input}
              placeholder={'Phone Number'}
              keyboardType={'phone-pad'}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesomeIcon
              icon={faUser}
              size={20}
              style={styles.inputIcon}
            />

            <TextInput
              style={styles.input}
              placeholder={'Username'}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesomeIcon
              icon={faKey}
              size={20}
              style={styles.inputIcon}
            />

            <TextInput
              style={styles.input}
              placeholder={'Password'}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesomeIcon
              icon={faCheck}
              size={20}
              style={styles.inputIcon}
            />

            <TextInput
              style={styles.input}
              placeholder={'Confirm password'}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={
                () => navigation.navigate('Verify')
              }
            >
              GO
            </Text>
          </View>

          <View style={styles.riderContainer}>
            <Text>Registered? </Text>
            <Text
              style={styles.riderTextSec}
              onPress={
                () => navigation.navigate('Login')
              }
            >
              Login
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: 280,
    marginTop: 50,
    marginBottom: 20,
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
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  signupContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
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
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#ffffff'
  },
  scrollView: {
    width: '100%',
    paddingTop: 60,
  }
});

export default RegisterScreen;