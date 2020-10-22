import React, { useState, useEffect } from 'react';
import AnimatedSplash from "react-native-animated-splash-screen";
import { ActivityIndicator, View } from "react-native";

import Routes from './src/routes';

import Logo from './src/images/Others/logo.png';
import percentage from './src/utils/getPercentage';

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(
      () => setLoading(true), 
      2000
    );

  }, []);

  return (
    <View style={{ flex: 1 }}> 
      <AnimatedSplash
        translucent={true}
        isLoaded={loading}
        logoImage={Logo}
        backgroundColor={"#fff"}
        logoHeight={150}
        logoWidth={150}
      > 
        <>
          <Routes/>
        </>
      </AnimatedSplash>
      {!loading && 
        <View>
          <ActivityIndicator size={'large'} style={{ marginTop: -210/percentage[1] }}/>
        </View>
      }

    </View>
  );
}

/* Code example
<> 
      <AnimatedSplash
        translucent={true}
        isLoaded={false}
        logoImage={Logo}
        backgroundColor={"#fff"}
        logoHeight={150}
        logoWidth={150}
      >
        <Routes/>
      </AnimatedSplash>
    </>

*/