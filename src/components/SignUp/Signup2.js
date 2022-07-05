import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, } from 'react-native'
import React, { useEffect, useRef, useState, } from 'react';
import mandir from '../../assets/mandir.png'
import CoustomButton from '../Common/CoustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { verifyOtp } from '../restApi/ApiConfig';
import CustomLoader from '../../CustomLoader/CustomLoader';


// export default function Signup2({ navigation }) {
const Signup2 = props => {
    const [isLoading, setIsLoading] = useState(false);

    // const [loader, setLoader] = useState(false);
    // const [phonenumber, setphoneNumber] = useState(props?.route?.params?.phonenumber);
    // const [data, setdata] = useState();

    // console.log('phonenumber', phonenumber)

    // console.log("gfhkfghhfhf", phonenumber)



    const [otp, setotp] = useState("")
    const [errorotp, setErrorotp] = useState(null);
    const _otpvalidate = errorotp => {
        var otpRegex =
            / [a - z0 - 9] *\d[a-z0 - 9]/;
        var otpRegex = /^([0-9]){10,14}$/;
        if (errorotp === '') {
            setErrorotp('*Please enter  OTP.');
        } else if (!(otpRegex.test(errorotp) | otpRegex.test(errorotp))) {
            setErrorotp('*Please enter valid  OTP.');
        } else {
            setErrorotp(null);
        }
    };

    useEffect(() => {
        a();
    }
    )
    const [phonenumber, setphoneNumber] = useState("")
    const a = async () => {
        const phonenumber = await AsyncStorage.getItem('mobileNumber',);
        setphoneNumber(phonenumber)
    }

    // console.log("hey", phonenumber)

    // const onSubmit = () => {
    //     console.log("====================================" + otp);
    //     if (otp === '') {
    //         setErrorotp('Please enter OTP');
    //     }
    //     else {
    //         OTPApi();
    //     }
    // };





    // ************ Login Api Integration ************
    // const OTPApi = async () => {
    //     const formdata = new FormData();
    //     formdata.append({
    //         mobileNumber: phonenumber,
    //         otp: otp,

    //     });
    //     console.log('===== verifyOtp data =====', formdata);

    //     setLoader(true);
    const App = () => {

        fetch('http://dmandir.houszzz.com/api/v1/user/verifyOtp', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobileNumber: phonenumber,
                otp: otp,
            })
        })
            .then((response) => response.json())
            .then(async (json) => {
                console.log("hi", json)
                if (json?.responseCode === 200) {
                    console.log('======  Response ======', json.result.token);
                    await AsyncStorage.setItem('token', json.result.token);
                    props.navigation.navigate('BottomTab', {
                        initialRouteName: 'Coustom'
                    });
                    alert(json?.responseMessage);
                    setIsLoading(false);
                } else if (json?.responseCode === 401) {
                    alert(json?.responseMessage);
                } else {
                    alert('Something went wrong.');
                    setIsLoading(false);
                }


            })
            .catch((error) => {
                console.error(error);
            });

    }





    return (
        <SafeAreaView style={Styles.contanenr}>
            <Image source={mandir} style={{ height: 200, width: 300, marginHorizontal: 30, marginVertical: 30 }} />

            <Text style={Styles.lebletext}>Welcome To Ram Mandir</Text>
            <View>
                <Text style={Styles.lebletext2}>Enter OTP</Text>
                <View style={Styles.TextInputview}>

                    <TextInput
                        style={Styles.input}
                        keyboardType={'number-pad'}
                        maxLength={4}

                        onChangeText={txt => {
                            setotp(txt), _otpvalidate(txt);
                        }}


                    />

                    {/* <TextInput
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

                        }}
                    /> */}




                </View>
                <TouchableOpacity>
                    <Text style={Styles.Resendstles}>Resend OTP</Text>
                </TouchableOpacity>
            </View>
            {errorotp != null ? (
                <View style={Styles.ErrorContainer}>
                    <Text style={{ color: '#776e6e', fontSize: 15 }}>
                        {errorotp}
                    </Text>
                </View>
            ) : null}
            <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 15 }}>

                {isLoading ? (
                    <CustomLoader />
                ) : (
                    <CoustomButton Title='Please Enter OTP' onPress={() => App()} />

                )}

            </View>
            {/* <CoustomButton Title='Please Enter OTP' onPress={() => App()} /> */}

        </SafeAreaView>
    )
}

export default Signup2;


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
    // input: {
    //     height: 45,
    //     borderWidth: 1,
    //     color: '#F7B02D',
    //     borderColor: '#EEA42C',
    //     fontSize: 16,
    //     backgroundColor: '#fff',
    //     borderRadius: 5,
    //     alignSelf: 'center',
    //     padding: 10,
    //     width: '12%',
    //     textAlign: 'center'

    // },
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
        width: '80%',
        textAlign: 'center'

    },
    Resendstles: {
        color: '#F7B02D',
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
        letterSpacing: 0.5,



    },
    ErrorContainer: {
        fontSize: 17,
        marginHorizontal: 30
    }

})