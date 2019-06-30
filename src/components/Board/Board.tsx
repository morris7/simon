import React, {Component} from 'react';
import styled from 'styled-components';

import {GAME_SIZE} from '../../constants';
import GameButton from '../GameButton';

class Board extends Component<BoardProps> {

    render(){
        return (
            <StyledBoard>
                <GameButton colour="yellow"/>
                <GameButton colour="blue"/>
                <GameButton colour="red"/>
                <GameButton colour="green"/>
            </StyledBoard>
        )
    }
}

interface BoardProps {
    
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

export default Board;