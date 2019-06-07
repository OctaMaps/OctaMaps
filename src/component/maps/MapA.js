import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Svg } from 'expo';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';

 class MapA extends React.Component {

  terreo(){
    alert("Bloco A Terreo, ainda não implementado")

  }
  piso1(){
    this.props.navigation.navigate('BlocoAP1')
  }
  piso2(){
    this.props.navigation.navigate('BlocoAP2')
  }
  render() {
    return (
      <View>
        <Svg height={"100%"} width={'100%'}>

                <Svg.Rect
                  x={'44%'}
                  y={'30%'}
                  width={'30%'}
                  height={'15%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(255, 255, 255, 0.0)"
                  onPress={() =>this.piso1()}
                />

                <Svg.Rect
                  x={'40%'}
                  y={'29%'}
                  width={'30%'}
                  height={'15%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(255, 255, 255, 0.0)"
                  onPress={() =>this.piso1()}
                />
               
               <Svg.Rect
                  x={'34%'}
                  y={'27%'}
                  width={'30%'}
                  height={'16%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(255, 255, 255, 0.0)"
                  onPress={() =>this.piso1()}
                />

                <Svg.Rect
                  x={'0%'}
                  y={'27%'}
                  width={'30%'}
                  height={'9%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(255, 255, 255, 0.0)"
                  onPress={() =>this.piso1()}
                />

                <Svg.Rect
                  x={'10%'}
                  y={'30%'}
                  width={'30%'}
                  height={'9%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(255, 255, 255, 0.0)"
                  onPress={() =>this.piso1()}
                />

                <Svg.Rect
                  x={'20%'}
                  y={'33%'}
                  width={'50%'}
                  height={'7%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(255, 00, 255, 0.0)"
                  onPress={() =>this.piso1()}
                />

                <Svg.Rect
                  x={'27%'}
                  y={'35%'}
                  width={'50%'}
                  height={'7%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(255, 00, 255, 0.0)"
                  onPress={() =>this.piso1()}
                />

                <Svg.Rect
                  x={'0%'}
                  y={'10%'}
                  width={'92%'}
                  height={'17%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(0, 254, 0, 0.0)"
                  onPress={() =>this.piso2()}
                />

                <Svg.Rect
                  x={'5%'}
                  y={'11%'}
                  width={'92%'}
                  height={'17%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(0, 254, 0, 0.0)"
                  onPress={() =>this.piso2()}
                />

                <Svg.Rect
                  x={'8%'}
                  y={'12%'}
                  width={'92%'}
                  height={'17%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(0, 254, 0, 0.0)"
                  onPress={() =>this.piso2()}
                />

                <Svg.Rect
                  x={'17%'}
                  y={'14%'}
                  width={'92%'}
                  height={'17%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(0, 254, 0, 0.0)"
                  onPress={() =>this.piso2()}
                />

                <Svg.Rect
                  x={'25%'}
                  y={'15%'}
                  width={'92%'}
                  height={'17%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(0, 254, 0, 0.0)"
                  onPress={() =>this.piso2()}
                />

                <Svg.Rect
                  x={'30%'}
                  y={'16%'}
                  width={'92%'}
                  height={'17%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(0, 0, 0, 0.0)"
                  onPress={() =>this.piso2()}
                />

                <Svg.Rect
                  x={'38%'}
                  y={'17%'}
                  width={'92%'}
                  height={'17%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(0, 0, 0, 0.0)"
                  onPress={() =>this.piso2()}
                />

                <Svg.Rect
                  x={'41%'}
                  y={'18%'}
                  width={'92%'}
                  height={'17%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(0, 0, 0, 0.0)"
                  onPress={() =>this.piso2()}
                />

                <Svg.Rect
                  x={'43%'}
                  y={'18%'}
                  width={'92%'}
                  height={'17%'}
                  strokeWidth={2}
                  stroke={'transparent'}
                  fill="rgba(0, 0, 0, 0.0)"
                  onPress={() =>this.piso2()}
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
export default withNavigationFocus(MapA)
