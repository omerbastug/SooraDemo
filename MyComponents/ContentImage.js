import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const ContentImage = (props) => {

    return (
        <View>
            <Image style={styles.landingImage} source={props.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    landingImage:{
        width: Dimensions.get("window").width *.9,
        height: Dimensions.get("window").width *1.025,
        maxWidth: 540,
        maxHeight: 615,
      },
})

export default ContentImage;
