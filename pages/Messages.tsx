import React from "react";
import { ChatCells, Footer, Header } from '../components'
import { View, StyleSheet, ScrollView, Dimensions, SafeAreaView } from "react-native";
import data from '../directMessages.json'
import constants from "../constants";

const windowHeight = constants.dimentions.height;
const windowWidth = constants.dimentions.width;

type MessagesProps = {
    navigation: any
}

const Messages = (props: MessagesProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Chat" navigation={props.navigation}/>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
            {data.chatCells.map((framework: any) => (
                <ChatCells
                  key={framework.id}
                  navigation={props.navigation}
                  firstName={framework.firstName}
                  lastName={framework.lastName}
                  messageStatus={framework.messageStatus}
                  messageTime={framework.messageTime}
                  isBookmarked={framework.isBookmarked}
                />
              ))}
            </ScrollView>
            <Footer selected="messages" navigation={props.navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    
    scroll: {
        flex:1,
        marginBottom: windowHeight * 0.08,
        
    }
})




export default Messages