import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,ActivityIndicator,TouchableWithoutFeedback,Picker,ProgressBarAndroid,ToastAndroid,Platform} from 'react-native';
  

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 300, height: 200}}
          source={{uri: 'https://media3.giphy.com/media/wWue0rCDOphOE/giphy.gif'}} />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
    backgroundColor: '#ecf0f1',
  },
});
