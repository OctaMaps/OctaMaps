import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,FlatList,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable'
//mudar isso pra o que o teiji mandar
const listItems = ['DAI', 'DAS', 'DACC', 'DABC', 'Bloco A', 'Bloco B', 'Bloco C', 'Bloco D', 'Bloco E', 'Bloco F', 'Quadra', 'DREC']


export default class Pesquisa1 extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
          
        <View style={{ height: 80, backgroundColor: 'transparent', justifyContent: 'center', paddingHorizontal: 5 }}>
          <Animatable.View animation="lightSpeedIn" duration={2000} style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={40} name="search" />
              <TextInput placeholder="Pesquisa" style={{ fontSize: 24, marginLeft: 15, flex: 1 }} />
          </Animatable.View>
        </View>
          
        <Animatable.View animation="fadeIn" duration={5000}>  
          <FlatList
              style={{ backgroundColor: 'white' }}
              data={listItems}
              renderItem={({ item }) => <Text style={{ padding: 20, fontSize: 20 }}>{item}</Text>}
              keyExtractor={(item, index) => index.toString()}
            />
        </Animatable.View>
     

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});

const header = StyleSheet.create({
  
  header:{
    height:65,
    flexDirection: 'row',
  }
});

