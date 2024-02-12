import axios from "axios";

const createForm = async (formName, selectedTemplateId, authToken) => {

    try {
   
       const endpoint = process.env.API_URL + "/shared/createform";
   
       const data = {
           id: selectedTemplateId,
           formName: formName,
         };
   
       const response = await axios.post(endpoint, data, {
           headers: {
             Authorization: "Bearer " + authToken,
           },
         });
   
         if (response.status === 200) {
          
           return {
               success: true,
               formId: response.data
           }
   
         } else {

            console.log(response.data);
           return {
               success: false,
               error: "Something went wrong"
           }
         }
   
    }
   
    catch(err) {

        console.log(err)
   
       return {
           success: false,
           error: "Something went wrong"
       }
   
    }
   
   }

export default createForm;
   