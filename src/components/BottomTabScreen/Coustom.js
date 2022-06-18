import React from 'react'
import { Image, View, } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hanuman from './CoustomScreen/Hanuman';
import Ganesh from './CoustomScreen/Ganesh';
import Shiv from './CoustomScreen/Shiv';
import durga1 from './CoustomScreen/durga1';
import Ram from './CoustomScreen/Ram';
import Krishna1 from './CoustomScreen/Krishna1';
import Laxmi from './CoustomScreen/Laxmi';
import Surya from './CoustomScreen/Surya';
import Shani1 from './CoustomScreen/Shani1';



// ===================Image icon png =======================>
import hanumanji from '../../assets/hanumanji.png'
import ganesh from '../../assets/ganesh.png'
import Shivji from '../../assets/Shivji.png'
import durga from '../../assets/durga.png'
import shani from '../../assets/shani.png'
import ram from '../../assets/ram.png'
import krishna from '../../assets/krishna.png'
import laxmi from '../../assets/laxmi.png'
import surya from '../../assets/surya.png'
import templet from '../../assets/templet.png'


const Tab = createMaterialTopTabNavigator();

export default function Sangeet() {
    return (
        <>



            <Tab.Navigator screenOptions={{
                tabBarScrollEnabled: true,
                tabBarShowLabel: false,
                tabBarPosition: 'bottom',


                tabBarLabelStyle: { fontSize: 16, fontWeight: '500' },
                tabBarStyle: { backgroundColor: '#F7B02D', },
                tabBarActiveTintColor: "black",
                tabBarIndicatorStyle: {
                    borderBottomColor: "#f8300d",
                    borderBottomWidth: 2,


                }


            }}>
                <Tab.Screen name="हनुमान जी" component={Hanuman} options={{
                    tabBarIcon: () => (<Image source={hanumanji} style={{ width: 45, height: 45, right: 10, marginVertical: -10 }} />)
                }} />
                <Tab.Screen name="गणेश जी" component={Ganesh} options={{
                    tabBarIcon: () => (<Image source={ganesh} style={{ width: 35, height: 35, right: 10, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name="शिव जी" component={Shiv} options={{
                    tabBarIcon: () => (<Image source={Shivji} style={{ width: 35, height: 35, right: 5, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name="दुर्गा जी" component={durga1} options={{
                    tabBarIcon: () => (<Image source={durga} style={{
                        width: 40,
                        height: 40,
                        right: 10,
                        marginVertical: -5
                    }} />)
                }} />
                <Tab.Screen name="शनि देव" component={Shani1} options={{
                    tabBarIcon: () => (<Image source={shani} style={{ width: 35, height: 35, right: 5, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name="श्री राम" component={Ram} options={{
                    tabBarIcon: () => (<Image source={ram} style={{ width: 30, height: 30, right: 5, }} />)
                }} />
                <Tab.Screen name="श्री कृष्‍ण" component={Krishna1} options={{
                    tabBarIcon: () => (<Image source={krishna} style={{ width: 40, height: 40, right: 5, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name="लक्ष्मी माता" component={Laxmi} options={{
                    tabBarIcon: () => (<Image source={laxmi} style={{ width: 40, height: 40, right: 10, marginVertical: -8 }} />)
                }} />
                <Tab.Screen name="सूर्य देव" component={Surya} options={{
                    tabBarIcon: () => (<Image source={surya} style={{ width: 45, height: 45, right: 10, marginVertical: -8 }} />)
                }} />

            </Tab.Navigator>

        </>
    )
}

