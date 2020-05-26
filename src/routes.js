import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from './component/CustomDrawerContent'

// Importando Telas
import Main from './screens/Home'
import About from './screens/About'

// Configurações de rotas
let routesConfig = [
    {
        page: Main,
        routeName: 'Home',
    },
    {
        page: About,
        routeName: 'About'
    }
]

// Cria todas as rotas apartir da variavel routesConfig
let CreateRoutes = routes => {
    let objRendered = [];
    for (let i = 0; i < routes.length; i++)
        objRendered = [
            ...objRendered,
            <Drawer.Screen key={i} name={routes[i].routeName} component={routes[i].page} />
        ]

    return objRendered
}

const Drawer = createDrawerNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={
                    (props, navigation) => <CustomDrawerContent navigation={navigation} {...props} />
                }
                initialRouteName="Home">
                {CreateRoutes(routesConfig)}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}