import './App.css';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import EmbedAForm from './panels/EmbedAForm/EmbedAForm';
import EmptyState from './panels/EmptyState/EmptyState';
import GrowformFormSelected from './panels/GrowformFormSelected/GrowformFormSelected';
import getTemplates from './getTemplates';
import safelyGetAttribute from './functions/safelyGetAttribute';
import getGrowformContainerHeight from './functions/getGrowformContainerHeight';
import setGrowformContainerHeight from './functions/setGrowformContainerHeight';


const StyledDiv = styled.div`
  margin: 12px;
`;

function App() {

  const [templates, setTemplates] = useState([]);
  const [replacingForm, setReplacingForm] = useState(false);

  const handleSetReplacingForm = (value) => {
    setReplacingForm(value);
    };

    const handleChangeFormHeight = (value) => {

      setGrowformContainerHeight(selectedElement.growformContainerElementId, selectedElement.growformEmbedId, value);

      setSelectedElement({
        ...selectedElement,
        growformContainerHeight: value
      })

    };

  const [selectedElement, setSelectedElement] = useState({
    elementId: null,
    isGrowform: false,
    isGrowformIframe: false,
    isGrowformContainer: false,
    growformContainerId: null,
    embedSettings: null,
    growformFormId: null
  });

  const clearSelectedElement = () => {
    setSelectedElement({
      elementId: null,
      isGrowform: false,
      isGrowformIframe: false,
      isGrowformContainer: false,
      growformContainerId: null,
      embedSettings: null,
      growformFormId: null
    });
  };

  const getEmbedSetting = async (element, setting) => {
    let settingValue = null;

    if (element && setting) {
      const attribute = `data-growform-embedSetting-${setting}`;
      const growformFormId = await safelyGetAttribute(element, 'data-growform-form-id');

      if (growformFormId) {
        settingValue = await safelyGetAttribute(element, attribute);
        if (!settingValue && element.children && typeof element.getChildren === 'function') {
          const children = await element.getChildren();
          children.forEach(async (child) => {
            if (await safelyGetAttribute(child, 'data-growform-iframe') && await safelyGetAttribute(child, attribute)) {
              settingValue = await safelyGetAttribute(child, attribute);
            }
          });
        }
      }
    }

    return settingValue;
  };

  useEffect(() => {
    (async () => {
      setTemplates(await getTemplates(import.meta.env.VITE_JWT));
    })();
  }, []);

  useEffect(() => {
    const subscribeToElementSelection = async () => {
      webflow.subscribe('selectedelement', async (element) => {

        if (element) {

        handleSetReplacingForm(false);

        const isGrowform = !!await safelyGetAttribute(element, 'data-growform-form-id');

        const embedSettings = isGrowform ? {
          transparency: getEmbedSetting(element, 'transparency'),
        } : null;
  
          const isGrowformIframe = await safelyGetAttribute(element, 'data-growform-iframe') === 'true';
          const isGrowformContainer = await safelyGetAttribute(element, 'data-growform-container') === 'true';
          const growformEmbedId = await safelyGetAttribute(element, 'data-growform-embed-id');

          const growformContainerElementId = isGrowformContainer ? element.id.element : isGrowformIframe ? safelyGetAttribute(element, 'data-growform-container-element-id') : null;

          const growformContainerHeight = isGrowform ? await getGrowformContainerHeight(growformContainerElementId, growformEmbedId) : null;

          const selectedElement = {
            elementId: element.id.element,
            isGrowform: isGrowform,
            isGrowformIframe: isGrowformIframe,
            isGrowformContainer: isGrowformContainer,
            growformContainerElementId: growformContainerElementId,
            growformContainerHeight: growformContainerHeight,
            embedSettings: embedSettings,
            growformFormId: await safelyGetAttribute(element, 'data-growform-form-id'),
            growformEmbedId: growformEmbedId
          }

          console.log('selected element is', selectedElement);
  
          setSelectedElement(selectedElement);
        } else {
          clearSelectedElement();
        }
      });
    };
  
    subscribeToElementSelection();
  }, []);
  
  console.log('selected element is', selectedElement)

  return (
    <StyledDiv className="bp5-dark">
      {(!selectedElement.elementId) ? <EmptyState header="Make a selection" text="Select an element (e.g., section or container) on the canvas to activate this panel" icon="arrow"/> : null}
      {(selectedElement.elementId && !selectedElement.isGrowform) ? <EmbedAForm templates={templates}/> : null}
      {(selectedElement.elementId && selectedElement.isGrowform) ? <GrowformFormSelected templates={templates} formId={selectedElement.growformFormId} replacingForm={replacingForm} handleSetReplacingForm={handleSetReplacingForm} formHeight={selectedElement.growformContainerHeight} handleChangeFormHeight={handleChangeFormHeight}/> : null}
    </StyledDiv>
  );
}

export default App;
