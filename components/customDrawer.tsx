import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text } from "react-native";

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <Text>Custom Drawer</Text>
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
