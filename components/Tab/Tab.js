import React , { useState , useRef } from "react";
import { Pressable , Text } from "react-native";   
import Style from "./style";
import PropTypes from "prop-types";
import { horizontalScale } from "../../assets/styles/scaling";

const Tab = (props) => {
    const [width , setWidth ] = useState(0)
    const textRef = useRef(null)
    const paddingHorizontal = 33;
    const tabWidth = {
        width : horizontalScale(paddingHorizontal * 2 + width)
    }
    return(
        <Pressable 
            disabled = { props.isInactive } 
            style={[Style.tab , props.isInactive && Style.inactiveTab , tabWidth]}
            onPress = { props.onPress }
        >
            <Text
                onTextLayout={event => {
                    setWidth(event.nativeEvent.lines[0].width)
                }}
                ref = { textRef }
                style={[Style.title , props.isInactive && Style.inactiveTitle]}>
                    {props.title}
            </Text>
        </Pressable>
    )
}
Tab.default = {
    isInactive : false,
    onPress : () => {}
}

Tab.propTypes = {
    title : PropTypes.string.isRequired,
    isInactive : PropTypes.bool,
    onPress : PropTypes.func
}

export default Tab;