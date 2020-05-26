
import * as React from 'react';
import { Button, View } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('About')}
                title="Go to notifications"
            />
        </View>
    );
}


export default HomeScreen