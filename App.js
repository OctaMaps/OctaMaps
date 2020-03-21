import {StackNavigator} from 'react-navigation';

import Principal from './src/pages/Principal';
import Sobre from './src/pages/Sobre';

export default StackNavigator({
    'Main': {
      screen: Principal

    },
    'Sobre':{
      screen: Sobre,
      navigationOptions:{
        title: 'Detalhes',
       
      }

    }
  }
,

{
  navigationOptions:{
    title:'Mapa IFMT',
    headerTintColor:'white'
    ,
    headerStyle:{
      backgroundColor: '#333',
      borderBottomWidth: 1,
      borderBottomColor: 'white'
    },
    headerTitleStyle:{      
      color:'#C5C5C5',
      alignSelf: 'center' 
    }


  } 
});

  