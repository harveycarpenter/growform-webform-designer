import { useEffect } from 'react';
import styled from 'styled-components';

const icons = {
  "logout": {
    "initial": "https://res.cloudinary.com/dqnjggegp/image/upload/v1710849567/growform-production/webflow-app/logout-grey.png",
    "hover": "https://res.cloudinary.com/dqnjggegp/image/upload/v1710850559/growform-production/webflow-app/logout-white.png"
  },
  "help": {
    "initial": "https://res.cloudinary.com/dqnjggegp/image/upload/v1710849568/growform-production/webflow-app/info-grey.png",
    "hover": "https://res.cloudinary.com/dqnjggegp/image/upload/v1710850559/growform-production/webflow-app/info-white.png"
  }
};

const Container = styled.div`
  box-sizing: border-box;
  float: right;
  background-image: url(${props => icons[props.icon].initial});
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: center;
  height: 26px;
  width: ${props => props.right ? "32px": "27px"};
  position: relative;
  display: inline-block;
  &:hover {
    background-color: #363636;
    background-image: url(${props => icons[props.icon].hover});
  }
`;

const ToolbarButton = ({ icon, onClick, right }) => {
    useEffect(() => {
        // Preload hover image
        if (icon && icons[icon].hover) {
            const img = new Image();
            img.src = icons[icon].hover;
        }
    }, [icon]); // This effect depends on the icon prop

    return (
        <Container right={right} icon={icon} onClick={onClick}/>
    );
}

export default ToolbarButton;
