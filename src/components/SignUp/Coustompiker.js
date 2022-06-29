import React, { Component } from 'react';
import { Picker, SafeAreaView, } from 'react-native';

class Coustompiker extends Component {
    state = {
        hand: 'right',
    }

    render() {
        return (
            <SafeAreaView style={{ borderWidth: 1, backgroundColor: '#56423D', borderRadius: 5, width: 120, height: 45 }}>

                <Picker
                    selectedValue={this.state.hand}
                    onValueChange={hand => this.setState({ hand })}
                    style={{ height: 45, color: '#FAB0A4', backgroundColor: '#56423D', }}
                    mode="dropdown"
                    itemStyle={{ fontWeight: '900', fontSize: 8, }}>
                    <Picker.Item label="Round- ups" value="Round- ups" />
                    <Picker.Item label="SIP" value="SIP" />
                    <Picker.Item label="Gold Invest" value="left" />
                    <Picker.Item label="Buy Price" value="Buy Price" />
                </Picker>
            </SafeAreaView>
        );
    }
}


export default Coustompiker;






















