import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import arow from '../../../assets/arow.png'
import whatsapp from '../../../assets/whatsapp.png'



export default function Rashiphal({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.lebalecontaenr}>
                <TouchableOpacity onPress={() => navigation.navigate("Aaj")}>
                    <Image source={arow} style={Styles.arrowstyles} />
                </TouchableOpacity>
                <Text style={Styles.lebaltext}>जानिये राशिफल</Text>
                <TouchableOpacity>
                    <Image source={whatsapp} style={Styles.whatsappstyl} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flexDirection: 'column' }}>
                <View>
                    <View style={{ borderRadius: 15, borderWidth: 1, borderColor: 'red', height: 100, width: 100, margin: 10 }}>

                    </View>
                </View>
                <View>
                    <View style={{ borderRadius: 15, borderWidth: 1, borderColor: 'red', height: 100, width: 100, margin: 10 }}>

                    </View>
                </View>
                <View>
                    <View style={{ borderRadius: 15, borderWidth: 1, borderColor: 'red', height: 100, width: 100, margin: 10 }}>

                    </View>
                </View>

            </ScrollView>
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