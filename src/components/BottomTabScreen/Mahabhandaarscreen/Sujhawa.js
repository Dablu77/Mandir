import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import img2 from '../../../assets/img2.jpeg';
import image4 from '../../../assets/image4.jpeg'
import texticonlogo from '../../../assets/texticonlogo.png'
import endlogo from '../../../assets/endlogo.png'

export default function Subhveechar() {
    return (
        <SafeAreaView style={Styles.contanerlabel}>
            <Text style={Styles.textstyl}>आज के सुझाव</Text>
            <View style={{ alignItems: 'center' }}>
                <Image source={texticonlogo} style={{ height: 20, width: 250, marginVertical: -25, right: 30 }} />
            </View>
            <ScrollView>
                <View>
                    <Text style={Styles.labletext}>आज के सुझाव</Text>
                </View>
                <TouchableOpacity style={Styles.imgcontaner}>
                    <Image source={img2} style={Styles.imgestyle} />
                </TouchableOpacity>

                <Text style={{ fontSize: 17, fontWeight: '700', textAlign: 'center', color: 'black', margin: 10 }}>और देखें</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                    <Image source={image4} style={Styles.imgestyle2} />
                    <Image source={image4} style={Styles.imgestyle2} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                    <Image source={image4} style={Styles.imgestyle2} />
                    <Image source={image4} style={Styles.imgestyle2} />
                </View>
            </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <Image source={endlogo} />
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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    labletext: {
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 30
    },
    imgcontaner: {
        alignItems: 'center',
        margin: 5,
    },
    imgestyle: {
        height: 150,
        width: 350,
        borderRadius: 10,
    },
    imgestyle2: {
        height: 100,
        width: 150,
        borderRadius: 10,
        marginHorizontal: 20,
        // marginBottom: 90
    }

})






