import React from 'react'
import { Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Mukhya from './Mahabhandaarscreen/Mukhya';
import Panchangh from './Mahabhandaarscreen/Panchangh';
import Sahitye from './Mahabhandaarscreen/Sahitye';
import Subhveechar from './Mahabhandaarscreen/Subhveechar';
import Geeta from './Mahabhandaarscreen/Geeta';
import Teevi from './Mahabhandaarscreen/Teevi';
import Sujhawa from './Mahabhandaarscreen/Sujhawa';
import mandiricon from '../../assets/mandiricon.png'



const Tab = createMaterialTopTabNavigator();

export default function Mahabhandaar() {
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
                <Tab.Screen name="मुख्य" component={Mukhya} options={{
                    tabBarIcon: () => (<Image source={mandiricon} style={{ width: 35, height: 35, right: 5 }} />)
                }} />
                <Tab.Screen name="पंचांग" component={Panchangh} options={{
                    tabBarIcon: () => (<Image source={mandiricon} style={{ width: 35, height: 35, right: 5 }} />)
                }} />
                <Tab.Screen name="साहित्य" component={Sahitye} options={{
                    tabBarIcon: () => (<Image source={mandiricon} style={{ width: 35, height: 35, right: 5 }} />)
                }} />
                <Tab.Screen name="सुविचार" component={Subhveechar} options={{
                    tabBarIcon: () => (<Image source={mandiricon} style={{ width: 35, height: 35, right: 5 }} />)
                }} />
                <Tab.Screen name="गीता श्लोक" component={Geeta} options={{
                    tabBarIcon: () => (<Image source={mandiricon} style={{ width: 35, height: 35, right: 5 }} />)
                }} />
                <Tab.Screen name="टीवी" component={Teevi} options={{
                    tabBarIcon: () => (<Image source={mandiricon} style={{ width: 35, height: 35, right: 5 }} />)
                }} />
                <Tab.Screen name="सुझाव" component={Sujhawa} options={{
                    tabBarIcon: () => (<Image source={mandiricon} style={{ width: 35, height: 35, right: 5 }} />)
                }} />













            </Tab.Navigator>
        </>
    )
}