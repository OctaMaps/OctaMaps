import React, { useCallback } from 'react';
import { StyleSheet, ImageBackground, View, Text, Linking } from 'react-native';

import Index from '../../images/Others/Sobre.jpg';
import getPercentage from '../../utils/getPercentage';
import getOriginalSize from '../../utils/getOriginalSize';

import Header from '../../components/header';
import { useTheme, useNavigation } from '@react-navigation/native';

export default function About() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const percentage = getPercentage;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      position: 'absolute'
    },
    headerText: {
      color: colors.text,
      fontSize: 28/percentage[1],
      paddingBottom: 20/percentage[1],
    },
    separatorText: {
      color: colors.coloredText,
      fontSize: 25/percentage[1],
      paddingBottom: 5
    },
    studentText: {
      color: colors.text,
      fontSize: 20/percentage[1],
      marginLeft: 0
    },
    lastStudent:{ 
      paddingBottom: 10/percentage[1]
    },
    mainView: {         
      backgroundColor: colors.primaryDarker,
      height: '100%'
    },
    textView: {    
      paddingTop: 40/percentage[1],
      paddingLeft: 40/percentage[1],
      paddingBottom: 20/percentage[1],
      backgroundColor: colors.card,
      marginTop: 115/percentage[0]
    }
  });

  return (
      <View style={styles.mainView}>
        <Header 
          leftIcon={'menu'} 
          leftPress={() => navigation.openDrawer()}
          isLight 
          rightDisable />

        <View style={styles.textView}>

          <Text style={ styles.headerText }>Aplicativo desenvolvido com recursos do projeto de iniciação cientifica do ensino medio CNPQ edital 13/018!</Text>

          <Text style={ styles.separatorText} >Coordenador</Text>
          <Text style={ [styles.studentText, styles.lastStudent]}>Alexandre Torrezam</Text>

          <Text style={styles.separatorText}>Bolsistas</Text>

          <Text 
            onPress={() => Linking.openURL('https://www.linkedin.com/in/aroldo-goulart-barros/')}       
            style={ styles.studentText} >Aroldo Goulart Barros
          </Text>
          <Text 
            onPress={() => Linking.openURL('https://www.linkedin.com/in/alessandro-teiji-m-watanabe-144584171/')}  
            style={ styles.studentText} >Alessandro Teiji Mourão Watanabe 
          </Text>

          <Text 
            onPress={() => Linking.openURL('https://www.linkedin.com/in/vitoria-angel-silva-130003196/')}  
            style={ [styles.studentText, styles.lastStudent]} >Vitória Angel S. Silva 
          </Text>

          <Text style={styles.separatorText}>Voluntarios</Text>
          <Text style={ styles.studentText} >Carlos E.A.M Magalhães</Text>
          <Text style={ styles.studentText} >Pedro Gabriel Girardello Gomes</Text>
          <Text style={ [styles.studentText]} >Yane Prisilina de Araujo</Text>
        </View>

      </View>
    
  );
}