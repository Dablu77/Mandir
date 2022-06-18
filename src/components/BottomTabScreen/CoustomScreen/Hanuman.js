import { View, Text, Image, SafeAreaView, StyleSheet, } from 'react-native'
import React from 'react'
import templet from '../../../assets/templet.png'
import hanumanji88 from '../../../assets/hanumanji88.jpg'
import templebell from '../../../assets/templebell.png'

export default function Hanuman() {
    return (
        <SafeAreaView style={Styles.contaner}>
            <View>
                <Image source={templet} style={{ height: 100, width: '100%', }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={templebell} style={{ height: 170, width: 60, marginVertical: -20, zIndex: -99 }} />
                <Image source={templebell} style={{ height: 170, width: 60, marginVertical: -20, zIndex: -99 }} />


            </View>
            <View>
                <Image source={hanumanji88} style={{ zIndex: -999, height: 550, marginVertical: -220, width: 360 }} />



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