import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,ActivityIndicator,TouchableWithoutFeedback,Picker,ProgressBarAndroid,ToastAndroid,Platform} from 'react-native';
import { withNavigationFocus,NavigationEvents  } from 'react-navigation';
  
import NewHeader from '../component/NewHeader';


export default class TestOnly extends React.Component {
 

  render() {
    return (
      <View style={styles.container}>
        <TestOnly2></TestOnly2>
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
/*

  componentWillMount(){
   console.log(this.props.isFocused)
   console.log(this.props.isFocused)
   console.log(this.props.isFocused)
   console.log(this.props.isFocused)
   console.log(this.props.isFocused)
  }


  <NavigationEvents
      onWillFocus={payload => console.log('will focus',payload)}
      onDidFocus={payload => console.log('did focus',payload)}
      onWillBlur={payload => console.log('will blur',payload)}
      onDidBlur={payload => console.log('did blur',payload)}
    />
        <Image
          style={{width: 300, height: 200}}
          source={{uri: 'https://media3.giphy.com/media/wWue0rCDOphOE/giphy.gif'}} />
        <TestOnly2> </TestOnly2>
        {this.props.isFocused ?
          <Text> Focus </Text>
          :
          <Text> Not focus</Text>
        }

 */