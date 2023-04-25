import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    },
});

export default Row