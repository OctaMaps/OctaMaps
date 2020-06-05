
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
                <SafeAreaView style={{ backgroundColor: primary.backgroundDrawer, marginTop: '-2%' }}>
                    <Image
                        source={{ uri: 'http://placekitten.com/723/724' }}
                        style={{ marginTop: '7%', marginBottom: '7%', width: 150, height: 150, marginLeft: '20%', borderRadius: 200, margin: '5%' }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Text style={{ color: primary.textPhotoDrawer, fontSize: 25, textAlign: 'center', marginBottom: '5%' }}>Bem Vindo !</Text>
                </SafeAreaView>

                <SafeAreaView>
                    <DrawerItem
                        icon={() =>
                            renderIcon('home')
                        }
                        label="Home"
                        inactiveTintColor={primary.inactiveTintColorDrawer}
                        onPress={() => navigation.navigate('Home')} />

                    <DrawerItem
                        icon={() =>
                            renderIcon('info')
                        }
                        label="Sobre"
                        inactiveTintColor={primary.inactiveTintColorDrawer}
                        onPress={() => alert('Link to help')} />

                    <DrawerItem
                        icon={() =>
                            renderIcon('mail')
                        }
                        label="Contato"
                        inactiveTintColor={primary.inactiveTintColorDrawer}
                        onPress={() => alert('Link to help')} />

                    <DrawerItem
                        icon={() =>
                            renderIcon('star')
                        }
                        label="Avalie"
                        inactiveTintColor={primary.inactiveTintColorDrawer}
                        onPress={() => alert('Link to help')} />
                </SafeAreaView>
            </DrawerContentScrollView>
        );
    }

    let renderIcon = name => {
        let { primary, darkMode } = theme;
        return (
            <Icon color={primary.iconColorDrawer} size={25} name={name} />
        )
    }

    return (
        <>
            {CustomDrawerContent(props, navigation)}
        </>
    )
}


export default CustomDrawerContent