import Container from "../Container";
import { HTMLSelect } from "@blueprintjs/core";

const WebflowSelect = ({value, options, onChange}) => {
    
    return (
        <Container>
        <HTMLSelect className="bp5-dark" fill options={options} value={value} onChange={(e) => onChange(e.currentTarget.value)}/>
        </Container>
    )
}

export default WebflowSelect;