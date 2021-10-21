import React from 'react'
import { View,Text,StyleSheet,Modal,Pressable} from 'react-native'

const ModalBuy = ({product,userId,modalVisible, setModalVisible, color })=>{
  

    return(
        
<Modal
animationType="slide"
transparent={true}
visible={modalVisible}
onRequestClose={() => {
  Alert.alert("Modal has been closed.");
  setModalVisible(!modalVisible);
}}
>
<View style={styles.centeredView}>
  <View style={styles.modalView}>
    <Text style={styles.modalText}>Gracias por comprar nuestro Producto!!  </Text>
    <Pressable
      style={[{backgroundColor:color}, styles.button]}
      onPress={() => setModalVisible(!modalVisible)}
    >
      <Text style={styles.textStyle}>Ver datos vendedor</Text>
    </Pressable>
  </View>
</View>
</Modal>

    )
}

const styles= StyleSheet.create({
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
    
})

export default ModalBuy 

