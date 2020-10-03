import React, { useEffect } from 'react';
import { Text, View, ImageBackground, Animated, Easing  } from 'react-native';

import Logo from '../../images/Others/logo.png';
import Header from '../../components/header'

import percentage from '../../utils/getPercentage';

import FP1 from "../../images/Level/BlocoF1.jpg"
import Images from "./images"

function Step(props){
    let image;

    // Seleciona a imagem para ser exibida com base no props
    let selectImageFromData = () => {
        let { route: { params: { bloco, piso } } } = props;
        bloco = bloco.toUpperCase();
        let info = Images[bloco];

        if(info.totalFloor > piso){
            let { haveSteps = false } = info
            console.log(haveSteps)
            if(haveSteps){
                // rotina pra pisos tipo bloco B
            }
            else {
                image = info.level[piso]
            }
        }
        else {
            console.error("This floor not exist.")
        }
    }

    selectImageFromData()
    return(
        <View style={{backgroundColor: '#fff', height: '100%'}}>
            <ImageBackground 
                style={{ 
                    width: '100%',
                    height: '100%'
                }} 
                source={image}>
            <Header/>

            </ImageBackground>

        </View>
    )
}

export default Step