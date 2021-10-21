import React from 'react'
import { View,Text,StyleSheet,FlatList} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/card'

const BuildPc = ({ navigation, route })=>{
    const components = useSelector(state => state.components.list)
    return(
        <View style={styles.conteiner}>

                <FlatList
                 data={components}
                 renderItem={(data) => (
                  <Card item={data.item}>
                  </Card>
                    )}
                 keyExtractor={item => item.id}
             />
    </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        },
})

export default BuildPc