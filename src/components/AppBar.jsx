import { View, StyleSheet } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingVertical: Constants.statusBarHeight,
        backgroundColor: '#24292e'
    },
    // ...
});

const AppBar = () => {
    return <View style={styles.container}>
        <Text color="white">Repositories</Text>
    </View>;
};

export default AppBar;