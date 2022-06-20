import React from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'


export default function Subhveechar() {
    return (
        <SafeAreaView style={Styles.contanerlabel}>

            <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={Styles.box1}>
                    <Text style={Styles.boxtext}>आज का सुविचार</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.box1}>
                    <Text style={Styles.boxtext}>सुप्रभात</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.box1}>
                    <Text style={Styles.boxtext}>शुभ संध्या</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.box1}>
                    <Text style={Styles.boxtext}>शुभ रात्रि</Text>
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

    box1: {
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderColor: '#F7B02D',
        borderWidth: 1,
        borderRadius: 5,
        margin: 15,
    },
    boxtext: {
        color: '#F7B02D',
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',


    }

})