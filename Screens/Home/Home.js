import React from "react";
import Style from "./style";
import { SafeAreaView, Text, View } from "react-native";    
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";


const Home = () => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite , globalStyle.flex]}>
            <Header title={"Akash Singh"} type={1}/>
            <Button title={"Donate"} />
        </SafeAreaView>
    )
}

export default Home;