import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';


export default class Bloco extends React.Component {

  componentDidMount(){
            console.log(images[0])

  }
  render() {
    return (
      <View style={styles.container}>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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

const images = {
  dog: 'require("../imagens/Pisos/BlocoBTerreo.png")',
}