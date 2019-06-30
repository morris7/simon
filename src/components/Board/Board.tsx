import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {GAME_SIZE, GAME_BUTTON_COUNT,YELLOW, BLUE, GREEN, RED} from '../../constants';
import GameButton from '../GameButton';
import { bindActionCreators } from 'redux';
import * as GameControlActions from '../../actions/gameControl';
import { sequenceExpression } from '@babel/types';


class Board extends Component<BoardProps> {

    componentDidMount(){
        setInterval(() =>{this.props.action.startGame()}, 2000)
    }

    render(){
        console.log(this.props);
        
        let {score, action, sequence} = this.props;

        return (
            <StyledBoard>
                <GameButton colour={YELLOW} className={sequence[0] === 1 ? 'active' : ''}/>
                <GameButton colour={BLUE} className={sequence[1] === 1 ? 'active' : ''}/>
                <GameButton colour={RED} className={sequence[2] === 1 ? 'active' : ''}/>
                <GameButton colour={GREEN} className={sequence[3] === 1 ? 'active' : ''}/>
                <button onClick={action.startGame}>Start Game</button>
                <span className="score">Current score: {score}</span>
            </StyledBoard>
        )
    }
}

interface BoardProps {
    score: number,
    action: any,
    sequence: any
};

const StyledBoard = styled.div`
    display: flex;
    align-items:stretch;
    justify-content: center;
    flex-wrap: wrap;
    width: ${GAME_SIZE};
    height: ${GAME_SIZE};
    margin: auto;
`

function mapStateToProps(state: any, prop: any) {
    return {
        score: state.game.score,
        sequence: state.game.sequence
    }
}

function mapDispatchToProps(dispatch:any){
    return  {
        action: bindActionCreators(GameControlActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);