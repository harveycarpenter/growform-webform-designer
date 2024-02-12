import { Button } from "@blueprintjs/core";
import Container from "../Container";

const WebflowButton = ({text, onClick, loading}) => {
    return (
        <Container>
        <Button className="b5-dark" intent="primary" text={text} onClick={onClick} loading={loading} />
        </Container>
    )
}

export default WebflowButton;