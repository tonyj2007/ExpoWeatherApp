import React from 'react';
import { StyleSheet } from 'react-native';
import { Providers } from './providers';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppContainer from './providers/app-container/app-container';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 16,
    textAlign: 'center',
  },
  emoji: {
    fontSize: 82,
    marginBottom: 24,
  },
});

export const App = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Providers>
      <AppContainer />
    </Providers>
  );
};
