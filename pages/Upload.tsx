import React from "react";
import { Footer } from '../components'

type UploadProps = {
    navigation: any
}

const Upload = (props: UploadProps) => {
    return (
        <Footer selected="upload" navigation={props.navigation} />
    )
}

export default Upload