import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '6f42315f7fmsh522a02466f9246bp1f74e1jsnba7944c02c15',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => 
  {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;
  };