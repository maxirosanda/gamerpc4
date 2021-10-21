import React,{useEffect} from 'react'
import { View,Text,StyleSheet, TouchableOpacity,FlatList} from 'react-native'
import { useSelector ,useDispatch} from 'react-redux';
import { getOrdersUser } from '../../store/actions/orders.action';
import { selectedOrder } from '../../store/actions/orders.action';
import CardOrders from '../../components/cardOrders';

const OrdersUser = ({ navigation, route })=>{
    const userId = useSelector(state => state.auth.userId)
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.list)
    
    useEffect(()=>{
        dispatch(getOrdersUser(userId))
    },[orders])

    const handleSelectedOrder = (_id) => {
        dispatch(selectedOrder(_id))
        navigation.navigate('OrderUser');
      }
    
    
    
    
    return(
        <View style={styles.conteiner}>
             {
             orders !== null ? 
             <FlatList
                data={Object.values(orders)}
                renderItem={(data) => (
                <CardOrders item={data.item.item} handleSelectedOrder={handleSelectedOrder} _id ={data.item._id}></CardOrders>
           )}
                keyExtractor={order =>order._id}
    />
      : <Text>No hay ordenes</Text> }
    
    </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        },
        bar:{
            flexDirection:"row",
            backgroundColor:"#FB6D01",
            
        },
        barButton:{
            width:"33.3%",
            padding:15,
            flexGrow:1
        },
        bartext:{
            textAlign:"center",
            color:"#ffffff"
        },
        active:{
            width:"33.3%",
            padding:15,
            flexGrow:1,
            borderBottomWidth:5,
            borderColor:"#ffffff"
        },
        activetext:{
            textAlign:"center",
            color:"#ffffff",
            fontWeight:"bold"
        },
        cardbig:{
            flexGrow:1,

        }
})

export default OrdersUser