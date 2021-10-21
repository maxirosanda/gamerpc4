import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

const Cuadrado = ({handleSelected,imgCuadrado,text})=>{
   
    var icon = imgCuadrado
  ? require('../assets/images/imgProgramas.jpg')
  : require('../assets/images/imgGame.jpg');

    return(
        <TouchableOpacity style={styles.cuadrado} onPress={handleSelected}>
           <Image style={styles.img}  source={icon} />
           <View style={styles.titulo} ></View>
           <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>

    )
}

const styles= StyleSheet.create({
    cuadrado:{
        flexDirection:"row",
        justifyContent:"center"
    },
    img:{
        width:120,
        height:120,
        margin:20,
        borderRadius:8,
        backgroundColor:"#878787",
    },
    titulo:{
        width:120,
        top:60,
        height:60,
        margin:20,
        opacity:0.7,
        borderRadius:8,
        backgroundColor:"#FB6D01",
        position: 'absolute'
    },
    text:{
        color:"#ffffff",
        textAlign:"center",
        textAlignVertical:"center",
        fontWeight:"bold",
        width:120,
        margin:20,
        top:60,
        height:60,
        position: 'absolute'
    }
})

export default Cuadrado