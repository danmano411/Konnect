import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import colors from '../colors';
import constants from "../constants";

const windowHeight = constants.dimentions.height;
const windowWidth = constants.dimentions.width;

const iconSize: number = windowWidth * 0.11;

type ChatCellsProps = {
    firstName: string,
    lastName: string,
    messageStatus: string,
    messageTime: string,
    isBookmarked: boolean,
    navigation: any
}

const ChatCells = (props: ChatCellsProps) => {
    const [bookmarkState, setBookmarkState] = useState(props.isBookmarked);

    useEffect(() => {
        // Save bookmarkState to JSON or AsyncStorage here
        // Example using AsyncStorage:
        //AsyncStorage.setItem('bookmarkState', JSON.stringify(bookmarkState));
    }, [bookmarkState]);

    const messageHandler = () => {
        // Implement your message handling logic here
    }

    return (
        <TouchableOpacity onPress={messageHandler} style={styles.container}>
            <View style={styles.profile}>
                <MaterialCommunityIcons name="hexagon" size={iconSize} color="lightgrey" />
            </View>
            <View style={styles.informationContainer}>
                <Text style={{ fontSize: windowWidth * 0.035 }}>{props.firstName} {props.lastName[0]}.</Text>
                <Text style={{ fontSize: windowWidth * 0.03 }}>{props.messageStatus} - {props.messageTime}</Text>
            </View>
            <TouchableOpacity onPress={() => (setBookmarkState(!bookmarkState))} style={styles.pin}>
                {bookmarkState ?
                    <Entypo name="bookmark" size={iconSize * 0.86} color={colors.mainColor.color} /> :
                    <Entypo name="bookmark" size={iconSize * 0.86} color="black" />}
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: windowHeight * 0.07,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: windowHeight * 0.001,
        flexDirection: 'row',
        paddingRight: windowWidth * 1/40,
        elevation: -10
    },

    profile: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    informationContainer: {
        flex: 14,
        justifyContent: 'center'
    },

    pin: {
        flex: 2,
        alignItems: 'flex-end',
    },
})

export default ChatCells