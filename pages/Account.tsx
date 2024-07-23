import React from "react";
import { Footer } from '../components'

type AccountProps = {
    navigation: any
}

const Account = (props: AccountProps) => {
    return (
        <Footer selected="account" navigation={props.navigation} />
    )
}

export default Account