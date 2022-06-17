import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, } from 'react-native'
import React from 'react';
import download1 from '../../assets/download1.jpg';
import download2 from '../../assets/download2.jpg'
import CoustomButton2 from '../Common/CoustomButton2';

export default function Aaj({ navigation }) {
    return (
        <SafeAreaView style={Styles.contaner}>

            <View style={Styles.lebleBorder}>
                <Text style={Styles.lebletext}>निःशुल्क कुंडली</Text>
            </View>
            <ScrollView>
                <View >
                    <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate("KUndalireaport")}>
                        <Image source={download1} style={Styles.dowstyl} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 10 }}>
                        <Image source={download1} style={Styles.dowstyl} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate("Rashiphal")}>
                        <Image source={download1} style={{ borderRadius: 5, width: '100%' }} />
                    </TouchableOpacity>


                </View>
                <View style={Styles.lebleBorder2} >
                    <Text style={Styles.labeltext}>आज का पंचांग</Text>
                    <Text style={Styles.labeltext}>14 जून, मंगलवार</Text>

                </View>
                <View style={{ borderWidth: 1, borderColor: '#b5b1b0', height: 300, margin: 10, borderRadius: 5, backgroundColor: '#fff' }}>
                    <Text style={{ color: 'black', margin: 10 }}>State etc</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={download2} style={{ height: 90, width: 70, margin: 10, borderRadius: 5 }} />
                        <View style={{ marginVertical: 5, }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginVertical: 5 }}>शुक्ल पक्ष</Text>
                            <Text style={{ color: 'black', marginVertical: 5 }}>ज्येष्ठ मास</Text>
                            <Text style={{ color: 'black', marginVertical: 5 }}>विक्रम संवत् 2079</Text>
                        </View>
                    </View>
                    <Text style={{ color: 'black', margin: 30, fontWeight: 'bold' }}>क्या आपने आज का शुभ समय देखा?</Text>
                    <View style={{}}>
                        <CoustomButton2 Title2='सम्पूर्ण पंचांग देखें' />
                    </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: '#b5b1b0', height: 250, margin: 10, borderRadius: 5, backgroundColor: '#fff' }}>
                    <Image source={download1} style={{ borderRadius: 5, width: '100%' }} />
                    <Text style={{ color: 'black', margin: 15, fontSize: 19, fontWeight: '600' }}>जुड़ें प्रसिद्ध मंदिरों के समुदाय से</Text>
                    <Text style={{ color: 'black', marginHorizontal: 15 }}>और करें दैनिक दर्शन, भक्तों संग आरती</Text>

                </View>

                <View style={{ borderWidth: 1, borderColor: '#b5b1b0', height: 250, margin: 10, borderRadius: 5, backgroundColor: '#fff' }}>
                    <Image source={download1} style={{ borderRadius: 5, width: '100%' }} />
                    <Text style={{ color: 'black', margin: 15, fontSize: 19, fontWeight: '600' }}>शुभकामनाएं</Text>
                    <Text style={{ color: 'black', marginHorizontal: 15 }}>अपनों को भेजें शुभकामनाएं</Text>

                </View>
                <View style={Styles.lebleBorder} >
                    <Text style={{ color: 'black', fontWeight: '600', fontSize: 18 }}>गीता उपदेश</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: '#b5b1b0', height: 250, margin: 10, borderRadius: 5, backgroundColor: '#fff' }}>
                    <Image source={download1} style={{ borderRadius: 5, width: '100%' }} />
                    <Text style={{ color: 'black', margin: 15, fontSize: 19, fontWeight: '600' }}>गीता के वचनों में है जीवन का ज्ञान</Text>
                    <Text style={{ color: 'black', marginHorizontal: 15 }}>अपने प्रियजनों को भी भेजें</Text>

                </View>
                <View style={Styles.lebleBorder} >
                    <Text style={{ color: 'black', fontWeight: '600', fontSize: 18 }}>जीवन का अनमोल ज्ञान</Text>
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    contaner: {
        flex: 1,
        backgroundColor: '#D6FCED'


    },
    lebleBorder: {
        height: 35,
        width: '35%',
        borderRadius: 5,
        borderColor: '#F7B02D',
        borderWidth: 1,
        marginVertical: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    lebletext: {
        color: 'black',
        fontSize: 20,
        // fontWeight: '500',
    },
    lebleBorder2: {
        height: 40,
        width: '95%',
        borderRadius: 5,
        borderColor: '#F7B02D',
        borderWidth: 1,
        marginVertical: 15,
        marginHorizontal: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    dowstyl: {
        borderRadius: 5,
        width: '100%',
    },
    labeltext: {
        color: 'black',
        fontWeight: '600',
        fontSize: 18
    },


})