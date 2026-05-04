import { image } from "@/constants/img";
import { Image, View } from "react-native";

export default function Testing() {
  return (
    <View>
      <Image
        source={image.iconImage}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
}
