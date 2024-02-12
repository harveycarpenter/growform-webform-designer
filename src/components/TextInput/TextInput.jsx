import Container from "../Container";
import { InputGroup } from "@blueprintjs/core";


const WebflowTextInput = ({value, onChange, label, intent}) => {
    return (
        <Container>
        <InputGroup intent={intent} placeholder={label} fill={true} value={value} onChange={e => onChange(e.target.value)} />
        </Container>
    )
}

export default WebflowTextInput;