import React, {useContext} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { qContext } from './questioncontext';
import {sContext} from "./datacont.js"

const StatScreen=({navigation}) =>{
    const {wrongind} = useContext(qContext); 
    const {datw} = useContext(sContext);
    var i =0;
    var text=""
    while (i<wrongind.length){
        text+= datw['highlights'][wrongind[i]]+"\n";
        i+=1;
    }
    return(<View style = {styles.container}>
        <Text style = {styles.text}>
            {"You got "+wrongind.length+" questions wrong \nReview:\n"+text}

        </Text>
        <Button title = "Return" 
        onPress ={()=>{
            navigation.navigate("welcome");
        }}/>
    </View>
    )
}
export default StatScreen;
const styles = StyleSheet.create({
    
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    container:{
        backgroundColor: 'white',
        width:'90%',
        height:'100%',
        borderRadius: 10,
        margin: 20,
        padding:20,
        justifyContent: "center",
        alignItems:"center",
    },

    text:{
        width:300,
        color:'red',
        fontSize:20,
        flexWrap: 'wrap'
    }
    });
