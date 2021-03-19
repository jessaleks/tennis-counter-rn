import React from 'react';
import {Text} from 'react-native'

import {tailwind} from "../../tailwind";

export default function AppText(props) {
    return (
        <Text style={tailwind('text-gray-200')}>{props.children}</Text>
    )
}