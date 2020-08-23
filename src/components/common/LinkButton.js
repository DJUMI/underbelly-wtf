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

const LinkButton = ({ link, color, top, left, width }) => (
    <Container top={top} left={left} width={width}>
        <svg viewBox='0 0 100 100' className='button__svg--box' preserveAspectRatio='none'>
            <defs>
                <radialGradient id="RadialGradient1">
                    <stop offset="0%" stop-color={color || "yellow"} />
                    <stop offset="100%" stop-color="rgba(0,0,0,0)" />
                </radialGradient>
            </defs>
            <Link to={link}>
                <rect className='button__svg' width="100" height="100" fill="url(#RadialGradient1)" />
            </Link>
        </svg>
    </Container>
);

export { LinkButton };
