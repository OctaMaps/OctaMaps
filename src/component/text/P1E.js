import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';
  const a = "Lab. Elet. Geral e Elet. Basica"
  const b = 'Lab. de Televisão'
  const c = "vazio."
  const d = 'Multimeios'
  const e = 'Multimeios'    
  const f = 'vazio'
  const g = 'Oficina Modelo'
  const h = 'Sala de manutenção'
  const i = 'Gerencia'

  const j = 'Sala de Video'
  const k = 'Lab. de Inst. Eletricas II'

  const l = ''
  const m = ''

 class TE extends React.Component {

  render() {
    return (
      <View style={{marginLeft: '0%'}}>


        <View style={{marginTop: '0%'}}>
           <Text style={t.a1}> {a.slice(0,14)} </Text>
           <Text style={t.a1}> {a.slice(14,30)} </Text>
           <Text style={t.a1}> {a.slice(30,50)} </Text>

        </View>

           <View style={{marginTop: '2%'}}>
           <Text style={t.a2}> {b.slice(0,17)} </Text>
           <Text style={t.a2}> {b.slice(17,30)} </Text>
           <Text style={t.a2}> {b.slice(30,40)} </Text>
           </View>

           <View style={{marginTop: '0%'}}>
           <Text style={t.a3}> {c.slice(0,8)} </Text>
           <Text style={t.a3}> {c.slice(8,16)} </Text>
           <Text style={t.a3}> {c.slice(16,30)} </Text>
           <Text style={t.a3}> {c.slice(30,45)} </Text>
           </View>  

           <View style={{marginTop: '-14%'}}>
           <Text style={t.a4}> {d.slice(0,8)} </Text>
           <Text style={t.a4}> {d.slice(8,25)} </Text>
           <Text style={t.a4}> {d.slice(25,38)} </Text>
           <Text style={t.a4}> {d.slice(38,50)} </Text>
           </View>  

           <View style={{marginTop: '0%'}}>
           <Text style={t.a5}> {e.slice(0,5) }</Text>
           <Text style={t.a5}> {e.slice(5,10)} </Text>
           <Text style={t.a5}> {e.slice(10,40)} </Text>
           <Text style={t.a5}> {e.slice(40,60)} </Text>
           </View>  






           <View style={{marginTop: '-17%'}}>
           <Text style={t.a6}> {f.slice(0,7)} </Text>
           <Text style={t.a6}> {f.slice(7,12)} </Text>
           <Text style={t.a6}> {f.slice(12,27)} </Text>
           <Text style={t.a6}> {f.slice(27,36)} </Text>
           </View>  


           <View style={{marginTop: '2%'}}>
           <Text style={t.a7}> {g.slice(0,15)} </Text>
           <Text style={t.a7}> {g.slice(15,30)} </Text>
           <Text style={t.a7}> {g.slice(30,40)} </Text>

           </View>  

           <View style={{marginTop: '2%'}} >
           <Text style={t.a8}> {h.slice(0,19)} </Text>
           <Text style={t.a8}> {h.slice(19,30)} </Text>
           <Text style={t.a8}> {h.slice(30,50)} </Text>
</View>

           <View style={{marginTop: '-6%'}}>
            <Text style={t.a9}> {i.slice(0,8)} </Text>
            <Text style={t.a9}> {i.slice(8,17)} </Text>
            <Text style={t.a9}> {i.slice(17,27)} </Text>
            <Text style={t.a9}> {i.slice(27,36)} </Text>
           </View>  

           <View style={{marginTop: '-6%'}}>
            <Text style={t.a10}> {j.slice(0,19)} </Text>
            <Text style={t.a10}> {j.slice(19,30)} </Text>
            <Text style={t.a10}> {j.slice(30,60)} </Text>
           </View>  

           <View style={{marginTop: '8%'}}>
            <Text style={t.a11}> {k.slice(0,19)} </Text>
            <Text style={t.a11}> {k.slice(19,30)} </Text>
            <Text style={t.a11}> {k.slice(30,40)} </Text>
           </View> 

           <View style={{marginTop: '13%'}}>
            <Text style={t.a12}> {l.slice(0,16)} </Text>
            <Text style={t.a12}> {l.slice(16,30)} </Text>
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
    marginLeft:'32%',
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
    marginLeft:'50%'
  },
  a5: {
    color: 'white',
    marginLeft:'49%'
  },
  a6:{
    color: 'white',
    marginLeft:'33%'
  },
  a7:{
    color: 'white',
    marginLeft:'33%'
  },
  a8:{
    color: 'white',
    marginLeft:'32%',
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
    marginLeft:'34%',
  },
  a13:{
    color: 'white',
    marginLeft:'34%',
  },
  a14:{
    color: 'white',
    marginLeft:'41%',
  },

});

export default withNavigationFocus(TE)

