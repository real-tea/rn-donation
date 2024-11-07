import React from "react";
import Style from "./style";
import { SafeAreaView, Text, View } from "react-native";    
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite , globalStyle.flex]}>
            <Header title={"Akash Singh"} type={1}/>
        </SafeAreaView>
    )
}

export default Home;