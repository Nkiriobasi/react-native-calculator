import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home';

export default function App() {

  const { container } = styles

  return (
    <View style={container}>
      <StatusBar barStyle="light-content" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
