import React from "react";
import Style from "./style";
import { SafeAreaView, Text, View } from "react-native";    
import globalStyle from "../../assets/styles/globalStyle";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import { horizontalScale } from "../../assets/styles/scaling";
import Badge from "../../components/Badge/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "../../components/Search/Search";


const Home = () => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite , globalStyle.flex]}>
            <Search/>
        </SafeAreaView>
    )
}

export default Home; 