import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


function CoustomButton2({ Title2, onPress, }) {
    return (
        <View>

            <View style={[Styles.button]}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={Styles.buttonText}>{Title2}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CoustomButton2;

const Styles = StyleSheet.create({
    button: {

        backgroundColor: "#EEA42C",
        // borderRadius: 5,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 15,
        height: 40,
        width: 150,

    },

    buttonText: {
        color: '#FFFF',
        fontSize: 17,
        margin: 10,
        fontStyle: 'normal',
        lineHeight: 20,
        textAlign: 'center',



    }
});
