import Example from "@/components/Example";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = () => {
    console.log({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  const count = 0;

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          multiline
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
          style={styles.input}
        />

        <TextInput placeholder="Enter your name" style={styles.input} />

        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={showPassword}
          placeholder="Enter your Phone number"
          keyboardType="numeric"
          style={styles.input}
        />

        <Text>{count}</Text>

        <Button onPress={handleSubmit} title="Submit" />

        <Button
          onPress={() => setShowPassword((prevState) => !prevState)}
          title={showPassword ? "Show Password" : "Hide Password"}
        />

        {showPassword && <Example />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
  },
});
