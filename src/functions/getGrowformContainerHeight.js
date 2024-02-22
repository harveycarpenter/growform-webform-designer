const getGrowformContainerHeight = async (containerElementId, growformEmbedId) => {
    if (!containerElementId) return null;
  
    const allElements = await webflow.getAllElements();
    const growformContainerElement = allElements.find(element => element.id?.element === containerElementId);
  
    if (!growformContainerElement || !growformContainerElement.styles) return null;
  
    const styles = await growformContainerElement.getStyles();
  
    const styleDetails = await Promise.all(styles.map(async style => ({
      Name: await style.getName(),
      Properties: await style.getProperties(),
      ID: style.id,
    })));
  
    const growformContainerStyles = styleDetails.find(style => style.Name === `Growform Container ${growformEmbedId}`);
  
    if (!growformContainerStyles || !growformContainerStyles.Properties?.height) return null;
  
    return parseInt(growformContainerStyles.Properties.height.replace('px', '')) || null;
  };

export default getGrowformContainerHeight;