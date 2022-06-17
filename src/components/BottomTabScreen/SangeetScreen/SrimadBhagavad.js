import { Text, SafeAreaView, StyleSheet, Image, View } from 'react-native'
import React from 'react';
import texticonlogo from '../../../assets/texticonlogo.png'

export default function SrimadBhagavad() {
    return (
        <SafeAreaView style={Styles.contanerlabel}>
            <Text style={Styles.textstyl}>श्रीमद्भगवद्गीता का संगीत संग्रह</Text>
            <View style={{ alignItems: 'center' }}>
                <Image source={texticonlogo} style={{ height: 20, width: 250, marginVertical: -25, right: 30 }} />
            </View>
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

})