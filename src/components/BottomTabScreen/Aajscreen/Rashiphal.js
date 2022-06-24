import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import arow from '../../../assets/arow.png'
import whatsapp from '../../../assets/whatsapp.png'
import meshrashi from '../../../assets/meshrashi.png'
import vrish from '../../../assets/vrish.png'
import mithunicons from '../../../assets/mithunicons.png'
import kark from '../../../assets/kark.png'
import simha from '../../../assets/simha.png'
import kanya from '../../../assets/kanya.png'
import tula from '../../../assets/tula.png'
import vrishchik from '../../../assets/vrishchik.png'
import dhanu from '../../../assets/dhanu.png'
import maker from '../../../assets/maker.png'
import kumbh from '../../../assets/kumbh.png'
import meen from '../../../assets/meen.png'

export default function Rashiphal({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#D6FCED' }}>
            <View style={Styles.lebalecontaenr}>
                <TouchableOpacity onPress={() => navigation.navigate("Aaj")}>
                    <Image source={arow} style={Styles.arrowstyles} />
                </TouchableOpacity>
                <Text style={Styles.lebaltext}>जानिये राशिफल</Text>
                <TouchableOpacity>
                    <Image source={whatsapp} style={Styles.whatsappstyl} />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity style={Styles.contanerbox}>
                        <Image source={meshrashi} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>मेष</Text>

                    </TouchableOpacity>
                </View>
                <View>
                    <View style={Styles.contanerbox}>
                        <Image source={vrish} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>वृषभ</Text>
                    </View>
                </View>
                <View>
                    <View style={Styles.contanerbox}>
                        <Image source={mithunicons} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>मिथुन</Text>
                    </View>
                </View>
                <View>
                    <View style={Styles.contanerbox}>
                        <Image source={kark} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>कर्क</Text>
                    </View>
                </View>
                <View>
                    <View style={Styles.contanerbox}>
                        <Image source={simha} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>सिंह</Text>
                    </View>
                </View>
                <View>
                    <View style={Styles.contanerbox}>
                        <Image source={kanya} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>कन्या</Text>
                    </View>
                </View>
                <View>
                    <View style={Styles.contanerbox}>
                        <Image source={tula} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>तुला</Text>
                    </View>
                </View>
                <View>
                    <View style={Styles.contanerbox}>
                        <Image source={vrishchik} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>वृश्चिक</Text>
                    </View>
                </View>
                <View>
                    <View style={Styles.contanerbox}>
                        <Image source={dhanu} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>धनु</Text>
                    </View>
                </View>
                <View>
                    <View style={Styles.contanerbox}>
                        <Image source={maker} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>मकर</Text>
                    </View>
                </View>
                <View>
                    <View style={Styles.contanerbox}>
                        <Image source={kumbh} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>कुम्भ</Text>
                    </View>
                </View>
                <View>
                    <View style={Styles.contanerbox}>
                        <Image source={meen} style={Styles.imgstyle} />
                        <Text style={Styles.textstles}>मीन</Text>
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
    },
    contanerbox: {
        borderRadius: 15,

        justifyContent: 'center',
        height: 90,
        width: 100,
        margin: 10,
        backgroundColor: '#ccccff'
    },
    imgstyle: {
        height: 45,
        width: 40,
        alignSelf: 'center'
    },
    textstles: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        margin: 5
    }

})