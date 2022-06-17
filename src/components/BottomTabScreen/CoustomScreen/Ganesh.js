import { View, Text, Image } from 'react-native'
import React from 'react'
import templet from '../../../assets/templet.png'

export default function Ganesh() {
    return (
        <View>
            <Image source={templet} style={{ height: 100, width: '100%', }} />
        </View>
    )
}