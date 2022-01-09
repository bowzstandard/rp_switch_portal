import { StyleSheet, View, LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SwitchButton } from './molecules/switchButton';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <SwitchButton
          buttonId={{ params: { bot_id: 'livingWindow' } }}
          label='リビング（窓側）'
        />
        <SwitchButton
          buttonId={{ params: { bot_id: 'livingKitchen' } }}
          label='リビング（キッチン側）'
        />
        <SwitchButton
          buttonId={{ params: { bot_id: 'bedRoom' } }}
          label='寝室'
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
