// parte visual
import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Text,TextInput,TouchableOpacity,FlatList, TouchableHighlight,ImageBackground,ActivityIndicator } from 'react-native';
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

        showMe:true // carregando

    }
  }

  //parte logica
  async componentDidMount(){
    response = await database.migration()
    updateVersionID = await database.getUpdateVersionID()
    response = await database.checkUpdate(updateVersionID)
    this.setState({ fullData: await database.getData() })
  }


  search(query){
    this.setState({ volatileData: filter(query, this.state.fullData)})
  }

  // apenas funcao para textar 
  log(){
    console.log(this.state.text)
    console.log("")
    console.log(" oi")
  }



  componentWillMount(){
    setTimeout(()=>{
      this.setState({
        showMe:false
      })
    },
    2000)
  }

  renderCodition(){
      switch(this.state.pressed){
      case '0':
        return(
          <Animatable.View style={header.header}ref={this.handleViewRef}>
              <Icon.Button backgroundColor={'transparent'}color={'#b5b5b5'}size={35} style ={header.icon}name={this.props.icon ? "menu" : "arrow-left"} onPress={this.props.icon  ? () => this.props.navigation.openDrawer() : () => this.props.navigation.goBack() }/>
              <Icon.Button backgroundColor={'transparent'}
                  color={'#b5b5b5'}size={30} style ={header.icon}
                  name="search" onPress={this.balanco}/>
         </Animatable.View>
        )
      case '1':
        return(
             <Animatable.View style={header.headerActive} ref={this.handleViewRef}>
                <View >
                  <Icon.Button backgroundColor={'transparent'}
                      color={'#b5b5b5'}size={30} style ={header.iconActive}
                      name="search" onPress={this.case2}/>
                </View>    
                     <TextInput onChangeText={ value => this.search(value) }placeholder="Pesquisa" style={{ fontSize: 24, marginLeft: 15, flex: 1}} />
 
             </Animatable.View>

        )
        
   }
  }

 
  //executar as funçoes do caso '1' da pressed, que agora faz pesquisa
  

  // executa o codigo da animacao e transiçao do pressed 0 para o 1
  handleViewRef = ref => this.view = ref;
  balanco = () =>{
    //APOS 1000ms o conteudo do timeout é executado
    this.setState({pressed: '1'})


    this.view.lightSpeedIn(2000)//.then(endState => endState.finished ? this.case2 : null);
   }



  render() {
    //existe um text inutil ali pois o return precisa obrigatoriamente um componente ao menos.
    return (
      <View>      
        
 
                {this.renderCodition()}

              { 
                 this.state.pressed == "1" ?
                            
                              <TouchableHighlight style={{backgroundColor:'rgba(255, 255, 255, 0.8)'}}onPress={() => this.setState({pressed:'0'})}> 
                                <View style={{width: '100%', height: '100%'}}>    
                                  <Animatable.View animation="fadeIn" duration={5000}>  
                                    <FlatList
                                        style={{ backgroundColor: 'white' }}
                                        data={this.state.volatileData}
                                        renderItem={({ item}) => 
                                          <TouchableOpacity onPress={ this._onPressButton } style={header.touchableTouch }> 
                                            <Icon.Button backgroundColor={'transparent'}
                                                         color={'#b5b5b5'}size={25} style ={header.iconTouch}
                                                         name="tag" onPress={this.case2}/>

                                            <Text style={header.textTouch}>
                                              { `${item.titulo_bloco}  ${'-'} ${'Piso '+item.numero_piso} ${'-'} ${item.titulo_sala} `}
                                            </Text>
                                          </TouchableOpacity>
                                          }
                                        keyExtractor={(item, index) => index.toString()} 
                                    />
                                  </Animatable.View>
                                </View>
                             </TouchableHighlight>
                        : null
                }
        


        
    </View> 

         
    );
  }
}


 export default withNavigationFocus(NewHeader);


const header = StyleSheet.create({
  
  header:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  headerActive:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation:1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
  },
  icon:{
    
  },
  iconActive:{
    marginLeft: "4%"
  },
  touch:{
    padding: 10,                     
    marginTop: 2,
    backgroundColor: '#ddd',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 5,
  },
  text:{ 
    padding: 10, 
    fontSize: 20, 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: "#ccc"
  },
  textTouch:{ 
    padding: 15, 
    fontSize: 15,
    paddingLeft: 0
  },
  iconTouch:{
    marginLeft: "6%",
  },
  touchableTouch:{
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'

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