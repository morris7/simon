import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GameControlActions from './Board.actions';
import {BoardProps} from './Board.types';
import Board from './Board';

function mapStateToProps(state: any, prop: BoardProps) {
    return {
        score: state.game.score,
        sequence: state.game.sequence,
        level: state.game.level
    }
}

function mapDispatchToProps(dispatch:any){
    return  {
        action: bindActionCreators(GameControlActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);