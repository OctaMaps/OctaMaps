import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView,Dimensions, Image,StatusBar } from 'react-native';
import {createDrawerNavigator,createAppContainer, DrawerItems,createStackNavigator} from 'react-navigation';
import {Icon} from 'native-base';

import Principal from './src/pages/Principal';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';
import Avalie from './src/pages/Avalie';

import Quadra from './src/pages/Quadra';
import BlocoF from './src/pages/BlocoF';
import BlocoE from './src/pages/BlocoE';
import BlocoD from './src/pages/BlocoD';
import BlocoC from './src/pages/BlocoC';
import BlocoA from './src/pages/BlocoA';
import BlocoB from './src/pages/BlocoB';

import TestOnly from './src/component/makeVideo';

import BlocoAP1 from './src/pages/Pisos/BlocoAP1';
import BlocoAP2 from './src/pages/Pisos/BlocoAP2';
import BlocoBTerreo from './src/pages/Pisos/BlocoBTerreo';
import BlocoBP1 from './src/pages/Pisos/BlocoBP1';
import BlocoBP2 from './src/pages/Pisos/BlocoBP2';
import BlocoCTerreo from './src/pages/Pisos/BlocoCTerreo';
import BlocoCP1 from './src/pages/Pisos/BlocoCP1';
import BlocoDTerreo from './src/pages/Pisos/BlocoDTerreo';
import BlocoDP1 from './src/pages/Pisos/BlocoDP1';
import BlocoETerreo from './src/pages/Pisos/BlocoETerreo';
import BlocoEP2 from './src/pages/Pisos/BlocoEP2';
import BlocoEP1 from './src/pages/Pisos/BlocoEP1';
import BlocoFTerreo from './src/pages/Pisos/BlocoFTerreo';



//Criação das telas do DrawerNavigator

// AVISO CODIGO PARA PURO ESTUDO AGORA, ARRUMAR HOME E SOBRE
const menu = createDrawerNavigator({
    'Home': {
      //Definindo a Tela exibida no novo componente 'HOME'
      screen: Principal ,
      navigationOptions:{
        drawerIcon: () => <Icon name='home'/>
      }
    },
    'Sobre': {
      screen: Sobre,
      navigationOptions:{
        drawerIcon: () => <Icon name='information-circle'/>
      }
    },
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
    'Bloco A':{
      screen: BlocoA,
      navigationOptions:{  
        //Configuração para não exibir o bloco no DrawerNavigator
        drawerLabel: () => null
      }
    },
    'Bloco B':{
      screen: BlocoB,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'Bloco C':{
      screen: BlocoC,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'Bloco D':{
      screen: BlocoD,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'Bloco E':{
      screen: BlocoE,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'Bloco F':{
      screen: BlocoF,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'Quadra':{
      screen: Quadra,
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
    'BlocoBTerreo':{
      screen: BlocoBTerreo,
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
    'BlocoDP1':{
      screen: BlocoDP1,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoETerreo':{
      screen: BlocoETerreo,
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
    'BlocoEP1':{
      screen: BlocoEP1,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoFTerreo':{
      screen: BlocoFTerreo,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoDTerreo':{
      screen: BlocoDTerreo,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoCTerreo':{
      screen: BlocoCTerreo,
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





},{
    contentComponent: (props) => ( 
      <SafeAreaView style={{flex:1}}>

        <StatusBar hidden />

        <View style={styles.bloco1}>
          <Image style={styles.img} source={require('./assets/icon.png')} />
          <Text style={styles.usuario}> Bem Vindo ! </Text>
        </View> 

        <View style={{paddingTop: '-2%'}}>
          <DrawerItems {...props} />
        </View>      
      </SafeAreaView> ),

      //define configuração padrao do DrawerNavigator
      contentOptions: {
        activeBackgroundColor: '#dcdfe5',
        activeTintColor: '#2e88a2',
          labelStyle: {
            fontSize: 18,
          },
      },
  });

//criando estilos aplicados dessa tela
const styles = StyleSheet.create({
  bloco1: {
    height:'35%',
    backgroundColor: '#2e88a2',
    alignItems:'center',
    justifyContent:'center'
  },
  img: {
    height:'60%',
    width: 150,
    borderRadius:100,
    paddingTop:'6%'
  },
  usuario:{
    color: 'white',
    fontSize: 30,
    paddingTop: '6%'
  },
  icon:{
    width: 80,
    height: 80
  }
});


// exportando tudo para visualização
const MyApp = createAppContainer(menu); 

export default MyApp; 