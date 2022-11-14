import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const HeaderText = (props)=> {
    return (
        <View style={styles.h1v}>
            <Text style={styles.textstyle}>{props.text}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    textstyle: {
        fontFamily:"Inter-Regular",
        color: "#000",
        fontSize: Dimensions.get('window').width * .092 <56 ? Dimensions.get('window').width * .092: 55,
        lineHeight: Dimensions.get('window').width * .112 <67 ? Dimensions.get('window').width * .112: 67,
        fontWeight: "900",
        marginTop:8,
        marginBottom:24,
        textAlign:"center"
      },
      h1v: {
        display: "flex",
        marginHorizontal: "auto",
        textAlign: "center",
        lineHeight: 44,
        alignItems: "center",
      },
})

export default HeaderText;