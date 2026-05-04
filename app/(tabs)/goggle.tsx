import { useState } from "react";
import { KeyboardAvoidingView, TextInput } from "react-native";

function Goggle() {
  const [text, setText] = useState("");

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ paddingVertical: 10, paddingHorizontal: 10, gap: 20 }}
    >
      <TextInput
        value={text}
        onChangeText={(h) => setText(h)}
        secureTextEntry={true}
        multiline={true}
        style={{
          borderWidth: 2,
          borderColor: "gray",
          borderRadius: 10,
          padding: 10,
        }}
        keyboardType="email-address"
        onSubmitEditing={() => {
          console.log(text);
          setText("");
        }}
      />
    </KeyboardAvoidingView>
  );
}

export default Goggle;
