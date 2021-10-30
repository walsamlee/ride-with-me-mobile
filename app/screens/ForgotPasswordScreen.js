import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faLockOpen, faKey } from '@fortawesome/free-solid-svg-icons';

import colors from '../config/colors';

function ForgotPasswordScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.forgotContainer}>
      <FontAwesomeIcon
        size={65}
        style={styles.icon}
        icon={faLockOpen}
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
        />
      </View>

      <View style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={
            () => alert(
              'Password reset link has been sent to the provided email.'
            )
          }
        >
          Go
        </Text>
      </View>

      <View style={styles.riderContainer}>
        <Text>Not registered? </Text>
        <Text
          style={styles.riderTextSec}
          onPress={
            () => navigation.navigate('Register')
          }
        >
          Signup
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: 280,
    marginTop: 80,
    marginBottom: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    color: '#fff'
  },
  buttonText: {
    // display: 'flex',
    textAlign: 'center',
    width:'100%',
    color: '#ffffff',
    fontSize: 25
  },
  icon: {
    color: colors.secondary,
    marginBottom: 90
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
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
    // alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    // justifyContent: 'center'
  },
  forgotContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff'
  },
  riderContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 10
  },
  riderTextSec: {
    color: colors.secondary
  }
});

export default ForgotPasswordScreen;