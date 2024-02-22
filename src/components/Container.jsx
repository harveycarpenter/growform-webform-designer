import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  padding-bottom: ${props => (props.compact ? '10px' : '12px')};
  margin-bottom: 14px;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: ${props => (props.compact ? '-5px' : '0px')};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: ${props => (props.left ? 'left' : 'center')};
`;

const Container = ({ children, left, compact }) => {
  return <StyledContainer left={left} compact={compact}>{children}</StyledContainer>;
};

export default Container;
