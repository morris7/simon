import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {GAME_SIZE} from '../../constants';
import GameButton from '../GameButton';


class Board extends Component<BoardProps> {

    render(){
        let {score} = this.props;
        return (
            <StyledBoard>
                <GameButton colour="yellow"/>
                <GameButton colour="blue"/>
                <GameButton colour="red"/>
                <GameButton colour="green"/>
                <span className="score">Current score: {score}</span>
            </StyledBoard>
        )
    }
}

interface BoardProps {
    score: number
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
        score: state.game.score
    }
}


export default connect(mapStateToProps)(Board);