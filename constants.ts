import { StyleSheet, Dimensions } from 'react-native';

const constants = StyleSheet.create({
  dimentions: {
    width: Dimensions.get("window").height * 6/13,
    height: Dimensions.get("window").height
  },
});

export default constants;