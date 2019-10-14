import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';
  const a = "A 102 B"
  const b = 'A 102 A'
  const c = "Diretoria de Ensino"
  const d = 'A 101'
  const e = '   '
  const f = '    '
  const g = 'R.H'
  const h = '       '
  const i = 'NEAD'
  const j = '       '
  const k = '       '
  const l = '  '
  const m = '   '
  const n = '       '
  const o = '       '
  const p = '       '
  const q = '       '
  const r = 'DPIEx'
  const s = '       '
  const u = '    '

 class TA1 extends React.Component {

  render() {
    return (
      <View style={{marginTop: '-2%'}}>

           <Text style={t.a1}> {a.slice(0,6)} </Text>
           <Text style={t.a1}> {a.slice(6,12)} </Text>
           <Text style={t.a1}> {a.slice(12,18)} </Text>
           <Text style={t.a1}> {a.slice(18,24)} </Text>

           <View style={{marginTop: '-2%'}}>
             <View style={{marginTop: '-18%'}}>
             <Text style={t.a2}> {b.slice(0,6)} </Text>
             <Text style={t.a2}> {b.slice(6,12)} </Text>
             <Text style={t.a2}> {b.slice(12,18)} </Text>
             <Text style={t.a2}> {b.slice(18,24)} </Text>
             </View>

             <View style={{marginTop: '-18%'}}>
             <Text style={t.a3}> {c.slice(0,6)} </Text>
             <Text style={t.a3}> {c.slice(6,12)} </Text>
             <Text style={t.a3}> {c.slice(12,18)} </Text>
             <Text style={t.a3}> {c.slice(18,24)} </Text>
             </View>  

             <View style={{marginTop: '-18%'}}>
             <Text style={t.a5}> {e.slice(0,6)} </Text>
             <Text style={t.a5}> {e.slice(6,11)} </Text>
             <Text style={t.a5}> {e.slice(11,16)} </Text>
             <Text style={t.a5}> {e.slice(16,20)} </Text>
             </View>  

             <View style={{marginTop: '3%'}}>
             <Text style={t.a6}> {f.slice(0,9)} </Text>
             <Text style={t.a6}> {f.slice(9,18)} </Text>
             <Text style={t.a6}> {f.slice(18,27)} </Text>
             <Text style={t.a6}> {f.slice(27,36)} </Text>
             </View>  

             <View style={{marginTop: '80%'}}>
             <Text style={t.a7}> {g.slice(0,9)} </Text>
             <Text style={t.a7}> {g.slice(9,18)} </Text>
             <Text style={t.a7}> {g.slice(18,27)} </Text>
             </View>  

            <View style={{marginTop: '-95%'}}>
             <Text style={t.a8}> {h.slice(0,9)} </Text>
             <Text style={t.a8}> {h.slice(9,18)} </Text>
             <Text style={t.a8}> {h.slice(18,27)} </Text>
             <Text style={t.a8}> {h.slice(27,36)} </Text>
             </View>  


             <View style={{marginTop: '5%'}}>
             <Text style={t.a9}> {i.slice(0,9)} </Text>
             <Text style={t.a9}> {i.slice(9,18)} </Text>
             <Text style={t.a9}> {i.slice(18,27)} </Text>
             <Text style={t.a9}> {i.slice(27,36)} </Text>
             </View>

             <View style={{marginTop: '2%'}}>
             <Text style={t.a10}> {j.slice(0,7)} </Text>
             <Text style={t.a10}> {j.slice(7,14)} </Text>
             <Text style={t.a10}> {j.slice(14,22)} </Text>
             <Text style={t.a10}> {j.slice(22,31)} </Text>
             </View>

             <View style={{marginTop: '-18%'}}>
             <Text style={t.a11}> {k.slice(0,4)} </Text>
             <Text style={t.a11}> {k.slice(4,8)} </Text>
             <Text style={t.a11}> {k.slice(8,12)} </Text>
             <Text style={t.a11}> {k.slice(12,16)} </Text>
             </View>

             <View style={{marginTop: '-18%'}}>
             <Text style={t.a12}> {l.slice(0,4)} </Text>
             <Text style={t.a12}> {l.slice(4,8)} </Text>
             <Text style={t.a12}> {l.slice(8,12)} </Text>
             <Text style={t.a12}> {l.slice(12,16)} </Text>
             </View>

             <View style={{marginTop: '10%'}}>
             <Text style={t.a13}> {m.slice(0,4)} </Text>
             <Text style={t.a13}> {m.slice(4,8)} </Text>
             <Text style={t.a13}> {m.slice(8,12)} </Text>
             <Text style={t.a13}> {m.slice(12,16)} </Text>
             </View>

             <View style={{marginTop: '5%'}}>
             <Text style={t.a14}> {n.slice(0,4)} </Text>
             <Text style={t.a14}> {n.slice(4,8)} </Text>
             <Text style={t.a14}> {n.slice(8,12)} </Text>
             <Text style={t.a14}> {n.slice(12,16)} </Text>
             </View>

             <View style={{marginTop: '5%'}}>
             <Text style={t.a15}> {o.slice(0,4)} </Text>
             <Text style={t.a15}> {o.slice(4,8)} </Text>
             <Text style={t.a15}> {o.slice(8,12)} </Text>
             <Text style={t.a15}> {o.slice(12,16)} </Text>
             </View>

             <View style={{marginTop: '-113%'}}>
             <Text style={t.a6}> {p.slice(0,9)} </Text>
             <Text style={t.a6}> {p.slice(9,18)} </Text>
             <Text style={t.a6}> {p.slice(18,27)} </Text>
             <Text style={t.a6}> {p.slice(27,36)} </Text>
             </View> 

             <View style={{marginTop: '30%'}}>
             <Text style={t.a17}> {q.slice(0,6)} </Text>
             <Text style={t.a17}> {q.slice(6,12)} </Text>
             </View> 

             <View style={{marginTop: '-9%'}}>
             <Text style={t.a18}> {r.slice(0,6)} </Text>
             <Text style={t.a18}> {r.slice(6,12)} </Text>
             </View> 
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
    marginLeft:'10%',
    marginTop:'0%'
  },
  a2: {
    color: 'white',
    marginLeft:' 25%',
  },
  a3: {
    color: 'white',
    marginLeft:'37%'
  },
  a5: {
    color: 'white',
    marginLeft:'74%'
  },



  a6:{
    color: 'white',
    marginLeft:'10%'
  },
  a7:{
    color: 'white',
    marginLeft:'58%'
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

