import * as React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import theme from '../../colors'

function IconMenu(props) {
    let { primary, darkmode } = theme;
    let { name, onPress, size, color } = props;

    return (
        <>
            <Icon
                color={color || primary.headerText}
                name={name || 'home'}
                onPress={() => onPress() || console.log('Sem parametro.')}
                size={size || 35} />
        </>

    );
}


export default IconMenu