import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';
  const a = "Cordenador"
  const b = 'C102 Lab. de Informatica'
  const c = "C103 Projeto Moradia"
  const d = 'C104 Mini Auditorio'
  const e = 'C105 Mini Auditorio'    
  const f = 'Deposito'
  const g = 'W.C'
  const h = 'W.C'
  const i = 'C106 Lab. de Informatica'
  const j = 'C107 Sala de Pranchetas'
  const k = 'C108 Sala de Pranchetas'
  const l = 'C109 Laboratorio de Hidraulica'
  const m = 'a'

 class P1C extends React.Component {

  render() {
    return (
      <View style={{marginLeft: '-3%'}}>

           <Text style={t.a1}> {a.slice(0,10)} </Text>
           <Text style={t.a1}> {a.slice(20,40)} </Text>

           <View style={{marginTop: '5%'}}>
           <Text style={t.a2}> {b.slice(0,17)} </Text>
           <Text style={t.a2}> {b.slice(17,30)} </Text>
           <Text style={t.a2}> {b.slice(30,40)} </Text>
           </View>

           <View style={{marginTop: '5%'}}>
           <Text style={t.a3}> {c.slice(0,12)} </Text>
           <Text style={t.a3}> {c.slice(12,30)} </Text>
           <Text style={t.a3}> {c.slice(30,50)} </Text>
           </View>  

           <View style={{marginTop: '5%'}}>
           <Text style={t.a4}> {d.slice(0,10)} </Text>
           <Text style={t.a4}> {d.slice(10,24)} </Text>
           <Text style={t.a4}> {d.slice(24,38)} </Text>
           <Text style={t.a4}> {d.slice(38,50)} </Text>
           </View>  

           <View style={{marginTop: '1%'}}>
           <Text style={t.a5}> {e.slice(0,16)} </Text>
           <Text style={t.a5}> {e.slice(16,29)} </Text>
           <Text style={t.a5}> {e.slice(29,40)} </Text>
           <Text style={t.a5}> {e.slice(40,60)} </Text>
           </View>  

           <View style={{marginTop: '1%'}}>
           <Text style={t.a7}> {g.slice(0,6)} </Text>
           <Text style={t.a7}> {g.slice(6,18)} </Text>
           <Text style={t.a7}> {g.slice(18,30)} </Text>

           </View>  

            <View style={{marginTop: '-2%'}}> 
           <Text style={t.a8}> {h.slice(0,6)} </Text>
           <Text style={t.a8}> {h.slice(6,20)} </Text>
           <Text style={t.a8}> {h.slice(20,27)} </Text>
          </View>

           <View style={{marginTop: '-5%'}}>
            <Text style={t.a9}> {i.slice(0,18)} </Text>
            <Text style={t.a9}> {i.slice(18,32)} </Text>
            <Text style={t.a9}> {i.slice(32,40)} </Text>
            <Text style={t.a9}> {i.slice(40,50)} </Text>
           </View>  

           <View style={{marginTop: '-5%'}}>
            <Text style={t.a10}> {j.slice(0,17)} </Text>
            <Text style={t.a10}> {j.slice(17,30)} </Text>
            <Text style={t.a10}> {j.slice(30,40)} </Text>
            <Text style={t.a10}> {j.slice(40,50)} </Text>
           </View>  

           <View style={{marginTop: '1%'}}>
            <Text style={t.a11}> {k.slice(0,17)} </Text>
            <Text style={t.a11}> {k.slice(17,30)} </Text>
            <Text style={t.a11}> {k.slice(30,40)} </Text>
            <Text style={t.a11}> {k.slice(40,66)} </Text>
           </View>  

           <View style={{marginTop: '-2%'}}>
            <Text style={t.a12}> {l.slice(0,20)} </Text>
            <Text style={t.a12}> {l.slice(20,40)} </Text>
            <Text style={t.a12}> {l.slice(40,60)} </Text>
            <Text style={t.a12}> {l.slice(60,80)} </Text>
           </View>  

           <View style={{marginTop: '6%'}}>
            <Text style={t.a13}> {m.slice(0,9)} </Text>
            <Text style={t.a13}> {m.slice(9,18)} </Text>
            <Text style={t.a13}> {m.slice(18,27)} </Text>
            <Text style={t.a13}> {m.slice(27,36)} </Text>
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
    marginLeft:'32%',
    marginTop: '0%'
  },
  a2: {
    color: 'white',
    marginLeft:' 33%',
  },
  a3: {
    color: 'white',
    marginLeft:'33%'
  },
  a4: {
    color: 'white',
    marginLeft:'33%'
  },
  a5: {
    color: 'white',
    marginLeft:'33%'
  },
  a6:{
    color: 'white',
    marginLeft:'48%'
  },
  a7:{
    color: 'white',
    marginLeft:'33%'
  },
  a8:{
    color: 'white',
    marginLeft:'33%',
  },
  a9:{
    color: 'white',
    marginLeft:'33%',
  },
  a10:{
    color: 'white',
    marginLeft:'33%',
  },
  a11:{
    color: 'white',
    marginLeft:'33%',
  },
  a12:{
    color: 'white',
    marginLeft:'33%',
  },
  a13:{
    color: 'white',
    marginLeft:'33%',
  },
  a14:{
    color: 'white',
    marginLeft:'33%',
  },

});

export default withNavigationFocus(P1C)

