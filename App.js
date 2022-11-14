import { StatusBar } from 'expo-status-bar';
import { Linking, TextInput ,FlatList ,ScrollView, Button, SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableHighlight, Image, Platform, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import SocialsItem from './MyComponents/SocialsItem.js';
import ContentHeader from './MyComponents/ContentHeader.js';
import ContentImage from './MyComponents/ContentImage.js';
import FooterCopyright from './MyComponents/FooterCopyright.js';
export default  function App() {
  
  const [loaded] = useFonts({
    Inter: require('./assets/fonts/Inter-Regular.ttf'),
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  });
  const [visible, SetVisible] = useState("none");
  return (
      <SafeAreaView style={styles.container}>
      <ScrollView centerContent
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}  
                  style={{width:Dimensions.get("screen").width, margin: 0,padding: 0}}>
      <View style={{alignItems:"center",}}>

        {/* Header */}
        <View style={styles.headerContent}>
          <View style={{justifyContent:"center"}}>
            <Image  style={styles.logo}  
                    source={require("./assets/images/logo.png")}/>
          </View>

          {/*Contact us Button */}
          <TouchableHighlight onPress={()=>{
            console.log("contacting you");
            console.log(Dimensions.get("window").width,Dimensions.get("window").height);
          }}>
            <View style={styles.button}>
              <View style={{flexDirection:"row",}}>
                <Text style={styles.contactText}>Contact us</Text>
                <View style={{justifyContent:"center",paddingRight:14}}>
                  <Image style={styles.contactIcon} source={require('./assets/images/contact-icon.png')}></Image>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>

          {/* MAIN CONTENTS */}
        <View style={styles.content}>

          <ContentHeader text={"Bringing\n Muslims Together"}/>
          
          {/* DOWNLOAD LINKS */}
          <View style={styles.downloadHooks}>
            <TouchableHighlight onPress={()=>{
              Linking.openURL("https://www.sooratheapp.com/")
            }}>
              <Image style={styles.downloadImage} source={require("./assets/images/google-play.png")}></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>{
              Linking.openURL("https://www.sooratheapp.com/")
            }}>
              <Image style={styles.downloadImage} source={require("./assets/images/apple-store.png")}></Image>
            </TouchableHighlight>
          </View>
          
          {/* MAIN IMAGE */}
          <ContentImage image={require("./assets/images/landing-image-2.png")}/>
          
        </View>

        {/* SECOND CONTENT */}
        <View style={[styles.content,{marginBottom:120}]}>

          <ContentHeader text={"Get Notified\n When we Launch"}/>


            {/* input field */}
          <View style={styles.newsletterText}>
            <TextInput style={{width:"60%",marginHorizontal:16}}>
            </TextInput>

            <View style={{justifyContent:"center",marginHorizontal:2.3}}>
              <Pressable onPress={()=>{
                SetVisible("flex")
              }}>
              <View style={styles.notifyMe}>
                <Text style={{
                  fontFamily: "Inter",
                  fontWeight:"600",
                  fontSize:12,
                  color: "white",
                }}>Notify Me</Text>
              </View></Pressable>
            </View>

          </View>
          <Text 
          style={{
            display:visible,
            marginTop: 8,
            marginBottom: -4,
            fontSize:12,
            fontWeight:"600",
            color: "#3B5998"
          }}>
            Your email address has been recieved.
          </Text>
           {/* subtext */}
          <Text 
          style={{
            fontSize:12,
            fontFamily:"Inter",
            fontWeight:"400",
            marginTop:8,
            marginBottom: 20,
          }}>
            Don't worry, we won't spam you :{")"}
          </Text>

          <ContentImage image={require("./assets/images/landing-image-1.png")}/>

        </View>
        
        {/* SOCIALS */}
        <View style={{
          flexDirection:"row",
          margin: 10
        }}>
          <SocialsItem link={"https://www.facebook.com/profile.php?id=100086249187059"}
                  image={require("./assets/images/facebook.png")}
          />
          <SocialsItem link={"https://twitter.com/SooraTheApp"}
                  image={require("./assets/images/twitter.png")}
          />
          <SocialsItem link={"https://www.sooratheapp.com/"}
                  image={require("./assets/images/instagram.png")}
          />
          <SocialsItem link={"https://www.sooratheapp.com/"}
                  image={require("./assets/images/tiktok.png")}
          />
          <SocialsItem link={"https://www.youtube.com/channel/UCS2_jKjdg5KTLo-1zFXDO8A"}
                  image={require("./assets/images/youtube.png")}
          />
        </View>


        {/* COPYRIGHT */}
        <FooterCopyright/>

        </View>

        <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#linear-gradient(0deg, rgba(59, 89, 152, 0.1), rgba(59, 89, 152, 0.1)), rgba(255, 0, 0, 0.05);',
    alignItems: 'center',
  },
  headerContent:{
    marginVertical: 25,
    width: "90%",
    marginTop: 40,// 
    marginHorizontal: "5%",
    flexDirection:"row",
    justifyContent:"space-between",
  }
  ,
  logo: {
    width: Dimensions.get('window').width * .19, 
    height: Dimensions.get('window').width * .04,
    minWidth:74, 
    minHeight:15, 
    maxWidth:120, 
    maxHeight: 25,
    resizeMode:"contain"
  },
  button:{
    backgroundColor: "#000",
    borderRadius: 4,
    justifyContent:"center"
  },
  contactText:{
    color:"white",
    fontWeight: "700",
    fontSize: 12,
    paddingVertical: 10,
    paddingLeft: 14,
    paddingRight: 7,
  },
  contactIcon:{
    width:8,
    height:8,
  }
  ,
  content: {
    width: "90%",
    marginHorizontal: "auto",
    marginVertical: 25,
    alignItems: "center"
  }
  ,
  downloadHooks:{
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal: 30,
    marginBottom: 30,
  },
  downloadImage:{
    width: Dimensions.get('window').width * .343,
    height:  Dimensions.get('window').width * .10,
    maxWidth: 205,
    maxHeight: 60,
    resizeMode:"contain"
  },
  newsletterText: {
    width: Dimensions.get("window").width * .9,
    maxWidth: 600,
    height: 45,
    marginHorizontal: "auto",
    borderRadius: 100,
    borderWidth: 0.8,
    borderColor: "#000",
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  notifyMe:{
    backgroundColor: "black",
    borderRadius: 100,
    borderWidth: .8,
    borderColor: "#000",
    borderStyle:"solid",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:10,
    paddingHorizontal:17.5
  }
});