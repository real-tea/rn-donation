import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";


const Style = StyleSheet.create({
    tab : {
        backgroundColor : '#2979f2',
        height : verticalScale(50),
        justifyContent : 'center',
        borderRadius : horizontalScale(50)
    },
    inactiveTab : {
        backgroundColor : '#F3F5F9',
    },
    inactiveTitle : {
        color : '#79869F'
    },
    title : {
        fontFamily  : 'Inter',
        fontSize : scaleFontSize(14),
        fontWeight : '500',
        lineHeight : scaleFontSize(17),
        color: '#FFFFFF',
        textAlign : 'center',
    }
})

export default Style;