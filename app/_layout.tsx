<<<<<<< HEAD
import { ThemeProvider } from '@/context/theme.context';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name="index" />
         <Stack.Screen name="(routes)/onboarding/index" />
=======
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { ThemeProvider, } from "@/context/theme.context";

export default function RootLayout() {
  
  return (
    <ThemeProvider >
      <Stack screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="index"/>
>>>>>>> 957826e534f4b8effc6e31c12630cf9c576aef0d
      </Stack>
    </ThemeProvider>
  );
}
