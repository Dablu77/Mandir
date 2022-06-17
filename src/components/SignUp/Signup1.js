import { View, Text, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react';
import mandir from '../../assets/mandir.png'
import CoustomButton from '../Common/CoustomButton';

export default function Signup1({ navigation }) {
    return (
        <SafeAreaView style={Styles.contanenr}>
            <Image source={mandir} style={{ height: 200, width: 300, marginHorizontal: 30, marginVertical: 30 }} />

            <Text style={Styles.lebletext}>Welcome To Ram Mandir</Text>
            <View>
                <Text style={Styles.lebletext2}>Enter Your Phone Number</Text>
                <TextInput
                    style={Styles.input}
                    // labelValue={email}
                    // onChangeText={txt => {
                    //     setEmail(txt), _emailvalidate(txt);
                    // }}
                    placeholder="Enter Phone Number"
                    placeholderTextColor="#BAC3C0"
                />

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
        // marginVertical: 20,


    },
    lebletext2: {
        color: '#F7B02D',
        marginHorizontal: 25,
        margin: 10,
        fontWeight: '700'
    },
    input: {
        height: 45,
        borderWidth: 1,
        color: '#F7B02D',
        borderColor: '#EEA42C',
        fontSize: 16,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        marginHorizontal: 15,
        borderRadius: 5,
    },

})