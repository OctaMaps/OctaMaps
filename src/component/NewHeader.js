// parte visual
import React from "react"
import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	TouchableHighlight,
	ImageBackground,
	ActivityIndicator,
	Alert
} from "react-native"
import { withNavigationFocus, NavigationActions } from "react-navigation"
import Icon from "react-native-vector-icons/Feather"
import * as Animatable from "react-native-animatable"
let nave = 0
// importando banco de dados e conexoes
const Database = require("../services/Database")
import filter from "../utils/filter"
const database = Database()

// nova implementaçao de alert 03/05/19

// O que é pra ser feito agora, fazer transcrição do codigo pesquisa para aqui e criar um "pop up" indepedente da sceen

class NewHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// parte visual
			pressed: "0", //0 = mostrar botao menu e pesquisa 1 == mostrar apenas pesquisa agora realizando animacao
			// pressed = indentificador de estado da pagina
			// if pressed == false, { o render vai gerar o menu header normal}
			// if pressed == true. { o render vai tirar o menu header, executar a animação e apos isso pressed passa a ser false e a tela é alterada para pesquisa.}
			listOn: false,
			//parte logica
			volatileData: [], // Dados que fornecerão quais itens a lista deve mostrar
			fullData: [], // Dados recebidos, sem alteração
			loading: false,
			error: false,
			screenBack: ""
		}
	}

	//parte logica
	async componentDidMount() {
		try {
			await database.migration()
			await database.checkUpdate()
			const fullData = await database.getAllDocs()
			this.setState({ fullData })
			console.log(this.state.fullData)
		} catch (error) {
			this.setState({ error: true })
		}
	}

	search(query) {
		this.setState({ volatileData: filter(query, this.state.fullData) })
	}

	goTrue() {
		console.log(
			"Header esta dizendo que voce esta na tela:",
			this.props.navigation.state.routeName
		)
		var screenNow = this.props.navigation.state.routeName
		if (screenNow.includes("BlocoA")) {
			console.log("Tela anterior é A")
			nave = "Bloco A"
		} else if (screenNow.includes("BlocoB")) {
			console.log("Tela anterior é BlocoB")
			nave = "Bloco B"
		} else if (screenNow.includes("BlocoC")) {
			console.log("Tela anterior é BlocoC")
			nave = "Bloco C"
		} else if (screenNow.includes("BlocoD")) {
			console.log("Tela anterior é BlocoD")
			nave = "Bloco D"
		} else if (screenNow.includes("BlocoE")) {
			console.log("Tela anterior é BlocoE")
			nave = "Bloco E"
		} else if (screenNow.includes("BlocoF")) {
			console.log("Tela anterior BlocoF")
			nave = "Bloco F"
		} else {
			console.log("Go back Original")
			nave = "Home"
		}
		console.log("nave é ", nave)
		this.props.navigation.navigate(nave)
	}

	renderCodition() {
		switch (this.state.pressed) {
			case "0":
				return (
					<Animatable.View style={header.header} ref={this.handleViewRef}>
						<Icon.Button
							backgroundColor={"transparent"}
							color={"#dee9fc"}
							size={35}
							style={header.icon}
							name={this.props.iconHamburguer ? "menu" : "arrow-left"}
							onPress={
								this.props.iconHamburguer
									? () => this.props.navigation.openDrawer()
									: () => this.goTrue()
							}
						/>

						{this.props.searchableOff ? null : (
							<Icon.Button
								backgroundColor={"transparent"}
								color={"#dee9fc"}
								size={30}
								style={header.icon}
								name="search"
								onPress={this.balanco}
							/>
						)}
					</Animatable.View>
				)
			case "1":
				return (
					<Animatable.View style={header.headerActive} ref={this.handleViewRef}>
						<View>
							<Icon.Button
								backgroundColor={"transparent"}
								color={"#cccc"}
								size={30}
								style={header.iconActive}
								name="arrow-left"
								onPress={this.searchOff}
							/>
						</View>
						<TextInput
							onChangeText={value => this.search(value)}
							placeholder="Pesquisa"
							style={{ fontSize: 24, marginLeft: 15, flex: 1 }}
						/>
					</Animatable.View>
				)
		}
	}

	//executar as funçoes do caso '1' da pressed, que agora faz pesquisa

	// executa o codigo da animacao e transiçao do pressed 0 para o 1
	handleViewRef = ref => (this.view = ref)
	// Ativar Pesquisa e animacao
	balanco = () => {
		//APOS 1000ms o conteudo do timeout é executado
		this.setState({ pressed: "1" })

		this.view.lightSpeedIn(1000) //.then(endState => endState.finished ? this.case2 : null);
	}

	searchOff = () => {
		this.setState({ pressed: "0" })
	}

	alertaSimples = term => {
		//function to make two option alert
		let text = "Transição Para " + term
		Alert.alert(
			//title
			text,
			//body
			// falta deixar mais bonito
			"Deseja ser redirecionado à tela correspondente?",
			[
				{ text: "Sim", onPress: () => this.props.navigation.navigate(term) },
				{
					text: "Não",
					onPress: () => console.log("No Pressed"),
					style: "cancel"
				}
			],
			{ cancelable: false }
			//clicking out side of alert will not cancel
		)
	}

	render() {
		//existe um text inutil ali pois o return precisa obrigatoriamente um componente ao menos.
		return (
			<View>
				{this.renderCodition()}

				{this.state.pressed == "1" ? (
					<TouchableHighlight
						style={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}
						onPress={() => this.setState({ pressed: "0" })}
					>
						<View style={{ width: "100%", height: "100%" }}>
							<Animatable.View animation="fadeIn" duration={5000}>
								<FlatList
									style={{ backgroundColor: "white", marginLeft: "10%" }}
									data={this.state.volatileData}
									renderItem={({ item }) => (
										<TouchableOpacity
											onPress={value => this.alertaSimples(item.titulo_bloco)}
											style={header.touchableTouch}
										>
											<Text style={header.textTouch}>
												{`${item.titulo_bloco}  ${"-"} ${"Piso " +
													item.numero_piso} ${"-"} ${item.titulo_sala} `}
											</Text>
										</TouchableOpacity>
									)}
									keyExtractor={(item, index) => index.toString()}
								/>
							</Animatable.View>
						</View>
					</TouchableHighlight>
				) : null}
			</View>
		)
	}
}

export default withNavigationFocus(NewHeader)

const header = StyleSheet.create({
	header: {
		height: 50,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "transparent"
	},
	headerActive: {
		height: 50,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "white",
		elevation: 1,
		borderBottomColor: "#ccc",
		borderBottomWidth: 2
	},
	icon: {},
	iconActive: {
		marginLeft: "4%"
	},
	touch: {
		padding: 10,
		marginTop: 2,
		backgroundColor: "#ddd",
		borderColor: "#bbb",
		borderWidth: 1,
		borderRadius: 5
	},
	text: {
		padding: 10,
		fontSize: 20,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		color: "#ccc"
	},
	textTouch: {
		padding: 15,
		fontSize: 15,
		paddingLeft: 0
	},
	iconTouch: {
		marginLeft: "6%"
	},
	touchableTouch: {
		flexDirection: "row",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#fff"
	}
})

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

/*
  //function to make two option alert
    Alert.alert(
      //title
      term,
      //body
      'Deseja ser redirecionado à tela correspondente?',
      [
        {text: 'Sim', onPress: () => console.log('Yes Pressed')},
        {text: 'Não', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );

  */
