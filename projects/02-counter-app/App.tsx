import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FAB from './presentation/components/fab'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

      <Text style={styles.textHuge}>
        {count}
      </Text>

      <FAB
        label='+1'
        position='right'
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />

      <FAB
        label='-1'
        position='left'
        onPress={() => setCount((prev) => prev === 0 ? 0 : prev - 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 120,
    fontWeight: '100'
  }
})
