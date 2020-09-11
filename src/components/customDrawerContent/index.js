import * as React from 'react';
import { ActivityIndicator, SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import octaLogo from '../../images/Others/load.png';
import getPercentage from '../../utils/getPercentage';

function CustomDrawerContent({ navigation }, props) {
    const { colors } = useTheme();
    const inactiveTintColor = colors.inactiveTintColor;
    const iconColor = colors.primary;
    const styles = StyleSheet.create({
        image:{ 
            width: 200/getPercentage[0], 
            height: 200/getPercentage[1], 
            borderRadius: 200, 
            alignSelf: 'center',
            marginTop: 10/getPercentage[1]
        },
        safeArea: { 
            marginTop: '-3%',
            justifyContent: "center",
            marginBottom: 10/getPercentage[1]
        },
        menuText: { 
            color: colors.text, 
            fontSize: 25, 
            textAlign: 'center',
            marginTop: -9/getPercentage[1]
        },

     });

    // Configurar os Items do Menu Drawer
    let CustomDrawerContent = (props, navigation) => {
        return (
            <DrawerContentScrollView {...props}>
                <SafeAreaView style={styles.safeArea}>
                    <Image
                        source={octaLogo}
                        style={styles.image}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Text style={styles.menuText}> Olá, bem vindo !</Text>
                </SafeAreaView>

                <SafeAreaView>
                    <DrawerItem
                        icon={() => renderIcon('home') }
                        label="Home"
                        inactiveTintColor={inactiveTintColor}
                        onPress={() => navigation.navigate('Home')} />
                    <DrawerItem
                        icon={() => renderIcon('info') }
                        label="Sobre"
                        inactiveTintColor={inactiveTintColor}
                        onPress={() => navigation.navigate('About')} />
                    <DrawerItem
                        icon={() => renderIcon('mail') }
                        label="Contato"
                        inactiveTintColor={inactiveTintColor}
                        onPress={() => navigation.navigate('Contact')} />
                    <DrawerItem
                        icon={() => renderIcon('star') }
                        label="Avalie"
                        inactiveTintColor={inactiveTintColor}
                        onPress={() => navigation.navigate('Review')} />
                </SafeAreaView>
            </DrawerContentScrollView>
        );
    }

    let renderIcon = name => {
        return (
            <Icon color={iconColor} size={25} name={name} />
        )
    }

    return (
        <>
            {CustomDrawerContent(props, navigation)}
        </>
    )
}


export default CustomDrawerContent