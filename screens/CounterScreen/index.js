import React from 'react';
import {Text, View} from "react-native";

import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import AppView from "../../components/AppView";

export default function CounterScreen(props) {
    function onPress() {
        console.log("Hello");
    }
    return (
        <AppView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <AppText>Counter</AppText>
            <AppButton onPress={onPress}>Press me</AppButton>
        </AppView>
    )
}