import React from 'react';
import { StyleSheet, View, ImageBackground} from 'react-native';
import NewHeader from '../component/NewHeader';

export default class Sobre extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      
        <ImageBackground style={{flex:1}} source={require('../imagens/Others/sobre.png')} >
           <NewHeader searchable={false}></NewHeader>
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

