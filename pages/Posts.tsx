import React from "react";
import { View, StyleSheet } from 'react-native'
import { Footer, Header, PostCells } from '../components'

type PostsProps = {
    navigation: any
}

const Posts = (props: PostsProps) => {
    return (
        <View style={styles.container}>
            <Header title="Feed" navigation={props.navigation} />
            <PostCells mediaSource="https://1.bp.blogspot.com/-sjWQyIJ8iN8/W7OM69QBIhI/AAAAAAAAB_w/3oiOEXhREysoz5TIDzw0oUNEjzcJOyNoQCLcBGAs/s640/drop.png" title="Coolest Thing ever" description="Lmao xd" username="Empii" likes={25} navigation={props.navigation}/>
            <Footer selected="posts" navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
})

export default Posts