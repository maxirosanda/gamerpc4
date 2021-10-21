import React, { useEffect } from 'react'
import { View,Text,StyleSheet,TextInput,FlatList,TouchableOpacity,ScrollView} from 'react-native'
import Circle from '../../components/circle'
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '../../store/actions/games.actions';
import ButtonLong from '../../components/buttonLong';
import Search from '../../components/search';
import {COLORS} from '../../constants/colors'

const Game = ({ navigation, route })=>{
    
    const dispatch =useDispatch()
    const games = useSelector(state => state.games.list)


    useEffect(()=>{
        dispatch(getGames())
    },[])



    return(
        <View style={styles.conteiner}>
       <Search text="    Buscar"/>
       <FlatList style={styles.circles} numColumns={3}  data={games} keyExtractor={item => item.id} renderItem={(data) => (
                < Circle item={data.item} />  
            )}/> 
             <ButtonLong text={"Ver Opciones de Computadoras"} handleSelected={()=>{ navigation.navigate('ListPcs')}} color={COLORS.primary}></ButtonLong>
       
    </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        },
    circles:{
    height:100,
    },
    contendorBotonLargo:{
        margin:10,
        backgroundColor:"#000000",
        height:50,
        borderRadius:5
    },
    textBotonLargo:{
        fontSize:16,
        textAlign:"center",
        color:"#ffffff",
        textAlignVertical:"center",
        height:50,
    },
})

export default Game