import styled from 'styled-components';

const StyledContainer = styled.div`
  color: rgb(196, 196, 196);
  font-size: 11.5px;
  font-weight: 400;
  background-color: #383838;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
`;

const HelpBox = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>;
}

export default HelpBox;