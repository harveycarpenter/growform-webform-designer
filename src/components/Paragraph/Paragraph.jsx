import styled from 'styled-components';

const StyledParagraph = styled.h1`
font-size: 11.5px;
font-weight: 400;
color: rgb(196, 196, 196);
margin-bottom: 0px;
`

const Header = ({ children }) => {

return (
<StyledParagraph>
{children}
</StyledParagraph>
)

}

export default Header;