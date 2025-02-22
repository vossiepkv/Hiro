import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Login Successful!");
      navigation.replace("Home"); // Redirect to Home screen after login
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder='Email' value={email} onChangeText={setEmail}/>
      <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin}/>
      <Button title="Sign Up" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
}


