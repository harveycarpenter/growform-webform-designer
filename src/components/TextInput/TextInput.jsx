import Container from "../Container";
import { InputGroup } from "@blueprintjs/core";


const WebflowTextInput = ({value, onChange, label, intent, type}) => {
    return (
        <Container>
        <InputGroup intent={intent} placeholder={label} fill={true} value={value} onChange={e => onChange(e.target.value)} type={type ? type : null} />
        </Container>
    )
}

export default WebflowTextInput;