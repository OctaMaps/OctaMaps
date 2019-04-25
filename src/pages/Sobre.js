import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NewHeader from '../component/NewHeader';



export default class Sobre extends React.Component {
  
  render() {
    return ( 
      <View style={styles.container}>

           <View style={styles.general}>
              <NewHeader searchableOff={true}></NewHeader>

              <View style={styles.blueBar} />

              <View style={styles.whiteBar}>
                  <Text style={styles.paragraphBoltado}> Aplicativo desenvolvio com recursos do projeto </Text>
                  <Text style={styles.paragraphBoltado}>  de iniciação cientifica para o Ensino Medio  </Text>
                  <Text style={styles.paragraphBoltado}>  CNPQ Edital DPIEx 13/2018. </Text>
                  <Text style={styles.paragraphSeparer}> Participantes:</Text>
                  <Text style={styles.paragraphBoltado}> (Coordenador e Pesquisador Convidado) </Text>
                  <Text style={styles.paragraph}> Alexandre Torrezam </Text>   
                  <Text style={styles.paragraph}> Custodio Gastão da Silva Jr </Text>   
                  <Text style={styles.paragraphBoltado}> (Bolsistas)</Text>
                  <Text style={styles.paragraph}> Alessandro Teiji Watanabe  </Text>
                  <Text style={styles.paragraph}> Aroldo Goulart Barros </Text>   
                  <Text style={styles.paragraph}> Vitoria Angel S. Silva </Text> 
                  <Text style={styles.paragraphBoltado}> (Voluntarios)</Text>   
                  <Text style={styles.paragraph}> Carlos E.A.M Magalhães </Text>   
                  <Text style={styles.paragraph}> Pedro Gabriel Girardello Gomes </Text>   
                  <Text style={styles.paragraph}> Yane Prisilina de Araujo </Text>   
              </View>

              <View style={styles.blueBar} />
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  general: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2e88a2',
  },
  whiteBar: {
    flex: 3,
    backgroundColor: 'white',
    paddingTop: '3%',
    paddingLeft: '5%',
   
  },
  blueBar: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    textAlign: 'left',
    fontSize: 18
  },
   paragraphSeparer: {
    textAlign: 'left',
    fontSize: 19,
    marginTop:'10%',
    fontWeight: 'bold',
    marginBottom: '1%'
  },
  paragraphBoltado:{
    textAlign: 'left',
    fontSize: 19,
    fontWeight: 'bold',

  }
});

