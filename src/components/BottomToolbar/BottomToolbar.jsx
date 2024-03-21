import ToolbarButton from '../ToolbarButton/ToolbarButton';
import styled from 'styled-components';

const Container = styled.div`
height: 28px;
width: 100%;
position: absolute;
bottom: 1px;
left: 0px;
overflow: hidden;
`

const BottomToolbar = ({handleUserLogout, handleOpenHelpDocs}) => {
return (
<Container>
<ToolbarButton right={true} icon="logout" onClick={handleUserLogout}/>
<ToolbarButton icon="help" onClick={handleOpenHelpDocs}/>
</Container>
    )
}


export default BottomToolbar;