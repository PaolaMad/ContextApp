import { Text, View } from 'react-native';
import { styles } from '../../../config/theme';
import { useProfileStore } from '../../stores/profile-store';

export const HomeScreen = () => {
    const name = useProfileStore((state) => state.name);
    const email = useProfileStore((state) => state.email);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>

        </View>
    );
};
