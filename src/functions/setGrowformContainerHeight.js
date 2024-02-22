const setGrowformContainerHeight = async (containerElementId, growformEmbedId, height) => {
    if (!containerElementId) return;
  
    const allElements = await webflow.getAllElements();
    const growformContainerElement = allElements.find(element => element.id?.element === containerElementId);
  
    if (!growformContainerElement || !growformContainerElement.styles) return;
  
    const styles = await growformContainerElement.getStyles();
  
    // Attach additional details directly to each style object
    await Promise.all(styles.map(async style => {
      style.Name = await style.getName();
      style.Properties = await style.getProperties();
      style.ID = style.id;
    }));
  
    // Now, find the specific style. Since we've modified the original objects, they retain their prototypes.
    const growformContainerStyles = styles.find(style => style.Name === `Growform Container ${growformEmbedId}`);
  
    if (!growformContainerStyles) return;
  
    await growformContainerStyles.setProperty('height', `${height}px`);
  };

export default setGrowformContainerHeight;