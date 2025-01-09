import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get the device's width

const Container = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.whiteContainer} />
      {/* <View style={styles.transparentContainer} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  whiteContainer: {
    width: width * 0.9, // 90% of the device width
    height: 603, // Fixed height
    top: 241, // Positioning from the top
    backgroundColor: 'white', // White background
    borderRadius: 30, // Rounded corners
    position: 'absolute', // Position it above the transparent container
  }
  
});

export default Container;
