import React from 'react';
import { StyleSheet, Image, Platform, StatusBar, SafeAreaView } from 'react-native';
import colors from '../config/colors';

function SplashScreen(props) {
  return (
    <SafeAreaView style={styles.splashContainer}>
      <Image
        source={require('../assets/rwm_logo.png')}
        style={styles.logo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 134,
    width: 161
  },
  splashContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors.primary,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})

export default SplashScreen;