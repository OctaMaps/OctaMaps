import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';

const corAndar1 = 'transparent'
const corFundo1 = 'transparent'

const corAndar0 = 'transparent'
const corFundo0 = 'transparent'

const corAndar2 = 'transparent'
const corFundo2 = 'transparent'
class MapE extends React.Component {
  terreo(){
    this.props.navigation.navigate('BlocoETerreo')
  }
  piso1(){
    this.props.navigation.navigate('BlocoEP2')
  }

  pisoMedio(){
    this.props.navigation.navigate('BlocoEP1')
  }
  render() {
    return (
      <View>
        <Svg height={"100%"} width={'100%'}>

            <Rect
              x={'0%'}
              y={'40%'}
              width={'28%'}
              height={'10%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() =>this.terreo()}
            />

            <Rect
              x={'10%'}
              y={'50%'}
              width={'28%'}
              height={'10%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() =>this.terreo()}
            />

            <Rect
              x={'12%'}
              y={'53%'}
              width={'28%'}
              height={'10%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() =>this.terreo()}
            />

            <Rect
              x={'20%'}
              y={'55%'}
              width={'28%'}
              height={'10%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() =>this.terreo()}
            />

            <Rect
              x={'40%'}
              y={'55%'}
              width={'28%'}
              height={'15%'}
              strokeWidth={2}
              stroke={corAndar1}
              fill={corFundo1}
              onPress={() =>this.terreo()}
            />
           


            <Rect
              x={'0%'}
              y={'18%'}
              width={'20%'}
              height={'15%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'14%'}
              y={'19%'}
              width={'20%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'16%'}
              y={'20%'}
              width={'20%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'19%'}
              y={'22%'}
              width={'20%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'24%'}
              y={'24%'}
              width={'20%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'26%'}
              y={'24%'}
              width={'20%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'30%'}
              y={'25%'}
              width={'20%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'34%'}
              y={'25%'}
              width={'20%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

             <Rect
              x={'38%'}
              y={'28%'}
              width={'20%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'42%'}
              y={'30%'}
              width={'20%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />


            <Rect
              x={'44%'}
              y={'32%'}
              width={'23%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'52%'}
              y={'33%'}
              width={'23%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'56%'}
              y={'35%'}
              width={'26%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'60%'}
              y={'37%'}
              width={'28%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'64%'}
              y={'39%'}
              width={'30%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'66%'}
              y={'39%'}
              width={'30%'}
              height={'16%'}
              strokeWidth={2}
              stroke={corAndar0}
              fill={corFundo0}
              onPress={() =>this.piso1()}
            />

            <Rect
              x={'0%'}
              y={'32%'}
              width={'10%'}
              height={'8%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'10%'}
              y={'36%'}
              width={'10%'}
              height={'6%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'16%'}
              y={'38%'}
              width={'8%'}
              height={'6%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'18%'}
              y={'40%'}
              width={'8%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'20%'}
              y={'41%'}
              width={'10%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'22%'}
              y={'42%'}
              width={'10%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'24%'}
              y={'43%'}
              width={'10%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'28%'}
              y={'44%'}
              width={'10%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'30%'}
              y={'45%'}
              width={'10%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'32%'}
              y={'46%'}
              width={'10%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'34%'}
              y={'47%'}
              width={'10%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'37%'}
              y={'48%'}
              width={'10%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'39%'}
              y={'49%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'41%'}
              y={'50%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'43%'}
              y={'50%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'45%'}
              y={'51%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'47%'}
              y={'51%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'49%'}
              y={'52%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'51%'}
              y={'52%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'53%'}
              y={'53%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'55%'}
              y={'54%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'56%'}
              y={'55%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'58%'}
              y={'56%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'60%'}
              y={'57%'}
              width={'12%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
            />

            <Rect
              x={'62%'}
              y={'58%'}
              width={'15%'}
              height={'5%'}
              strokeWidth={2}
              stroke={corAndar2}
              fill={corFundo2}
              onPress={() =>this.pisoMedio()}
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
export default withNavigationFocus(MapE)
