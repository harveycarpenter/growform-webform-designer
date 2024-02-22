import axios from "axios";

const getTemplates = async (authToken) => {

  try {

    const endpoint = import.meta.env.VITE_API_URL + "/shared/templates";

    const response = await axios.get(endpoint, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });

    const templates = response.data.map(template => {
      return {
        id: template._id,
        label: template.templateName,
        featured: template.featured
      }}).filter(template => template.featured).sort((a, b) => a.label.localeCompare(b.label));

      return templates;

  }


  catch(err) {
    return null;
  }

 
    }

export default getTemplates;