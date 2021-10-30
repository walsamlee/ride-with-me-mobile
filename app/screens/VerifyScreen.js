import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../config/colors';

function VerifyScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FontAwesomeIcon
          icon={faCheck}
          size={65}
          style={styles.icon}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} maxLength={1} keyboardType={'numeric'} />
        <TextInput style={styles.input} maxLength={1} keyboardType={'numeric'} />
        <TextInput style={styles.input} maxLength={1} keyboardType={'numeric'} />
        <TextInput style={styles.input} maxLength={1} keyboardType={'numeric'} />
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>Go</Text>
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
    marginTop: 90,
    marginBottom: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    color: '#fff'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: colors.secondary,
    marginBottom: 70
  },
  input: {
    width: 50,
    height: 25,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    textAlign: 'center'
  },
  inputContainer: {
    width: 250,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default VerifyScreen;