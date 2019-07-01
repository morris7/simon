import React, {Component} from 'react';
import styled from 'styled-components';

import {GAME_SIZE, GAME_BUTTON_COUNT, YELLOW, BLUE, GREEN, RED} from '../../constants';
import GameButton from '../GameButton/GameButton';
import {BoardProps} from './Board.types';
import {BEEP} from '../../constants';


export default class Board extends Component<BoardProps> {
    constructor(props: BoardProps){
        super(props);

        this.startGame = this.startGame.bind(this);
        this.gameTick = this.gameTick.bind(this);
    }

    startGame(){
        this.gameTick();

        setInterval(() =>{
            this.gameTick()
        }, 2000);
    }

    gameTick(){
        this.props.action.startGame();
        const sound = new Audio(BEEP);
        sound.play();
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
                    <StyledDiv><button onClick={this.startGame}>Start Game</button></StyledDiv>
                    <StyledDiv className="score">Current score: {score}</StyledDiv>
                </StyledBoard>
            </>
        );
    }
}

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