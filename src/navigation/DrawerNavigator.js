import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Almanac from '../components/DrawerScreen.js/Abgeekahora'
import Abgeekahora from '../components/DrawerScreen.js/Abgeekahora';



const Drawer = createDrawerNavigator();


export default function DrawerNavigator({ }) {
    return (


        <Drawer.Navigator screenOptions={{


            drawerActiveBackgroundColor: "#971F1F",
            drawerInactiveTintColor: "#150F0F",
            drawerActiveTintColor: "#FDF9F9",
            headerTintColor: 'black',
            // headerShown: false,
            tabBarShowLabel: false,
            // headerTitle: false,


            headerStyle: {
                backgroundColor: "black",


            },

            headerTintColor: 'white'
        }}>
            <Drawer.Screen name="Almanac" component={Almanac} />
            <Drawer.Screen name="Abgeekahora" component={Abgeekahora} />


        </Drawer.Navigator>

    )
}


