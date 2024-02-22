import Checkbox from '../../../components/Checkbox/Checkbox';
import Button from '../../../components/Button/Button';
import HelpBox from '../../../components/HelpBox/HelpBox';
import Header from '../../../components/Header/Header';
import Label from '../../../components/Label/Label';
import NumberInput from '../../../components/NumberInput/NumberInput';

const helpText = "You can edit everything about this form including theme settings, fields and integrations in Growform."

const EmbeddedFormSettings = ({handleSetReplacingForm, handleChangeFormHeight, formId, formHeight}) => {
return (
<div>
<Header>Embedded form settings</Header>
{/* <Checkbox text="Make this form transparent, ignoring its theme settings"/> */}
<Label text="Initial form height (px):" />
<NumberInput
value={formHeight}
onChange={handleChangeFormHeight}
/>
<HelpBox>{helpText}</HelpBox>
<Button onClick={() => window.open(import.meta.env.VITE_APP_URL + '/build/' + formId, '_blank', 'noopener,noreferrer')} primary text="Edit form in Growform" icon="share"/>
<Button text="Replace this form" onClick={(e) => handleSetReplacingForm(true)}/>
</div>
)}

export default EmbeddedFormSettings;