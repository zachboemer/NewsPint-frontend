import axios from 'axios';

const baseURL = 'https://news-pint-backend.herokuapp.com/';

export const getAllArticles = async () => {
  try{
      const response = await axios.get(`${baseURL}articles`);
      return response.data;
  }catch(error){
      throw error;
  }
}

export const getPintOfDay = async () => {
  try{
      const response = await axios.get(`${baseURL}pint-of-day/`);
      return response.data;
  }catch(error){
      throw error;
  }
}
// maybe we will use this later

// example for using the api to pass in a specific date
// export const getPintOfDay = async (date) => {
//   try{
//       const response = await axios.get(`${baseURL}pint-of-day/${date}`);
//       return response.data;
//   }catch(error){
//       throw error;
//   }
// }