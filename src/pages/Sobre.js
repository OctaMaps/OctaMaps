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
        <Image style ={styles.img}source={require('../../assets/icon.png')} />

            <View style={styles.texto} >
                 <Text style= {styles.text}> Aplicativo desenvolvido com recursos </Text>
                 <Text style= {styles.text}> do projeto de Iniciação Científica para </Text>
                 <Text style= {styles.text}>  o Ensino Médio do CNPq. Edital DPIEx 13/2018. </Text>

                 <Text style= {{fontSize: 30, marginTop:'20%' }}> Participantes: </Text>

                 <Text style= {styles.desenvolvedores,{marginTop:10,fontSize:20}}> Alexandre Torrezam </Text>
                 <Text style= {styles.desenvolvedores}> Aroldo Goulart </Text>
                 <Text style= {styles.desenvolvedores}> Teiji Watanabe </Text>
                 <Text style= {styles.desenvolvedores}> Carlos Eduardo </Text>
                 <Text style= {styles.desenvolvedores}> Custódio Gastão da Silva Júnior </Text>

                 <Text style= {styles.desenvolvedores}> Vitoria Angel </Text>
            </View>

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
    alignSelf: 'center' ,
    marginLeft: '4%'
  },
  img:{
    width: '80%',

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

