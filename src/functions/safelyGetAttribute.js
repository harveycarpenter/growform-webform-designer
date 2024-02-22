const safelyGetAttribute = async (element, attribute) => {
    if (element && typeof element.getCustomAttribute === 'function') {
      return await element.getCustomAttribute(attribute);
    } else  if (element && typeof element.getAttribute === 'function') {
      return await element.getAttribute(attribute);
    }
    return null;
  }

export default safelyGetAttribute