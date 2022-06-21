import { View, Text, Image, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import templet from '../../../assets/templet.png'
import shiv1 from '../../../assets/shiv1.jpg'
import templebell from '../../../assets/templebell.png'
import shiv2 from '../../../assets/shiv2.jpg'
import shiv3 from '../../../assets/shiv3.jpg'
import Swiper from 'react-native-swiper'
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export default function Shiv() {
    return (
        <SafeAreaView style={Styles.contaner}>
            <View>
                <Image source={templet} style={{ height: windowHeight / 7, width: windowWidth, position: 'absolute', zIndex: +999 }} />
            </View>
            <View style={{ display: 'flex', position: 'absolute', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={templebell} style={Styles.imgstyle1} />
                <Image source={templebell} style={Styles.imgstyle1} />


            </View>
            <Swiper
                // loop
                // zoom={false}
                horizontal={false}
                showsPagination={false}

            >
                <Image source={shiv1} style={Styles.Imagestle} />
                <Image source={shiv2} style={Styles.Imagestle} />
                <Image source={shiv3} style={Styles.Imagestle} />
            </Swiper>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    contaner: {
        backgroundColor: '#D6FCED',
        flex: 1,

    },
    imgstyle1: {
        zIndex: +99,

    },
    Imagestle: {
        zIndex: -999,
        height: windowHeight,
        width: windowWidth,




    }
})