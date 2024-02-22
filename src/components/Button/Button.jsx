import React from 'react';
import { Button } from "@blueprintjs/core";
import Container from "../Container";
import { Icon } from "@blueprintjs/core";
import classNames from 'classnames';

const WebflowButton = ({ text, onClick, loading, primary, icon }) => {
    const buttonClass = classNames({
        'bp5-dark': true,
        'button-secondary': !primary
    });

    const rightIcon = icon ? <Icon icon={icon} size={10} /> : null;

    return (
        <Container>
            <Button className={buttonClass} intent={primary ? "primary" : "none"} text={text} onClick={onClick} loading={loading} rightIcon={rightIcon} />
        </Container>
    );
}

export default WebflowButton;