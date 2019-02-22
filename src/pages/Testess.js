import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


import ProgressCircle from 'react-native-progress-circle'




export default class Testess extends React.Component {
  render() {
    return (
      
      <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});


