import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

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

const LinkButton = ({ onClick, link, color, top, left, width }) => (
    <Container top={top} left={left} width={width}>
        <svg viewBox='0 0 100 100' className='link-button__svg--box' preserveAspectRatio='none'>
            <defs>
                <radialGradient id="RadialGradient1">
                    <stop offset="0%" stopColor={color || 'rgba(255,204,0,1)'} />
                    <stop offset="100%" stopColor="rgba(255,204,0,0)" />
                </radialGradient>
            </defs>
            <Link to={link}>
                <rect className='link-button__svg' onClick={onClick} width="100" height="100" fill="url(#RadialGradient1)" />
            </Link>
        </svg>
    </Container>
);

export { LinkButton };
