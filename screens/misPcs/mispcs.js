import React, { useEffect } from 'react'
import { FlatList,StyleSheet,View,Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import PlaceItem from '../../components/PlaceItem';
import { FAB } from 'react-native-paper';
import { deletePC, loadMisPcs } from '../../store/actions/misPcs.actions';
import ButtonLong from '../../components/buttonLong';
import { COLORS } from '../../constants/colors';

const MisPcs = ({ navigation }) => {
    const dispatch = useDispatch();
    const mispcs = useSelector(state => state.mispcs.misPcs);
    const userId = useSelector(state => state.auth.userId)

    const handleDelete = (id) => {
        dispatch(deletePC(id));
        dispatch(loadMisPcs(userId));
    }

    useEffect(() => {
        dispatch(loadMisPcs(userId));
    }, [ mispcs]);

    const renderItem = (data) => (
        <PlaceItem
            id={data.item.id}
            title={data.item.lat}
            image={data.item.image}
            description={data.item.userId}
            onSelect={() => navigation.navigate('Detalle')}
            handleDelete= {handleDelete }
        />
    )

    if(mispcs.length == 0){
        return (
            <View>

           <Text style={styles.nohay}>No hay pcs</Text>


           <ButtonLong text={"Agregar Mi Computadora"} handleSelected={() => navigation.navigate('New Pc')} color={COLORS.primary}></ButtonLong>
      </View>

    )
    }else{
    
    return(
        <View style={styles.container}>
        <FlatList
        data={mispcs}
        keyExtractor={item => item.id}
        renderItem={renderItem}
    />
      <ButtonLong text={"Agregar Mi Computadora"} handleSelected={() => navigation.navigate('New Pc')} color={COLORS.primary}></ButtonLong>

  </View>
    )
}

}
const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
    nohay:{
        paddingTop:100
    },
    container:{
        width:"100%",
        height:"100%"
    }
  })

export default MisPcs
