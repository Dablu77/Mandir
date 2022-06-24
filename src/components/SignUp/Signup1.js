import { View, Text, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react';
import mandir from '../../assets/mandir.png'
import CoustomButton from '../Common/CoustomButton';
import phoneicone from '../../assets/phoneicone.png'



export default function Signup1({ navigation }) {
    const [phoneNumber, setphoneNumber] = useState('')
    // const [errorPhoneNumber, setErrorPhonenumber] = useState(null);


    return (
        <SafeAreaView style={Styles.contanenr}>
            <Image source={mandir} style={{ height: 200, width: 300, marginHorizontal: 30, marginVertical: 30 }} />

            <Text style={Styles.lebletext}>Welcome To Ram Mandir</Text>
            <View>
                <Text style={Styles.lebletext2}>Enter Your Phone Number</Text>
                <View style={Styles.sectionStyle}>
                    <Image source={phoneicone} style={Styles.phoneicone} />
                    <TextInput
                        style={Styles.input}
                        labelValue={phoneNumber}
                        onChangeText={txt => {
                            setphoneNumber(txt), _phonenumbervalidate(txt);
                        }}
                        placeholder="Enter Phone Number"
                        placeholderTextColor="#776e6e"
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"

                    />
                </View>
            </View>
            <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 15 }}>
                <CoustomButton Title='Please Log In' onPress={() => navigation.navigate("Signup2")} />


            </View>

        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    contanenr: {
        flex: 1,
        backgroundColor: '#D6FCED',
    },
    lebletext: {
        color: '#F7B02D',
        fontSize: 20,
        margin: 25,



    },
    lebletext2: {
        color: '#F7B02D',
        marginHorizontal: 20,
        margin: 10,
        fontWeight: '700',
        fontSize: 17
    },

    input: {
        flex: 1,
        height: 40,
        color: '#F7B02D',
        fontSize: 16,
        paddingHorizontal: 15,

    },
    phoneicone: {
        padding: 10,
        margin: 5,
        height: 30,
        width: 30,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#EEA42C',
        height: 45,
        borderRadius: 5,
        margin: 10,
    }
})