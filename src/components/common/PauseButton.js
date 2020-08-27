import React, { useContext } from 'react';
import styled from 'styled-components'

import { Context as AudioContext } from '../../context/AudioContext';

const Container = styled.div`
  display: inline-block;
  position: absolute;
  top: ${props => props.top || '0vh'};
  left: ${props => props.left || '0vw'};
  height: ${props => props.width || '10vw'};
  width: ${props => props.width || '10vw'};
  vertical-align: middle;
  overflow: hidden;
`

const PauseButton = ({ onClick, color, top, left, width }) => {
    const { pauseSong } = useContext(AudioContext);

    return (
        <Container top={top} left={left} width={width}>
            <svg viewBox='0 0 100 100' className='link-button__svg--box' preserveAspectRatio='none'>
                <defs>
                    <radialGradient id="RadialGradient1">
                        <stop offset="0%" stop-color={color || 'rgba(255,204,0,1)'} />
                        <stop offset="100%" stop-color="rgba(255,204,0,0)" />
                    </radialGradient>
                </defs>
                <rect
                    className='open-button__svg'
                    onClick={() => {
                        pauseSong();
                        onClick();
                    }}
                    width="100"
                    height="100"
                    fill="url(#RadialGradient1)"
                />
            </svg>
        </Container>
    )
};

export { PauseButton };
