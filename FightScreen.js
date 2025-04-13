import React, {useState,useContext} from "react";
import { StyleSheet, ImageBackground, Text, View, Button, Image,TouchableOpacity } from 'react-native';
import {sContext} from "./datacont.js"
import {iContext} from "./indexcontext.js"
import { qContext } from "./questioncontext.js";
const FightScreen= ({navigation})=>{
    const [showButton, setShowButton] = useState(false); 
    const [showButt, setShowButt] = useState(true); 
    const [showAss, setShowAss] = useState(false); 
    const {datw} = useContext(sContext);
    const {currind,setterInd} = useContext(iContext);
    const{wrongInd, addInd} = useContext(qContext); 
    const buttonPress= (text)=>{
        if (text != datw['answer'][currind]){
            addInd(currind)
            if (currind<4){setterInd(currind+1)}
            else{
                setShowAss(true);
                setShowButton(false);
                setShowButt(false);
            }
            setShowAss(true)
            setShowButton(false)
            setShowButt(false)
        }else{
            setShowButton(false)
            setShowButt(true)
            if (currind<4){setterInd(currind+1)}else{
                setterInd(0);
                navigation.navigate("stat");
            }
        }

    }
    return(
        <ImageBackground style =  {styles.background}
            source = {require('./assets/forest_background_bigger.png')}>
                {showButt&&(<View style={styles.container}>
                    <Text style = {styles.text}>{datw['questions'][currind]}</Text>
                    <TouchableOpacity onPress ={()=>{
                        if (showButton == false){
                            setShowButt(false);
                            setShowAss(false);
                            setShowButton(true);                        } 
                    }}>
                        <Image source = {require('./assets/button.png')}
                                style = {styles.qbutton}
                                resizeMode = "stretch">
                                </Image>
                        <Text style = {styles.overlayText}>Next</Text>

                    </TouchableOpacity>
                    </View>
                    )
                }
                {showButton&&(<View style={styles.container}>
                    <Button
                        title = {datw['options'][currind][0]}
                        onPress = {()=>buttonPress(datw['options'][currind][0])}/>
                    <Button
                        title = {datw['options'][currind][1]}
                        onPress = {()=>buttonPress(datw['options'][currind][1])}/>

                    <Button
                            title = {datw['options'][currind][2]}
                            onPress = {()=>buttonPress(datw['options'][currind][2])}/>

                    <Button
                            title = {datw['options'][currind][3]}
                            onPress = {()=>buttonPress(datw['options'][currind][3])}/>
                    
                
                </View>)}
                {showAss&&(<View style={styles.container}>
                    <Text style = {styles.text}>{"Incorrect\n"+datw['highlights'][currind-1]}</Text>
                    <TouchableOpacity onPress ={()=>{
                        if (showButt == false&&currind!=4){
                            setShowButt(true);
                            setShowAss(false);
                            setShowButton(false);
                        } else if(showButt == false &&currind == 4){
                            navigation.navigate("stat");
                        }
                    }}>
                        <Image source = {require('./assets/button.png')}
                                style = {styles.qbutton}
                                resizeMode = "stretch">
                                </Image>
                        <Text style = {styles.overlayText}>Next</Text>

                    </TouchableOpacity>
                    </View>
                    )
                }
                <Image style = {styles.leftdino}
                source = {require('./assets/final_sprites/fireDino.png')}
                ></Image>
                <Image style = {styles.rightdino}
                source = {require('./assets/final_sprites/earthDino.png')}
                ></Image>

            </ImageBackground>
    )
}
export default FightScreen;
const styles = StyleSheet.create({
    
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    container:{
        backgroundColor: 'white',
        width:'90%',
        height:400,
        borderRadius: 10,
        margin: 20,
        top:-150,
        padding:20,
        justifyContent: 'space-between'
    },
    button:{
        width:300,
        height:100,
        top:-76,
        padding:0,
        margin: 0,
        borderRadius: 0,

    },
    leftdino:{
        position:"absolute",
        width:150,
        height:150,
        right:250,
        bottom:170
    },
    rightdino:{
        width:250,
        height:250,
        transform: 'scaleX(-1)',
        position:"absolute",
        right:-60,
        bottom:100

    },
    qbutton:{
        width:100,
        height:100,
        position:"relative",
        top:0
    },
    text:{
        width:300,
        color:'red',
        fontSize:20,
        flexWrap: 'wrap'
    },
    overlayText:{
        position:'absolute',
        bottom:50,  
        left: '10%',
        fontSize:20
    }

});


