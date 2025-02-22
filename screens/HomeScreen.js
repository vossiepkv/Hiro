import React from "react";
import { View, Text, Button } from "react-native";
import { auth } from "../firebaseConfig";
import { StyleSheet } from "react-native";


export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to Hiro!</Text>
      <Button title="Logout" onPress={() => auth.signOut().then(() => navigation.replace("Login"))} />
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