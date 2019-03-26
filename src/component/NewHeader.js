// parte visual
import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Text,TextInput,TouchableOpacity,FlatList, TouchableHighlight,ImageBackground } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable'

// importando banco de dados e conexoes
import Database from '../services/Database'
import filter from '../utils/filter'

const database = new Database("OctaMaps")


// O que é pra ser feito agora, fazer transcrição do codigo pesquisa para aqui e criar um "pop up" indepedente da sceen

class NewHeader extends React.Component {
  constructor(props){
    super(props)
     this.state = {   // parte visual
        pressed:'0', //0 = mostrar botao menu e pesquisa 1 == mostrar apenas pesquisa agora realizando animacao
                     // pressed = indentificador de estado da pagina
                     // if pressed == false, { o render vai gerar o menu header normal}
                     // if pressed == true. { o render vai tirar o menu header, executar a animação e apos isso pressed passa a ser false e a tela é alterada para pesquisa.}
        listOn: false,

                    //parte logica
        volatileData: [], // Dados que fornecerão quais itens a lista deve mostrar
        fullData: [], // Dados recebidos, sem alteração
        loading: false,
        error: false,

    }
  }
  //parte logica
  async componentDidMount(){
    database.migration()
    this.setState({ fullData: await database.getData() })
  }
  search(query){
    this.setState({ 
      volatileData: filter(query, this.state.fullData),
    })
  }

  // apenas funcao para textar 
  log(){
    console.log(this.state.text)
    console.log("")
    console.log(" oi")
  }

  renderCodition(){
      console.log("Entrando no switch..")
      switch(this.state.pressed){
      case '0':
        console.log("Caiu no 0");
        return(
          <Animatable.View style={header.header}ref={this.handleViewRef}>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={35} style ={header.icon}name={this.props.icon ? "arrow-left" : "menu"} onPress={this.props.icon ? () => this.props.navigation.openDrawer() : () => this.props.navigation.openDrawer() }/>
              <Icon.Button backgroundColor={'transparent'}
                  color={'#b5b5b5'}size={30} style ={header.icon}
                  name="search" onPress={this.balanco}/>
         </Animatable.View>
        )
      case '1':
        console.log("Caiu no 1");
        return(
             <Animatable.View style={header.header} ref={this.handleViewRef}>
                <View >
                  <Icon.Button backgroundColor={'transparent'}
                      color={'#b5b5b5'}size={30} style ={header.icon}
                      name="search" onPress={this.case2}/>
                </View>     
                     <TextInput onChangeText={ value => this.search(value) }placeholder="Pesquisa" style={{ fontSize: 24, marginLeft: 15, flex: 1 }} />
 
             </Animatable.View>

        )
        
   }
  }

  //executar as funçoes do codigo balanco
  case1(){
    setTimeout(()=>{
      //this.setState({pressed:'0'})
    },
    5000)
  }

  //executar as funçoes do caso '1' da pressed, que agora faz pesquisa
  case2(){
  }

  // executa o codigo da animacao e transiçao do pressed 0 para o 1
  handleViewRef = ref => this.view = ref;
  balanco = () =>{
    //APOS 1000ms o conteudo do timeout é executado
    this.setState({pressed: '1'})

    this.view.lightSpeedIn(800)
      .then(endState =>
             endState.finished ? this.case1() : null);
   }

  render() {
    //existe um text inutil ali pois o return precisa obrigatoriamente um componente ao menos.
    return (
      <View>            
        {this.renderCodition()}


        <FlatList
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.00)' }}
                  data={this.state.volatileData}
                  renderItem={({ item}) => 

                              <TouchableOpacity Style={{
                                                    padding: 10,
                                                    marginTop: 2,
                                                    backgroundColor: '#ddd',
                                                    borderColor: '#bbb',
                                                    borderWidth: 1,
                                                    borderRadius: 5,
                                                }} 

                                                onPress={ this._onPressButton }> 
                                <Text style={{ padding: 10, fontSize: 20, borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          color: "#ccc"
 }}>
                                  { `${item.titulo_bloco}  ${'-'} ${'Piso '+item.numero_piso} ${'-'} ${item.titulo_sala} `}
                                </Text>
                              </TouchableOpacity>

                    }
                  keyExtractor={(item, index) => index.toString()} 
                  keyboardShouldPersistTaps="always"

              />


       
        <Text>
        </Text> 
        </View>        
    );
  }
}


 export default withNavigationFocus(NewHeader);


const header = StyleSheet.create({
  
  header:{
    height:65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  icon:{
    
  }
});




/*

const  IconSearch = (props) => {
   handleViewRef = ref => this.view = ref;
   balanco = () =>{
    //APOS 1000ms o conteudo do timeout é executado
    setTimeout(()=>{
      console.log("Mudei de tela..")
      this.props.navigation.goBack()
      console.log("TROCA REALIZADA")
    },
    800)       
    this.view.bounceInLeft(800);
   }
   
  return(
    <View>
      <Animatable.View ref={this.handleViewRef}>
        <Icon.Button backgroundColor={'transparent'}
            color={'#b5b5b5'}size={35} style ={header.icon}
            name="arrow-left" onPress={this.balanco}/>
      </Animatable.View>
    </View>
  )

}


*/