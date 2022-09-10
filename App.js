// import 'react-native-gesture-handler';
// react-native-gesture-handler must be on the top line
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';

import Home from './views/Home.js';
import GameView from './views/Games/GameView.js';
import GameList from './views/Games/GameList.js';
import Setting from './views/Setting.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator> */}
        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Game List" component={GameList} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
