import React, { useEffect } from 'react'
import { View,Text,StyleSheet, TouchableOpacity,FlatList} from 'react-native'
import Circlesintilde from '../../components/circlesintilde'
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '../../store/actions/games.actions';
import ButtonsBotton from '../../components/buttonsbotton';
import Search from '../../components/search';
import {COLORS} from '../../constants/colors'

const GameCompatibility = ({ navigation, route })=>{
    const dispatch =useDispatch()
    const products = useSelector(state => state.products.list)
    const selectedId = useSelector(state =>state.products.selectedId)
    const product = products.find(item => item.id === selectedId);
    const userId = useSelector(state => state.auth.userId);
    const games = useSelector(state => state.games.list)

    useEffect(()=>{
        dispatch(getGames())
    },[])

    return(
        <View style={styles.conteiner}>
            <Search text="    Buscar"/>
                    <FlatList style={styles.circles} numColumns={3}  data={games} keyExtractor={item => item.id} renderItem={(data) => (
                        < Circlesintilde item={data.item} />  
                    )}/> 

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

export default GameCompatibility