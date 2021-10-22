import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'
import { addmiPc,loadMisPcs } from '../../store/actions/misPcs.actions';
import ImageSelector from '../../components/ImageSelector';
import LocationSelector from '../../components/LocationSelector';
import ButtonLong from '../../components/buttonLong'

const NewMiPc = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState();
    const [location, setLocation] = useState();
    const userId = useSelector(state => state.auth.userId)

    const handleTitleChange = text => setTitle(text);
    const handleDescriptionChange = text => setDescription(text);
    const handleSave = () => {
        dispatch(addmiPc(title, image,description, userId,location.lat,location.lng));
        dispatch(loadMisPcs(userId));
       navigation.navigate('Mispcs');
    }

    const handlePickImage = (uri) => {
        setImage(uri);
    }

    const handlePickLocation = (loc) => {
        setLocation(loc);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}
                    placeholder="Titulo"
                />
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={handleDescriptionChange}
                    placeholder="Descripcion"
                />

                <ImageSelector onImage={handlePickImage} />
                <LocationSelector onLocation={handlePickLocation} />
                
        <ButtonLong
          text={"Guardar PC"} 
          handleSelected={handleSave} 
          color={COLORS.primary}
      />
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },

    input: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius:5,
        marginVertical:25
        
      },
})

export default NewMiPc 
