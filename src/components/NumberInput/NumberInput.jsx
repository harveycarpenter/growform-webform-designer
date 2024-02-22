import Container from "../Container";
import { NumericInput } from "@blueprintjs/core";


const WebflowNumberInput = ({value, onChange, label, intent}) => {
    return (
        <Container>
        <NumericInput allowNumericCharactersOnly stepSize={10} intent={intent} placeholder={label} fill={true} value={value} onValueChange={onChange}/>
        </Container>
    )
}

export default WebflowNumberInput;