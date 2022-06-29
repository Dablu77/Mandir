import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

function CustomLoader() {
  return (
    <View style={[styles.containerLoader, styles.horizontal]}>
      <ActivityIndicator size="large" color="#1e90ff" />
    </View>
  );
};
export default CustomLoader;

const styles = StyleSheet.create({
  containerLoader: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
