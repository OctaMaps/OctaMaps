import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';
  const a = "Sala de Aula"
  const b = 'Lab. de Informatica'
  const c = "Lab. de Informatica 2"
  const d = 'Lab. de Informatica 3'
  const e = 'Lab. de Informatica 4'    
  const f = 'Lab. de Informatica 5'
  const g = 'Lab. de Informatica 6'
  const h = 'Lab. de Informatica 7'
  const i = 'D.COM'

  const j = 'W.C'
  const k = 'W.C'

  const l = 'Lab. de Informatica 10'
  const m = 'Lab. de Informatica 9'

 class TD extends React.Component {

  render() {
    return (
      <View style={{marginLeft: '-3%'}}>

            <View style={{marginTop:'20%'}} >
           <Text style={t.a1}> {a.slice(0,20)} </Text>
           <Text style={t.a1}> {a.slice(20,40)} </Text>
            </View>

           <View style={{marginTop: '28%'}}>
           <Text style={t.a2}> {b.slice(0,30)} </Text>
           <Text style={t.a2}> {b.slice(30,50)} </Text>
           <Text style={t.a2}> {b.slice(50,70)} </Text>
           </View>

           <View style={{marginTop: '3%'}}>
           <Text style={t.a3}> {c.slice(0,30)} </Text>
           <Text style={t.a3}> {c.slice(30,50)} </Text>
           <Text style={t.a3}> {c.slice(50,70)} </Text>
           </View>  

           <View style={{marginTop: '3%'}}>
           <Text style={t.a4}> {d.slice(0,30)} </Text>
           <Text style={t.a4}> {d.slice(30,50)} </Text>
           <Text style={t.a4}> {d.slice(50,70)} </Text>
           <Text style={t.a4}> {d.slice(70,80)} </Text>
           </View>  

           <View style={{marginTop: '-2%'}}>
           <Text style={t.a5}> {e.slice(0,30)} </Text>
           <Text style={t.a5}> {e.slice(30,60)} </Text>
           <Text style={t.a5}> {e.slice(60,80)} </Text>
           </View>  


           <View style={{marginTop: '0%'}}>
           <Text style={t.a6}> {f.slice(0,30)} </Text>
           <Text style={t.a6}> {f.slice(30,60)} </Text>
           <Text style={t.a6}> {f.slice(60,80)} </Text>
           </View>  


           <View style={{marginTop: '3%'}}>
           <Text style={t.a7}> {g.slice(0,30)} </Text>
           <Text style={t.a7}> {g.slice(30,50)} </Text>
           <Text style={t.a7}> {g.slice(50,70)} </Text>

           <Text style={t.a8}> {h.slice(0,30)} </Text>
           <Text style={t.a8}> {h.slice(30,50)} </Text>
           <Text style={t.a8}> {h.slice(50,70)} </Text>

           </View>  

           <View style={{marginTop: '0%'}}>
            <Text style={t.a9}> {i.slice(0,30)} </Text>
            <Text style={t.a9}> {i.slice(30,67)} </Text>
            <Text style={t.a9}> {i.slice(67,80)} </Text>
           </View>  

           <View style={{marginTop: '-59%'}}>
            <Text style={t.a10}> {j.slice(0,8)} </Text>
            <Text style={t.a10}> {j.slice(8,18)} </Text>
            <Text style={t.a10}> {j.slice(18,27)} </Text>
            <Text style={t.a10}> {j.slice(27,36)} </Text>
           </View>  

           <View style={{marginTop: '-18%'}}>
            <Text style={t.a11}> {k.slice(0,9)} </Text>
            <Text style={t.a11}> {k.slice(9,18)} </Text>
            <Text style={t.a11}> {k.slice(18,27)} </Text>
            <Text style={t.a11}> {k.slice(27,36)} </Text>
           </View>  

           <View style={{marginTop: '1%'}}>
            <Text style={t.a12}> {l.slice(0,11)} </Text>
            <Text style={t.a12}> {l.slice(11,30)} </Text>
            <Text style={t.a12}> {l.slice(30,40)} </Text>
            <Text style={t.a12}> {l.slice(40,50)} </Text>
           </View>  

           <View style={{marginTop: '-70%'}}>
            <Text style={t.a13}> {m.slice(0,13)} </Text>
            <Text style={t.a13}> {m.slice(13,25)} </Text>
            <Text style={t.a13}> {m.slice(25,30)} </Text>
            <Text style={t.a13}> {m.slice(30,50)} </Text>
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
    marginLeft:'40%',
    marginTop: '-2%'
  },
  a2: {
    color: 'white',
    marginLeft:' 40%',
  },
  a3: {
    color: 'white',
    marginLeft:'40%'
  },
  a4: {
    color: 'white',
    marginLeft:'40%'
  },
  a5: {
    color: 'white',
    marginLeft:'40%'
  },
  a6:{
    color: 'white',
    marginLeft:'40%'
  },
  a7:{
    color: 'white',
    marginLeft:'40%'
  },
  a8:{
    color: 'white',
    marginLeft:'40%',
  },
  a9:{
    color: 'white',
    marginLeft:'40%',
  },
  a10:{
    color: 'white',
    marginLeft:'8%',
  },
  a11:{
    color: 'white',
    marginLeft:'20%',
  },
  a12:{
    color: 'white',
    marginLeft:'8%',
  },
  a13:{
    color: 'white',
    marginLeft:'8%',
  },
  a14:{
    color: 'white',
    marginLeft:'41%',
  },

});

export default withNavigationFocus(TD)

