import { useState } from 'react';

import Select from '../../components/Select/Select';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import createForm from './functions/createForm';
import Label from '../../components/Label/Label';
import EmptyState from '../EmptyState/EmptyState';

const NewFormPanel = ({templates, handleEmbedForm}) => {

    const [selectedTemplateId, setSelectedTemplateId] = useState("64ac02d3f49442397308792b");
    const [formName, setFormName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSelectTemplateId = (value) => {
        const selectedOption = templates.find(option => option.label === value);
        setSelectedTemplateId(selectedOption.id);
    }

    const getTemplateLabelFromId = (id) => {
        const selectedOption = templates.find(option => option.id === id);
        return selectedOption.label;
    }

    const handleChangeFormName = (value) => {
        setFormName(value);
    }

    const handleEmbedClick = async () => {

        setLoading(true);

        const result = await createForm(formName, selectedTemplateId, import.meta.env.VITE_API_URL);

        if (result.success && result.formId) {
            handleEmbedForm(result.formId)
        } else {
            window.alert('Something went wrong');
        }

        setLoading(false);

    }

    if(!templates) {
        return (
            <div>
            <EmptyState icon={null} header="Error loading templates" text="Please try again to reload the extension" />
            <Button text="Try again" onClick={() => window.location.reload()} />
            </div>
        )
    }

    return (
        <div>
            {templates.length ?  (
<div>
<Label text="Start with a template designed for:" />
<Select 
options={templates}
value={getTemplateLabelFromId(selectedTemplateId)}
onChange={handleSelectTemplateId}
/>
</div>
) : null}

<Label text="Name your form:" />
<TextInput 
value={formName}
label="Harvey's excellent form"
onChange={handleChangeFormName}
/>
<div style={{marginTop: "4px"}}>
<Button
text="Embed form"
primary
loading={loading}
onClick={handleEmbedClick}
/>
</div>
</div>
    )
}

export default NewFormPanel