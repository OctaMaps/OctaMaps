import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, Animated, Easing, StyleSheet  } from 'react-native';

import Header from '../../components/header'

import percentage from '../../utils/getPercentage';

import Images from "./images"
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  { FlingGestureHandler, Directions, State, } from 'react-native-gesture-handler'

let image;

function Step(props){
    const { colors } = useTheme();
    const [partSelect, setPartSelect] = useState(0);

    let { route: { params: { bloco: bloco, piso: piso } } } = props;
    let info = Images[bloco.toUpperCase()];

    // Apenas exibe a mensagem de erro
    let displayErrorMessage = () => {
        let errorMessage = "Ops.. This floor not exist. "
        console.error(errorMessage)
    }

    // é um formato enviado é valido ?
    let isValidData = () => {
        if(info.totalFloor > piso){
            return true
        }
        displayErrorMessage()
    }

    // É um piso com multiplos levels ?
    let isMultipartStep = () => {
        let { haveSteps = false } = info
        if(haveSteps){
            return true
        }
        return false
    }

    // Seleciona a imagem para ser exibida com base no props
    let selectImageFromData = () => {
        if( isValidData() ) {
            let newImage;
            if( isMultipartStep() ){
                let levels = info.level;
                let level = levels[piso];
                newImage = level.step[partSelect];
            }
            else {
                newImage = info.level[piso];
            }
            image = newImage;
        }   
    }


    // Responsavel por gerenciar a passagem das partes dos pisos(steps)
    let renderSelectLevel = () => {
        let { level } = info;
        level = level[piso]
        let { inverted } = level;

        // Usado para calcular a altura do seletor de pisos
        let topHeight = () => {
            switch(level.totalStep){
                case 0:
                   return 730/percentage[1]
                case 1:
                    return 690/percentage[1]
                case 2:
                    return 620/percentage[1]
                case 3:
                    return 580/percentage[1]
                case 4:
                    return 500/percentage[1]
                case 5:
                    return 425/percentage[1]
            }
        }

        let styles = StyleSheet.create({
            viewCard: {
                backgroundColor: colors.card,
                position: "absolute",
                top: topHeight(),
                left: !inverted ? 20/percentage[0] : 360/percentage[0] ,
                borderRadius: 13,
                borderColor: colors.card,
                
            },
            options: {
                padding: 18,
                borderColor: colors.primary,
            },
            textOptions: {
                fontSize: 18
            },
            selectedOption: {
                padding: 18,
                paddingTop: 20,
                borderColor: colors.lightText,
                backgroundColor: colors.primary,
                borderWidth: 1.4,
                borderRadius: 13,
                borderTopEndRadius: 2,
            },
            selectedTextOptions:{
                color: colors.lightText,
                fontSize: 18
            }
        })

        let LevelSelect = () => {
            let obj = [];
            for(let i=0; i < level.totalStep ; i++){
                obj.push(
                    <TouchableOpacity
                        key={i}
                        onPress={() => setPartSelect(i)}
                        style={i == partSelect ? styles.selectedOption : styles.options }
                    >
                        <Text style={i == partSelect ? styles.selectedTextOptions : styles.textOptions}> 
                            {i+1} 
                        </Text>
                    </TouchableOpacity>
                )
            }
            return obj
        } 
           
        return( 
            <View style={styles.viewCard}>
                <LevelSelect/>
            </View>
        )
    }

    selectImageFromData()

    let handleGesture = event => {
        let { level } = info;
        let { nativeEvent: { state } } = event;
        level = level[piso]
        let totalStep = level.totalStep;
        if(state == 5) {
            if(partSelect < totalStep-1) {
                setPartSelect(partSelect+1)
            }
        }
    }

    return(
        <>
        <FlingGestureHandler
            direction={Directions.DOWN | Directions.UP }
            numberOfPointers={1}
            onHandlerStateChange={event => handleGesture(event)}
        >
            <View style={{backgroundColor: '#fff', height: '100%'}}>
                <ImageBackground 
                    style={{ 
                        width: '100%',
                        height: '100%'
                    }} 
                    source={image}>
                <Header isLight />
            
                </ImageBackground>
            </View>
        </FlingGestureHandler>    
        {
            isMultipartStep() && renderSelectLevel()
        }
        </>
    )
}

export default Step