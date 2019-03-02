import React from 'react';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Sobre extends React.Component {

  
  render() {
    return (
      <View style={styles.container}>
      
        <ImageBackground style={{flex:1}} source={require('../imagens/Others/sobre.png')} >
          <View style={header.header}>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={35} style ={styles.icon}name="menu" onPress={() => this.props.navigation.openDrawer()}/>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={35} style ={styles.icon}name="search" onPress={() => this.props.navigation.navigate('Pesquisa')} /> 
      </View>


        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white'
  },
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

