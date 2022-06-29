import React from 'react';
import { Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Abgeekahora from '../DrawerScreen.js/Abgeekahora';
import Almanac from '../DrawerScreen.js/Almanac';
import Choghira from '../DrawerScreen.js/Choghira';
import Rashiphal from '../DrawerScreen.js/Rashiphal';
import GeetAshlok from '../DrawerScreen.js/GeetAshlok';
import Sahityebhandar from '../DrawerScreen.js/Sahityebhandar';
import Appret from '../DrawerScreen.js/Appret';
import Appshare from '../DrawerScreen.js/Appshare';
import Bate from '../DrawerScreen.js/Bate';
import Sujhawbheje from '../DrawerScreen.js/Sujhawbheje';
import calendar from '../../assets/calendar.png'
import whatch from '../../assets/whatch.png'
import whatch1 from '../../assets/whatch1.png'
import rashiphal from '../../assets/rashiphal.png'
import geetaslok from '../../assets/geetaslok.png'
import books from '../../assets/books.png'
import star from '../../assets/star.png'
import share from '../../assets/share.png'
import pujari from '../../assets/pujari.png'
import smss from '../../assets/smss.png'
import Coustomdrawer from '../DrawerScreen.js/Coustomdrawer';
import LogOut from '../DrawerScreen.js/LogOut'
import loginicone from '../../assets/loginicone.png'

const Drawer = createDrawerNavigator();


export default function Samudaya({ }) {
    return (


        <Drawer.Navigator
            drawerContent={(props) => <Coustomdrawer {...props} />}


            screenOptions={{
                headerTitle: false,
                // headerShown: false,
                drawerActiveBackgroundColor: "#ff9933",
                drawerInactiveTintColor: "#150F0F",
                drawerActiveTintColor: "#FDF9F9",
                headerTintColor: 'black',
                // headerShown: false,




                headerStyle: {
                    backgroundColor: "#F7B02D",
                    headerTitle: false,


                },

                // headerTintColor: 'black'
            }
            }>
            <Drawer.Screen name="पंचांग" component={Almanac} options={{
                drawerIcon: () => (<Image source={calendar} style={{ width: 30, height: 30, }} />)
            }} />
            <Drawer.Screen name="अभी का होरा" component={Abgeekahora} options={{
                drawerIcon: () => (<Image source={whatch} style={{ width: 30, height: 30, }} />)
            }} />
            <Drawer.Screen name="चौघड़िया" component={Choghira} options={{
                drawerIcon: () => (<Image source={whatch1} style={{ width: 35, height: 35, }} />)
            }} />
            <Drawer.Screen name="राशिफल" component={Rashiphal} options={{
                drawerIcon: () => (<Image source={rashiphal} style={{ width: 30, height: 30, }} />)
            }} />
            <Drawer.Screen name="गीता श्लोक" component={GeetAshlok} options={{
                drawerIcon: () => (<Image source={geetaslok} style={{ width: 30, height: 30, }} />)
            }} />
            <Drawer.Screen name="साहित्य भंडार" component={Sahityebhandar} options={{
                drawerIcon: () => (<Image source={books} style={{ width: 30, height: 30, }} />)
            }} />
            <Drawer.Screen name="ऐप रेट करें" component={Appret} options={{
                drawerIcon: () => (<Image source={star} style={{ width: 30, height: 30, }} />)
            }} />
            <Drawer.Screen name="ऐप शेयर करें" component={Appshare} options={{
                drawerIcon: () => (<Image source={share} style={{ width: 30, height: 30, }} />)
            }} />
            <Drawer.Screen name="प्रतिष्ठित ज्योतिषी से बात करें" component={Bate} options={{
                drawerIcon: () => (<Image source={pujari} style={{ width: 30, height: 30, }} />)
            }} />
            <Drawer.Screen name="अपने सुझाव भेजें" component={Sujhawbheje} options={{
                drawerIcon: () => (<Image source={smss} style={{ width: 30, height: 30, }} />)
            }} />
            <Drawer.Screen name="लॉग आउट" component={LogOut} options={{
                drawerIcon: () => (<Image source={loginicone} style={{ width: 25, height: 25, marginHorizontal: 5 }} />)
            }} />



        </Drawer.Navigator>

    )
}


