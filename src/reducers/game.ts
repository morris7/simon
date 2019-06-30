export default(state : GameState = initialState, action:any) => {
    switch(action.type){
        case 'incrementScore':
                let newScore = state.score +1;
            return {...state, score:newScore};
        default:
            return state;
    }
};

const initialState = {
    score: 0
}

interface GameState {
    score: number
}