import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import mandir from '../../assets/mandir.png'


export default function Coustomdrawer(props) {
    return (
        <ScrollView style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#D6FCED", flex: 1, }}>
                <Image source={mandir} style={{ height: 100, width: 150, marginHorizontal: 60, }} />
                <View style={{ borderWidth: 1, borderColor: '#F7B02D', marginVertical: 10, marginHorizontal: 20, borderRadius: 5, }}>
                    <Text style={{ color: '#F7B02D', textAlign: 'center', marginVertical: 5, fontSize: 20, fontWeight: '600' }}>आपका अपना मंदिर</Text>
                </View>
                <View style={{ height: 40, borderWidth: 1, borderColor: '#F7B02D', marginVertical: 10, marginHorizontal: 20, borderRadius: 5, }}>

                </View>
                <View style={{ height: 40, borderWidth: 1, borderColor: '#F7B02D', marginVertical: 10, marginHorizontal: 20, borderRadius: 5, }}>

                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View>

            </View>
        </ScrollView>
    )
}