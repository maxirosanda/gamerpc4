import React,{useState} from 'react'
import { View,Text,StyleSheet, TouchableOpacity,FlatList,Image,ScrollView,Modal} from 'react-native'
import { useSelector} from 'react-redux';
import Avatar2 from '../../components/avatar';
import ButtonLong from '../../components/buttonLong';
import {COLORS} from '../../constants/colors'
import ModalBuy from '../../components/modalBuy';
import { useDispatch} from 'react-redux';
import { confirOrder } from '../../store/actions/orders.action';

const DatosVendedor = ({ navigation, route })=>{
    const products = useSelector(state => state.products.list)
    const selectedId = useSelector(state =>state.products.selectedId)
    const product = products.find(item => item.id === selectedId);
    const userId = useSelector(state => state.auth.userId);
    const [modalVisible, setModalVisible] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);
    const dispatch = useDispatch();
  
    const handleCompra = () =>{
        setModalVisible(true)
        setButtonVisible(true)
        dispatch(confirOrder(product,userId));
    
    }

    return(
        <View style={styles.conteiner}>
        <ModalBuy modalVisible={modalVisible} setModalVisible={setModalVisible} color={COLORS.primary}/>
        <ScrollView  style={[{ display: buttonVisible ? 'none' : 'flex'}]}>
        <Image style={styles.photo}  source={require('../../assets/images/imgVendedor.jpg')}></Image>
             <Avatar2 title = "Mariano Herrera" alias='mariano_computer' />
            <Text style={styles.text}>Para poder ver los datos del vendedor debe realizar la compra</Text>
        </ScrollView>
        <ScrollView style={[{ display: buttonVisible ? 'flex' : 'none'}]}>
       
             <Image style={styles.photo}  source={require('../../assets/images/imgVendedor.jpg')}></Image>
             <Avatar2 title = "Mariano Herrera" alias='mariano_computer' />
             <View>
                <Text style={styles.text2}>Direccion: Brandsen 3435 Ramos Mejia</Text>
                <Text style={styles.text2}>Tel: 4354-4356</Text>
                <Text style={styles.text2}>Mail:mariano_computer@hotmail.com</Text>
                 <Text style={styles.text2}>Horarios: 8:30 hs a 17 hs de Lunes a Viernes </Text>
                <Text style={styles.text2}>Puntuacion:80</Text>
            </View>
        
        </ScrollView>
       
        <ButtonLong text={"COMPRAR"} handleSelected={handleCompra} buttonVisible={buttonVisible} color={COLORS.primary}></ButtonLong>
         </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        },
        absolute: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          },
       photo:{
        flexGrow:1,
        height:180,
        backgroundColor:"#878787",
       },
       text:{
           fontSize:14,
           fontWeight:"bold",
           padding:30
       },
       text2:{
        fontSize:14,
        fontWeight:"bold",
        paddingHorizontal:20,
        paddingVertical:5,
        textAlign:"center"
    }
})

export default DatosVendedor