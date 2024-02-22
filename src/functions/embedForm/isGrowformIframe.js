import safelyGetAttribute from "../safelyGetAttribute";

const isGrowformIframe = async (el) => {

    if(await safelyGetAttribute(el, 'data-growform-container-element-id')) { return true }
    
    return false
    
    }

export default isGrowformIframe