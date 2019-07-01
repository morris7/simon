import {GAME_BUTTON_COUNT} from '../../constants'

export default(state : GameState = initialState, action:any) => {
    switch(action.type){
        case 'incrementScore':
            let newScore = state.score + 1;
            return {...state, score: newScore};
        case 'startGame':
            let newLevel = state.level + 1;
            let newSequence = nextSequence(state);
            
            return {...state, sequence:newSequence, level:newLevel}
        default:
            return state;
    }
};

const initialState = {
    score: 0,
    sequence: [[0,0,0,0]],
    level: 0
}

interface GameState {
    score: number,
    sequence: any,
    level: number
}

const nextSequence = (state:GameState) => {
    let newSequence = state.sequence;
    let defaultArray = [0,0,0,0];
    let randomNumber = Math.floor(Math.random() * Math.floor(GAME_BUTTON_COUNT));
    defaultArray[randomNumber] = 1;
    let test = defaultArray;
    newSequence.push(test);
    return newSequence;
}