import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { ButtonTabNavigator } from './presentation/routes/ButtonTabNavigator';

export const Main = () => {
    return (
        <NavigationContainer>
            <ButtonTabNavigator/>
        </NavigationContainer>
    );
};
