import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';
  const a = "Lab. de Solda"
  const b = 'Lab. de Refrigeração mecanica'
  const c = "Projetos de Circuitos E."
  const d = ''
  const e = 'Coord.Salas Elet.'    
  const f = 'Sala Professores'
  const g = 'Lab. de Pesquisas em Energia'
  const h = 'Lab. de Instalações Eletricas'
  const i = 'Espera'

  const j = 'Lab. de Maquinas Eletricas 01'
  const k = 'Lab. de Maquinas Eletricas 02'

  const l = 'Coord. Geral'
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

           <View style={{marginTop: '-5%'}}>
           <Text style={t.a2}> {b.slice(0,17)} </Text>
           <Text style={t.a2}> {b.slice(17,30)} </Text>
           <Text style={t.a2}> {b.slice(30,40)} </Text>
           </View>

           <View style={{marginTop: '-13%'}}>
           <Text style={t.a3}> {c.slice(0,8)} </Text>
           <Text style={t.a3}> {c.slice(8,16)} </Text>
           <Text style={t.a3}> {c.slice(16,30)} </Text>
           <Text style={t.a3}> {c.slice(30,45)} </Text>
           </View>  

           <View style={{marginTop: '0%'}}>
           <Text style={t.a4}> {d.slice(0,11)} </Text>
           <Text style={t.a4}> {d.slice(11,25)} </Text>
           <Text style={t.a4}> {d.slice(25,38)} </Text>
           <Text style={t.a4}> {d.slice(38,50)} </Text>
           </View>  

           <View style={{marginTop: '-22%'}}>
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


           <View style={{marginTop: '-2%'}}>
           <Text style={t.a7}> {g.slice(0,15)} </Text>
           <Text style={t.a7}> {g.slice(15,30)} </Text>
           <Text style={t.a7}> {g.slice(30,40)} </Text>

           </View>  

           <View style={{marginTop: '3%'}} >

           <Text style={t.a8}> {h.slice(0,19)} </Text>
           <Text style={t.a8}> {h.slice(19,30)} </Text>
           <Text style={t.a8}> {h.slice(30,50)} </Text>
</View>

           <View style={{marginTop: '28%'}}>
            <Text style={t.a9}> {i.slice(0,8)} </Text>
            <Text style={t.a9}> {i.slice(8,17)} </Text>
            <Text style={t.a9}> {i.slice(17,27)} </Text>
            <Text style={t.a9}> {i.slice(27,36)} </Text>
           </View>  

           <View style={{marginTop: '-12%'}}>
            <Text style={t.a10}> {j.slice(0,19)} </Text>
            <Text style={t.a10}> {j.slice(19,30)} </Text>
            <Text style={t.a10}> {j.slice(30,60)} </Text>
           </View>  

           <View style={{marginTop: '5%'}}>
            <Text style={t.a11}> {k.slice(0,19)} </Text>
            <Text style={t.a11}> {k.slice(19,30)} </Text>
            <Text style={t.a11}> {k.slice(30,40)} </Text>
           </View> 

           <View style={{marginTop: '4%'}}>
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
    marginLeft:' 45%',
  },
  a3: {
    color: 'white',
    marginLeft:'28%'
  },
  a4: {
    color: 'white',
    marginLeft:'30%'
  },
  a5: {
    color: 'white',
    marginLeft:'58%'
  },
  a6:{
    color: 'white',
    marginLeft:'29%'
  },
  a7:{
    color: 'white',
    marginLeft:'38%'
  },
  a8:{
    color: 'white',
    marginLeft:'32%',
  },
  a9:{
    color: 'white',
    marginLeft:'30%',
  },
  a10:{
    color: 'white',
    marginLeft:'30%',
  },
  a11:{
    color: 'white',
    marginLeft:'30%',
  },
  a12:{
    color: 'white',
    marginLeft:'30%',
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

