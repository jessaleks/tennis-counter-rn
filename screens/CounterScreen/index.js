import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";

import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import AppView from "../../components/AppView";

export default function CounterScreen(props) {
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)

    function onPress() {
        console.log("Hello");
    }
    function incrementScore(teamID) {
        if(teamID === 1) {
            setScore1(score1 + 1)
        } else if (teamID === 2) {
            setScore2(score2 + 1)
        }
    }

    function decrementScore(teamID) {

        if(teamID === 1) {
            if (score1 === 0) {

            } else {
                setScore1(score1 - 1)
            }
        } else if (teamID === 2) {
            if (score2 === 0) {

            } else {
                setScore2(score1 - 1)
            }
        }
    }



    return (
        <AppView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <AppText>Counter</AppText>
            <View style={{flexDirection: "row", marginHorizontal: 10}}>
                <View style={styles.scoreContainer}>
                    <AppButton style={styles.scoreButton} onPress={incrementScore(1)}>Increment +</AppButton>
                    <AppText style={styles.scoreIndicator}>0</AppText>
                    <AppButton style={styles.scoreButton} onPress={decrementScore(1)}>Decrement -</AppButton>
                </View>
                <View style={styles.scoreContainer}>
                    <AppButton style={styles.scoreButton} onPress={incrementScore(2)}>Increment +</AppButton>
                    <AppText style={styles.scoreIndicator}>0</AppText>
                    <AppButton style={styles.scoreButton} onPress={decrementScore(2)}>Decrement -</AppButton>
                </View>
            </View>
        </AppView>
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