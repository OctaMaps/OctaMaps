import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';
  const a = "Gabinete Geral"
  const b = 'Banheiros'
  const c = "Auditoria"
  const d = 'Procuradora'
  const e = 'C.G.G.P'
  const f = 'DREC'

  const g = 'ColocarAlgumTextoAquiVitoria'
  const h = 'ColocarAlgumTextoAquiVitoria>'
  const i = 'ColocarAlgumTextoAquiVitoria>'
  const j = 'ColocarAlgumTextoAquiVitoria>'
  const k = 'ColocarAlgumTextoAquiVitoria>'
  const l = 'ColocarAlgumTextoAquiVitoria>'
  const m = 'ColocarAlgumTextoAquiVitoria>'
  const n = 'ColocarAlgumTextoAquiVitoria>'
  const o = 'ColocarAlgumTextoAquiVitoria>'
  const p = 'ColocarAlgumTextoAquiVitoria>'
  const q = 'ColocarAlgumTextoAquiVitoria>'
  const r = 'ColocarAlgumTextoAquiVitoria>'
  const s = 'ColocarAlgumTextoAquiVitoria>'
  const u = 'ColocarAlgumTextoAquiVitoria>'

 class TA1 extends React.Component {

  render() {
    return (
      <View style={{marginTop: '52%'}}>

        <Text style={t.a1}> {a.slice(0,8)} </Text>
        <Text style={t.a1}> {a.slice(8,15)} </Text>

        <View style={{marginTop: '12%'}}>
          <Text style={t.a2}> {b.slice(0,9)} </Text>
          <Text style={t.a2}> {b.slice(9,18)} </Text>
          <Text style={t.a2}> {b.slice(21,29)} </Text>
          <Text style={t.a2}> {b.slice(29,38)} </Text>

        </View>

        <View style={{marginTop: '1%'}}>
          <Text style={t.a3}> {c.slice(0,9)} </Text>
          <Text style={t.a3}> {c.slice(9,18)} </Text>
          <Text style={t.a3}> {c.slice(21,29)} </Text>
          <Text style={t.a3}> {c.slice(29,38)} </Text>

        </View>

        <View style={{marginTop: '1%'}}>
          <Text style={t.a4}> {d.slice(0,12)} </Text>
          <Text style={t.a4}> {d.slice(12,18)} </Text>
          <Text style={t.a4}> {d.slice(21,29)} </Text>
          <Text style={t.a4}> {d.slice(29,38)} </Text>

        </View>

        <View style={{marginTop: '1%'}}>
          <Text style={t.a5}> {e.slice(0,9)} </Text>
          <Text style={t.a5}> {e.slice(9,18)} </Text>
          <Text style={t.a5}> {e.slice(21,29)} </Text>
          <Text style={t.a5}> {e.slice(29,38)} </Text>

        </View>

        <View style={{marginTop: '1%'}}>
          <Text style={t.a6}> {f.slice(0,7)} </Text>
          <Text style={t.a6}> {f.slice(7,15)} </Text>
          <Text style={t.a6}> {f.slice(15,23)} </Text>
          <Text style={t.a6}> {f.slice(23,31)} </Text>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});

const t = StyleSheet.create({
  a1: {
    color: 'white',
    marginLeft:'35%',
    marginTop:'0%'
  },
  a2: {
    color: 'white',
    marginLeft:' 35%',
  },
  a3: {
    color: 'white',
    marginLeft:'35%'
  },
  a4: {
    color: 'white',
    marginLeft:'35%'
  },



  a5:{
    color: 'white',
    marginLeft:'35%'
  },
  a6:{
    color: 'white',
    marginLeft:'35%'
  },
  a8:{
    color: 'white',
    marginLeft:'30%',
    marginTop:'0%'
  },
  a9:{
    color: 'white',
    marginLeft:'30%',
  },
  a10:{
    color: 'white',
    marginLeft:'10%',
  },
  a11:{
    color: 'white',
    marginLeft:'25%',
  },
  a12:{
    color: 'white',
    marginLeft:'38%',
  },
  a13:{
    color: 'white',
    marginLeft:'42%',
  },
  a14:{
    color: 'white',
    marginLeft:'42%',
  },
  a15:{
    color: 'white',
    marginLeft:'42%',
  },
  a16:{
    color: 'white',
    marginLeft:'42%',
  },
  a17:{
    color: 'white',
    marginLeft:'10%',
  },
  a18:{
    color: 'white',
    marginLeft:'25%',
  },
});

export default withNavigationFocus(TA1)

