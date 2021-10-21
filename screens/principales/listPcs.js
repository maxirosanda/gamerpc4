import React,{useEffect} from 'react'
import { View,Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectedProduct } from '../../store/actions/products.actions';
import { AntDesign } from '@expo/vector-icons'; 
import Rectangulo from '../../components/rectangulo'
import { COLORS } from '../../constants/colors';
const ListPcs = ({ navigation, route })=>{

  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list)

  useEffect(()=>{
      dispatch(getProducts())
  },[])
    const handleSelectedProduct = (id,title) => {
      dispatch(selectedProduct(id));

        navigation.navigate('RecommendedHome', { title:title });
      }

    

    return(
        <View style={styles.conteiner}>
    
            <FlatList
                 data={products}
                 renderItem={(data) => (
                   <TouchableOpacity onPress={()=>{ handleSelectedProduct(data.item.id,data.item.title)}} style={styles.card}>
                     <Rectangulo url={data.item.url}/>
                     <View>
                     <Text style={styles.textrecomendada}>{data.item.title}</Text>
                     <Text style={styles.textrecomendada}>{data.item.price}</Text>
                     <Text style={styles.textrecomendada}>{data.item.description}</Text>
                     </View>
                     <AntDesign name="rightcircle" style={styles.flechaderecha} size={24} color="black" />
                     </TouchableOpacity> 

                    )}
                 keyExtractor={item => item.id}
             />

        </View>
    )
}

const styles= StyleSheet.create({
conteiner:{
width:"100%",
height:"100%",
justifyContent:"center"
},

cuadrado:{
    width:120,
    flexGrow:1,
    height:120,
    margin:20,
    borderRadius:8,
    backgroundColor:"#DEC600",
},
fila:{
    flexDirection:"row",
    justifyContent:"center"
},
containerButton:{
 justifyContent:"center"
},
titulorecomendadas:{
    height:30,
    margin:19,
    alignItems:"center",
    flexDirection:"row",
    
},
textrecomendadas:{
    fontSize:20,
    textAlignVertical:"center",
},
textrecomendada:{
  flexDirection:"column",
  textAlign:"left"
},
card:{
    height:100,
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
    marginBottom:5,
    margin:5,
    elevation: 2,
    borderRadius: 5
},
rectangulo:{
  width:80,
  height:50,
  backgroundColor:"#FB6D01",
  borderRadius:8,
  marginLeft:8,
  marginRight:18,
  
},
flechaderecha:{
  marginLeft:30
}

})

export default ListPcs