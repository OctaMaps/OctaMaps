import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';




export default class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      showMe:true
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
    6000),
     setTimeout(() => this.props.navigation.navigate('Home'),3000)
  }
  render() {
    return (
       <View style={{flex:1}}>
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../imagens/Others/load.png')} >  
        {
          this.state.showMe ? 
          <ActivityIndicator style={{marginTop: '120%'}} size="large" color='rgba(95, 188, 221, 1)'/>
          : <View>
              <Text> Carregador carregado</Text>
            </View>
        }
        </ImageBackground>


      </View>


  


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});


