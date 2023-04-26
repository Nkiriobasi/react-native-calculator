import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Button from '../components/Button';
import Row from '../components/Row';
import DisplayScreen from '../components/DisplayScreen';
import calculator, { initialState } from '../util/calculator';


const Home = () => {
  const [displayData, setDisplayData] = useState(initialState);


  const handlePress = (type, value) => {
    setDisplayData(() => calculator(type, value, displayData))
  };


  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <DisplayScreen display={displayData} />
      
        <Row>
          <Button onPress={() => handlePress("clear")} text='C' theme='secondary'/>
          <Button onPress={() => handlePress("posneg")} text='+/-' theme='secondary' />
          <Button onPress={() => handlePress("percentage")} text='%' theme='secondary' />
          <Button onPress={() => handlePress("operator", "/")} text='/' theme="accent" />
        </Row>

        <Row>
          <Button onPress={() => handlePress("number", 7)} text='7' />
          <Button onPress={() => handlePress("number", 8)} text='8' />
          <Button onPress={() => handlePress("number", 9)} text='9' />
          <Button onPress={() => handlePress("operator", "*")} text='x' theme="accent" />
        </Row>
        
        <Row>
          <Button onPress={() => handlePress("number", 4)} text="4" />
          <Button onPress={() => handlePress("number", 5)} text="5" />
          <Button onPress={() => handlePress("number", 6)} text="6" />
          <Button onPress={() => handlePress("operator", "-")} text="-" theme="accent" />
        </Row>

        <Row>
          <Button onPress={() => handlePress("number", 1)} text="1" />
          <Button onPress={() => handlePress("number", 2)} text="2" />
          <Button onPress={() => handlePress("number", 3)} text="3" />
          <Button onPress={() => handlePress("operator", "+")} text="+" theme="accent" />
        </Row>

        <Row>
          <Button onPress={() => handlePress("number", 0)} text="0" />
          <Button onPress={() => handlePress("number", ".")} text="." />
          <Button onPress={() => handlePress("equal", "equal")} text="=" theme="accent" />
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
});

export default Home;