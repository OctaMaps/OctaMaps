import * as React from 'react';
import { Button, View, useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer , DefaultTheme, DarkTheme } from '@react-navigation/native';
import CustomDrawerContent from './components/customDrawerContent';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import Floor from './screens/floor';
import Main from './screens/main';
import About from './screens/about';
import Review from './screens/review';
import Contact from './screens/contact';

const Drawer = createDrawerNavigator();

export default function App(props) {
    const dimensions = useWindowDimensions();
    const dev = false;
    const scheme = useColorScheme();
    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: '#0fadad',
          inactiveTintColor: 'rgb(28, 28, 30)',
          lightText: '#fcffff',
          primaryDarker: '#0f9df9',
          coloredText: '#353331'
        },
    };
      
    let CreateRoutes = routes => {
        let objRendered = [];
        for (let i = 0; i < routes.length; i++)
            objRendered = [
                ...objRendered,
                <Drawer.Screen key={i} name={routes[i].routeName} component={routes[i].page} />
            ]

        return objRendered
    }

    let routesConfig = [
        {
            page: Main,
            routeName: 'Home',
        },
        {
            page: Floor,
            routeName: 'Floor'
        },
        {
            page: About,
            routeName: 'About'
        },  
        {
            page: Review,
            routeName: 'Review'
        },
        {
            page: Contact,
            routeName: 'Contact'
        }
    ]

    return (
        <NavigationContainer theme={MyTheme} >
            <Drawer.Navigator       
                drawerType={!dev ? dimensions.width >= 768 ? 'permanent' : 'front' : 'permanent'}
                initialRouteName="Home"
                drawerContent={
                    (props) => <CustomDrawerContent {...props} />
                }>   
                {CreateRoutes(routesConfig)}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}