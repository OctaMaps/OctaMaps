import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native';
import {createDrawerNavigator,createAppContainer, DrawerItems} from 'react-navigation';
import {Icon} from 'native-base';

//Chamando as telas para colocar rotas para as mesmas
import Index from './Index';
import Avalie from './Avalie'
import Sobre from './Sobre'
import Contato from './Contato'

import BlocoA from './Blocos/BlocoA';
import BlocoB  from './Blocos/BlocoB';
import BlocoC  from './Blocos/BlocoC';
import BlocoD  from './Blocos/BlocoD';
import BlocoE from './Blocos/BlocoE';
import BlocoF from './Blocos/BlocoF';

import BlocoATerreo from './Level/BlocoATerreo';
import BlocoAP1 from './Level/BlocoAP1';
import BlocoAP2 from './Level/BlocoAP2';

import BlocoBTerreo from './Level/BlocoBTerreo';
import BlocoBP1 from './Level/BlocoBP1';
import BlocoBP2 from './Level/BlocoBP2';

import BlocoCTerreo from './Level/BlocoCTerreo';
import BlocoCP1 from './Level/BlocoCP1';

import BlocoDTerreo from './Level/BlocoDTerreo';
import BlocoDP1 from './Level/BlocoDP1';

import BlocoETerreo from './Level/BlocoETerreo';
import BlocoEP1 from './Level/BlocoEP1';
import BlocoEP2 from './Level/BlocoEP2';

import BlocoFTerreo from './Level/BlocoFTerreo';
import BlocoFP1 from './Level/BlocoFP1';

import JustTest from'./Blocos/JustTest'
/*
*/

const menu = createDrawerNavigator({
    'Home': {
      //Definindo a Tela exibida no novo componente 'HOME'
      screen: BlocoBP2 , 
      navigationOptions:{
        //Icone que sera desenhado
        drawerIcon: () => <Icon name='home'/>
      }
    }, 
    
    //Parte das Rotas para os Blocos
    'Bloco A': {
      screen: BlocoA ,
      navigationOptions:{
        drawerLabel: () => null
      }
    },
    'Bloco B': {
      screen: BlocoB ,
      navigationOptions:{
        drawerLabel: () => null
      } 
    },
    'Bloco C': {
      screen: BlocoC,
      navigationOptions:{
        drawerLabel: () => null
      }
    },
    'Bloco D': {
      screen: BlocoD,
      navigationOptions:{
        drawerLabel: () => null
      }
    },
    'Bloco E': {
      screen: BlocoE,
      navigationOptions:{
        drawerLabel: () => null
      }
    },
    'Bloco F': {
      screen: BlocoF,
      navigationOptions:{
        drawerLabel: () => null
      }
    },

    // Telas extras
    'Sobre':{
      screen: Sobre,
      navigationOptions:{
        drawerIcon: () => <Icon name='information-circle'/>
      }
    } ,
    'Contate-nos' :{
      screen: Contato,
      navigationOptions:{
        drawerIcon: () => <Icon name='md-mail'/>
      }
    },
    'Avalie':{
      screen: Avalie,
      navigationOptions:{
        drawerIcon: () => <Icon name='md-star'/>
      }
    },

    //Pisos Terreo 1 e 2
    //Bloco A
    'BlocoATerreo':{
      screen: BlocoATerreo,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoAP1':{
      screen: BlocoAP1,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoAP2':{
      screen: BlocoAP2,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    //Bloco B
    'BlocoBTerreo':{
      screen: BlocoBTerreo,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoBP1':{
      screen: BlocoBP1,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoBP2':{
      screen: BlocoBP2,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    //Bloco C
    'BlocoCTerreo':{
      screen: BlocoCTerreo,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoCP1':{
      screen: BlocoCP1,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    //Bloco D
    'BlocoDTerreo':{
      screen: BlocoDTerreo,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoDP1':{
      screen: BlocoDP1,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    //Bloco E
    'BlocoETerreo':{
      screen: BlocoETerreo,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoEP1':{
      screen: BlocoEP1,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoEP2':{
      screen: BlocoEP2,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    //Bloco F
    'BlocoFTerreo':{
      screen: BlocoFTerreo,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoFP1':{
      screen: BlocoFP1,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },

  },
  //Configurando a parte oculta do menu, 
    {
    contentComponent: (props) => ( 
      <SafeAreaView style={{flex:1}}>

        <StatusBar hidden />

        <View style={styles.header}>
          <Image style={styles.img} source={require('../../../assets/icon.png')} />
          <Text style={styles.text}> Bem Vindo ! </Text>
        </View> 

        <View style={{paddingTop: '-2%'}}>
          <DrawerItems {...props} />
        </View>      

      </SafeAreaView> ),

      //Define a configuraçao padrao, cor de quando pressionado as seleçoes etc.
      contentOptions: {
        activeBackgroundColor: '#dcdfe5',
        activeTintColor: '#1a587d',
          labelStyle: {
            fontSize: 18,
          },
      },
      
  });

//criando estilos aplicados dessa tela
const styles = StyleSheet.create({
  header: {
    height:'35%',
    backgroundColor: '#2e88a2',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color: 'white',
    fontSize: 30,
    paddingTop: '6%'
  },
  img: {
    height:'60%',
    width: 150,
    borderRadius:100,
    paddingTop:'6%'
  },
  icon:{
    width: 80,
    height: 80
  }
});

// exportando tudo para visualização
const MyApp = createAppContainer(menu); 

export default MyApp; 


/*
'Bloco B': {
      screen: BlocoB ,
      navigationOptions:{
        drawerIcon: () => null
      }
    },
    'Bloco C': {
      screen: BlocoC ,
      navigationOptions:{
        drawerIcon: () => null
      }
    },
    'Bloco D': {
      screen: BlocoD ,
      navigationOptions:{
        drawerIcon: () => null
      }
    },
    'Bloco E': {
      screen: BlocoE ,
      navigationOptions:{
        drawerIcon: () => null
      }
    },
    'Bloco F': {
      screen: BlocoF ,
      navigationOptions:{
        drawerIcon: () => null
      }
    },


*/