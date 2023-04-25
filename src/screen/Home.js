import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Button from '../components/Button';
import Row from '../components/Row';
import DisplayScreen from '../components/DisplayScreen';
import calculator from '../util/calculator';

const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null
};

const Home = () => {
  const [displayData, setDisplayData] = useState(initialState);

  const { 
    container, 
    innerContainer,
  } = styles

  const handleTap = (type, value) => {
    setDisplayData(() => calculator(type, value, displayData))
  };

  return (
    <View style={container}>
      <SafeAreaView style={innerContainer}>
        <DisplayScreen display={displayData} />
      
        <Row>
          <Button onPress={() => handleTap("clear")} text='C' theme='secondary'/>
          <Button onPress={() => handleTap("posneg")} text='+/-' theme='secondary' />
          <Button onPress={() => handleTap("percentage")} text='%' theme='secondary' />
          <Button onPress={() => handleTap("operator", "/")} text='/' theme="accent" />
        </Row>

        <Row>
          <Button onPress={() => handleTap("number", 7)} text='7' />
          <Button onPress={() => handleTap("number", 8)} text='8' />
          <Button onPress={() => handleTap("number", 9)} text='9' />
          <Button onPress={() => handleTap("operator", "*")} text='x' theme="accent" />
        </Row>
        
        <Row>
          <Button onPress={() => handleTap("number", 4)} text="4" />
          <Button onPress={() => handleTap("number", 5)} text="5" />
          <Button onPress={() => handleTap("number", 6)} text="6" />
          <Button onPress={() => handleTap("operator", "-")} text="-" theme="accent" />
        </Row>

        <Row>
          <Button onPress={() => handleTap("number", 1)} text="1" />
          <Button onPress={() => handleTap("number", 2)} text="2" />
          <Button onPress={() => handleTap("number", 3)} text="3" />
          <Button onPress={() => handleTap("operator", "+")} text="+" theme="accent" />
        </Row>

        <Row>
          <Button onPress={() => handleTap("number", 0)} text="0" />
          <Button onPress={() => handleTap("number", ".")} text="." />
          <Button onPress={() => handleTap("equal")} text="=" theme="accent" />
        </Row>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1f',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    width: '100%',
  },
  displayValue: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  },
  normalDimension: {
    width: 74, 
    height: 74,
    borderRadius: 74/2
  },
  largeDimension: {
    // width: 168, 
    width: '39%', 
    height: 74,
    borderRadius: 74/2
  },
  bgDark: {
    backgroundColor: '#2e3033'
  },
  bgYellow: {
    backgroundColor: '#f5a442'
  },
  bgGray: {
    backgroundColor: '#d1cdc9'
  },
  blackText: {
    color: 'black'
  },
  whiteText: {
    color: 'white'
  }
});

export default Home;