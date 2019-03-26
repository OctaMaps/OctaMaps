import React from 'react';
import { StyleSheet, Text, View, Image,Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AppLink from 'react-native-app-link';

var url = 'https://play.google.com/store/apps/details?id=projeto.ifmt'
var appName = 'Octa.Maps'
var appStoreId = '0'
var appStoreLocale = 'us'
var playStoreId = 'projeto.ifmt'

export default class Avalie extends React.Component {

  voltar = () => {
    this.props.navigation.goBack();
  }
  componentDidMount() {
    AppLink.maybeOpenURL(url, { appName, appStoreId, appStoreLocale, playStoreId }).then(() => {
  // do stuff
})
.catch((err) => {
  // handle error
  });

AppLink.openInStore({ appName, appStoreId, appStoreLocale, playStoreId }).then(() => {
  // do stuff
})
.catch((err) => {
  // handle error
});   

}

  render() {
    return (
      <View style={styles.container}>
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

