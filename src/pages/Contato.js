import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Sobre extends React.Component {

  
  render() {
    return (
      <View style={styles.container}>
            <View style={header.header}>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={45} style ={styles.icon}name="arrow-left" onPress={() => this.props.navigation.goBack()}/>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={40} style ={styles.icon}name="search" onPress={() => this.props.navigation.navigate('Pesquisa')} /> 
          </View>

            <View style={styles.texto} >
                 <Text style= {styles.text}>  Bem vindo ao Octa Maps! </Text>
                 <Text style= {styles.text,{marginTop:10,fontSize:20}}> Email de Contato para: </Text>
                 <Text style= {styles.text}> Elogios, Contato, Criticas e Relato de Bugs</Text>

                 <Text style= {{fontSize: 30, marginTop:'40%' }}> Email: </Text>
                 <Text style= {styles.desenvolvedores,{marginTop:10,fontSize:20}}> octa.maps@gmail.com </Text>
                 
            </View>
            <Image style ={styles.img}source={require('../usuarioLogo.jpg')} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white'
  },
  texto:{
    justifyContent:'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 20,
    alignSelf: 'center' 
  },
  img:{
    marginTop: '10%',
    width: '100%',
    height: '50%'
  },
  desenvolvedores:{
    fontSize: 20,

  }
});


const header = StyleSheet.create({
  
  header:{
    height:65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});

