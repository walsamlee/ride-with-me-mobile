import { faHome, faCar, faSlidersH, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function MenuBar(props) {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon={faHome}
        size={30}
        style={props.screen === 'home' ? styles.iconActive : styles.icon}
      />
      <FontAwesomeIcon
        icon={faCar} size={30}
        style={props.screen === 'ride' ? styles.iconActive : styles.icon}
      />
      <FontAwesomeIcon
        icon={faSlidersH}
        size={26}
        style={props.screen === 'settings' ? styles.iconActive : styles.icon}
      />
      <FontAwesomeIcon
        icon={faUser}
        size={25}
        style={props.screen === 'user' ? styles.iconActive : styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: 43,
    backgroundColor: colors.primary
  },
  icon: {
    color: colors.grey
  },
  iconActive: {
    color: colors.secondary
  }
})

export default MenuBar;