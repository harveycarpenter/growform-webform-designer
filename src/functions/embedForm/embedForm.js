import getEmbedId from "./getEmbedId";
import growformContainerStyles from "./growformContainerStyles.js";
import setOrUpdateStyles from "./setOrUpdateStyles";
import isGrowformContainer from "./isGrowformContainer";
import isGrowformIframe from "./isGrowformIframe";
import safelyGetAttribute from "../safelyGetAttribute";

const growformIframeStyles = {
    height: '100%',
    width: '100%',
    'padding-right': '0px',
    'padding-bottom': '0px'
}

const embedForm = async (formId) => {

const embedId = getEmbedId();

const containerStyleName = "Growform Container" + " " + embedId;
const iFrameStyleName = "Growform iFrame" + " " + embedId;
const embedTransparency = "true";

let el = await webflow.getSelectedElement();

if(await isGrowformIframe(el)) {

    const allElements = await webflow.getAllElements();

    const growformContainerElementId = await safelyGetAttribute(el, 'data-growform-container-element-id');

    const targetElement = allElements.find(el => el.id.element === growformContainerElementId);

    var growformContainerDiv = await targetElement?.after(webflow.elementPresets.DivBlock);
    await targetElement?.remove();

} else if (await isGrowformContainer(el)) {

    var growformContainerDiv = await el?.after(webflow.elementPresets.DivBlock);
    await el?.remove();

} else {

    var growformContainerDiv = await el?.prepend(webflow.elementPresets.DivBlock);
}

await growformContainerDiv.setCustomAttribute('data-growform-form-id', formId);
await growformContainerDiv.setCustomAttribute('data-growform-embed-id', embedId);
await growformContainerDiv.setCustomAttribute('data-growform-container', "true");

let growformIframe = await growformContainerDiv?.prepend(webflow.elementPresets.DOM);

await growformIframe.setTag('iframe');
await growformIframe.setAttribute('src', `https://embed.growform.co/go/${formId}/embedMethod/iFrame/${embedId}`);
await growformIframe.setAttribute('frameborder', '0');
await growformIframe.setAttribute('style', 'width: 100%; height: 100%; border: none;');
await growformIframe.setAttribute('scrolling', 'no');
await growformIframe.setAttribute('allowTransparency', 'true');
await growformIframe.setAttribute('data-growform-form-id', formId);
await growformIframe.setAttribute('data-growform-embed-id', embedId);
await growformIframe.setAttribute('data-growform-embedSetting-transparency', embedTransparency);
await growformIframe.setAttribute('data-growform-iframe', "true");
await growformIframe.setAttribute('data-growform-container-element-id', growformContainerDiv.id.element);

await webflow.setSelectedElement(growformContainerDiv);

setOrUpdateStyles(growformContainerDiv, growformContainerStyles, containerStyleName);
setOrUpdateStyles(growformIframe, growformIframeStyles, iFrameStyleName);



}

export default embedForm