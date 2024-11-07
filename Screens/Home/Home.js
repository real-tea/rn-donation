import React from "react";
import Style from "./style";
import { SafeAreaView, Text, View } from "react-native";    
import globalStyle from "../../assets/styles/globalStyle";

const Home = () => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite , globalStyle.flex]}>
            <Text>This is the Home Page</Text>
        </SafeAreaView>
    )
}

export default Home;