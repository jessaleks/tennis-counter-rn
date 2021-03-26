import React, {useState} from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import AppView from "../../components/AppView";
import {tailwind} from "../../tailwind";
import Tiebreak from "../../subscreens/Counter/Tiebreak";
import Match from "../../subscreens/Counter/Match";
import ModeChoice from "../../subscreens/Counter/ModeChoice";


const Stack = createStackNavigator();

// TODO Create a stack navigation screen to be able to choose a mode - be it match, or just tiebreak
// TODO Add a tiebreak, men's match, women's match modes
// HINT You can create a table with the score using `react-native-easy-grid`
// https://www.kindacode.com/article/how-to-implement-tables-in-react-native/
export default function CounterScreen(props) {


    return (
        <>
        <Stack.Navigator>
            <Stack.Screen name={"ModeChoice"} component={ModeChoice} options={{headerTransparent: true}}/>
            <Stack.Screen name={"Tiebreak"} component={Tiebreak}/>
            <Stack.Screen name={"Match"} component={Match}/>
        </Stack.Navigator>
            <ModeChoice />


        </>
    )
}


const styles = StyleSheet.create({
    scoreContainer: {
        flexDirection: "column",
        marginHorizontal: 20
    },
    scoreIndicator: {
        fontSize: 120,
        marginHorizontal: 50
    },
    scoreButton: {
        fontSize: 50,
        alignItems: "center",
        fontWeight: "900",

    }
})