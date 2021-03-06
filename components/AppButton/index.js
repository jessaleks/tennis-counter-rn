import React from 'react';
import {Pressable} from "react-native";
import {Platform} from "react-native";
import PropTypes from 'prop-types';
import tailwind from "tailwind-rn";

import AppText from "../AppText";


export default function AppButton(props) {
    const isAndroid = Platform.OS === "android"
    // determining the color of the button
    const bgColorInactive = props.bgColor ? tailwind(`bg-${props.bgColor}-${props.brightness || 700}`) : tailwind('bg-blue-700')
    const bgColorActive = props.bgColor ? tailwind(`bg-${props.bgColor}-${props.brightness + 100 || 800}`) : tailwind ('bg-blue-800')
    const bgColorDisabled = tailwind('bg-gray-600');

    const backgroundColorInactive = props.disabled ? bgColorDisabled.backgroundColor :  bgColorInactive.backgroundColor;
    const backgroundColorActive = props.disabled ? bgColorDisabled.backgroundColor : bgColorActive.backgroundColor;


    return (
        <Pressable disabled={props.disabled || false} style={({pressed}) => [tailwind('p-3 rounded'), {backgroundColor: pressed ? backgroundColorActive : backgroundColorInactive}, props.style]} onPress={props.onPress} android_ripple={isAndroid}>
            <AppText>{props.children}</AppText>
        </Pressable>
    )
}

AppButton.propTypes = {
    children: PropTypes.node.isRequired,
    onPress: PropTypes.func.isRequired,
    bgColor: PropTypes.string,
    brightness: PropTypes.oneOf([50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
    style: PropTypes.object,
    disabled: PropTypes.bool
};