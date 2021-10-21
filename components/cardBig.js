import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Rectangulo from './rectangulo'

const CardBig = ({component})=>{
    return(
        <TouchableOpacity style={styles.card}>
            <View style={{flexDirection:"row"}}>
                <Rectangulo url={component.url}/>
                <Text style={styles.titulo}>{component.name}</Text>
            </View>
             <Text style={styles.description}>{component.description}</Text>
             <Text style={styles.vermas}>Ver Mas</Text> 
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    card:{
        height:220,
        margin:15,
        borderColor:"#000000",
        borderBottomWidth:5

    },
    titulo:{
        fontSize:20,
        width:"70%",
        textAlign:"left"
    },
    description:{
        flexDirection:"row",
        fontSize:16,
        marginTop:20
    },
    vermas:{
        textAlign:"right",
        fontSize:20,
        marginRight:20

    }
})

export default CardBig