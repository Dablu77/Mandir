// import React, { useState } from "react";
// import { Button, View } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// const DateTimePicker = () => {
//     // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//     constructor() {
//         super()
//         this.state = {
//             isVisible: false
//         }
//     }



//     hidePicker = () => {
//         this.setState({
//             isVisible: false
//         })
//     }
//     showPicker = () => {
//         this.setState({
//             isVisible: true
//         })
//     }
//     handlePicker = () => {
//         this.setState({
//             isVisible: false
//         })
//     }

//     return (
//         <View>
//             <Button title="Show Date Picker" onPress={this.showPicker} />
//             <DateTimePickerModal
//                 isVisible={this.state.isVisible}
//                 // mode="date"
//                 onConfirm={this.handlePicker}
//                 onCancel={this.hidePicker}
//             />
//         </View>
//     );
// };

// export default DateTimePicker;