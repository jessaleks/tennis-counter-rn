import React, {useState} from 'react';
import {Alert, Text, View} from "react-native";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import AppView from "../../components/AppView";

export default function Tiebreak() {
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)


    function incrementScore(teamID) {
        if (teamID === 1) {
            setScore1(score1 + 1)
        } else if (teamID === 2) {
            setScore2(score2 + 1)
        }
    }

    function decrementScore(teamID) {
        if (teamID === 1) {
            if (score1 > 0) {
                setScore1(score1 - 1)
            }
        } else if (teamID === 2) {
            if (score2 > 0) {
                setScore2(score2 - 1)
            }
        }
    }

    function resetScores() {
        Alert.alert(
            "Wait a second!",
            "Are you sure you want to reset the scores?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Reset the score",
                    style: "destructive",
                    onPress: () => {
                        setScore1(0);
                        setScore2(0);
                    }

                }
            ],
            {
                cancelable: true
            }
        )

    }
    return (
        <AppView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AppText>Counter</AppText>
            <View style={{flexDirection: "row", marginHorizontal: 10, marginVertical: 30}}>
                <View style={styles.scoreContainer}>
                    {/*infinite loop problem*/}
                    <AppButton style={styles.scoreButton} onPress={() => incrementScore(1)}>Increment +</AppButton>
                    <AppText style={styles.scoreIndicator}>{score1}</AppText>
                    <AppButton disabled={score1 === 0} style={styles.scoreButton} onPress={() => decrementScore(1)}>Decrement
                        -</AppButton>
                </View>
                <View style={styles.scoreContainer}>
                    <AppButton style={styles.scoreButton} onPress={() => incrementScore(2)}>Increment +</AppButton>
                    <AppText style={styles.scoreIndicator}>{score2}</AppText>
                    <AppButton disabled={score2 === 0} style={styles.scoreButton} onPress={() => decrementScore(2)}>Decrement
                        -</AppButton>
                </View>
            </View>

            <AppButton style={{width: 150, justifyContent: 'center', alignItems: 'center',}} bgColor="red"
                       onPress={resetScores}>Reset</AppButton>
        </AppView>
    )
}