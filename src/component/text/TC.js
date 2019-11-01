import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';
  const a = "Chefe de Departamento"
  const b = 'Lab. GeoTecnologia'
  const c = "Sala Informatica"
  const d = 'Laboratorio de Calibração'
  const e = 'Laboratorio de Materiais'    
  const f = 'Hall'
  const g = 'Camara Umida'
  const h = 'Deposito'
  const i = 'Laboratorio de Asfalto'

  const j = 'Sala do Tecnico'
  const k = 'Deposito'

  const l = 'Laboratorio de Solos'
  const m = 'Sala de Equipamentos'

 class TC extends React.Component {

  render() {
    return (
      <View style={{marginLeft: '-3%'}}>

           <Text style={t.a1}> {a.slice(0,5)} </Text>
           <Text style={t.a1}> {a.slice(5,30)} </Text>

           <View style={{marginTop: '10%'}}>
           <Text style={t.a2}> {b.slice(0,8)} </Text>
           <Text style={t.a2}> {b.slice(8,20)} </Text>
           <Text style={t.a2}> {b.slice(20,30)} </Text>
           </View>

           <View style={{marginTop: '-1%'}}>
           <Text style={t.a3}> {c.slice(0,10)} </Text>
           <Text style={t.a3}> {c.slice(10,20)} </Text>
           <Text style={t.a3}> {c.slice(20,30)} </Text>
           <Text style={t.a3}> {c.slice(30,45)} </Text>
           </View>  

           <View style={{marginTop: '-8%'}}>
           <Text style={t.a4}> {d.slice(0,11)} </Text>
           <Text style={t.a4}> {d.slice(11,25)} </Text>
           <Text style={t.a4}> {d.slice(25,38)} </Text>
           <Text style={t.a4}> {d.slice(38,50)} </Text>
           </View>  

           <View style={{marginTop: '5%'}}>
           <Text style={t.a5}> {e.slice(0,17)} </Text>
           <Text style={t.a5}> {e.slice(17,30)} </Text>
           <Text style={t.a5}> {e.slice(30,40)} </Text>
           <Text style={t.a5}> {e.slice(40,60)} </Text>
           </View>  






           <View style={{marginTop: '20%'}}>
           <Text style={t.a6}> {f.slice(0,9)} </Text>
           <Text style={t.a6}> {f.slice(9,18)} </Text>
           <Text style={t.a6}> {f.slice(18,27)} </Text>
           <Text style={t.a6}> {f.slice(27,36)} </Text>
           </View>  


           <View style={{marginTop: '-32%'}}>
           <Text style={t.a7}> {g.slice(0,6)} </Text>
           <Text style={t.a7}> {g.slice(6,18)} </Text>
           <Text style={t.a7}> {g.slice(18,30)} </Text>

           <Text style={t.a8}> {h.slice(0,6)} </Text>
           <Text style={t.a8}> {h.slice(6,20)} </Text>
           <Text style={t.a8}> {h.slice(20,27)} </Text>

           </View>  

           <View style={{marginTop: '0%'}}>
            <Text style={t.a9}> {i.slice(0,8)} </Text>
            <Text style={t.a9}> {i.slice(8,17)} </Text>
            <Text style={t.a9}> {i.slice(17,27)} </Text>
            <Text style={t.a9}> {i.slice(27,36)} </Text>
           </View>  

           <View style={{marginTop: '-20%'}}>
            <Text style={t.a10}> {j.slice(0,8)} </Text>
            <Text style={t.a10}> {j.slice(8,18)} </Text>
            <Text style={t.a10}> {j.slice(18,27)} </Text>
            <Text style={t.a10}> {j.slice(27,36)} </Text>
           </View>  

           <View style={{marginTop: '0%'}}>
            <Text style={t.a11}> {k.slice(0,9)} </Text>
            <Text style={t.a11}> {k.slice(9,18)} </Text>
            <Text style={t.a11}> {k.slice(18,27)} </Text>
            <Text style={t.a11}> {k.slice(27,36)} </Text>
           </View>  

           <View style={{marginTop: '-8%'}}>
            <Text style={t.a12}> {l.slice(0,11)} </Text>
            <Text style={t.a12}> {l.slice(11,30)} </Text>
            <Text style={t.a12}> {l.slice(30,40)} </Text>
            <Text style={t.a12}> {l.slice(40,50)} </Text>
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
    marginLeft:'25%',
    marginTop: '-2%'
  },
  a2: {
    color: 'white',
    marginLeft:' 25%',
  },
  a3: {
    color: 'white',
    marginLeft:'32%'
  },
  a4: {
    color: 'white',
    marginLeft:'25%'
  },
  a5: {
    color: 'white',
    marginLeft:'25%'
  },
  a6:{
    color: 'white',
    marginLeft:'30%'
  },
  a7:{
    color: 'white',
    marginLeft:'55%'
  },
  a8:{
    color: 'white',
    marginLeft:'55%',
  },
  a9:{
    color: 'white',
    marginLeft:'23%',
  },
  a10:{
    color: 'white',
    marginLeft:'41%',
  },
  a11:{
    color: 'white',
    marginLeft:'41%',
  },
  a12:{
    color: 'white',
    marginLeft:'25%',
  },
  a13:{
    color: 'white',
    marginLeft:'24%',
  },
  a14:{
    color: 'white',
    marginLeft:'41%',
  },

});

export default withNavigationFocus(TC)

