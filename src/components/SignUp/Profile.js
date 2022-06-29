import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, } from 'react-native'
import React from 'react'
import arow from '../../assets/arow.png'
import editprofile from '../../assets/editprofile.png'
import swastik from '../../assets/swastik.png'
import swastiktyps from '../../assets/swastiktyps.png'
import arow3 from '../../assets/arow3.png'
import kundaliicone from '../../assets/kundaliicone.png'
import clock from '../../assets/clock.png'


export default function Profile({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#D6FCED' }}>
            <View style={Styles.lebalecontaenr}>
                <TouchableOpacity onPress={() => navigation.navigate("Samudaya")}>
                    <Image source={arow} style={Styles.arrowstyles} />
                </TouchableOpacity>
                <Text style={Styles.lebaltext}>आपकी प्रोफाइल</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Profileedit")}>
                    <Image source={editprofile} style={Styles.editprofile} />

                </TouchableOpacity>
            </View>

            <View style={Styles.profilebox}>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Profileedit")}>
                <Text style={Styles.profiletext}>TechSell Mandir</Text>
            </TouchableOpacity>
            <Text style={Styles.numprofile}>7739788450</Text>

            <View style={Styles.boxlebal1}>
                <TouchableOpacity style={Styles.boxstyles}>
                    <Image source={swastik} style={Styles.imgstyles} />
                    <Text style={Styles.textstyles44}>आपकी पुण्य मुद्राएं</Text>
                    <Image source={arow3} style={{ height: 20, width: 20, alignSelf: 'center' }} />
                </TouchableOpacity>
                <View style={{ borderWidth: 0.2, borderColor: 'grey', marginHorizontal: 20, margin: 5 }}></View>


                <TouchableOpacity style={Styles.boxstyles} >
                    <Image source={swastiktyps} style={Styles.imgstyles} />
                    <Text style={Styles.textstyles44}>आपकी पुण्य मुद्राएं</Text>
                    <Image source={arow3} style={{ height: 20, width: 20, alignSelf: 'center' }} />
                </TouchableOpacity>
            </View>
            <View style={Styles.boxlebal12}>
                <TouchableOpacity style={Styles.boxstyles} onPress={() => navigation.navigate("KUndalireaport")}>
                    <Image source={kundaliicone} style={Styles.imgstyles} />
                    <View>
                        <Text style={Styles.textstyles44}>कुंडली रिपोर्ट</Text>
                        <Text style={{ color: 'black', marginVertical: 5 }}>विस्तृत कुंडली व जन्मपत्रिका बनवाएँ</Text>
                    </View>
                    <Image source={arow3} style={Styles.arowstle} />
                </TouchableOpacity>
            </View>
            <View style={Styles.boxlebal12}>
                <TouchableOpacity style={Styles.boxstyles}>
                    <Image source={clock} style={Styles.imgstyles} />
                    <View>
                        <Text style={{ color: 'black', fontSize: 19, fontWeight: '600', alignSelf: 'center', right: 35 }}>आपके अलार्म</Text>
                        <Text style={{ color: 'black', marginVertical: 5, marginRight: 55 }}>कोई अलार्म नहीं लगा है</Text>
                    </View>
                    <Image source={arow3} style={Styles.arowstle} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    arrowstyles: {
        height: 30,
        width: 30,
        // margin: 30,
        marginHorizontal: 20,
        // marginVertical: 55,


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
        color: 'black'
    },
    editprofile: {
        height: 25,
        width: 25,
        marginHorizontal: 130
    },
    profilebox: {
        borderWidth: 2,
        borderColor: '#F7B02D',
        height: 100,
        width: 100,
        borderRadius: 50,
        marginVertical: 20,
        alignSelf: 'center'
    },
    profiletext: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },
    numprofile: {
        color: 'black',
        textAlign: 'center',
        fontSize: 17,
        marginVertical: 5
    },
    boxlebal1: {
        borderWidth: 1,
        borderColor: '#F7B02D',
        height: 130,
        marginHorizontal: 20,
        borderRadius: 5,
        marginVertical: 15,
        alignContent: 'center',
        justifyContent: 'center'
    },
    boxlebal12: {
        borderWidth: 1,
        borderColor: '#F7B02D',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 5,
        marginVertical: 15,
        alignContent: 'center',
        justifyContent: 'center'
    },
    boxstyles: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    imgstyles: {
        height: 50,
        width: 50,
    },
    textstyles44: {
        color: 'black',
        fontSize: 19,
        fontWeight: '600',
        alignSelf: 'center'
    },
    arowstle: {
        height: 20,
        width: 20,
        alignSelf: 'center',
    }

})