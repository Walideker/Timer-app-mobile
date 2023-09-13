import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef, } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  interface timer {

  }

  const [time, setTime] = useState(0)
  const [name, setName] = useState('start')
  useEffect(() => {
    return () => clearInterval(id.current)
  }, [])
  let id = useRef
  function handleTime() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
    setName('continue')
  }
  return (
    <View style={styles.container}>
      <Text>{time}</Text>
      <View style={styles.list}>
        <Button onPress={handleTime} title={name} />
        <Button onPress={() => clearInterval(id.current)} title='pause' />
        <Button onPress={() => {
          clearInterval(id.current)
          setName('start')
          setTime(0)
        }
        } title='rest' />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flexDirection: 'row',

  },

});
