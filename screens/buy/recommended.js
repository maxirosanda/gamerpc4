import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity,FlatList} from 'react-native'
import CardBig from '../../components/cardBig';
import ButtonLong from '../../components/buttonLong';
import { useSelector} from 'react-redux';
import ButtonsBotton from '../../components/buttonsbotton';

const Recommended = ({ navigation, route })=>{
    const products = useSelector(state => state.products.list)
    const selectedId = useSelector(state =>state.products.selectedId)
    const product = products.find(item => item.id === selectedId);
    const userId = useSelector(state => state.auth.userId);
   
    return(
        <View style={styles.conteiner}>

            <FlatList
                 data={product.components}
                 renderItem={(data) => (
                     
                   <CardBig component={data.item}/>
                  
                    )}
                 keyExtractor={component => component.id}
             />
    </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        }
})

export default Recommended