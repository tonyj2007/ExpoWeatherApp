import { ReactElement } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.emoji}>😻</Text>
        <Text style={styles.text}>
          I should really add some actual code now the project is all set up
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
