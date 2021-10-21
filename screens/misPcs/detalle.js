import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';


import { loadMisPcs } from '../../store/actions/misPcs.actions';

const Detalle = ({ navigation }) => {
    const dispatch = useDispatch();


    return (
    <Text>detalle</Text>
    )
}

export default Detalle
