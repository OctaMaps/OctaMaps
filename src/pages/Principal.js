import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ImageBackground } from 'react-native';

export default class Principal extends React.Component {
 constructor(props) { 
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.props.navigation.navigate('Sobre');
  }

  render() {
    
    
    return (
      <View style={styles.container}> 
        <ImageBackground source={require('../map.png')} style={{width: '100%', height: '100%'}}>
                  <TouchableOpacity style={styles.blocoF1} onPress={this.onPress} >
                      <Text style={styles.a}> Touch Here </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.blocoF2} onPress={this.onPress} >
                      <Text style={styles.a}> Touch Here </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.blocoE1} onPress={this.onPress} >
                      <Text style={styles.a}> Touch Here </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.blocoE2} onPress={this.onPress} >
                      <Text style={styles.a}> Touch Here </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.blocoE3} onPress={this.onPress} >
                      <Text style={styles.a}> Touch Here </Text>
                  </TouchableOpacity>

                  <Text style={styles.a}>{this.state.count}</Text>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blocoF1:{
    backgroundColor: 'red',
    width:'30%',
    right:'-30%',
    marginTop: '20%',
    height:'17%'
  },
  blocoF2:{
    backgroundColor: 'red',
    width:'30%',
    right:'-20%',
    height:'12%'
   },
   blocoE1:{
    backgroundColor: 'blue',
    width: '20%',
    right:'-15%',
    height:'5%',
    marginTop: '1%'
   },
   blocoE2:{
    backgroundColor: 'blue',
    width: '20%',
    right:'-25%',
    height:'5%',
    marginTop: '-5%'
   },
   blocoE3:{
    backgroundColor: 'blue',
    width: '20%',
    right:'-30%',
    height:'5%',
    marginTop: '-5%'
   },
   a:{
    color:'white',
    textAlign: 'center'  
    }
});
