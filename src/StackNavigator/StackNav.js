import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Tela1 from '../Screens/Tela1';
import Tela2 from '../Screens/Tela2';
const StackNav = createStackNavigator({
	Tela1:{
		screen: Tela1
	}
});
const app =  createAppContainer(StackNav); 


export default  app;