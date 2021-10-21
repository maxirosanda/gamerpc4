import React ,{useEffect} from 'react'
import { View,Text,StyleSheet,TextInput,FlatList,TouchableOpacity} from 'react-native'
import Circle from '../../components/circle'
import ButtonLong from '../../components/buttonLong';
import { useSelector, useDispatch } from 'react-redux';
import { getPrograms } from '../../store/actions/programs.actions';
import Search from '../../components/search';
import { COLORS } from '../../constants/colors';

const Programs = ({ navigation, route })=>{
    const programs = useSelector(state => state.programs.list)
    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(getPrograms())
    },[])
    return(
        <View style={styles.conteiner}>
       <Search text="     Buscar"/>
            <FlatList style={styles.circles}  numColumns={3}  data={programs} keyExtractor={item => item.id} renderItem={(data) => (
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
    alignContent:"center"
    }
})

export default Programs