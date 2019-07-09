import React from 'react';
import { StyleSheet, View, ImageBackground,Text } from 'react-native';
import Header from '../../../component/NewHeader';
import Icon from 'react-native-vector-icons/Feather';


export default class BlocoBP2 extends React.Component {
  constructor(props){         
    super(props);
    this.state = {
      part: 0
    };
  }

  changeDown = () =>{
    let a = this.state.part -1;
    console.log(a)
    this.setState({part: a})
  }

  changeUp = () =>{
    let a = this.state.part +1;
    console.log(a)
    this.setState({part: a})
  }

  renderPart(){
    switch(this.state.part){
      case 0:
        return(
              <ImageBackground source={require('../../images/Level/BlocoB1P2.png')} style={{width: '100%', height: '100%'}}>
                <Header searchableOff/>
                  <Icon.Button 
                          backgroundColor={'transparent'}
                          color={'#dee9fc'}size={30} style ={header.icon}
                          name="arrow-down" onPress={this.changeUp}
                  />
             </ImageBackground>
         )
      case 1:
            return(    
              
            <ImageBackground source={require('../../images/Level/BlocoB2P2.png')} style={{width: '100%', height: '100%'}}>
              <Header searchableOff/>

                <Icon.Button 
                        backgroundColor={'transparent'}
                        color={'#dee9fc'}size={30} style ={header.icon}
                        name="arrow-up" onPress={this.changeDown}
                />

                <Icon.Button 
                        backgroundColor={'transparent'}
                        color={'#dee9fc'}size={30} style ={{flexDirection: 'row'}}
                        name="arrow-down" onPress={this.changeUp}
                />
             </ImageBackground>
              )

      case 2:
            return(    
            <ImageBackground source={require('../../images/Level/BlocoB3P2.png')} style={{width: '100%', height: '100%'}}>
              <Header searchableOff/>
                <Icon.Button 
                        backgroundColor={'transparent'}
                        color={'#dee9fc'}size={30} style ={header.icon}
                        name="arrow-up" onPress={this.changeDown}
                />
                
             </ImageBackground>
              )

    }
  }

  render() {
    return (
      <View style={styles.container}>
          {this.renderPart()}
         

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
  },
  icon:{

  }
});
