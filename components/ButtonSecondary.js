import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const ButtonSecondary = ({text,handleSelected,color})=>{
    
    return(
        <TouchableOpacity style={[{borderColor:color},styles.contendorBotonLargo]} onPress={handleSelected} > 
        <Text style={[{color:color},styles.textBotonLargo]}>{text}</Text>
    </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    contendorBotonLargo:{
        width:"90%",
        marginHorizontal:"5%",
        marginVertical:5,
        height:50,
        borderRadius:5,
        backgroundColor:"#ffffff",
        borderWidth: 1
    },
    textBotonLargo:{
        fontSize:16,
        textAlign:"center",
        textAlignVertical:"center",
        height:50,
    },
})

export default ButtonSecondary