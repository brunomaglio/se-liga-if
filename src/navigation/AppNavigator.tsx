import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation';

import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { ScheduleScreen } from '../screens/ScheduleScreen';
import { LessonDetailsScreen } from '../screens/LessonDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Search" component={SearchScreen} />

        <Stack.Screen name="Schedule" component={ScheduleScreen} />

        <Stack.Screen name="LessonDetails" component={LessonDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
