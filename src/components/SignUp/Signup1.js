import { View, Text, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react';
import mandir from '../../assets/mandir.png'
import CoustomButton from '../Common/CoustomButton';
import phoneicone from '../../assets/phoneicone.png'
import PhoneInput from "react-native-phone-number-input";
import Snackbar from 'react-native-snackbar-component';
import AsyncStorage from '@react-native-async-storage/async-storage';



import axios from 'axios';
import { LoginApiUrl } from '../restApi/ApiConfig';
import CustomLoader from '../../CustomLoader/CustomLoader';

// export default function Signup1({ navigation }) {
const Signup1 = props => {

    const [loader, setLoader] = useState(false);
    const [snackIsVisible, setSnackIsVisible] = useState(false);
    const [distance, setDistance] = useState(0)


    // ************ Phone Numbber Validation ************
    const [phonenumber, setphoneNumber] = useState("");
    const [errorPhone, setErrorPhone] = useState("");

    const _phonevalidate = () => {
        var PhoneRegex =
            /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
        var PhoneRegex = /^[6-9]\d{9}$/;
        if (errorPhone === '') {
            setErrorPhone('यह नंबर अमान्य है, कृपया जाँच करें।');
        } else if (!(PhoneRegex.test(errorPhone) || PhoneRegex.test(errorPhone))) {
            setErrorPhone('यह नंबर अमान्य है, कृपया जाँच करें।');
        } else {
            setErrorPhone(null);
        }
    };

    // const validate = () => {
    //     let flag = true;
    //     if (errorPhone === '') {
    //         setErrorPhone('कृपया फ़ोन नंबर दर्ज करें');
    //         flag = false;
    //     }
    //     return flag;
    // };


    const onSubmit = () => {
        console.log("====================================" + phonenumber);
        if (phonenumber === '') {
            setErrorPhone('कृपया फ़ोन नंबर दर्ज करें');
        }
        else {
            LoginApi();
        }
    };



    // ************ Login Api Integration ************
    const LoginApi = async () => {
        const formdata = new FormData();
        formdata.append({
            mobileNumber: phonenumber,

        });
        console.log('===== Login data =====', formdata);

        setLoader(true);
        axios({
            method: 'POST',
            url: LoginApiUrl,
            data: formdata?._parts[0][0],
        })
            .then(async response => {
                console.log('====== login Phone Response ======', response);
                if (response?.data?.responseCode === 200) {
                    await AsyncStorage.setItem('mobileNumber', response?.data?.result?.mobileNumber);
                    setSnackIsVisible(true);
                    setTimeout(() => {
                        props.navigation.navigate('Signup2', {

                        });
                    }, 300);
                    setLoader(false);
                } else {
                    alert('Something went wrong.');
                    setLoader(false);
                }
            })
            .catch(err => {
                console.log('==== Login Catch error=====', err);
                if (err?.response?.data?.responseCode === 409) {
                    alert('User not found');
                } else {
                    alert('Something went wrong.');
                    setLoader(false);
                }
            });
        // .catch(err => console.log('==== login Phone Catch err ====', err));
    };





    return (
        <SafeAreaView style={Styles.contanenr}>
            <Image source={mandir} style={{ height: 200, width: 300, marginHorizontal: 30, marginVertical: 30 }} />

            <Text style={Styles.lebletext}>Welcome To Ram Mandir</Text>
            <View>
                <Text style={Styles.lebletext2}>Enter Your Phone Number</Text>
                <View style={Styles.sectionStyle}>
                    <Image source={phoneicone} style={Styles.phoneicone} />
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>+91</Text>
                    <TextInput
                        style={Styles.input}
                        labelValue={phonenumber}
                        onChangeText={txt => {
                            setphoneNumber(txt), _phonevalidate(txt);
                        }}
                        placeholder="Enter Phone Number"
                        placeholderTextColor="#888888"
                        keyboardType="numeric"
                        // underlineColorAndroid="transparent"

                        maxLength={10}
                    // defaultValue={phonenumber}
                    // withShadow
                    // withDarkTheme
                    // autoFocus
                    // defaultCode="IN"
                    // layout="first"
                    // containerStyle={{ borderRadius: 5, }}
                    // textContainerStyle={{
                    //     color: 'red', height: 100,
                    //     borderRadius: 5,
                    // }}
                    />

                </View>
                {errorPhone != null ? (
                    <View style={Styles.ErrorContainer}>
                        <Text style={{ color: '#776e6e', fontSize: 15 }}>
                            {errorPhone}
                        </Text>
                    </View>
                ) : null}
            </View>
            <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 15 }}>


                {loader ? (
                    <CustomLoader />
                ) : (
                    <CoustomButton Title='Please Log In' onPress={() => onSubmit()} />
                )}

            </View>
            <Snackbar
                visible={snackIsVisible}
                textMessage="You have Phone Number in successfuly"
                actionHandler={() => {
                    setSnackIsVisible(false);
                }}
                accentColor="green"
                actionText="Success"
                distanceCallback={distance => {
                    setDistance(distance);
                }}
            />

        </SafeAreaView>
    )
}

export default Signup1;

const Styles = StyleSheet.create({
    contanenr: {
        flex: 1,
        backgroundColor: '#D6FCED',
        justifyContent: 'center',

    },
    lebletext: {
        color: '#F7B02D',
        fontSize: 20,
        margin: 25,
        marginHorizontal: 20,





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
        fontSize: 15,
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
        borderWidth: 1,
        borderColor: '#EEA42C',
        height: 45,
        marginHorizontal: 20,
        borderRadius: 5,
        // margin: 10,

    },
    ErrorContainer: {
        fontSize: 17,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'flex-end'
    }
})