import { Drawer } from "expo-router/drawer";
import CustomDrawer from "../../components/customDrawer";

export default function DrawerLayout() {
  return (
    <Drawer drawerContent={CustomDrawer}>
      <Drawer.Screen name="d1" />
      <Drawer.Screen name="d2" />
    </Drawer>
  );
}
