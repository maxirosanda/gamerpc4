import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

const Avatar2 = ({title,alias})=>{
    
    return(
        <View>
            <TouchableOpacity style={styles.conteiner}> 
                <Image style={styles.avatar} source={require("../assets/images/user.png")}></Image>
                <View style={styles.conteinertext}>
                <Text style={styles.text}>{title}</Text>
                <Text >{alias}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        flexDirection:"row"
    },
    avatar:{
        backgroundColor:"#FB6D01",
        flexGrow:1,
        flexDirection:"row",
        width:40,
        maxWidth:40,
        marginVertical:20,
        marginLeft:10,
        height:40,
        borderRadius:20,
        alignContent:"center",
        },
        text:{
            textAlign:"left",
            textAlignVertical:"center",
            fontWeight:"bold"
        },
        conteinertext:{
            flexGrow:1,
            marginLeft:10,
            marginVertical:20,
        }
})

export default Avatar2