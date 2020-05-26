
import * as React from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';

import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather'
import theme from '../../colors'

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


function CustomDrawerContent({ navigation }, props) {

    // Configurar os Items do Menu Drawer
    let CustomDrawerContent = (props, navigation) => {
        let { primary, darkMode } = theme;
        return (
            <DrawerContentScrollView {...props}>
                <SafeAreaView style={{ backgroundColor: primary.backgroundDrawer }}>
                    <Image
                        source={{ uri: 'http://placekitten.com/723/724' }}
                        style={{ width: 150, height: 150, marginLeft: '22%', borderRadius: 200, margin: '5%' }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Text style={{ color: primary.textPhotoDrawer, fontSize: 25, textAlign: 'center', marginBottom: '5%' }}> Bem Vindo !</Text>
                </SafeAreaView>

                <SafeAreaView>
                    <DrawerItem
                        icon={() =>
                            renderIcon('home')
                        }
                        label="Home"
                        onPress={() => navigation.navigate('Home')} />

                    <DrawerItem
                        icon={() =>
                            renderIcon('info')
                        }
                        label="Sobre"
                        onPress={() => alert('Link to help')} />

                    <DrawerItem
                        icon={() =>
                            renderIcon('mail')
                        }
                        label="Contato"
                        onPress={() => alert('Link to help')} />

                    <DrawerItem
                        icon={() =>
                            renderIcon('star')
                        }
                        label="Avalie"
                        onPress={() => alert('Link to help')} />
                </SafeAreaView>
            </DrawerContentScrollView>
        );
    }

    let renderIcon = name => {
        let { primary, darkMode } = theme;
        return (
            <Icon color={primary.iconColor} size={25} name={name} />
        )
    }

    return (
        <>
            {CustomDrawerContent(props, navigation)}
        </>
    )
}


export default CustomDrawerContent