import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import getPercentage from '../../utils/getPercentage';
import getOriginalSize from '../../utils/getOriginalSize';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native';

export default function Main(props) {
    const { colors } = useTheme();
    let percentage = getPercentage;
    let original = getOriginalSize;
    let navigation = useNavigation();
    let {
        rightIcon="search",
        leftIcon="arrow-left",
        rightDisable=false,
        leftDisable=false,
        rightPress=() => openSearch(),
        leftPress=() => navigation.goBack(),
        isLight = false,
        customColor = false
    } = props;
    
    

    console.log(props)

    if (rightDisable & leftDisable) {
        return null
    }

    let openSearch = () => {
        // Programar função ao abrir pesquisa
        alert('Ainda não implementado')
    }

    let renderLeftButton = () => {
        return(
            <TouchableOpacity
                style={styles.container}
                onPress={() => leftPress()}
            >
                <Icon
                    color={
                        !customColor ?
                            isLight ? colors.lightText : colors.text
                        : customColor
                    } 
                    size={24} 
                    name={leftIcon} 
                />
            </TouchableOpacity>
        )
    }

    let renderRightButton = () => {
        return(
            <TouchableOpacity onPress={() => rightPress()}>
                <Icon 
                color={
                    !customColor ?
                        isLight ? colors.lightText : colors.text
                    : customColor
                } 
                size={24} 
                name={rightIcon} />
            </TouchableOpacity>
        )
    }
 
    return (
        <View style={styles.view}>
            {
            ! leftDisable && renderLeftButton()
            }
            { 
            ! rightDisable && renderRightButton()
            }
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    }
});
