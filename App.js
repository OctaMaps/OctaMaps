import React, { useState, useEffect } from 'react';
import AnimatedSplash from "react-native-animated-splash-screen";

import Routes from './src/routes';

import Logo from './src/images/Others/logo.png';

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
  }, []);

  return (
    <> 
      <AnimatedSplash
        translucent={true}
        isLoaded={loading}
        logoImage={Logo}
        backgroundColor={"#fff"}
        logoHeight={150}
        logoWidth={150}
      >
        <Routes/>
      </AnimatedSplash>
    </>
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