import EmbedAForm from '../../../panels/EmbedAForm/EmbedAForm';
import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/Button';

const ReplaceForm = ({templates, handleSetReplacingForm}) => {

return (
<div>
<Header paddingBottom>Replace embedded form with...</Header>
<EmbedAForm templates={templates}/>
<Button text="Go back" onClick={(e) => handleSetReplacingForm(false)}/>
</div>
)}

export default ReplaceForm