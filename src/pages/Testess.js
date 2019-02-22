import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


import ProgressCircle from 'react-native-progress-circle'


export default class Testess extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      showMe:true;
    }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+10
    })
  }

  componentWillMount(){

    setTimeout(()=>{
      this.setState({
        showMe:false
      })
    },
    3000)
  }

  render() {
    return (
       <View style={{flex:1,marginTop:50}}>
        {
          this.state.showMe ? 
          <ActivityIndicator size="large" color="blue"/>
          : <View>
              <Text> Carregador carregado</Text>
            </View>
        }
      </View>
  


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});


