import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {GAME_SIZE, GAME_BUTTON_COUNT,YELLOW, BLUE, GREEN, RED} from '../../constants';
import GameButton from '../GameButton';
import { bindActionCreators } from 'redux';
import * as GameControlActions from '../../actions/gameControl';
import { sequenceExpression } from '@babel/types';
import {BEEP} from '../../constants';


class Board extends Component<BoardProps> {

    componentDidMount(){
        setInterval(() =>{
            this.props.action.startGame()
            const sound = new Audio(BEEP);
            sound.play();
        }, 2000)
    }

    render(){
        let {score, action, sequence, level} = this.props;
        let currentLevelsSequence = sequence[level];

        return (
            <>
                <StyledDiv><h1>SIMON</h1></StyledDiv>
                <StyledDiv><p>Please turn on sound</p></StyledDiv>
                <StyledBoard>
                    <GameButton colour={YELLOW} className={currentLevelsSequence[0] === 1 ? 'active' : ''}/>
                    <GameButton colour={BLUE} className={currentLevelsSequence[1] === 1 ? 'active' : ''}/>
                    <GameButton colour={RED} className={currentLevelsSequence[2] === 1 ? 'active' : ''}/>
                    <GameButton colour={GREEN} className={currentLevelsSequence[3] === 1 ? 'active' : ''}/>
                    <StyledDiv><button onClick={action.startGame}>Start Game</button></StyledDiv>
                    <StyledDiv className="score">Current score: {score}</StyledDiv>
                </StyledBoard>
            </>
        );
    }
}

interface BoardProps {
    score: number,
    action: any,
    sequence: any,
    level: number
};

const StyledBoard = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: ${GAME_SIZE};
    height: ${GAME_SIZE};
    margin: auto;
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;   
    width: ${GAME_SIZE};
`

function mapStateToProps(state: any, prop: any) {
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