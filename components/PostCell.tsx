import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType  } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import colors from '../colors';
import constants from "../constants";

const windowHeight = constants.dimentions.height;
const windowWidth = constants.dimentions.width;

const iconSize: number = windowWidth * 0.11;

type PostCellsProps = {
    mediaSource: any,
    username: string,
    likes: number,
    title: string,
    description: string,
    navigation: any
}

const PostCells = (props: PostCellsProps) => {
    const [containerHeight, setContainerHeight] = useState(0);

    const messageHandler = () => {
        // Implement your message handling logic here
    }

    Image.getSize(props.mediaSource, (width, height) => {
        const aspectRatio = width / height;
        const containerHeight = windowWidth / aspectRatio;
        setContainerHeight(containerHeight);
    });

    return (
        <TouchableOpacity onPress={messageHandler} style={styles.container}>
            {/* <View style={styles.profile}>
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
            </TouchableOpacity> */}
            <View style={styles.top}>
                <Text>{props.username}</Text>
            </View>
            <View style={[styles.mediaContainer, { height: containerHeight}]}>
                <Image source={{uri: props.mediaSource}} resizeMode="cover" style={styles.mediaImage}/>
            </View>
            <View style={styles.information}>
                <Text>{props.title}</Text>
                <Text>{props.description}</Text>
            </View>

        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        maxHeight: '40%',
        borderTopColor: '#C4C4C4',
        borderTopWidth: windowHeight * 0.001,
        flexDirection: 'column',
        overflow: 'hidden',
    },

    top: {
        height: '10%', // Adjust the height as needed
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: windowWidth * 1/40,
    },

    mediaContainer: {
        width: '100%',
        overflow: 'hidden',
    },

    mediaImage: {
        width: '100%',
        height: '100%',
    },

    information: {
        height: '15%', // Adjust the height as needed
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: windowWidth * 1/40,
        justifyContent: 'center',
    }


})

export default PostCells