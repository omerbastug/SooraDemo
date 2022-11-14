import React from "react";
import { View, Text, Dimensions } from "react-native";

const FooterCopyright = () => {
    return (
    <View style={{
        borderTopWidth: 1,
        borderTopColor: "rgba(30, 30, 30, 0.8)",
        width: Dimensions.get("window").width,
        alignItems:"center"
      }}>
        <Text style={{
          paddingVertical: 18,
          fontFamily: "Inter-Regular",
          fontWeight: "400",
          fontSize: 12,
          lineHeight: 15
        }}>
          Copyright © 2022 Soora. All rights reserved
        </Text>
    </View>);
}

export default FooterCopyright;