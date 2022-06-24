import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import mandir from '../../assets/mandir.png'
import Playvideos from '../../assets/Playvideos.jpg'
import user from '../../assets/user.png'
import arow3 from '../../assets/arow3.png'

import BottomSheet from 'reanimated-bottom-sheet';


export default function Coustomdrawer(props) {
    const renderContent = () => (
        <View
            style={{
                backgroundColor: '#b3d9ff',
                padding: 10,
                height: 450,
                borderRadius: 15,
                borderWidth: 2,
                borderColor: '#F7B02D',

            }}
        >
            <Image source={mandir} style={{ height: 50, width: 70, alignSelf: 'center', }} />
            <Text style={{ color: '#000', fontSize: 18, fontWeight: '700', textAlign: 'center', margin: 10 }}>आगे बढ़ने के लिए लॉगिन करें</Text>
            <View style={{ marginHorizontal: 20, }}>
                <Button title="📞  Truecaller से लॉगिन करें"

                />
            </View>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <Button title="📞   फ़ोन से लॉगिन करें"
                    color="#F7B02D"
                />
            </View>
        </View>
    );

    const sheetRef = React.useRef(null);

    return (
        <ScrollView style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#D6FCED", flex: 1, }}>
                <Image source={mandir} style={{ height: 100, width: 150, marginHorizontal: 60, }} />
                <View style={{ borderWidth: 1, borderColor: '#F7B02D', marginVertical: 10, marginHorizontal: 20, borderRadius: 5, }}>
                    <Text style={{ color: '#F7B02D', textAlign: 'center', marginVertical: 5, fontSize: 20, fontWeight: '600' }}>आपका अपना मंदिर</Text>
                </View>
                <TouchableOpacity style={Styles.lablebox} onPress={() => sheetRef.current.snapTo(0)}>
                    <Image source={user} style={{ height: 40, width: 40, alignSelf: 'center', borderRadius: 10 }} />
                    <Text style={{ color: '#F7B02D', fontSize: 17, fontWeight: '700', alignSelf: 'center' }}>लॉगिन करें</Text>
                    <Image source={arow3} style={{ height: 25, width: 25, margin: 13, left: 15 }} />

                </TouchableOpacity>
                <TouchableOpacity style={Styles.lablebox} onPress={() => { props.navigation.navigate('KUndalireaport') }}>

                    <Image source={Playvideos} style={{ height: 40, width: 40, alignSelf: 'center', borderRadius: 10 }} />
                    <Text style={{ color: '#F7B02D', fontSize: 17, fontWeight: '700', alignSelf: 'center' }}>निःशुल्क कुंडली बनवाएँ</Text>
                </TouchableOpacity>
                <DrawerItemList {...props} />

                <BottomSheet
                    ref={sheetRef}
                    snapPoints={[450, 300, 0]}
                    borderRadius={10}
                    renderContent={renderContent}
                // enablePanDownToClose={true}
                />



            </DrawerContentScrollView>
            <View>

            </View>

        </ScrollView>
    )
}

const Styles = StyleSheet.create({

    lablebox: {
        height: 50,
        borderWidth: 1,
        borderColor: '#F7B02D',
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }

})