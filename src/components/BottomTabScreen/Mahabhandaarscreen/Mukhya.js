import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react';
import dow1 from '../../../assets/dow1.jpeg'
import texticonlogo from '../../../assets/texticonlogo.png'





export default function Mukhya() {
    return (
        <SafeAreaView style={Styles.contanerlabel}>
            <Text style={Styles.textstyl}>श्री मंदिर महाभण्डार</Text>
            <View style={{ alignItems: 'center' }}>
                <Image source={texticonlogo} style={{ height: 20, width: 250, marginVertical: -25, right: 30 }} />
            </View>
            <ScrollView>
                <TouchableOpacity style={Styles.imgcontaner}>
                    <Image source={dow1} style={Styles.imgestyle} />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.imgcontaner}>
                    <Image source={dow1} style={Styles.imgestyle} />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.imgcontaner}>
                    <Image source={dow1} style={Styles.imgestyle} />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.imgcontaner}>
                    <Image source={dow1} style={Styles.imgestyle} />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.imgcontaner}>
                    <Image source={dow1} style={Styles.imgestyle} />
                </TouchableOpacity>

                <TouchableOpacity style={Styles.imgcontaner}>
                    <Image source={dow1} style={Styles.imgestyle} />
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    contanerlabel: {
        flex: 1,
        backgroundColor: '#D6FCED'
    },
    textstyl: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    imgcontaner: {
        alignItems: 'center',
        margin: 5,
    },
    imgestyle: {
        height: 100,
        width: 350,
        borderRadius: 10,
    }
})