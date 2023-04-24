import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {Card, TextInput} from "react-native-paper";
import {useState} from "react";

export default function App() {
  const [val, setVal] = useState('');

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView >
        <Card style={styles.card}>
          <Card.Content>
            <TextInput value={val} onChangeText={onChange}
                       // secureTextEntry={true}
                       autoComplete={'password'}
                       textContentType={'password'}
                       returnKeyType={'done'}/>
          </Card.Content>
        </Card>
      </KeyboardAvoidingView>
    </View>
  );

  function onChange(text) {
    setVal(text);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%'
  }
});
