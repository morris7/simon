import game from '../components/Board/Board.reducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    game
});


export default rootReducer;