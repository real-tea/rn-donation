import React , { useState , useRef } from "react";
import { View , Text } from "react-native";   
import Style from "./style";
import PropTypes from "prop-types";
import { horizontalScale } from "../../assets/styles/scaling";

const Badge = (props) => {
    const [width , setWidth ] = useState(0)
    const textRef = useRef(null)
    const paddingHorizontal = 10;
    const tabWidth = {
        width : horizontalScale(paddingHorizontal * 2 + width)
    }
    return(
        <View 
            style={[Style.badge , tabWidth]}
            onPress = { props.onPress }
        >
            <Text
                onTextLayout={event => {
                    setWidth(event.nativeEvent.lines[0].width)
                }}
                ref = { textRef }
                style={[Style.title]}>
                    {props.title}
            </Text>
        </View>
    )
}

Badge.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Badge;