import {Button, ButtonGroup} from "@blueprintjs/core";
import Container from "../Container";

const WebflowToggle = ({options, value, onToggle}) => {
    return (
        <Container>
        <ButtonGroup fill>
                    {options.map((option, i) => {
                        return (
                            <Button 
                                key={i}
                                active={option === value}
                                onClick={() => onToggle(option)}
                            >
                                {option}
                            </Button>
                        )
                    })}
                </ButtonGroup>
                </Container>
    )
}

export default WebflowToggle;