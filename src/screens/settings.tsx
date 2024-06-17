import { StyleSheet, Text } from 'react-native';

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
const Settings = () => {
  return (
    <>
      <Text style={styles.text}>This is the Settings screen</Text>
      <Text style={styles.emoji}>😻</Text>
      <Text style={styles.emoji}>😻</Text>
      <Text style={styles.emoji}>😻</Text>
    </>
  );
};

export default Settings;
