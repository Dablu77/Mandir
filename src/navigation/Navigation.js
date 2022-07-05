import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signup1 from '../components/SignUp/Signup1';
import Signup2 from '../components/SignUp/Signup2';
import BottomTab from './BottomTab';
import KUndalireaport from '../components/BottomTabScreen/Aajscreen/KUndalireaport';
import Aaj from '../components/BottomTabScreen/Aaj';
import Rashiphal from '../components/BottomTabScreen/Aajscreen/Rashiphal'
import Sahityepanchanghscreen from '../components/BottomTabScreen/Mahabhandaarscreen/Sahityepanchanghscreen';
import SahityebhandarScreen from '../components/BottomTabScreen/Mahabhandaarscreen/SahityebhandarScreen'
import Profile from '../components/SignUp/Profile';
import Profileedit from '../components/SignUp/Profileedit';
// import Coustom from '../components/BottomTabScreen/Coustom';



const Stack = createStackNavigator();


function Navigator() {
    return (
        <Stack.Navigator
            initialRouteName="Coustom"

            screenOptions={{
                headerShown: false,
                animationEnabled: false,
            }}>
            {/* <Stack.Screen name='Coustom' component={Coustom} /> */}

            <Stack.Screen name='Signup1' component={Signup1} />
            <Stack.Screen name='Signup2' component={Signup2} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Profileedit' component={Profileedit} />
            <Stack.Screen name='BottomTab' component={BottomTab} />
            <Stack.Screen name='KUndalireaport' component={KUndalireaport} />
            <Stack.Screen name='Aaj' component={Aaj} />
            <Stack.Screen name='Rashiphal' component={Rashiphal} />
            <Stack.Screen name='Sahityepanchanghscreen' component={Sahityepanchanghscreen} />
            <Stack.Screen name='SahityebhandarScreen' component={SahityebhandarScreen} />









        </Stack.Navigator>

    )
}

export default Navigator;

