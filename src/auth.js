import axios from 'axios';
import Cookies from 'js-cookie';

export const loginUser = async (token) => {
  Cookies.set('jwt', token, { expires: 7, secure: true, sameSite: 'None' });
  await webflow.setExtensionSize("default");
  const jwt = Cookies.get('jwt');
};

export const logoutUser = async () => {
  Cookies.remove('jwt', { secure: true, sameSite: 'None' });
  await webflow.setExtensionSize("large");
 window.location.reload(); // Reload the app to reflect logged-out state
};

export const getJwt = async () => {
  const jwt = Cookies.get('jwt');
  return jwt || null;
};

export const loggedIn = async () => {

    const jwt = Cookies.get('jwt');

    if (jwt) {
      return true;
    } else {
      return false;

}}

export const fetchUserDetails = async () => {
  try {
    const requestUrl = import.meta.env.VITE_API_URL + "/shared/accountDetails";
    const response = await axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`,
      },
    });
    return { loggedIn: true, email: response.data.email, firstName: response.data.firstName };
  } catch (error) {
    console.error('Error fetching user details:', error);
    logoutUser(); // Logout user if fetching details fails
    return { loggedIn: false, email: '' };
  }
};