import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


function CoustomButton({ Title, onPress, }) {
    return (
        <View>

            <View style={[Styles.button]}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={Styles.buttonText}>{Title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CoustomButton;

const Styles = StyleSheet.create({
    button: {

        backgroundColor: "#EEA42C",
        // borderRadius: 5,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 15,
        height: 40,

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
