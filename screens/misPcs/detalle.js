import React, { useEffect } from 'react'
import { Text,StyleSheet,ScrollView,View ,Image} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import MapPreview from '../../components/MapPreview';
import { COLORS } from '../../constants/colors';


const Detalle = ({ navigation }) => {
    const  mispcsId = useSelector(state => state.mispcs.selectedId)
    const mispcs = useSelector(state => state.mispcs.misPcs);
    const mipc = mispcs.find(item => item.id === mispcsId);

    useEffect(() => {
        console.log(mipc)
    }, []);
    
    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.text}>{mipc.title}</Text>
            <Text style={styles.text2}>{mipc.description}</Text>
            <Image style={styles.preview} source={{uri:mipc.image }} />
            <MapPreview location={{lat:mipc.lat,lng:mipc.lng}} style={styles.preview}/>
                   
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    preview: {
      width: '70%',
      height: 150,
      marginBottom: 20,
      marginHorizontal:"15%",
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: COLORS.primary,
      borderWidth: 1,
      borderRadius:10
    },

    text:{
        fontSize:20,
        textAlign:"center",
        paddingTop:15
    },
    text2:{
        fontSize:16,
        textAlign:"center",
        paddingVertical:5,
        marginBottom:15
    }
  });

export default Detalle
