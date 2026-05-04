import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  const [players, setPlayers] = useState(["Idara", "Michael", "Sarah", "John"]);
  const [show, setShow] = useState(false);

  const increaseCountButton = () => {
    setCount(count + 1);
  };

  const decreaseCountButton = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const toggleShow = () => {
    setShow((prevState) => !prevState);
  };

  console.log(count);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={decreaseCountButton} title="-" />
        <Button onPress={increaseCountButton} title="+" />
      </View>

      {show && (
        <View>
          {players.map((name) => (
            <View key={name}>
              <Text>{name}</Text>
            </View>
          ))}
        </View>
      )}

      <Button onPress={toggleShow} title="Toggle Show" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },

  counter: {
    fontSize: 50,
    fontWeight: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
