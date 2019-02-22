import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView,Dimensions, Image,StatusBar } from 'react-native';
import {createDrawerNavigator,createAppContainer, DrawerItems,createStackNavigator} from 'react-navigation';
import {Icon} from 'native-base';

import Principal from './src/pages/Principal';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';
import Avalie from './src/pages/Avalie';

import Construcao from './src/pages/Construcao';

import Quadra from './src/pages/Quadra';
import Artes from './src/pages/Artes';
import BlocoF from './src/pages/BlocoF';
import BlocoE from './src/pages/BlocoE';
import BlocoD from './src/pages/BlocoD';
import BlocoC from './src/pages/BlocoC';
import BlocoA from './src/pages/BlocoA';
import BlocoB from './src/pages/BlocoB';

import Pesquisa from './src/pages/Pesquisa1';


//Criação das telas do DrawerNavigator
const menu = createDrawerNavigator({
    Home: {
      //Definindo a Tela exibida no novo componente 'HOME'
      screen: Principal,
      navigationOptions:{
        //Desenhando o Icone 
        drawerIcon: () => <Icon name='home'/>
      }
    },
    Sobre: {
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
      screen: Construcao,
      navigationOptions:{
        drawerIcon: () => <Icon name='md-star'/>
      }
    },
    'BlocoA':{
      screen: BlocoA,
      navigationOptions:{  
        //Configuração para não exibir o bloco no DrawerNavigator
        drawerLabel: () => null
      }
    },
    'BlocoB':{
      screen: BlocoB,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoC':{
      screen: BlocoC,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoD':{
      screen: BlocoD,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoE':{
      screen: BlocoE,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'BlocoF':{
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
    'Artes':{
      screen: Artes,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },
    'Pesquisa':{
      screen: Pesquisa,
      navigationOptions:{  
        drawerLabel: () => null
      }
    },

},{
    contentComponent: (props) => ( 
      <SafeAreaView style={{flex:1}}>

        <StatusBar hidden />

        <View style={styles.bloco1}>
          <Image style={styles.img} source={require('./src/usuarioLogo.jpg')} />
          <Text style={styles.usuario}> Bem vindo ! </Text>
        </View> 

        <View style={{paddingTop: '-2%'}}>
          <DrawerItems {...props} />
        </View>      
      </SafeAreaView> ),

      //define configuração padrao do DrawerNavigator
      contentOptions: {
        activeBackgroundColor: '#dcdfe5',
        activeTintColor: '#7a9de2',
          labelStyle: {
            fontSize: 14,
          },
      },
  });

//criando estilos aplicados dessa tela
const styles = StyleSheet.create({
  bloco1: {
    height:'35%',
    backgroundColor: '#588fe8',
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
    width: 100,
    height: 100
  }
});


// exportando tudo para visualização
const MyApp = createAppContainer(menu); 

export default MyApp; 
