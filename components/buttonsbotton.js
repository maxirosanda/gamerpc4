import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { useDispatch} from 'react-redux';
import { confirOrder } from '../store/actions/orders.action';
import ButtonLong from './buttonLong';
import { COLORS } from '../constants/colors';
const ButtonsBotton = ({product,userId})=>{

    const dispatch = useDispatch();

    const handlerAddItemOrder = () => {
        dispatch(confirOrder(product,userId));
      }
      
    return(
        <View style={styles.ButtonLong}>
                <ButtonLong text={"COMPRAR"} handleSelected={handlerAddItemOrder} color={COLORS.primary} ></ButtonLong>  
         
        </View>
    )
}

const styles= StyleSheet.create({
    ButtonLong:{
        elevation:2,
        backgroundColor:"#ffffff"
    }
})


export default ButtonsBotton