import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';

//Esse é o terreo real  
const corTerreo0 = 'transparent';
const corTerreoFundo0 = 'transparent'

const corTerreo = 'transparent';
const corTerreoFundo = 'transparent'

const corAndar1 ='transparent';
const corFundo1 ='transparent'

const corAndar2 ='transparent'
const corFundo2 ='transparent'

class MapB extends React.Component {
  terreo(){
    this.props.navigation.navigate('BlocoBTerreo')
    console.log("Entrando no BlocoBTerreo")
  }
  piso1(){
    this.props.navigation.navigate('BlocoBP1')
    console.log("Entrando no BlocoBP1")
  }
  piso2(){
    this.props.navigation.navigate('BlocoBP2')
    console.log("Entrando no BlocoBP2")

  }
  artes(){
    alert("Departamento de Artes, ainda não implementado")
  }
  
  render() {
    return (
      <View>
        <Svg height={"100%"} width={'100%'}>
          <Rect
            x={'0%'}
            y={'10%'}
            width={'100%'}
            height={'60%'}
            strokeWidth={2}
            stroke={corTerreo0}
            fill = {corTerreoFundo0}
            onPress={() =>this.terreo()}
          />

          <Rect
            x={'0%'}
            y={'40%'}
            width={'10%'}
            height={'10%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'10%'}
            y={'38%'}
            width={'8%'}
            height={'4%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'15%'}
            y={'36%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'20%'}
            y={'34%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'25%'}
            y={'32%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'30%'}
            y={'30%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'35%'}
            y={'28 %'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'40%'}
            y={'25%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'45%'}
            y={'22%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'50%'}
            y={'20%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'55%'}
            y={'17%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'60%'}
            y={'15%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}   
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'65%'}
            y={'13%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill={corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'70%'}
            y={'11%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() =>this.piso1()}
          />

          <Rect
            x={'75%'}
            y={'9%'}
            width={'8%'}
            height={'3%'}
            strokeWidth={2}
            stroke={corTerreo}
            fill = {corTerreoFundo}
            onPress={() => this.piso1()}
          />

          <Rect
            x={'0%'}
            y={'20%'}
            width={'10%'}
            height={'20%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'0%'}
            y={'20%'}
            width={'20%'}
            height={'15%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'20%'}
            y={'17%'}
            width={'10%'}
            height={'13%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'20%'}
            y={'17%'}
            width={'10%'}
            height={'14%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'20%'}
            y={'17%'}
            width={'17%'}
            height={'10%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'25%'}
            y={'15%'}
            width={'17%'}
            height={'10%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'35%'}
            y={'10%'}
            width={'14%'}
            height={'12%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'35%'}
            y={'10%'}
            width={'17%'}
            height={'10%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'40%'}
            y={'7%'}
            width={'17%'}
            height={'10%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'48%'}
            y={'4%'}
            width={'17%'}
            height={'10%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'53%'}
            y={'4%'}
            width={'17%'}
            height={'8%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'58%'}
            y={'2%'}
            width={'17%'}
            height={'8%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'58%'}
            y={'0%'}
            width={'25%'}
            height={'8%'}
            strokeWidth={2}
            stroke={corAndar1}
            fill = {corFundo1}
            onPress={() =>this.piso2()}
          />

          <Rect
            x={'85%'}
            y={'0%'}
            width={'25%'}
            height={'25%'}
            strokeWidth={2}
            stroke={corAndar2}
            fill={corFundo2}
            onPress={() =>this.artes()} 
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

export default withNavigationFocus(MapB)


