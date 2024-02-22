import styled from 'styled-components';
import EmbeddedFormSettings from './EmbeddedFormSettings/EmbeddedFormSettings';
import ReplaceForm from './ReplaceForm/ReplaceForm';

import { useState } from 'react';

const Container = styled.div`
display: flex;
flex-direction: column;
`

const GrowformFormSelected = ({formId, templates, replacingForm, handleSetReplacingForm, handleChangeFormHeight, formHeight}) => {

return (
<Container>
{!replacingForm ? <EmbeddedFormSettings formId={formId} handleSetReplacingForm={handleSetReplacingForm} formHeight={formHeight} handleChangeFormHeight={handleChangeFormHeight}/> : (
<ReplaceForm templates={templates} handleSetReplacingForm={handleSetReplacingForm}/>
)}

</Container>
)

}

export default GrowformFormSelected;

