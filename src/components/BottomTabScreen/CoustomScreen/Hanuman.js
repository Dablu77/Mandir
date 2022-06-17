import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import templet from '../../../assets/templet.png'

export default function Hanuman() {
    return (
        <SafeAreaView style={Styles.contaner}>
            <View>
                <Image source={templet} style={{ height: 100, width: '100%', }} />
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    contaner: {
        backgroundColor: '#D6FCED',
        flex: 1,
    }
})