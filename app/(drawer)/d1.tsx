import { Text, useWindowDimensions } from "react-native";

function D1() {
  const { width, height } = useWindowDimensions();
  console.log(width * 0.05);
  return <Text style={{ fontSize: width * 0.05 }}>D1</Text>;
}

export default D1;
