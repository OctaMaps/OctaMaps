// Esse script retorna a comparação entre o dispositivo original e o dispositivo utilizado atualmente 
// para criar uma adatação visual mais realista.

import { Dimensions } from 'react-native';
import getOriginalSize from '../getOriginalSize/'

interface arrayType {
    width: number,
    height: number
}

let original = getOriginalSize;

function executeConversion() {
    let ex : arrayType = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    } 
    return [
        original[0]/ex.width, 
        original[1]/ex.height
    ]
}


export default executeConversion();
