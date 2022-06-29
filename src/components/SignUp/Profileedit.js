import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState, } from 'react'
// import React, { Component } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

import arow from '../../assets/arow.png'
import camera from '../../assets/camera.png'
import user from '../../assets/user.png'
import calendar33 from '../../assets/calendar33.png'
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { DatePickerModal } from 'react-native-paper-dates';
// import DatePicker from 'react-native-date-picker'


import ghari from '../../assets/ghari.png'

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

function Profileedit() {
    // const [isSelected, setSelection] = useState(false);


    // const [male, setMale] = useState(false)
    // const [female, setFeMale] = useState(false)
    // const [other, setOther] = useState(false)


    const [imageUri, setimageUri] = useState()

    const openGallery = () => {
        let options = {
            StorageOptions: {
                path: 'images',
                mediaType: 'photo'
            },
            includeBase64: true


        };
        launchImageLibrary(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.TouchableOpacity) {
                console.log('User tapped custom button  ', response.TouchableOpacity);
            } else {
                const source = { usri: 'data:image/jpeg;base64,' + response.base64 };
                setimageUri(source)
            }
        });


    }
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)



    // redder()
    // {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#D6FCED' }}>
            <View style={Styles.lebalecontaenr}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Image source={arow} style={Styles.arrowstyles} />
                </TouchableOpacity>
                <Text style={Styles.lebaltext}>प्रोफाइल एडिट करें</Text>

            </View>
            <Image source={imageUri} style={Styles.profilebox}>

            </Image>
            <TouchableOpacity style={Styles.camerabox} onPress={() => {
                openGallery()
            }}>
                <Image source={camera} style={Styles.imgstyles} />
                <Text style={Styles.profiletext}>फ़ोटो बदले</Text>
            </TouchableOpacity>
            <View style={Styles.sectionStyle}>
                <Image source={user} style={Styles.phoneicone} />
                <TextInput
                    style={Styles.input}
                    // labelValue={phoneNumber}
                    // onChangeText={txt => {
                    //     setphoneNumber(txt), _phonenumbervalidate(txt);
                    // }}
                    placeholder="आपका पूरा नाम"
                    maxLength={30}

                    placeholderTextColor="#776e6e"
                    underlineColorAndroid="transparent"
                // onChangeText={onChangeNumber} 
                // onChangeText={onChangeText}
                // value={text}
                />
            </View>
            <Text style={Styles.textlablestyle}>आपका लिंग</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, }}>

                <BouncyCheckbox
                    size={25}
                    fillColor="#F7B02D"
                    unfillColor="#FFFFFF"
                    text="Male"
                    iconStyle={{ borderColor: "black", }}
                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                // onPress={(isChecked: boolean) => { }}
                />
                <BouncyCheckbox
                    size={25}
                    fillColor="#F7B02D"
                    unfillColor="#FFFFFF"
                    text="Female"
                    iconStyle={{ borderColor: "black", }}
                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                // onPress={(isChecked: boolean) => { }}
                />
                <BouncyCheckbox
                    size={25}
                    fillColor="#F7B02D"
                    unfillColor="#FFFFFF"
                    text="Other"
                    iconStyle={{ borderColor: "black", }}
                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                // onPress={(isChecked: boolean) => { }}
                />

            </View>
            <TextInput
                multiline
                numberOfLines={10}
                placeholderTextColor="#776e6e"
                style={Styles.input2}
                placeholder="Address"


            />

            <View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginVertical: 5 }} >Age</Text>
                    <Text style={{ color: 'black', marginVertical: 15, fontSize: 15, fontWeight: 'bold' }}>Date Of Birth </Text>

                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>


                    <TextInput
                        keyboardType="numeric"
                        placeholderTextColor="#776e6e"
                        style={Styles.input3}
                        placeholder="Age"
                        maxLength={2}


                    />

                    <View style={{ borderWidth: 1, height: 45, width: 110, borderRadius: 5, backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={showDatePicker}>
                            <Image source={calendar33} style={{ height: 35, width: 35, margin: 3 }} />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>


            <View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <Text style={{ color: 'black', fontWeight: 'bold', marginHorizontal: 20, }}>Time Of Birth</Text>
            <View style={{ borderWidth: 1, height: 45, borderColor: 'grey', backgroundColor: 'white', marginHorizontal: 20, borderRadius: 5 }}>
                <TouchableOpacity onPress={() => setOpen(true)} >
                    <Image source={ghari} style={{ height: 50, width: 50 }} />
                </TouchableOpacity>
            </View>

            {/* <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            /> */}
        </SafeAreaView>
    );
}
// }


export default Profileedit;

const Styles = StyleSheet.create({
    arrowstyles: {
        height: 30,
        width: 30,
        marginHorizontal: 20,

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
        fontSize: 20,
        marginHorizontal: 10
    },
    numprofile: {
        color: 'black',
        textAlign: 'center',
        fontSize: 17,
        marginVertical: 5
    },
    imgstyles: {
        height: 25,
        width: 25,
    },
    input: {
        flex: 1,
        height: 40,
        color: '#F7B02D',
        fontSize: 16,
        paddingHorizontal: 15,

    },
    phoneicone: {
        // padding: 10,
        margin: 5,
        height: 30,
        width: 30,
        resizeMode: 'stretch',
        alignItems: 'center',
        marginHorizontal: 10
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.4,
        borderColor: 'grey',
        height: 45,
        borderRadius: 5,
        margin: 10,
        marginHorizontal: 15
    },
    textlablestyle: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        // margin: 20
        marginHorizontal: 20
    },
    camerabox: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    labeltext: {
        color: 'black'
    },
    input2: {
        // flex: 1,
        height: 70,
        color: '#F7B02D',
        fontSize: 16,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        marginVertical: 15,
        marginHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey'


    },
    input3: {
        // flex: 1,
        height: 40,
        width: 60,
        color: '#F7B02D',
        fontSize: 16,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        // marginVertical: -20,
        marginHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey'


    },



})