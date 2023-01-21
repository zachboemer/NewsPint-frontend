import axios from 'axios';

const baseURL = 'https://news-pint-backend.herokuapp.com/';

export const getArticles = async () => {
  try{
      const response = await axios.get(`${baseURL}articles`);
      return response.data;
  }catch(error){
      throw error;
  }
};