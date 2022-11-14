import React from "react";
import { View } from "react-native";
import ComingSoon from "./ContentHeaderComingSoon.js";
import HeaderText from "./ContentHeaderText.js";
const ContentHeader = (props) =>{
    return (
        <View style={{
            alignItems: "center"
        }}>
        <ComingSoon/>

        <HeaderText text={props.text} />
        </View>   
    );
}

export default ContentHeader;

