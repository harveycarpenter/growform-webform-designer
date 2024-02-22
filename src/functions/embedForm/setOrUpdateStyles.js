const setOrUpdateStyles = async (webflowDOMElement, newStyles, styleName) => {
    let newWebflowStyle = await webflow.createStyle(styleName);
    newWebflowStyle.setProperties(newStyles);
    webflowDOMElement.setStyles([newWebflowStyle])
}

export default setOrUpdateStyles