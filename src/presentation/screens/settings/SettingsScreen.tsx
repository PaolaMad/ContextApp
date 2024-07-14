import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/theme';
import { useCounterStore } from '../../stores/counter-store';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Contador ${count}`
    });
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {count}</Text>
      <Pressable
        onPress={() => incrementBy(1)}
        style={styles.primaryButton}>
        <Text>+1</Text>
      </Pressable>
      <Pressable
        onPress={() => incrementBy(-1)}
        style={styles.primaryButton}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
