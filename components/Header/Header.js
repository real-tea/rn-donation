import React from 'react';
import { View , Text } from 'react-native';
import PropTypes from 'prop-types';
import Style from './style';
const Header = props => {
    const styleToApply = () => {
        switch(props.type){
            case 1:
                return Style.title1
            case 2:
                return Style.title2
            case 3:
                return Style.title3
            default:
                return Style.title1
        }
    }

    return (
        <View>
           <Text style={styleToApply()}>{props.title} </Text>
        </View>
    );
}
Header.default = {
    title : 'Akash',
    type : 1,
}
Header.PropTypes={
    title : PropTypes.string,
    type : PropTypes.number,
}
export default Header;