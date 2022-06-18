import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from "react";
import texticonlogo from '../../../assets/texticonlogo.png'
import moon from '../../../assets/moon.png'
import arrow1 from '../../../assets/arrow1.png'



export default function Panchangh({ navigation }) {

    return (
        <SafeAreaView style={Styles.contanerlabel}>
            <ScrollView>
                <Text style={Styles.textstyl}>आपके लिए पंचांग</Text>
                <View style={{ alignItems: 'center' }}>
                    <Image source={texticonlogo} style={Styles.imgestyle} />
                </View>

                <View style={Styles.boxcontainer}>
                    <TouchableOpacity>
                        <View style={{ borderWidth: 1, backgroundColor: "#fdf1a0", height: 40, width: 100, margin: 20, borderRadius: 5 }}>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderWidth: 1, backgroundColor: "#fdf1a0", height: 40, width: 70, margin: 20, borderRadius: 5 }}>

                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ margin: 20 }} onPress={() => navigation.navigate("Sahityepanchanghscreen")} >

                    <View style={Styles.boxcontainer2}>
                        <Text style={Styles.textstyle}>आषाढ़ मास, ग्रीष्म ऋतु, विक्रम संवत् 2079</Text>
                    </View>

                    <View style={Styles.boxmaincontainer} >
                        <View style={Styles.boxcontainer3}>
                            <Text style={{ color: "#464346", fontSize: 20, fontWeight: 'bold' }}>18 jun, 2022</Text>
                            <Image source={moon} style={{ height: 60, width: 60 }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                            <Text style={{ color: "#464346", fontSize: 17, fontWeight: '800' }}>शनिवार</Text>
                            <Text style={{ color: "#464346", fontSize: 15, fontWeight: '500' }}>कृष्ण पक्ष पंचमी, पूर्णा तिथि</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={Styles.boxmaincontainer3} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 25 }}>
                        <Text style={{ color: "#464346", fontWeight: '600' }}>सूर्योदय</Text>
                        <Text style={{ color: "#464346", fontWeight: '600' }}>सूर्यास्त</Text>
                        <Text style={{ color: "#464346", fontWeight: '600' }}>चंद्रोदय</Text>
                        <Text style={{ color: "#464346", fontWeight: '600' }}>चन्द्रास्त</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, }}>
                        <Text style={{ color: "#464346" }}>06:01 AM</Text>
                        <Text style={{ color: "#464346" }}>07:01 PM</Text>
                        <Text style={{ color: "#464346" }}>06:01 AM</Text>
                        <Text style={{ color: "#464346" }}>09:01 PM</Text>
                    </View>

                </View>
                <View style={{ margin: 20 }}>
                    <Text style={{ color: "#464346", marginHorizontal: 10, fontWeight: '700' }}>शुभ-अशुभ समय</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={Styles.boxmaincontainer4} >
                            <Text style={{ color: '#464346', margin: 10 }}>शुभ मुहूर्त</Text>
                            <Text style={{ color: '#464346' }}>12:13 PM से 01:05PM</Text>

                        </View>
                        <View style={Styles.boxmaincontainer4} >
                            <Text style={{ color: '#464346', margin: 10 }}>शुभ मुहूर्त</Text>
                            <Text style={{ color: '#464346' }}>12:13 PM से 01:05PM</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={Styles.boxmaincontainer4} >
                            <Text style={{ color: '#464346', margin: 10 }}>शुभ मुहूर्त</Text>
                            <Text style={{ color: '#464346' }}>12:13 PM से 01:05PM</Text>
                        </View>
                        <View style={Styles.boxmaincontainer4} >
                            <Text style={{ color: '#464346', margin: 10 }}>शुभ मुहूर्त</Text>
                            <Text style={{ color: '#464346' }}>12:13 PM से 01:05PM</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ color: "#464346", marginHorizontal: 20, fontWeight: '700', }}>आपके लिए विशेष</Text>
                <View style={Styles.boxmaincontainer5} >
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
                        <Image source={moon} style={{ height: 60, width: 60 }} />
                        <View style={{ right: 30 }}>
                            <Text style={{ color: '#464346', fontSize: 17, fontWeight: '700' }}>आज का शुभ मंत्र सुनें </Text>
                            <Text style={{ color: '#464346', fontSize: 17, fontWeight: '700' }}>शनि देव का महामंत्र</Text>
                        </View>
                        <Image source={arrow1} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.boxmaincontainer5} >
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
                        <Image source={moon} style={{ height: 60, width: 60 }} />
                        <View style={{ right: 30 }}>
                            <Text style={{ color: '#464346', fontSize: 17, fontWeight: '700' }}>आज का राशिफ़ल जानें</Text>

                        </View>
                        <Image source={arrow1} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: "#464346", marginHorizontal: 20, fontWeight: '700', }}>होरा और चौघड़िया</Text>
                <View style={Styles.boxmaincontainer5} >
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
                        <Image source={moon} style={{ height: 60, width: 60 }} />
                        <View style={{ right: 30 }}>
                            <Text style={{ color: '#464346', fontSize: 17, fontWeight: '700' }}>अभी का होरा देखें</Text>

                        </View>
                        <Image source={arrow1} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.boxmaincontainer5} >
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 }}>
                        <Image source={moon} style={{ height: 60, width: 60 }} />
                        <View style={{ right: 30 }}>
                            <Text style={{ color: '#464346', fontSize: 17, fontWeight: '700' }}>अभी का चौघड़िया देखें</Text>

                        </View>
                        <Image source={arrow1} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: "#464346", marginHorizontal: 20, fontWeight: '700', }}>संपूर्ण पंचांग</Text>

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
    imgestyle: {
        height: 20,
        width: 250,
        marginVertical: -25,
        right: 30
    },
    boxcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxcontainer2: {
        backgroundColor: "#f1caf2",
        height: 40,
        borderRadius: 5,
    },
    textstyle: {
        color: '#464346',
        fontSize: 15,
        margin: 10
    },
    boxmaincontainer: {
        backgroundColor: "#ffe6f9",
        height: 130,
        borderRadius: 5,
    },
    boxcontainer3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    },
    boxmaincontainer3: {
        backgroundColor: "#ffe6f9",
        height: 130,
        borderRadius: 5,
        margin: 20
    },
    boxmaincontainer4: {
        backgroundColor: "#e580ff",
        height: 80,
        borderRadius: 5,
        margin: 10,
        width: 140
    },
    boxmaincontainer5: {
        backgroundColor: "#009987",
        height: 70,
        borderRadius: 5,
        margin: 20,


    }

})