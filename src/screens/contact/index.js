import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';

import getPercentage from '../../utils/getPercentage';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/header';
import { useTheme, useNavigation } from '@react-navigation/native';

export default function Contact() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const percentage = getPercentage;
  
  const styles = StyleSheet.create({
    headerText: {
      color: colors.text,
      fontSize: 25,
      paddingBottom: 20,
      textAlign: 'center'
    },
    studentText: {
      color: colors.text,
      fontSize: 20,
      marginLeft: 0,
      textAlign: 'center'
    },
    buttonsView:{ 
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 80
    },
    viewMain: {         
      backgroundColor: colors.primaryDarker,
      height: '100%'
    },
    viewInfo: {    
      padding: 40,
      backgroundColor: colors.card,
      marginTop: 200/percentage[0]
    }
  });

  let openGithub = () => {
    Linking.openURL('https://github.com/OctaMaps/OctaMaps')
  }
  
  let openEmail = () => {
    Linking.openURL('mailto:octa.maps@gmail.com')
  }

  return ( 
      <View style={styles.viewMain}>
        <Header 
          leftIcon={'menu'} 
          leftPress={() => navigation.openDrawer()}
          isLight 
          rightDisable />

        <View style={styles.viewInfo}>

          <Text style={ styles.headerText }>Bem vindo ao Octa Maps!</Text>
          <Text style={ styles.studentText }>Para contato basta enviar um email ou abrir uma "Issue" no GitHub !</Text>

          <View style={styles.buttonsView}>
            <Icon onPress={() => openEmail()}name="mail" size={30} />
            <Icon onPress={() => openGithub()} name="github" size={30} />
          </View> 

        </View> 

      </View>
    
  );
}