import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigationFocus,NavigationEvents } from 'react-navigation';
  const a = "ColocarAlgumTextoAquiVitoria"
  const b = 'ColocarAlgumTextoAquiVitoria'
  const c = "ColocarAlgumTextoAquiVitoria"
  const d = 'ColocarAlgumTextoAquiVitoria'
  const e = 'ColocarAlgumTextoAquiVitoria'
  const f = 'ColocarAlgumTextoAquiVitoria'
  const g = 'ColocarAlgumTextoAquiVitoria'
  const h = 'ColocarAlgumTextoAquiVitoria>'

 class TAT extends React.Component {

  render() {
    return (
      <View>

           <Text style={t.a1}> {a.slice(0,3)} </Text>
           <Text style={t.a1}> {a.slice(3,6)} </Text>
           <Text style={t.a1}> {a.slice(6,9)} </Text>
           <Text style={t.a1}> {a.slice(9,12)} </Text>

           <View style={{marginTop: '-18%'}}>
           <Text style={t.a2}> {b.slice(0,3)} </Text>
           <Text style={t.a2}> {b.slice(3,6)} </Text>
           <Text style={t.a2}> {b.slice(6,9)} </Text>
           <Text style={t.a2}> {b.slice(9,12)} </Text>
           </View>

           <View style={{marginTop: '-18%'}}>
           <Text style={t.a3}> {c.slice(0,3)} </Text>
           <Text style={t.a3}> {c.slice(3,6)} </Text>
           <Text style={t.a3}> {c.slice(6,9)} </Text>
           <Text style={t.a3}> {c.slice(9,12)} </Text>
           </View>  

           <View style={{marginTop: '-18%'}}>
           <Text style={t.a4}> {d.slice(0,3)} </Text>
           <Text style={t.a4}> {d.slice(3,6)} </Text>
           <Text style={t.a4}> {d.slice(6,9)} </Text>
           <Text style={t.a4}> {d.slice(9,12)} </Text>
           </View>  

           <View style={{marginTop: '-13%'}}>
           <Text style={t.a5}> {e.slice(0,6)} </Text>
           <Text style={t.a5}> {e.slice(6,11)} </Text>
           <Text style={t.a5}> {e.slice(11,16)} </Text>
           <Text style={t.a5}> {e.slice(16,20)} </Text>
           </View>  






           <View style={{marginTop: '-3%'}}>
           <Text style={t.a6}> {f.slice(0,9)} </Text>
           <Text style={t.a6}> {f.slice(9,18)} </Text>
           <Text style={t.a6}> {f.slice(18,27)} </Text>
           <Text style={t.a6}> {f.slice(27,36)} </Text>
           </View>  

           <View style={{marginTop: '0%'}}>
           <Text style={t.a6}> {f.slice(0,9)} </Text>
           <Text style={t.a6}> {f.slice(9,18)} </Text>
           <Text style={t.a6}> {f.slice(18,27)} </Text>
           <Text style={t.a6}> {f.slice(27,36)} </Text>
           </View>  


           <View style={{marginTop: '60%'}}>
           <Text style={t.a7}> {g.slice(0,9)} </Text>
           <Text style={t.a7}> {g.slice(9,18)} </Text>
           <Text style={t.a7}> {g.slice(18,27)} </Text>

            <Text style={t.a8}> {h.slice(0,9)} </Text>
           <Text style={t.a8}> {h.slice(9,18)} </Text>
           <Text style={t.a8}> {h.slice(18,27)} </Text>

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
    marginLeft:'16%'
  },
  a2: {
    color: 'white',
    marginLeft:' 25%',
  },
  a3: {
    color: 'white',
    marginLeft:'37%'
  },
  a4: {
    color: 'white',
    marginLeft:'47%'
  },
  a5: {
    color: 'white',
    marginLeft:'74%'
  },



  a6:{
    color: 'white',
    marginLeft:'14%'
  },
  a7:{
    color: 'white',
    marginLeft:'58%'
  },
  a8:{
    color: 'white',
    marginLeft:'60%',
    marginTop:'2%'
  },

});

export default withNavigationFocus(TAT)

