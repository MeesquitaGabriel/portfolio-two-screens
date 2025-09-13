import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import SkillsScreen from './screens/SkillsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#0b0b0f' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Meu Perfil' }} />
        <Stack.Screen name="Skills" component={SkillsScreen} options={{ title: 'Minhas Skills' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
