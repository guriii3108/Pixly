import { fetchGifs, fetchPhotos, fetchVideos } from "../api/mediaApi";
import { setError, setLoading, setResults, setQuery } from "../../redux/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector((store) => store.search);

  const getData = async () => {
    let data;
    if (activeTab == "Photos") {
      let response = await fetchPhotos(query)
      data = response.results
      console.log(data);
      
    }
    if (activeTab == "Gifs") {
      let response = await fetchGifs(query)
      data = response.results
      console.log(data);
      
    }
    if (activeTab == "Videos") {
      let response = await fetchVideos(query)
      data = response.videos
      console.log(data);
      
    }
  }

  useEffect(() => {
    getData()
  }, [query, activeTab])

  return (
    <div>
      Getdata
    </div>
  )
}

export default ResultGrid