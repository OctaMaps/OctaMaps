
import * as React from 'react';
import { Button, View, ActivityIndicator } from 'react-native';
import { Header, Image } from 'react-native-elements'
import IconMenu from '../../component/IconMenu'
import theme from '../../colors'

import { Svg, Polygon, Polyline } from 'react-native-svg'

function HomeScreen({ navigation }) {
    let { primary, darkmode } = theme;



    return (
        <>


            <Image source={require('../../images/Geral.png')}
                style={{ width: '100%', height: '100%', borderRadius: 0 }}
                PlaceholderContent={<ActivityIndicator />} >
                <Header
                    leftComponent={() =>
                        <IconMenu name={'menu'} onPress={() => navigation.openDrawer()} />
                    }
                    rightComponent={() =>
                        <IconMenu name={'search'} onPress={() => console.log('Fazer pesquisa')} />
                    }
                    containerStyle={{
                        backgroundColor: primary.headerBackground,
                        marginTop: '-5%',
                        borderBottomColor: 'transparent'
                    }}
                />
                <Svg width="100%" height="100%">
                    <Polygon
                        points="100, 750 300, 100 400, 0 300, 1"
                        fill="red"
                        stroke="white"
                        strokeWidth="10"
                    />
                </Svg>
            </Image>


        </>

    );
}
/*
866 159,
754 578,
639 566,
566 778,
575 860,
599 857,
622 814,
678 816,
681 834,
447 1723,
496 1801,
613 1828,
608 1763,
925 400,
1068 410,
1078 260,
1070 254,
1070 241,
1016 238,
955 244,
956 156,

 */
export default HomeScreen

/*

<Image source={require('../../images/Geral.png')}
                style={{ width: '100%', height: '100%', borderRadius: 0 }}
                PlaceholderContent={<ActivityIndicator />} >
                <Header
                    leftComponent={() =>
                        <IconMenu name={'menu'} onPress={() => navigation.openDrawer()} />
                    }
                    rightComponent={() =>
                        <IconMenu name={'search'} onPress={() => console.log('Fazer pesquisa')} />
                    }
                    containerStyle={{
                        backgroundColor: primary.headerBackground,
                        marginTop: '-5%',
                        borderBottomColor: 'transparent'
                    }}
                />

            </Image>

*/
