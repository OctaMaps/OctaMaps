import * as React from 'react';
import { Button, Linking } from 'react-native';
import InAppReview from 'react-native-in-app-review';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';

export default function Review(props) {
  const navigation = useNavigation();

    let tryLink = () => {
      try  {
        // Deve funcionar apos o app ser upado na playstore
        InAppReview.RequestInAppReview();
      }
      catch(e) {
          Linking.openURL('https://play.google.com/store/apps/details?id=projeto.ifmt')
      }
    }

    return (
      <>
        <Header 
          leftIcon={'menu'} 
          leftPress={() => navigation.openDrawer()}
          rightDisable />
        <Button 
            style={{ 
            marginTop: 300
            }} 
            title={"Teste de linkagem"} 
            onPress={() => tryLink()} />
      </>
    );
}