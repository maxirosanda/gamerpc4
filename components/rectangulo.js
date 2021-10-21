import React from 'react'
import { View,StyleSheet,Image} from 'react-native'

const Rectangulo = ({url})=>{
    
    return(
        <Image style={styles.rectangulo} source={{uri:url}}></Image>

    )
}

const styles= StyleSheet.create({
    rectangulo:{
        width:80,
        height:50,
        backgroundColor:"#878787",
        borderRadius:8,
        marginLeft:8,
        marginRight:18,
        
      },
})

export default Rectangulo