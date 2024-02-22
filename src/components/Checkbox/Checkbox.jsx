import { useState } from 'react';
import { Checkbox } from '@blueprintjs/core';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 6px;
`;

const TextContainer = styled.div`
  margin-left: 0px;
  flex-grow: 1;
  margin-bottom: 10px;
  color: rgb(232, 232, 232);
  font-size: 12px;
  cursor: default;
  user-select: none;
`;


const WebflowCheckbox = ({ text, icon }) => {

const [checked, setChecked] = useState(false);

  return (
    <Container>
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      <TextContainer onClick={() => setChecked(!checked)}>{text}</TextContainer>
    </Container>
  );
};

export default WebflowCheckbox;
