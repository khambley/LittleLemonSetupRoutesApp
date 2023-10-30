import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
        <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Tab.Navigator initialRouteName='Login'
              screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if(route.name === 'Welcome') {
                  // https://icons.expo.fyi/Index
                  iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
                }
                else if (route.name === 'Login') {
                  iconName = 'ios-log-in';
                }

                return <Ionicons name={iconName} size={size} color={color} />

               },
               tabBarActiveTintColor: 'tomato',
               tabBarInactiveTintColor: 'gray',
               
              })}>
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
          </Tab.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});   

