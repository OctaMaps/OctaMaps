import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Svg } from 'expo';

const corAndar1 = 'transparent'
const corFundo1 = 'transparent'

const corAndar0 = 'transparent'
const corFundo0 = 'transparent'

export default class MapC extends React.Component {
  terreo(){
    alert("Bloco C Terreo")
  }
  piso1(){
    alert("Bloco C Piso 1")
  }
  render() {
    return (
      <View>
        <Svg height={"100%"} width={'100%'}>

            <Svg.Rect
              x={'0%'}
              y={'32%'}
              width={'100%'}
              height={'40%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() => this.terreo()}
            />

            <Svg.Rect
              x={'0%'}
              y={'32%'}
              width={'50%'}
              height={'25%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() =>this.piso1()}
            />

            <Svg.Rect
              x={'50%'}
              y={'28%'}
              width={'20%'}
              height={'27%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() =>this.piso1()}
            />

            <Svg.Rect
              x={'50%'}
              y={'28%'}
              width={'50%'}
              height={'25%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() =>this.piso1()}
            />


          </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
