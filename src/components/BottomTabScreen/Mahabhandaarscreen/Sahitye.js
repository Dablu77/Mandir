import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import texticonlogo from '../../../assets/texticonlogo.png'
import arrow1 from '../../../assets/arrow1.png'
import hanumanji88 from '../../../assets/hanumanji88.jpg'

export default function Sahitye({ navigation }) {
    return (
        <SafeAreaView style={Styles.contanerlabel}>
            <ScrollView>
                <Text style={Styles.textstyl}>साहित्य भण्डार</Text>
                <View style={{ alignItems: 'center' }}>
                    <Image source={texticonlogo} style={{ height: 20, width: 250, marginVertical: -25, right: 30 }} />
                </View>

                <View style={Styles.lablestyle}>
                    <Text style={Styles.labletext}>आने वाले व्रत, पर्व और त्योहार</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => navigation.navigate("SahityebhandarScreen")}>
                        <Text style={Styles.labletext}>और देखें</Text>
                        <Image source={arrow1} style={Styles.arrow1} />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true}>
                    <View style={Styles.boxlabel1}>
                        <Image source={hanumanji88} style={Styles.imgstyles} />
                        <Text style={Styles.boxlabel1text}>कालाष्टमी</Text>
                        <Text style={Styles.boxlabel1text}>की व्रत कथा</Text>
                    </View>
                    <View style={Styles.boxlabel1}>
                        <Image source={hanumanji88} style={Styles.imgstyles} />
                        <Text style={Styles.boxlabel1text}>कालाष्टमी</Text>
                        <Text style={Styles.boxlabel1text}>की व्रत कथा</Text>
                    </View>
                    <View style={Styles.boxlabel1}>
                        <Image source={hanumanji88} style={Styles.imgstyles} />
                        <Text style={Styles.boxlabel1text}>कालाष्टमी</Text>
                        <Text style={Styles.boxlabel1text}>की व्रत कथा</Text>
                    </View>
                </ScrollView>
                <View style={Styles.lablestyle}>
                    <Text style={Styles.labletext}>ईश्वर की लीलाएं</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => navigation.navigate("SahityebhandarScreen")}>
                        <Text style={Styles.labletext}>और देखें</Text>
                        <Image source={arrow1} style={Styles.arrow1} />
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true}>
                    <View style={Styles.boxlabel1}>
                        <Image source={hanumanji88} style={Styles.imgstyles} />
                        <Text style={Styles.boxlabel1text}>कालाष्टमी</Text>
                        <Text style={Styles.boxlabel1text}>की व्रत कथा</Text>
                    </View>
                    <View style={Styles.boxlabel1}>
                        <Image source={hanumanji88} style={Styles.imgstyles} />
                        <Text style={Styles.boxlabel1text}>कालाष्टमी</Text>
                        <Text style={Styles.boxlabel1text}>की व्रत कथा</Text>
                    </View>
                    <View style={Styles.boxlabel1}>
                        <Image source={hanumanji88} style={Styles.imgstyles} />
                        <Text style={Styles.boxlabel1text}>कालाष्टमी</Text>
                        <Text style={Styles.boxlabel1text}>की व्रत कथा</Text>
                    </View>
                </ScrollView>
                <View style={Styles.lablestyle}>
                    <Text style={Styles.labletext}>योग</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => navigation.navigate("SahityebhandarScreen")}>
                        <Text style={Styles.labletext}>और देखें</Text>
                        <Image source={arrow1} style={Styles.arrow1} />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true}>
                    <View style={Styles.boxlabel1}>
                        <Image source={hanumanji88} style={Styles.imgstyles} />
                        <Text style={Styles.boxlabel1text}>कालाष्टमी</Text>
                        <Text style={Styles.boxlabel1text}>की व्रत कथा</Text>
                    </View>
                    <View style={Styles.boxlabel1}>
                        <Image source={hanumanji88} style={Styles.imgstyles} />
                        <Text style={Styles.boxlabel1text}>कालाष्टमी</Text>
                        <Text style={Styles.boxlabel1text}>की व्रत कथा</Text>
                    </View>
                    <View style={Styles.boxlabel1}>
                        <Image source={hanumanji88} style={Styles.imgstyles} />
                        <Text style={Styles.boxlabel1text}>कालाष्टमी</Text>
                        <Text style={Styles.boxlabel1text}>की व्रत कथा</Text>
                    </View>
                </ScrollView>
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
    arrow1: {
        height: 20,
        width: 20,
        marginHorizontal: 5
    },
    lablestyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    labletext: {
        color: 'black',
        fontSize: 17,
        fontWeight: '500'
    },
    boxlabel1: {
        borderWidth: 2,
        backgroundColor: '#fff',
        borderColor: '#F7B02D',
        borderRadius: 5,
        height: 180,

        margin: 5,

        alignItems: 'center',
        // justifyContent: 'center',
        padding: 5
    },
    imgstyles: {

        height: 130,
        width: 120,
        borderRadius: 5
    },
    boxlabel1text: {
        color: 'black',
        fontWeight: 'bold'
    }

})