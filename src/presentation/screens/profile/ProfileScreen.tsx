import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/theme';
import { useProfileStore } from '../../stores/profile-store';

export const ProfileScreen = () => {
  // const {email, name} = useProfileStore();
  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);
  const cahangeProfile = useProfileStore((state) => state.changeProfile);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Pressable style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ name: 'Maria Mejia' })}>
        <Text>Cambiar nombre</Text>
      </Pressable>
      <Pressable style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ email: 'mmejia@me.com' })}>
        <Text>Cambiar email</Text>
      </Pressable>
      <Pressable style={styles.primaryButton}
        onPress={() => cahangeProfile('Juan Perez', 'jperez@me.com')}>
        <Text>Regresar datos</Text>
      </Pressable>
    </View>
  );
};
