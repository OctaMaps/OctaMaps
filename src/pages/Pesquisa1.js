import React from 'react'
import { StyleSheet, Text, View, Image,ImageBackground,FlatList,TextInput,TouchableOpacity,TouchableHighlight  } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'
import data from '../dados/octa_maps.json'
import axios from 'axios'


export default class Pesquisa1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        volatileData: [], // Dados que podem/serão alterados
        fullData: [], // Dados recebidos da API
        loading: false, 
        error: false,
        query: "",
    }
  }

  componentDidMount(){ // Após todos os componentes estarem carregados
    setTimeout(() => {
      this.setState({ loading: true }) // Animação de carregamento rodando
      axios
      .get("http://octamaps.online/auth/jwt.php?sub=octaMapsAPP&name=admin") /// Url para conexão a API
      .then(response => {
        const { result } = response.data
        this.setState({
          volatileData: [],
          fullData: result,
          //loading: false, // Não está exibindo animação de carregamento
        })
      }).catch(error => {
        console.log(error) // Caso dê erro, exibir erro
        this.setState({
          error: true,
          loading: false, // Animação de Loading Finalizando
        })

      })
    }, 1500)
  }

  contains = ({ titulo_bloco, numero_piso, codigo_sala, titulo_sala }, query) =>{ // Função que faz a filtragem
    titulo_bloco = titulo_bloco.toLowerCase()
    titulo_sala = titulo_sala.toLowerCase()
    codigo_sala = codigo_sala.toLowerCase()
    numero_piso = numero_piso.toLowerCase()
    if (titulo_sala.includes(query)){
      return true
    }
  }
  
  search = (value) => { // Chamado toda vez que ocorrer alteração de algum caracter no textInput
    let newData = []
    this.setState({ 
      query: value.toLowerCase() 
    }, () => {
    if (this.state.query){
        console.log(this.state.query)
        this.state.fullData.forEach( (item) => {
          if (this.contains(item, this.state.query)){
              newData.push(item)
          }
          this.setState({ volatileData: newData})
        }) 
    }else{
        this.setState({ volatileData: [] })
    }})
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

               
            <Animatable.View animation="fadeIn" duration={5000}>  
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
            </Animatable.View>
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
