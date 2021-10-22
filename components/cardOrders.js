import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Rectangulo from './rectangulo'

const CardOrders = ({item ,handleSelectedOrder,_id})=>{
    
    return(
        <TouchableOpacity style={styles.card} onPress={()=>{handleSelectedOrder(_id)}}>
            <Rectangulo url={item.url}/>
            <View style={styles.tituloconteinertext}>
            <Text style={styles.titulo}>{item.title}</Text>    
            <Text style={styles.text} >Vendedor: {item.nombreVendedor}</Text>
            <Text style={styles.text}> Tel: {item.telVendedor}</Text>
            <Text style={styles.mas}>Pago</Text> 
            </View>
        </TouchableOpacity>
        
    )
}

const styles= StyleSheet.create({
    conteinertext:{
        width:"60%",
        padding:15
    },
    titulo:{
        fontWeight:"bold",
        textAlign:"center",
        padding:2

    },
    text:{
        padding:2
    },
    card:{
        height:120,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        margin:15,
        borderRadius:10,
        elevation:2
    },
    mas:{
        fontSize:16,
        padding:6,
        textAlign:"right",
        fontWeight:"bold"

    }
})

export default CardOrders