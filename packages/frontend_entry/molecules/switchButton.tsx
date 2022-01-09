import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Constants from 'expo-constants';
import { Bot } from '@bowzstandard_switch_portal/api_interfaces';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});

export type SwitchButtonProps = {
  buttonId: Pick<Bot.PushAPI.Struct, 'params'>;
  label: string;
};

export function SwitchButton(props: SwitchButtonProps) {
  const { buttonId, label } = props;

  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        icon='switch'
        mode='contained'
        onPress={async () => {
          const url = `${
            Constants?.manifest?.extra?.BACKEND_ENDPOINT ?? ''
          }/bot/push/${buttonId.params.bot_id}`;

          setLoading(true);

          const response = await fetch(url, {
            method: 'POST',
            headers: {
              authorization: 'hogehoge',
            },
          });
          console.log(response);
          setLoading(false);
        }}
        disabled={loading}
      >
        {label}
      </Button>
    </View>
  );
}
