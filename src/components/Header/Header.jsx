import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 4px;
  ${props => props.paddingBottom && `padding-bottom: 6px;`}
`

const StyledHeader = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: rgb(255, 255, 255);
`

const Header = ({ children, paddingBottom }) => {
  return (
    <Container paddingBottom={paddingBottom}>
      <StyledHeader>
        {children}
      </StyledHeader>
    </Container>
  )
}

export default Header;
