import React from "react";
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import constants from "../constants";

const windowHeight = constants.dimentions.height;
const windowWidth = constants.dimentions.width;

type HeaderProps = {
    title: string,
    navigation: any
}

const iconSize: number = windowWidth * 0.1 

const Header = (props: HeaderProps) => {

    const searchHandler = () => {
        // props.navigation.navigate("")
    }

    const friendAddHandler = () => {
        // props.navigation.navigate("")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={searchHandler} style={styles.search}>
                <Ionicons name="search-circle-outline" size={iconSize} color="black" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{props.title}</Text>
            </View>
            <TouchableOpacity onPress={friendAddHandler} style={styles.addFriends}>
                <Ionicons name="add-circle-outline" size={iconSize} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: windowHeight * 0.1,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: windowHeight * 0.001,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: windowHeight * 0.01,
        elevation: 7,
        shadowColor: 'black',
        backgroundColor: 'white',
        paddingHorizontal: windowWidth * 2/40
    },

    search : {
        flex: 2,
        justifyContent: 'flex-end', // Center vertically
        alignItems: 'flex-start',
        height: "100%",
    },

    titleContainer: {
        flex: 9,
        justifyContent: 'flex-end', // Center vertically
        alignItems: 'center',
        height: "100%",
    },
    
    titleText: {
        fontSize: windowWidth * 0.08,
        color: 'black',
    },

    addFriends: {
        flex: 2,
        justifyContent: 'flex-end', // Center vertically
        alignItems: 'flex-end',
        height: "100%",

    },

})

export default Header;
