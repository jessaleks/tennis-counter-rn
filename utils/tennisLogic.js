// TODO add logic related to the rules of tennis
export function incrementScoreTiebreak(score) {
    score++;
    return score;
}

export function decrementScoreTiebreak(score) {
    if(score>0) {
        score--;
    }
    return score;
}

/**
 * @function incrementScoreMatch
 * @param {Number} score1 the score to increment
 * @param {Number} score2 Other party's score. Used to check whether there is an advantage scenario or not
 * @description Function used to increment score in normal match scenario. Number 50 will represent advantage, 60 a won game.
 * @returns {Number} score1, score2
 * */
export function incrementScoreMatch(score1, score2) {
    switch(score1) {
        case score1 === 0:
            score1 = 15;
            break;
        case score1 === 15:
            score1 = 30;
            break;
        case score1 === 40:
            if(score2 === 40) {
                score1 = 50;
            } else {
                score1 = 60;
            }
            break;
    }
    return score1
}
/**
 * @function decrementScoreMatch
 * @param {Number} score1 the score to increment
 * @param {Number} score2 Other party's score. Used to check whether there is an advantage scenario or not
 * @description Function used to increment score in normal match scenario. Number 50 will represent advantage, 60 a won game.
 * @returns {Number} score1, score2
 * */
export function decrementScoreMatch(score1) {
    if(score1 === 0) {
        return 0;
    }
    switch(score1) {
        case score1 === 0:
            score1 = 15;
            break;
        case score1 === 15:
            score1 = 30;
            break;
        case score1 === 40:
            if(score2 === 40) {
                score1 = 50;
            } else {
                score1 = 60;
            }
            break;
    }
    return score1
}