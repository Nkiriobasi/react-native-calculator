import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const DisplayScreen = ({display}) => {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayText}>
        {parseFloat(display.currentValue).toLocaleString()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  displayContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  displayText: {
    width: '100%',
    textAlign: 'right',
    flex: 1,
    color: 'white',
    fontSize: 38,
  }
});

export default DisplayScreen;