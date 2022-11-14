import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const ComingSoon = ()=>{
    return (
    <View style={{flexDirection:"row"}}>
        <View style={{justifyContent:"center"}}>
            <View style={styles.line}></View>
        </View>
        <Text style={styles.comingSoon}> Coming Soon</Text>  
    </View>
    );
}
const styles = StyleSheet.create({
    line: {
        width:17,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
    ,
    comingSoon:{
      fontFamily:"Inter-Regular",
      fontStyle:'normal',
      fontWeight:"500",
      fontSize: Dimensions.get('window').width > 600 ? 18 : 12,
      lineHeight: 15,
      color:"#0B0B0B"
    },
})
export default ComingSoon;