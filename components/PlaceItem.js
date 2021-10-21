import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { COLORS } from '../constants/colors';

  
const PlaceItem = ({id,title, image,description,onSelect,handleDelete }) => {
  return (
    <View style={styles.placeItem}>
<View style={styles.info}>
      <Image style={styles.rectangulo} source={{ uri: image }} />
      
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{description}</Text>
      </View>
      
      <View style={styles.contenedorBotones}>
      <TouchableOpacity style={styles.contendorBotonChico}  onPress={onSelect}>
      <Text style={styles.textBotonChico} >Detalles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contendorBotonChico} onPress={()=>{handleDelete(id)}}>
      <Text style={styles.textBotonChico} >Borrar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  touch:{
    flexDirection:"row",
    flex:1
  },
  rectangulo:{
    width:80,
    height:50,
    backgroundColor:"#FB6D01",
    borderRadius:8,
    marginLeft:8,
    marginRight:18,
    
  },
  info: {
    marginLeft: 25,
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: COLORS.primary,
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: '#777',
    fontSize: 16,
  },
  contenedorBotones:{
    flexDirection:"row"
  },
  contendorBotonChico:{
    margin:10,
    backgroundColor:COLORS.primary,
    height:50,
    borderRadius:5,
    flex:1
},
textBotonChico:{
    fontSize:16,
    textAlign:"center",
    flex:1,
    color:"#ffffff",
    textAlignVertical:"center",
    height:50,
},
});

export default PlaceItem;