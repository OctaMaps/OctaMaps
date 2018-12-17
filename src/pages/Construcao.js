import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Sobre extends React.Component {
  voltar = () => {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={header.header}>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={45} style ={styles.icon}name="arrow-left" onPress={() => this.props.navigation.openDrawer()}/>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={40} style ={styles.icon}name="search" />
          </View>
        <View style={{flex:1, alignItems: 'center', justifyContent:'center' }}>
             <Image style = {styles.img}source={require('../usuarioLogo.jpg')} />
             <Text style= {styles.a}>Tela em construção!</Text>
        </View>
      </View>
    );
  }
}


const header = StyleSheet.create({
  
  header:{
    height:65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  img:{
    height:'60%',
    width: '100%'
  },
  a:{
    fontSize: 40
  },
  header:{
    height:65,
    backgroundColor: '#2f63b7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  octa:{
    fontSize: 23,
    color:'white',
  },
  icon:{
    flex:1
  }
});

