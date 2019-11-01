import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';
  const a = "Coordenaçao de Transportes"
  const b = 'Sala de Apoio'
  const c = "Deposito de Agua"
  const d = 'Limpeza'
  const e = ''
  const f = 'Copa'

  const g = 'Depósito'
  const h = 'Almoxerifado'
  const i = 'Wc'
  const j = 'WC'
  const k = ''
  const l = ''
  const m = ''
  const n = ''
  const o = ''
  const p = ''
  const q = ''
  const r = ''
  const s = ''
  const u = ''

 class TF extends React.Component {

  render() {
    return (
      <View style={{marginTop: '20%'}}>

        <Text style={t.a1}> {a.slice(0,40)} </Text>
        <Text style={t.a1}> {a.slice(40,80)} </Text>

        <View style={{marginTop: '30%'}}>
          <Text style={t.a2}> {b.slice(0,20)} </Text>
          <Text style={t.a2}> {b.slice(20,50)} </Text>

        </View>

        <View style={{marginTop: '0%'}}>
          <Text style={t.a3}> {c.slice(0,9)} </Text>
          <Text style={t.a3}> {c.slice(9,18)} </Text>
          <Text style={t.a3}> {c.slice(21,29)} </Text>
          <Text style={t.a3}> {c.slice(29,38)} </Text>

        </View>

        <View style={{marginTop: '-2%'}}>
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
    marginLeft:'45%',
    marginTop:'0%'
  },
  a2: {
    color: 'white',
    marginLeft:' 45%',
  },
  a3: {
    color: 'white',
    marginLeft:'45%'
  },
  a4: {
    color: 'white',
    marginLeft:'45%'
  },



  a5:{
    color: 'white',
    marginLeft:'45%'
  },
  a6:{
    color: 'white',
    marginLeft:'45%'
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

export default withNavigationFocus(TF)

