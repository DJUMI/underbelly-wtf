import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  position: absolute;
  top: ${props => props.top || '0vh'};
  left: ${props => props.left || '0vw'};
  height: ${props => props.height || '10vw'};
  width: ${props => props.width || '10vw'};
  vertical-align: middle;
  overflow: hidden;
`

const SquareButton = ({ link, color, top, left, height, width }) => (
    <Container top={top} left={left} height={height} width={width}>
        <svg viewBox='0 0 100 100' className='link-button__svg--box' preserveAspectRatio='none'>
            <Link to={link}>
                <rect className='square-button__svg' width="100" height="100" fill="red" />
            </Link>
        </svg>
    </Container>
);

export { SquareButton };