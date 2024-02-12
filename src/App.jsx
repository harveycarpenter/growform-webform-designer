import './App.css';
import { useState, useEffect } from 'react';
import EmptyState from './panels/EmptyState/EmptyState';
import EmbedAForm from './panels/EmbedAForm/EmbedAForm';
import getTemplates from './getTemplates';

function App() {

  const [elementIsSelected, setElementIsSelected] = useState(false);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    (async () => {
        setTemplates(await getTemplates(import.meta.env.VITE_JWT));
    })();
  }, []);

   useEffect(() => {
    const subscribeToElementSelection = async () => {
      webflow.subscribe('selectedelement', async (element) => {
        if (!element) {
          setElementIsSelected(false);
        } else {
          console.log(element)
          if(element.type) {
            setElementIsSelected(true);
          } else {
            setElementIsSelected(false);
          }
        }
      });
    };

    subscribeToElementSelection();
  }, []);


  return (
    <div className="App">
{!elementIsSelected ? <EmptyState header="Make a selection" text="Select an element (eg. section or container) on the canvas to activate this panel" icon="arrow"/> : <EmbedAForm templates={templates}/>}
    </div>
  );
}

export default App;