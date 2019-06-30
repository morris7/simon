import {GAME_BUTTON_COUNT} from '../constants'

export default(state : GameState = initialState, action:any) => {
    switch(action.type){
        case 'incrementScore':
            let newScore = state.score + 1;
            return {...state, score: newScore};
        case 'startGame':
            let newSequence = [0,0,0,0];
            let randomNumber = Math.floor(Math.random() * Math.floor(GAME_BUTTON_COUNT));
            newSequence[randomNumber] = 1;
            return {...state, sequence:newSequence}
        default:
            return state;
    }
};

const initialState = {
    score: 0,
    sequence: [0,1,0,0]
}

interface GameState {
    score: number,
    sequence: any
}