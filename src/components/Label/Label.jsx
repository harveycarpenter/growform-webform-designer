import Container from "../Container";

const WebflowLabel = ({text}) => {
    return (
        <Container left compact>
        <div style={{fontSize: "12px", color: "#c4c4c4"}}>{text}</div>
        </Container>
    )
}

export default WebflowLabel;