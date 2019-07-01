import {GAME_BUTTON_COUNT} from '../../constants'
import {GameState} from './Board.types';

let newScore,colourIndex,currentSequence,newGameOver,newLevel,newSequence;

export default(state : GameState = initialState, action:any) => {
    switch(action.type){
        case 'gameButtonClick':
            newScore = state.score + 1;
            colourIndex = 0;
            currentSequence = state.currentSequence + 1;
            newGameOver = false;

            switch(action.colourClicked) {
                case 'yellow': colourIndex = 0; break;
                case 'blue': colourIndex = 1; break;
                case 'red': colourIndex = 2;  break;
                case 'green': colourIndex = 3;  break;
            }

            if(state.sequence[currentSequence][colourIndex] !== 1){
                newGameOver = true;
            }

            return {...state, score: newScore, currentSequence, gameOver: newGameOver};
        case 'startGame':
            newLevel = state.level + 1;
            newSequence = nextSequence(state);
            newGameOver = false;
            
            return {...state, sequence:newSequence, level:newLevel, gameOver: newGameOver}
        case 'restartGame':
                newLevel = 0;
                newSequence = [[0,0,0,0]];
                newGameOver = false;
                currentSequence = 0;
                
                return {...state, sequence:newSequence, level:newLevel, gameOver: newGameOver, currentSequence}
        default:
            return state;
    }
};

const initialState = {
    score: 0,
    sequence: [[0,0,0,0]],
    level: 0,
    currentSequence: 0,
    gameOver: false
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