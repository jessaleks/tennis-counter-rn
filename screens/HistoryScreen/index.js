import React from 'react';
import {Text, View} from "react-native";

import AppText from "../../components/AppText";
import AppView from "../../components/AppView";

export default function HistoryScreen(props) {
    return (
        <AppView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <AppText>History</AppText>
        </AppView>
    )
}