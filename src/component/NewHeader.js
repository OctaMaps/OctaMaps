import React from 'react';
import {StyleSheet, View} from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

class NewHeader extends React.Component {  
  render() {
    return (
        <View style={header.header}>
          <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={35} style ={header.icon}name="arrow-left" onPress={() => this.props.navigation.goBack()}/>
          <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={35} style ={header.icon}name="search" onPress={() => this.props.navigation.navigate('Pesquisa')} /> 
        </View>
    )
  }
}

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

 export default withNavigationFocus(NewHeader);

/*

onPressLearnMore(){
   console.log('jsut a tes ')
  }

  handleTextRef = ref => this.text = ref;
    handleViewRef = ref => this.view = ref;

   bounce = () => this.view.bounceInLeft(800);


      <TouchableWithoutFeedback onPress={() => this.text.transitionTo({ opacity: 0.2 })}>

        <Animatable.Text ref={this.handleTextRef}>Fade me!</Animatable.Text>
      </TouchableWithoutFeedback> 
         


      <TouchableWithoutFeedback onPress={this.bounce}>
        <Animatable.View ref={this.handleViewRef}>
          <Text  style={{fontSize: 20}}>Bounce me!</Text>
        </Animatable.View>
      </TouchableWithoutFeedback>



<Button
          onPress={this.onPressLearnMore}
          title="TO INFINITI!"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />
         <Animatable.Text style={{marginTop: 40}}animation="slideInDown" iterationCount={'30'} direction="alternate">Up and down you go</Animatable.Text>
*/