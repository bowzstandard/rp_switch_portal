import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import Constants from 'expo-constants';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Button
          icon='redo'
          mode='contained'
          onPress={async () => {
            const url = `${
              Constants?.manifest?.extra?.BACKEND_ENDPOINT ?? ''
            }/bot/push/livingWindow`;
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                authorization: 'hogehoge',
              },
            });
            console.log(response);
          }}
        >
          リビング(窓側)
        </Button>
        <Button mode='contained' icon='undo' onPress={() => {}}>
          リビング(キッチン側)
        </Button>
        <Button mode='contained' icon='content-cut' onPress={() => {}} disabled>
          寝室
        </Button>
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
