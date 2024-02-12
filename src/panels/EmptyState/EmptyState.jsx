import styled from 'styled-components';
import WebflowArrowIcon from "../WebflowArrowIcon/WebflowArrowIcon";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgba(255, 255, 255, 0.07);
border-radius: 4px;
padding: 8px;
margin: 10px;
`

const icons = {
    arrow: WebflowArrowIcon
}

const EmptyState = ({header, text, icon}) => {

const IconComponent = icons[icon];

return (
<Container>
{IconComponent ? <IconComponent /> : null}
<Header>{header}</Header>
<Paragraph>{text}</Paragraph>
</Container>
)

}

export default EmptyState;