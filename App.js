import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './frontend/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
