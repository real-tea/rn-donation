import { StyleSheet } from "react-native";
import { scaleFontSize } from "../../assets/styles/scaling";

const Style = StyleSheet.create({
    title1:{
        fontFamily: 'Inter',
        fontWeight : 700,
        fontSize : scaleFontSize(24),
        lineHeight : scaleFontSize(29)
    },
    title2:{
        fontFamily: 'Inter',
        fontWeight : 700,
        fontSize : scaleFontSize(18),
        lineHeight : scaleFontSize(22)
    },
    title3:{
        fontFamily: 'Inter',
        fontWeight : 700,
        fontSize : scaleFontSize(16),
        lineHeight : scaleFontSize(29)
    }
})

export default Style;