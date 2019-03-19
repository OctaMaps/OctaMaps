import React from 'react'
import { StyleSheet, Text, View, Image,ImageBackground,FlatList,TextInput,TouchableOpacity,TouchableHighlight  } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'
import Database from '../services/Database'
import filter from '../utils/filter'

const database = new Database("OctaMaps")

export default class Pesquisa1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      volatileData: [], // Dados que podem/serão alterados
      fullData: [], // Dados recebidos da API
      loading: false,
      error: false,
    }
    database.migration()
  }


  async search(query){
    this.setState({fullData: await database.getData()})
    this.setState({ volatileData: filter(query, this.state.fullData)})
  }

  render() {
    return (
      <View style={styles.container}>
       <TouchableHighlight onPress={() => this.props.navigation.goBack()}> 

          <ImageBackground source={require('../imagens/map.png')} style={{width: '100%', height: '100%'}}>    
            <View style={{ height: 80, backgroundColor: 'transparent', justifyContent: 'center', paddingHorizontal: 5 }}>
              <Animatable.View animation="lightSpeedIn" duration={4000} style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                  <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={40} name="search" />
                  <TextInput onChangeText={ value => this.search(value) }placeholder="Pesquisa" style={{ fontSize: 24, marginLeft: 15, flex: 1 }} />
              </Animatable.View>
            </View>

               
              <FlatList
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                  data={this.state.volatileData}
                  renderItem={({ item}) => 
                    <TouchableOpacity onPress={ this._onPressButton }> 
                      <Text style={{ padding: 20, fontSize: 20 }}>
                        { `${item.titulo_bloco}  ${'-'} ${'Piso '+item.numero_piso} ${'-'} ${item.titulo_sala} `}
                      </Text>
                    </TouchableOpacity>
                    }
                  keyExtractor={(item, index) => index.toString()} 
              />
          </ImageBackground>
       </TouchableHighlight>
      </View>
    );
  }
}
//this.link(item.titulo_bloco)
const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});

const header = StyleSheet.create({
  
  header:{
    height:65,
    flexDirection: 'row',
  }
});