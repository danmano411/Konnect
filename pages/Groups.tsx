import React from "react";
import { Footer } from '../components'

type GroupsProps = {
    navigation: any
}

const Groups = (props: GroupsProps) => {
    return (
        <Footer selected="groups" navigation={props.navigation} />
    )
}

export default Groups