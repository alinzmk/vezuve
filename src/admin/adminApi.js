import axios from "axios";
const API_BASE_URL = 'https://localhost:6161';


export const getAdminAccessToken = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/admin_token`, {
      username: username,
      password: password,
    });

    // Assuming the response data contains the access token and token type
    const { access_token, token_type } = response.data;

    // You can do something with the access token here (e.g., store it in state or local storage)
    console.log('Access Token:', access_token);

    return { access_token, token_type };
  } catch (error) {
    // Handle errors (e.g., incorrect email or password)
    console.error('Error obtaining admin access token:', error);
    throw error;
  }
};
