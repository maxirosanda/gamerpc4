import React,{useState} from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

const Circle = ({item})=>{
    const [isDisabled, setDisabled] = useState(true);

    const handleDisabled = () =>{
        if (isDisabled){
            setDisabled(false)
          
        }else{
            setDisabled(true)
        }
    }
    return(
        <View>
            <TouchableOpacity onPress={handleDisabled} > 
                <Image style={styles.circle} source={{uri:item.url}}></Image>
                <Image style={[{ opacity: isDisabled ? 0 : 0.8}, styles.circle2] } source={require("../assets/images/tilde-01.png")}></Image>
                <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    circle2:{
        backgroundColor:"#36D20C",
        flexGrow:1,
        flexDirection:"row",
        width:100,
        maxWidth:100,
        height:100,
        margin:8,
        borderRadius:50,
        alignContent:"center",
        position: 'absolute'
        },
        circle:{
            backgroundColor:"#878787",
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

export default Circle