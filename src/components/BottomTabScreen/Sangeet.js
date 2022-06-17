import React from 'react'
import { Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hanumanji from './SangeetScreen/Hanumanji';
import Ganeshji from './SangeetScreen/Ganeshji';
import Shiv from './SangeetScreen/Shiv';
import durgaji from './SangeetScreen/durgaji';
import ShaniDev from './SangeetScreen/ShaniDev';
import Ram from './SangeetScreen/Ram';
import Krishna from './SangeetScreen/Krishna';
import Laxmi from './SangeetScreen/Laxmi';
import Surya from './SangeetScreen/Surya';
import Vishnu from './SangeetScreen/Vishnu';
import Saraswati from '../BottomTabScreen/SangeetScreen/Saraswati'
import Baala from './SangeetScreen/Baala';
import Gayatri from './SangeetScreen/Gayatri ';
import Kali from './SangeetScreen/Kali';
import Santoshi from './SangeetScreen/Santoshi';
import Khatushyam from './SangeetScreen/Khatushyam';
import Saibaba from './SangeetScreen/Saibaba';
import SrimadBhagavad from './SangeetScreen/SrimadBhagavad';
import Sadhana from './SangeetScreen/Sadhana';
import hanumanji from '../../assets/hanumanji.png'
import ganesh from '../../assets/ganesh.png'
import Shivji from '../../assets/Shivji.png'
import durga from '../../assets/durga.png';
import shani from '../../assets/shani.png';
import ram from '../../assets/ram.png';
import krishna from '../../assets/krishna.png'
import laxmi from '../../assets/laxmi.png'
import surya from '../../assets/surya.png';
import veeshnu from '../../assets/veeshnu.png'
import sardemata from '../../assets/sardemata.png'
import TirupatiBala from '../../assets/TirupatiBala.jpg'
import gayatri from '../../assets/gayatri.png'
import kali from '../../assets/kali.png'
import santosi from '../../assets/santosi.png'
import katusyam from '../../assets/katusyam.png'
import saibaba from '../../assets/saibaba.png'
import srimadBhagavad from '../../assets/srimadBhagavad.png'
import om from '../../assets/om.png'


const Tab = createMaterialTopTabNavigator();

export default function Sangeet() {
    return (
        <>

            <Tab.Navigator screenOptions={{
                tabBarScrollEnabled: true,

                tabBarLabelStyle: { fontSize: 16, fontWeight: '500' },
                tabBarStyle: { backgroundColor: '#F7B02D', },
                tabBarActiveTintColor: "black",
                tabBarIndicatorStyle: {
                    borderBottomColor: "#f8300d",
                    borderBottomWidth: 2,

                }


            }}>
                <Tab.Screen name="हनुमान जी" component={Hanumanji} options={{
                    tabBarIcon: () => (<Image source={hanumanji} style={{ width: 45, height: 45, right: 10, marginVertical: -10 }} />)
                }} />
                <Tab.Screen name="गणेश जी" component={Ganeshji} options={{
                    tabBarIcon: () => (<Image source={ganesh} style={{ width: 35, height: 35, right: 10, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name="शिव जी" component={Shiv} options={{
                    tabBarIcon: () => (<Image source={Shivji} style={{ width: 35, height: 35, right: 5, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name="दुर्गा जी" component={durgaji} options={{
                    tabBarIcon: () => (<Image source={durga} style={{
                        width: 40,
                        height: 40,
                        right: 10,
                        marginVertical: -5
                    }} />)
                }} />
                <Tab.Screen name="शनि देव" component={ShaniDev} options={{
                    tabBarIcon: () => (<Image source={shani} style={{ width: 35, height: 35, right: 5, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name="श्री राम" component={Ram} options={{
                    tabBarIcon: () => (<Image source={ram} style={{ width: 30, height: 30, right: 5, }} />)
                }} />
                <Tab.Screen name="श्री कृष्‍ण" component={Krishna} options={{
                    tabBarIcon: () => (<Image source={krishna} style={{ width: 40, height: 40, right: 5, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name="लक्ष्मी माता" component={Laxmi} options={{
                    tabBarIcon: () => (<Image source={laxmi} style={{ width: 40, height: 40, right: 10, marginVertical: -8 }} />)
                }} />
                <Tab.Screen name="सूर्य देव" component={Surya} options={{
                    tabBarIcon: () => (<Image source={surya} style={{ width: 45, height: 45, right: 10, marginVertical: -8 }} />)
                }} />
                <Tab.Screen name='विष्णु जी ' component={Vishnu} options={{
                    tabBarIcon: () => (<Image source={veeshnu} style={{ width: 40, height: 40, right: 10, marginVertical: -8 }} />)
                }} />
                <Tab.Screen name='सरस्वती जी ' component={Saraswati} options={{
                    tabBarIcon: () => (<Image source={sardemata} style={{ width: 40, height: 40, right: 10, marginVertical: -8 }} />)
                }} />
                <Tab.Screen name='तिरुपति बालाजी' component={Baala} options={{
                    tabBarIcon: () => (<Image source={TirupatiBala} style={{ width: 40, height: 40, right: 10, marginVertical: -8 }} />)
                }} />
                <Tab.Screen name='गायत्री माता' component={Gayatri} options={{
                    tabBarIcon: () => (<Image source={gayatri} style={{ width: 45, height: 45, right: 10, marginVertical: -8 }} />)
                }} />
                <Tab.Screen name='काली माता' component={Kali} options={{
                    tabBarIcon: () => (<Image source={kali} style={{ width: 45, height: 45, right: 10, marginVertical: -8 }} />)
                }} />
                <Tab.Screen name='संतोषी माता' component={Santoshi} options={{
                    tabBarIcon: () => (<Image source={santosi} style={{ width: 35, height: 35, right: 10, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name='खाटू श्याम जी' component={Khatushyam} options={{
                    tabBarIcon: () => (<Image source={katusyam} style={{ width: 35, height: 35, right: 10, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name='साईं बाबा' component={Saibaba} options={{
                    tabBarIcon: () => (<Image source={saibaba} style={{ width: 40, height: 40, right: 5, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name='श्रीमद्भगवद्गीता' component={SrimadBhagavad} options={{
                    tabBarIcon: () => (<Image source={srimadBhagavad} style={{ width: 40, height: 40, right: 10, marginVertical: -5 }} />)
                }} />
                <Tab.Screen name='साधना' component={Sadhana} options={{
                    tabBarIcon: () => (<Image source={om} style={{ width: 40, height: 40, right: 5, marginVertical: -5 }} />)
                }} />








            </Tab.Navigator>
        </>
    )
}