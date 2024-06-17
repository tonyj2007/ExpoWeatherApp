import { PropsWithChildren, ReactNode } from 'react';
import SafeArea from './safe-area';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationProvider from './navigation-container';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NavigationProvider>
      <SafeArea>{children}</SafeArea>
    </NavigationProvider>
  );
};
