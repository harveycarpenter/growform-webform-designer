import safelyGetAttribute from "../safelyGetAttribute";

const isGrowformContainer = async (el) => {

    if(await safelyGetAttribute(el, 'data-growform-container') === 'true') { return true }
        
    return false
        
    }

export default isGrowformContainer