import * as React from 'react';
import { Provider } from 'react-redux';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import DeviceDetail from './src/screens/details';
import store from './src/store';
import Toast from 'react-native-toast-message';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import DeviceView from './src/screens/device';


const Stack = createNativeStackNavigator();
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('Light');
  const themeData = { theme, setTheme };

  return (
    <Provider store={store}>
      <StatusBar
        animated={true}
        barStyle={theme == 'Dark' ? 'light-content' : 'dark-content'} />

      <ThemeContext.Provider value={themeData}>
        <NavigationContainer theme={theme == 'Light' ? DefaultTheme : DarkTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="DeviceDetail" component={DeviceDetail} options={{ headerShown: false }} />
            <Stack.Screen name="DeviceView" component={DeviceView} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast position='bottom'
          bottomOffset={widthPercentageToDP(10)} />
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;