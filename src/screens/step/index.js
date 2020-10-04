import React, { useEffect } from 'react';
import { Text, View, ImageBackground, Animated, Easing, StyleSheet  } from 'react-native';

import Logo from '../../images/Others/logo.png';
import Header from '../../components/header'

import percentage from '../../utils/getPercentage';

import Images from "./images"
import { useTheme } from '@react-navigation/native';

let image;

function Step(props){
    const { colors } = useTheme();
    let displayErrorMessage = () => {
        let errorMessage = "Ops.. This floor not exist. "
        console.error(errorMessage)
    }

    // Seleciona a imagem para ser exibida com base no props
    let selectImageFromData = () => {
        let { route: { params: { bloco, piso } } } = props;
        bloco = bloco.toUpperCase();
        let info = Images["B"];

        if(info.totalFloor > piso){
            let { haveSteps = false } = info
            if(haveSteps){
                // rotina pra pisos tipo bloco B
                if(piso <= info.totalFloor) {
                    let levels = info.level;
                    let level = levels[piso];
                    console.log(level.step)
                    image = level.step[1]
                }  
                else {
                    displayErrorMessage()
                }
            }
            else {
                image = info.level[piso]
            }
        }
        else {
            displayErrorMessage()
        }
    }

    selectImageFromData()

    let renderSelectLevel = () => {
        let styles = StyleSheet.create({
            viewCard: {
                backgroundColor: "white",
                position: "absolute",
                top: 550,
                width: 20,
                height: 20,
                left: 20,
                padding: 10,
                borderRadius: 1
            }
        })
        return( 
            <View style={styles.viewCard}>

            </View>
        )
    }

    return(
        <View style={{backgroundColor: '#fff', height: '100%'}}>
            <ImageBackground 
                style={{ 
                    width: '100%',
                    height: '100%'
                }} 
                source={image}>
            <Header/>
                {
                    renderSelectLevel()
                }
            </ImageBackground>

        </View>
    )
}

export default Step