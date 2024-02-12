const embedForm = async (id) => {
    console.log('id is', id);
    console.log('webflow object is', window.webflow);


const element = await webflow.getSelectedElement();

const newEl = webflow.createDOM("p");
newEl.setTextContent("Hello, world!");
const existingChildren = element.getChildren();
element.setChildren([...existingChildren, newEl]); 
await element.save();   





}

export default embedForm