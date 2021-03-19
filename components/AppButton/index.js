import React from 'react';
import {Pressable} from "react-native";
import {Platform} from "react-native-web";
import PropTypes from 'prop-types';

import AppText from "../AppText";

export default function AppButton(props) {
    const isAndroid = Platform.OS === "android"
    return (
        <Pressable onPress={props.onPress} android_ripple={isAndroid}>
            <AppText>{props.children}</AppText>
        </Pressable>
    )
}

AppButton.propTypes = {
    children: PropTypes.node.isRequired,
    onPress: PropTypes.func.isRequired,
};