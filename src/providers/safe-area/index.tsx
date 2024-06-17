import { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const SafeArea = ({ children }: { children: ReactNode }) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default SafeArea;
