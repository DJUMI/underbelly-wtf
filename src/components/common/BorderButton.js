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

const BorderButton = ({ link, color, top, left, height, width }) => (
    <Link to={link}>
        <Container top={top} left={left} height={height} width={width}>
            <div className='border-button__container' />
        </Container>
    </Link>
);

export { BorderButton };