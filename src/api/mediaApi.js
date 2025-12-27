import axios from "axios";

const unsplashKey = import.meta.env.VITE_UNSPLASH_KEY ;
const tenorKey = import.meta.env.VITE_TENOR_KEY;
const pexelsKey = import.meta.env.VITE_PEXELS_KEY;


export const fetchPhotos = async (query ,page=1 ,per_page=20)=>{ //
  const response = await axios.get("https://api.unsplash.com/search/photos",{

    params:{query ,page ,per_page}, 
    //pass query(term we search for),page number(how many pages),per_page(number of images per page)

    headers:{
      Authorization:`Client-ID ${unsplashKey}` //we passed client id and our api key here from env file
    }
  });
  return response.data;
}

export const fetchVideos = async(query ,per_page=15)=>{
  const response = await axios.get("https://api.pexels.com/videos/search",{
    params:{query ,per_page}, 
    headers:{Authorization:pexelsKey}
  });
  return response.data;
}

export const fetchGifs = async(query,limit=15)=>{
  const response = await axios.get("https://tenor.googleapis.com/v2/search",{
    params:{q:query,key:tenorKey,limit},
  });
  return response.data;
}
