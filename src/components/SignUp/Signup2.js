import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState, } from 'react';
import mandir from '../../assets/mandir.png'
import CoustomButton from '../Common/CoustomButton';

export default function Signup2({ navigation }) {
    // const pin1Ref = useRef = ("")
    // const pin2Ref = useRef = ("")
    // const pin3Ref = useRef = ("")
    // const pin4Ref = useRef = ("")
    // const pin5Ref = useRef = ("")
    // const pin6Ref = useRef = ("")




    // const [pin1, setPin1] = useState("")
    // const [pin2, setPin2] = useState("")
    // const [pin3, setPin3] = useState("")
    // const [pin4, setPin4] = useState("")
    // const [pin5, setPin5] = useState("")
    // const [pin6, setPin6] = useState("")




    return (
        <SafeAreaView style={Styles.contanenr}>
            <Image source={mandir} style={{ height: 200, width: 300, marginHorizontal: 30, marginVertical: 30 }} />

            <Text style={Styles.lebletext}>Welcome To Ram Mandir</Text>
            <View>
                <Text style={Styles.lebletext2}>Enter OTP</Text>
                <View style={Styles.TextInputview}>
                    <TextInput
                        style={Styles.input}
                        // ref={pin1Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin1) => {
                            setPin1(pin1)
                            if (pin1 != "") {
                                pin2Ref.current.focus();
                            }
                        }}


                    />


                    <TextInput
                        style={Styles.input}
                        // ref={pin2Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin2) => {
                            setPin2(pin2)
                            if (pin2 != "") {
                                !pin2Ref.current.focus();
                            }
                        }}

                    />


                    <TextInput
                        style={Styles.input}
                        // ref={pin3Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin3) => {
                            setPin3(pin3)
                            if (pin3 != "") {
                                pin4Ref.current.focus();
                            }
                        }}
                    />


                    <TextInput
                        style={Styles.input}
                        // ref={pin4Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin4) => {
                            setPin4(pin4)
                            if (pin4 != "") {
                                pin5Ref.current.focus();
                            }
                        }}
                    />
                    <TextInput
                        style={Styles.input}
                        // ref={pin5Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin5) => {
                            setPin5(pin5)
                            if (pin5 != "") {
                                pin6Ref.current.focus();
                            }
                        }}
                    />
                    <TextInput
                        style={Styles.input}
                        // ref={pin6Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin6) => {
                            setPin6(pin6)


                        }}
                    />

                </View>
                <TouchableOpacity>
                    <Text style={Styles.Resendstles}>Resend OTP</Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 15 }}>
                <CoustomButton Title='Please Enter OTP' onPress={() => navigation.navigate("BottomTab")} />

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
        marginHorizontal: 24,
        margin: 10,
        fontWeight: '700',
        fontSize: 17


    },
    TextInputview: {
        alignItems: "center",
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flex: 0.6,
        marginVertical: 20,
        marginHorizontal: 10




    },
    input: {
        height: 45,
        borderWidth: 1,
        color: '#F7B02D',
        borderColor: '#EEA42C',
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignSelf: 'center',
        padding: 10,
        width: '12%',
        textAlign: 'center'

    },
    Resendstles: {
        color: '#F7B02D',
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
        letterSpacing: 0.5,



    }

})