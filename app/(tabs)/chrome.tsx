import { useState } from "react";
import {
  Modal,
  Pressable,
  Switch,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

function Chrome() {
  const [modal, setModal] = useState(false);
  const [toggleSwitch, setToggleSwitch] = useState(false);
  return (
    <View style={{ paddingVertical: 10, paddingHorizontal: 10, gap: 20 }}>
      <Switch
        value={toggleSwitch}
        onValueChange={() => setToggleSwitch((prevState) => !prevState)}
        thumbColor={"red"}
        trackColor={{ true: "red", false: "white" }}
      />

      <TouchableOpacity>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur a
          natus amet aspernatur. Sunt consequuntur, minima ipsum nihil autem
          nobis.
        </Text>
      </TouchableOpacity>

      <TouchableHighlight>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea et
          pariatur atque doloremque eveniet ipsum fuga ut porro. Quasi
          voluptatibus inventore beatae deleniti deserunt ut dolor nam odit
          fugiat?
        </Text>
      </TouchableHighlight>
      <Pressable>
        <Text>Pressable</Text>
      </Pressable>
      <TouchableWithoutFeedback>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          exercitationem laudantium sunt, est labore maxime beatae harum illo
          quae commodi.
        </Text>
      </TouchableWithoutFeedback>
      <TouchableNativeFeedback onPress={() => setModal(true)}>
        <Text>View Modal</Text>
      </TouchableNativeFeedback>

      <View style={{ height: "50%" }}>
        <Modal
          visible={modal}
          onRequestClose={() => setModal(false)}
          animationType="fade"
        >
          <Text>This is a Modal</Text>
          {/* <Pressable onPress={() => Alert.alert()}>
            <Text>Alert</Text>
          </Pressable> */}
        </Modal>
      </View>
    </View>
  );
}

export default Chrome;
