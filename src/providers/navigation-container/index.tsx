import { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const NavigationProvider = ({ children }: PropsWithChildren) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default NavigationProvider;
