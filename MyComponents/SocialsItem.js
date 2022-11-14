import React from 'react';
import { Linking, View,Image, TouchableHighlight } from 'react-native';

 const SocialsItem = (props) =>{
     const circle = {
         width: 40,
         height: 40,
         borderRadius: 40,
         borderWidth: 1,
         borderStyle: "solid",
         borderColor: "#000",
         margin: 6,
         alignItems: "center",
         justifyContent: "center"
     };
     const logo = {
         width: 24,
         height: 24,
         resizeMode: "contain",
     };
    return (
        <TouchableHighlight onPress={()=>{
            Linking.openURL(props.link)
        }}>
            <View style={circle}>
                <Image style={logo} source={props.image}/>
            </View>
        </TouchableHighlight>
    );
}

export default SocialsItem;