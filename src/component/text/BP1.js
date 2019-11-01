import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';
  const a = "B-101"
  const b = 'B-102'
  const c = "B-103"
  const d = 'B-104'
  const e = 'B-105'    
  const f = 'B-106'
  const g = 'B-107'
  const h = ''
  const i = ''

  const j = ''
  const k = ''

  const l = ''
  const m = ''

 class BP1 extends React.Component {

  render() {
    return (
      <View style={{marginLeft: '0%'}}>


        <View style={{marginTop: '0%'}}>
           <Text style={t.a1}> {a.slice(0,10)} </Text>
           <Text style={t.a1}> {a.slice(10,20)} </Text>
           <Text style={t.a1}> {a.slice(20,50)} </Text>

        </View>

           <View style={{marginTop: '2%'}}>
           <Text style={t.a2}> {b.slice(0,5)} </Text>
           <Text style={t.a2}> {b.slice(5,10)} </Text>
           <Text style={t.a2}> {b.slice(10,20)} </Text>
           </View>

           <View style={{marginTop: '25%'}}>
           <Text style={t.a3}> {c.slice(0,10)} </Text>
           <Text style={t.a3}> {c.slice(10,20)} </Text>
           <Text style={t.a3}> {c.slice(20,30)} </Text>
           <Text style={t.a3}> {c.slice(30,45)} </Text>
           </View>  

           <View style={{marginTop: '9%'}}>
           <Text style={t.a4}> {d.slice(0,9)} </Text>
           <Text style={t.a4}> {d.slice(9,20)} </Text>
           <Text style={t.a4}> {d.slice(20,38)} </Text>
           <Text style={t.a4}> {d.slice(38,50)} </Text>
           </View>  

           <View style={{marginTop: '5%'}}>
           <Text style={t.a5}> {e.slice(0,7) }</Text>
           <Text style={t.a5}> {e.slice(7,8)} </Text>
           <Text style={t.a5}> {e.slice(8,40)} </Text>
           <Text style={t.a5}> {e.slice(40,60)} </Text>
           </View>  






           <View style={{marginTop: '4%'}}>
           <Text style={t.a6}> {f.slice(0,9)} </Text>
           <Text style={t.a6}> {f.slice(9,20)} </Text>
           <Text style={t.a6}> {f.slice(20,27)} </Text>
           <Text style={t.a6}> {f.slice(27,36)} </Text>
           </View>  


           <View style={{marginTop: '2%'}}>
           <Text style={t.a7}> {g.slice(0,9)} </Text>
           <Text style={t.a7}> {g.slice(9,20)} </Text>
           <Text style={t.a7}> {g.slice(20,40)} </Text>

           </View>  

           <View style={{marginTop: '0%'}} >
           <Text style={t.a8}> {h.slice(0,9)} </Text>
           <Text style={t.a8}> {h.slice(9,30)} </Text>
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
    marginLeft:'10%',
  },
  a2: {
    color: 'white',
    marginLeft:'10%',
  },
  a3: {
    color: 'white',
    marginLeft:'10%'
  },
  a4: {
    color: 'white',
    marginLeft:'10%'
  },
  a5: {
    color: 'white',
    marginLeft:'10%'
  },
  a6:{
    color: 'white',
    marginLeft:'10%'
  },
  a7:{
    color: 'white',
    marginLeft:'10%'
  },
  a8:{
    color: 'white',
    marginLeft:'10%',
  },
  a9:{
    color: 'white',
    marginLeft:'10%',
  },
  a10:{
    color: 'white',
    marginLeft:'10%',
  },
  a11:{
    color: 'white',
    marginLeft:'10%',
  },
  a12:{
    color: 'white',
    marginLeft:'10%',
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

export default withNavigationFocus(BP1)

