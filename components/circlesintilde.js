import React,{useState} from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

const Circlesintilde = ({item})=>{
    
    return(
        <View>
                <Image style={styles.circle} source={{uri:item.url}}></Image>
                <Text style={styles.text}>{item.title}</Text>
        </View>
    )
}

const styles= StyleSheet.create({

        circle:{
            backgroundColor:"#36D20C",
            flexGrow:1,
            flexDirection:"row",
            width:100,
            maxWidth:100,
            height:100,
            margin:8,
            borderRadius:50,
            alignContent:"center"
            },
        text:{
            textAlign:"center",
            textAlignVertical:"center",
            marginBottom:8,
        }
})

export default Circlesintilde