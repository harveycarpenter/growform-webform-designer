import styled from 'styled-components';

const StyledHeader = styled.span`
font-size: 12px;
font-weight: 600;
color: rgb(232, 232, 232);
margin-top: 4px;
margin-bottom: 0px;
`

const Header = ({ children }) => {

return (
<StyledHeader>
{children}
</StyledHeader>
)

}

export default Header;