import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function WelcomeScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Image source={require('../assets/alt_logo.png')} style={styles.logo} />

      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={ () => navigation.navigate('Login') }>LOGIN</Text>
      </View>
      <View style={styles.riderContainer}>
        <Text style={styles.riderText} onPress={ () => navigation.navigate('Register') }>Signup</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: 280,
    marginTop: 180,
    marginBottom: 0,
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  logo: {
    height: 134,
    width: 161
  },
  riderContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 50
  },
  riderText: {
    color: colors.secondary
  },
})

export default WelcomeScreen;