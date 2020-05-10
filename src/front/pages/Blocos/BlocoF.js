import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import { Video } from "expo-av";

import Header from "../../../component/NewHeader";

import MapF from "../../../component/maps/MapF";
import Info from "../../../component/text/TF";
export default class BlocoF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoOn: false,
    };
  }

  UNSAFE_componentWillMount() {
    const { navigation } = this.props;
    //Quando o componente for pressionado, permita a exibição do video
    navigation.addListener("willFocus", () => {
      this.setState({ videoOn: true });
      console.log("Video Permetido.");
      console.log(this.state.videoOn);
    });
  }

  //Funçoes executadas no Video
  onError(err) {
    console.log("Error Happen: ", err);
  }

  onLoadStart() {
    console.log("Carregando Video.");
  }

  onLoad() {
    setTimeout(() => {
      console.log("Video Terminado");
      this.setState({ videoOn: false });
    }, 1300);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={
            this.state.videoOn
              ? require("../../images/Index.png")
              : require("../../images/BlocoF.png")
          }
          style={{ width: "100%", height: "100%" }}
        >
          {this.state.videoOn ? (
            <Video
              source={require("../../video/BlocoF.mp4")}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping={false}
              onError={(err) => this.onError(err)}
              onLoad={() => this.onLoad()}
              onLoadStart={() => this.onLoadStart()}
              style={{ width: "100%", height: "100%" }}
            />
          ) : null}
          <Header searchableOff />
          <MapF />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const header = StyleSheet.create({
  header: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
