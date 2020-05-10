import React from "react";
import { View, Linking } from "react-native";
import AppLink from "react-native-app-link";

var url = "https://play.google.com/store/apps/details?id=projeto.ifmt";
var appName = "Octa.Maps";
var appStoreId = "0";
var appStoreLocale = "us";
var playStoreId = "projeto.ifmt";

export default class Avalie extends React.Component {
  voltar = () => {
    this.props.navigation.goBack();
  };

  UNSAFE_componentDidMount() {
    AppLink.maybeOpenURL(url, {
      appName,
      appStoreId,
      appStoreLocale,
      playStoreId,
    })
      .then(() => {
        // do stuff
      })
      .catch((err) => {
        //tratamento de erro
      });

    AppLink.openInStore({ appName, appStoreId, appStoreLocale, playStoreId })
      .then(() => {})
      .catch((err) => {
        //tratamento de erro
      });
  }

  render() {
    return <View></View>;
  }
}
