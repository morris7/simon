import React from 'react';
import styled from 'styled-components';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as GameButtonActions from '../actions/gameButton'

const GameButton = (props: GameButtonProps) => (
    <StyledGameButton colour={props.colour}
        onClick={props.action.incrementScore }/>
);

interface GameButtonProps{
    colour: string,
    action: any
}

interface StyleProps {
    colour: string,
    onClick: any
}

const StyledGameButton = styled.button`
    display: flex;
    width: 40%;
    height: 40%;
    margin: 5%;
    background-color: ${(props: StyleProps) => props.colour};
    box-shadow: 2px 2px #999;
    border-radius: 10px;
    &:focus, &:focus{
        outline: none;
    }
`;


function mapDispatchToProps(dispatch:any) {
    return {
        action: bindActionCreators(GameButtonActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(GameButton);