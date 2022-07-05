import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, TextInput, } from 'react-native'
import React, { useState, useEffect } from 'react'
import arow from '../../assets/arow.png'
import camera from '../../assets/camera.png'
import user from '../../assets/user.png'
import ghari from '../../assets/ghari.png'
import calendar33 from '../../assets/calendar33.png'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ImagePicker from 'react-native-image-crop-picker';
import CoustomButton from '../Common/CoustomButton';
// import { onSelectImage } from 'react-native-image-crop-picker'
import TimePicker from 'react-native-date-picker'
// import TimePicker from 'react-native-simple-time-picker';

// import { event } from 'react-native-reanimated';
import moment from 'moment';
import { RadioButton } from 'react-native-paper';



// function Profileedit() {
const Profileedit = props => {

    // const [isLoading, setIsLoading] = useState(false);
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [proffession, setproffession] = useState("")

    const [placeOfbirth, setPlaceOfbirth] = useState("")

    const [imageUrlPath, setImageUrlPath] = useState(null);
    const [imageUrlData, setImageUrlData] = useState('');
    // const [photo, setPhoto] = useState('');
    // console.log(imageUrlPath);
    const [editprofile, setEditProfile] = useState("")

    // ************ First Name Validations ************
    const [FirstName, setFirstName] = useState('');
    const [errorFirstName, setErrorFirstName] = useState(null);
    const _validateFirstName = fname => {
        var fnameRegex = /^[a-z A-Z ]{2,32}$/i;
        if (fname == '' || fname == undefined || fname == null) {
            setErrorFirstName('*Please enter first name.');
        } else if (!fnameRegex.test(fname)) {
            setErrorFirstName('*Please enter valid first name.');
        } else {
            setErrorFirstName(null);
        }
    };

    // const onSelectImage = async () => {
    //     const permissionStatus = await androidCameraPermission();
    //     if (permissionStatus || Platform.OS == 'ios') {
    //         Alert.alert('Upload Photos', 'Choose an options', [
    //             { text: 'Gallary', onPress: onGallary },
    //             { text: 'Cancel', onPress: () => { } },
    //         ]);
    //     }
    // };


    // ************* On Gallary Picker *************
    const onGallary = () => {
        ImagePicker.openPicker({
            cropping: true,
            quality: 1,
            includeBase64: true,
            mediaType: 'any',
        }).then(image => {
            setImageUrlPath(image.path);
            setImageUrlData(image.data);
        });
    };


    const [token, setToken] = useState("")

    const a = async () => {
        const token = await AsyncStorage.getItem('token');
        setToken(token)
    }


    useEffect(() => {
        a();
    })

    // const image1 = imageUrlPath.split('/');
    // const image2 = image1[image1.length - 1]


    const setIsLoading = async () => {

        fetch('http://dmandir.houszzz.com/api/v1/user/editProfile', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                token: token,


            },
            body: JSON.stringify({
                name: FirstName,
                address: address,
                age: age,
                gender: gender,
                dateOfbirth: selectedDate,
                timeOfbirth: "12:00",
                placeOfbirth: placeOfbirth,
                proffession: proffession,
                profile: `image/jpeg;base64,${imageUrlData}`,

            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
            })
            .catch((error) => {
                console.error(error);
            })
    }


    useEffect(() => {
        Updateprofile();
    });



    const [ProfileDetails, setProfileDetails] = useState("");

    const [name, setName] = useState()
    // ************ get editprofile Profile Api Integration ************"
    const Updateprofile = async () => {
        const value = await AsyncStorage.getItem('token');

        console.log("techsell", value);

        // setIsLoading(true);
        axios({
            method: 'GET',
            url: "http://dmandir.houszzz.com/api/v1/user/getProfile",
            headers: {
                token: token,
            },
        })
            .then(response => {
                // if (response.responseCode === 200) {
                //     console.log('====== Profile Response ======', response);

                // } else

                console.log("hey", response)
                setProfileDetails(response.result)
                // if (response.responseCode === 200) {
                //     console.log('====== Profile Response ======', response);
                //     setProfileDetails(response.result);
                //     // setIsLoading(false);
                // } else {
                //     alert('Something went wrong.');
                //     // setIsLoading(false);
                // }
            })
        // .catch(err => console.log('==== Profile Catch err ====', err));
    };




    // const onSubmit = () => {
    //     console.log("");
    //     if (editprofile === '') {
    //         setEditProfile('editprofile');
    //     }
    //     else {
    //         editprofileApi();
    //     }
    // };






    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState();


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };


    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };



    // console.log("hey", date)


    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    // console.log(date)

    // redder()
    // {
    return (
        <SafeAreaView style={{ flexG: 1, backgroundColor: '#D6FCED' }}>
            <View style={Styles.lebalecontaenr}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
                    <Image source={arow} style={Styles.arrowstyles} />
                </TouchableOpacity>
                <Text style={Styles.lebaltext}>प्रोफाइल एडिट करें</Text>

            </View>
            <TouchableOpacity style={Styles.profilebox} >

                {imageUrlPath && <Image source={{ uri: imageUrlPath }} style={{ width: 96, height: 96, borderRadius: 50 }} />}

            </TouchableOpacity>

            <TouchableOpacity style={Styles.camerabox}
                onPress={onGallary}
            >
                <Image source={camera} style={Styles.imgstyles} />
                <Text style={Styles.profiletext}>फ़ोटो बदले</Text>
            </TouchableOpacity>
            <View style={Styles.sectionStyle}>
                <Image source={user} style={Styles.phoneicone} />
                <TextInput
                    style={Styles.input}
                    labelValue={FirstName}
                    onChangeText={txt => {
                        setFirstName(txt), _validateFirstName(txt);
                    }}
                    placeholder="आपका पूरा नाम"
                    maxLength={30}

                    placeholderTextColor="#776e6e"
                    underlineColorAndroid="transparent"

                />
            </View>
            <Text style={Styles.textlablestyle}>आपका लिंग</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, }}>


                <RadioButton.Item
                    value="Male"
                    label="Male"
                    status={gender === 'Male' ? 'checked' : 'unchecked'}
                    onPress={() => setGender('Male')}
                />

                <RadioButton.Item
                    value="Female"
                    label="Female"

                    status={gender === 'Female' ? 'checked' : 'unchecked'}
                    onPress={() => setGender('Female')}

                />
                <RadioButton.Item
                    value="Other"
                    label="Other"

                    status={gender === 'Other' ? 'checked' : 'unchecked'}
                    onPress={() => setGender('Other')}
                />

            </View>
            <TextInput
                multiline
                numberOfLines={10}
                placeholderTextColor="#776e6e"
                style={Styles.input2}
                placeholder="Address"
                onChangeText={txt => {
                    setAddress(txt);
                }}



            />
            {/* <TextInput
                multiline
                numberOfLines={10}
                placeholderTextColor="#776e6e"
                style={Styles.input2}
                placeholder="Address"
                onChangeText={txt => {
                    setPlaceOfbirth(txt);
                }}
            /> */}

            <View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginVertical: 5 }} >Age</Text>
                    <Text style={{ color: 'black', marginVertical: 15, fontSize: 15, fontWeight: 'bold' }}>date of borth</Text>

                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>


                    <TextInput
                        keyboardType="numeric"
                        placeholderTextColor="#776e6e"
                        style={Styles.input3}
                        placeholder="Age"
                        maxLength={2}
                        onChangeText={txt => {
                            setAge(txt);
                        }}


                    />

                    <View style={{
                        borderWidth: 1, height: 45, width: 200, borderRadius: 5,
                        display: 'flex',
                        backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={showDatePicker}>

                            <Image source={calendar33} style={{ height: 35, width: 35, right: 10, marginVertical: 3 }} />
                        </TouchableOpacity>
                        <Text style={Styles.labletextstyle}>{`${selectedDate ? moment(selectedDate).format("MM/DD/YYYY") : "Please select date"}`}</Text>
                    </View>

                </View>
            </View>


            <View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}

                    onChangeText={txt => {
                        setSelectedDate(txt);
                    }}

                />
            </View>
            <Text style={{ color: 'black', fontWeight: 'bold', marginHorizontal: 20, }}>Time Of Birth</Text>
            <View style={{ borderWidth: 1, height: 45, borderColor: 'grey', backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Image source={ghari} style={{ height: 50, width: 50, marginVertical: -4 }} />
                </TouchableOpacity>
                <Text style={Styles.labletextstyle}>{`${date ? moment(date).format("hh/mm/a ") : "Please select date"}`}</Text>


            </View>

            <View>
                <TimePicker
                    modal
                    textColor='White'
                    backgroundColor='white'
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
            {/* <View style={{ borderWidth: 1, height: 45, borderColor: 'grey', backgroundColor: 'white', marginHorizontal: 20, borderRadius: 5, margin: 20 }}>
            </View> */
            }
            <TextInput
                multiline
                numberOfLines={10}
                placeholderTextColor="#776e6e"
                style={Styles.input2}
                placeholder="Proffession"
                onChangeText={txt => {
                    setproffession(txt);
                }}


            />


            <View>
                <CoustomButton Title='Save' onPress={() => setIsLoading()} />
            </View>
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
        height: 60,
        color: '#F7B02D',
        fontSize: 16,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        marginVertical: 15,
        marginHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',


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
    labletextstyle: {
        color: 'black',
        fontSize: 17,
        fontWeight: '500',
        marginVertical: 10
    }



})