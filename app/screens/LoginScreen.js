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
import { faEnvelope, faUnlock, faKey } from '@fortawesome/free-solid-svg-icons';

import colors from '../config/colors';

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.loginContainer}>
          <FontAwesomeIcon
            size={65}
            style={styles.icon}
            icon={faUnlock}
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

          <View style={styles.inputContainer}>
            <FontAwesomeIcon
              icon={faKey}
              size={20}
              style={styles.inputIcon}
            />

            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder={'Password'}
            />
          </View>

          <View style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={
                () => navigation.navigate('SerachRide')
              }
            >
              GO
            </Text>
          </View>

          <View style={styles.riderContainer}>
            <Text>Not registered? </Text>
            <Text style={styles.riderTextSec} onPress={
              () => navigation.navigate('Register')
            }>Signup</Text>
          </View>
          <View>
            <Text
              style={styles.riderTextSec}
              onPress={
                () => navigation.navigate('ForgotPassword')
              }
            >Forgot password?</Text>
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
    marginTop: 80,
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
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  safeView: {
    flex: 1,
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#ffffff'
  },
  scrollView: {
    width: '100%',
    paddingTop: 80,
  }
})

export default LoginScreen;