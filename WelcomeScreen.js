import React, {useContext} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import {sContext} from "./datacont.js"
const WelcomeScreen=({navigation}) =>{
  const { datw,addData} = useContext(sContext);
  const funct = async()=>{
    try{
      let result = await DocumentPicker.getDocumentAsync({});
      alert("Uploaded "+result.assets[0].name);
      file = result.assets[0]
      const formD = new FormData();
      formD.append('file', {
        uri:file.uri,
        type: file.mimeType,
        name: file.name
      });
      const response = await fetch('http://127.0.0.1:5000/upload',{
        method:'POST',
        body: formD,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const data = await response.json();
      addData(data);
      alert("Ready");
    }catch(err){
      alert("Error:\n"+err);
    }
  }
  return (
    <ImageBackground style =  {styles.background}
    source = {require('./assets/forest_background_bigger.png')}>
        <Image
        style = {styles.logo}
        source = {require('./assets/knowlege_quest_cloud.png')}>
        </Image>
        <Image
        style = {styles.img}
        source = {require('./assets/final_sprites/pixil-frame-0.png')}></Image>
        <TouchableOpacity onPress ={funct}>
          <View style = {styles.upload}>
              <Image source = {require('./assets/button.png')}
                  style = {styles.upload}></Image>
              <Text style = {styles.uptext}>Upload</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress ={()=>{
          if (datw == null){
            alert("Upload a file");
          }
          else{
            navigation.navigate("question") }
        }
          
          
         }>
          <View style = {styles.start}>
              <Image source = {require('./assets/button.png')}
              style = {styles.start}></Image>
              <Text style = {styles.text}>Begin</Text>

          </View>
        </TouchableOpacity>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
  },
  img:{
    width:200,
    height:200,
    position:"absolute",
    top:500
  },
  logo: {
    width:350,
    height: 350,
    position:"absolute",
    top:70,

  },
  start: {
    width: 150,
    height: 100,
    top:-10
  },
  text:{
    color:'red',
    fontSize:40,
    position:"absolute",
    top:0,
    left:30
  },
  uptext:{
    color:'red',
    fontSize:40,
    position:"absolute",
    top:0,
    left:15
  },
  upload: {
    width: 150,
    height: 100,
    top:-10
  },
});