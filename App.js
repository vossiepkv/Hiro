import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Hiro</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E073F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#EBD3F8',  
    fontSize: 20,      
    fontWeight: 'bold' 
  },
});
