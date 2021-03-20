import React from 'react';
import {View} from "react-native";
import PropTypes from "prop-types";
import {tailwind} from "../../tailwind";



export default function AppView(props) {
    return (
        <View style={tailwind('bg-gray-900 text-gray-200 flex justify-center items-center h-full')}>{props.children}</View>
    )
}

AppView.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};