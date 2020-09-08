import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';


export default function App() {
  let themesLayout = [
    {
      id: 0,
      textDark: 'black',
      textLight: "white",
      primaryBackground: "blue",
      secondaryBackground: "cyan",
    },
    {
      id: 1,
      textDark: 'white',
      textLight: "black",
      primaryBackground: "red",
      secondaryBackground: "orange",
    }
  ]

  const [theme, setTheme] = useState(themesLayout[0]);

  let changeTheme = (id) => {
    if(theme.length <= id) {
      setTheme(themesLayout[id])
    }
    else {
      throw new console.error('Id not exist in themeLayout');
    }
  }

  return (
    <> 
      <Routes/>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
