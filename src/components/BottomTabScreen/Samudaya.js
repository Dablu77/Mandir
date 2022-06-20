import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Abgeekahora from '../DrawerScreen.js/Abgeekahora';
import Almanac from '../DrawerScreen.js/Almanac';




const Drawer = createDrawerNavigator();


export default function Samudaya({ }) {
    return (


        <Drawer.Navigator
            screenOptions={{


                drawerActiveBackgroundColor: "#971F1F",
                drawerInactiveTintColor: "#150F0F",
                drawerActiveTintColor: "#FDF9F9",
                headerTintColor: 'black',
                // headerShown: false,
                // tabBarShowLabel: false,



                headerStyle: {
                    backgroundColor: "black",
                    headerTitle: false,

                },

                headerTintColor: 'white'
            }}>
            <Drawer.Screen name="Almanac" component={Almanac} />
            <Drawer.Screen name="Abgeekahora" component={Abgeekahora} />


        </Drawer.Navigator>

    )
}


