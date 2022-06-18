import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import arow from '../../../assets/arow.png'
import whatsapp from '../../../assets/whatsapp.png'



export default function Sahityepanchanghscreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.lebalecontaenr}>
                <TouchableOpacity onPress={() => navigation.navigate("Panchangh")}>
                    <Image source={arow} style={Styles.arrowstyles} />
                </TouchableOpacity>
                <Text style={Styles.lebaltext}>श्री साहित्य भण्डार</Text>
                <TouchableOpacity>
                    <Image source={whatsapp} style={Styles.whatsappstyl} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    arrowstyles: {
        height: 30,
        width: 30,
        margin: 30,
        marginHorizontal: 20,
        marginVertical: 55,


    },
    lebalecontaenr: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#F7B02D',
        alignItems: 'center'
    },
    lebaltext: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
    },
    whatsappstyl: {
        height: 70,
        width: 70,
        left: 110
    }

})