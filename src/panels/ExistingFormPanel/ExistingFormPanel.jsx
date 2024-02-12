import { useState } from 'react';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';

import TextInput from '../../components/TextInput/TextInput';

function getFormIdFromString(text) {
    // Define the regular expression for a URL ending with a MongoDB ObjectId
    const urlPattern = /\/([0-9a-fA-F]{24})$/;
    // Define the regular expression for a MongoDB ObjectId
    const objectIdPattern = /^[0-9a-fA-F]{24}$/;
    
    // Check if the input is a URL that ends with a MongoDB ObjectId
    let match = text.match(urlPattern);
    if (match) {
      // If the input is a URL with an ObjectId, return the ObjectId part
      return match[1];
    } else {
      // If not a URL, check if the input is directly a MongoDB ObjectId
      match = text.match(objectIdPattern);
      if (match) {
        // If the input directly matches the ObjectId pattern, return it
        return match[0];
      }
    }
    
    // If neither case matches, return null indicating no valid ID was found
    return null;
  }




const ExistingFormPanel = ({handleEmbedForm}) => {

    const [formURL, setFormURL] = useState("");
    const [formURLIsInvalid, setFormURLIsInvalid] = useState(false);

    const handleChangeFormURL = (value) => {
        setFormURL(value);
        setFormURLIsInvalid(false);
    }

    const handleEmbedClick = () => {

        const validFormId = getFormIdFromString(formURL);

        if(!validFormId) {
            webflow.notify({type: "Info", message: "Please enter a valid form URL or ID"});
            setFormURLIsInvalid(true);
        }

        else {            
            setFormURLIsInvalid(false);
            handleEmbedForm(validFormId);
        }

    }

    return (
        <div>

            <Label text="Your form URL or ID:" />
            <TextInput 
            value={formURL}
            label="https://form.growform.co/go/65b..."
            onChange={handleChangeFormURL}
            intent={formURLIsInvalid ? "danger" : "none"}
/>
<Button text="Embed form" primary onClick={handleEmbedClick} />
        </div>
    )
}

export default ExistingFormPanel