import React from 'react';
import { Text, View, StyleSheet,Button, Linking, Image } from 'react-native';
import Header from '../../component/NewHeader';
import Icon from 'react-native-vector-icons/Feather';



export default class Sobre extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>

           <View style={styles.general}>
              <Header backgroundBlue={true} searchableOff={true}></Header>

              <View style={styles.blueBar} />

              <View style={styles.whiteBar}>
                  <Text style={styles.paragraph}> Bem vindo ao Octa Maps! </Text>
                  <Text style={styles.paragraph}> Elogios, Contato, Criticas e Relato de Bugs</Text>
                      
                  <Text style={styles.paragraph}></Text>

                  <View style={styles.email}>
                    <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={35} style ={{textAlign: 'left', marginRigth: '10%'}}name={"mail"} onPress={() => Linking.openURL('mailto:octa.maps@gmail.com')}/>
                    <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={35} style ={{marginLeft:'75%'}}name={"github"} onPress={() => Linking.openURL('https://github.com/OctaMaps/OctaMaps')}/>
                  </View>

              </View>

              <View style={styles.blueBar} />
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  general: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1a587d',
  },
  whiteBar: {
    flex: 2,
    backgroundColor: 'white',
    paddingTop: '10%',
    paddingLeft: '5%',
  },
  blueBar: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    textAlign: 'left', fontSize: 19, fontWeight: 'bold', marginTop: '2%'
  },
  email:{
    flexDirection: 'row',
    marginTop:'30%'
  }
});

