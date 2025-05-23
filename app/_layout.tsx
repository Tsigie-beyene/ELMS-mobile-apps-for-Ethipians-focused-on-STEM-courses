import { ThemeProvider } from '@/context/theme.context';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name="index" />
         <Stack.Screen name="(routes)/onboarding/index" />
      </Stack>
    </ThemeProvider>
  );
}
