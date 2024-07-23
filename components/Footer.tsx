import React from 'react';
import { View, StyleSheet, Dimensions, Text,  TouchableOpacity, SafeAreaView } from 'react-native';
import { Octicons , MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import colors from '../colors'
import constants from "../constants";

const windowHeight = constants.dimentions.height;
const windowWidth = constants.dimentions.width;

type FooterProps =
{
  selected: string,
  navigation: any
}

// let pressed: number = 0

const Footer = (props: FooterProps) => {

  const iconHandler = (page: string) => {
    props.navigation.navigate(page)
  };

  // const buttonPress = (iconNumber: number) => {
  //   pressed = iconNumber
  // };

  const iconsSize: number = windowWidth * 0.07
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => iconHandler("Messages")} style={styles.buttonContainer}>
        {props.selected == "messages" ?
        <MaterialIcons name="message" size={iconsSize} color={colors.mainColor.color} /> :
        <MaterialIcons name="message" size={iconsSize} color="black" />}
        <Text style={styles.buttonText}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => iconHandler("Groups")} style={styles.buttonContainer}>
        {props.selected == "groups" ?       
        <Ionicons name="people-sharp" size={iconsSize} color={colors.mainColor.color} />:
        <Ionicons name="people-sharp" size={iconsSize} color="black" />}
        <Text style={styles.buttonText}>Groups</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => iconHandler("Account")} style={styles.buttonContainer}>
        {props.selected == "account" ? 
        <MaterialIcons name="account-circle" size={iconsSize} color={colors.mainColor.color} />:
        <MaterialIcons name="account-circle" size={iconsSize} color="black" />}
        <Text style={styles.buttonText}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => iconHandler("Posts")} style={styles.buttonContainer}>
        {props.selected == "posts" ?
        <Octicons  name="broadcast" size={iconsSize} color={colors.mainColor.color} />:
        <Octicons  name="broadcast" size={iconsSize} color="black" />}
        <Text style={styles.buttonText}>Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => iconHandler("Upload")} style={styles.buttonContainer}>
        {props.selected == "upload" ?
        <AntDesign name="upload" size={iconsSize} color={colors.mainColor.color} />:
        <AntDesign name="upload" size={iconsSize} color="black" />}
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '8%',
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    alignSelf: 'center',
    position: 'absolute', // Position the footer absolutely
    bottom: 0, // Align it to the bottom of the screen
    width: '100%', // Take up the entire width
    flexDirection: 'row',
    paddingHorizontal: windowWidth * 10/390,
    gap: windowWidth * 0.02,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -20, // Adjust this value to control the shadow's vertical offset
    },
    borderTopColor: '#C4C4C4',
    borderTopWidth: windowHeight * 0.001,
    zIndex: 2
  },

  text: {
    color: 'white',
    fontSize: 16,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    zIndex: 5,
    height: '90%',
    width: windowWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderBottomWidth: windowHeight * 0.003,
    borderBottomColor: 'transparent',
    
  },

  buttonSelect: {
    
    borderBottomColor: colors.mainColor.color,
  },

  buttonText: {
    fontSize: windowWidth * 0.022
  },

});

export default Footer;
