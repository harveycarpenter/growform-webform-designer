import { useState } from 'react';
import Toggle from '../../components/Toggle/Toggle';
import NewFormPanel from '../../panels/NewFormPanel/NewFormPanel';
import ExistingFormPanel from '../../panels/ExistingFormPanel/ExistingFormPanel';
import embedForm from '../../functions/embedForm';

const EmbedAForm = ({templates}) => {

  const [selectedPanel, setSelectedPanel] = useState("New form");

    return (
        <div>
        <Toggle 
options={["New form", "Existing form"]} 
value={selectedPanel} 
onToggle={setSelectedPanel}
/>
{selectedPanel === "New form" ? <NewFormPanel templates={templates} handleEmbedForm={embedForm} /> : <ExistingFormPanel handleEmbedForm={embedForm} />}
</div>
    )
}

export default EmbedAForm