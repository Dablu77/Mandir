import { Text, SafeAreaView, StyleSheet, Image, View, ScrollView } from 'react-native'
import React from 'react';
import texticonlogo from '../../../assets/texticonlogo.png'

export default function Hanumanji() {
    return (
        <SafeAreaView style={Styles.contanerlabel}>
            <Text style={Styles.textstyl}>हनुमान जी का संगीत संग्रह</Text>
            <View style={{ alignItems: 'center' }}>
                <Image source={texticonlogo} style={{ height: 20, width: 250, marginVertical: -25, right: 30 }} />
            </View>
            <ScrollView vertical={true} style={{ flexDirection: 'row' }}>
                <View style={Styles.box1}>
                    <Text style={Styles.boxtext}>सभी</Text>
                </View>
                <View style={Styles.box1}>
                    <Text style={Styles.boxtext}>भजन</Text>
                </View>
                <View style={Styles.box1}>
                    <Text style={Styles.boxtext}>पाठ</Text>
                </View>
                <View style={Styles.box1}>
                    <Text style={Styles.boxtext}>सभी</Text>
                </View>

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
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    box1: {
        height: 30,
        width: 50,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        margin: 20,
        justifyContent: 'center'
    },
    boxtext: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold'
    }

})