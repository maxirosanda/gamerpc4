import React from 'react'
import { StyleSheet,TextInput} from 'react-native'

const Search = ({text})=>{
    
    return(

        <TextInput style={styles.search}  placeholder={text} />

    )
}

const styles= StyleSheet.create({
    search:{
        height:50,
        margin:15,
        borderWidth:1,
        borderRadius:5,
        borderColor:"#000000"
    }
})

export default Search