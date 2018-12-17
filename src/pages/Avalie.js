import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Avalie extends React.Component {
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
             



        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
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


const header = StyleSheet.create({
  
  header:{
    height:65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});

