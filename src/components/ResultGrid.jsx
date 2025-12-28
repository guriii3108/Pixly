import { fetchGifs, fetchPhotos, fetchVideos } from "../api/mediaApi";
import { setError, setLoading, setResults, setQuery } from "../../redux/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector((store) => store.search);

  const getData = async () => {
    if (!query) {
      return;
    }
    try {
      dispatch(setLoading())
      let data = [];
      if (activeTab == "Photos") {
        let response = await fetchPhotos(query)
        data = response.results.map((item) => {
          return {
            id: item.id,
            type: "photo",
            thumbnail: item.urls.thumb,
            src: item.urls.full,
            title: item.alt_description,
            url: item.links.html
          }
        })
        // console.log(data);
        dispatch(setResults(data))

      }
      if (activeTab == "Gifs") {
        let response = await fetchGifs(query)
        data = response.results.map((item) => {
          return {
            id: item.id,
            type: "gif",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            title: item.title || "GIF",
            url: item.url
          }
        })
        // console.log(data);
        dispatch(setResults(data))
      }
      if (activeTab == "Videos") {
        let response = await fetchVideos(query)
        data = response.videos.map((item) => {
          return {
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[1].link,
            url: item.url
          }
        })
        // console.log(response.videos);
        dispatch(setResults(data))
      }
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
  useEffect(() => {
    getData()
  }, [query, activeTab])
  if (error) {
    return (
      <div className="flex justify-center items-center py-20">
        <h1 className="text-red-500 text-xl font-medium">{error}</h1>
      </div>
    )
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 w-full max-w-7xl mx-auto">
        {results.map((item) => {
        return (
          <div key={item.id} className="w-full">
           <a target="_blank" href={item.url}><ResultCard item={item} /></a>
          </div>
        )
      })}
    </div>
  )
}

export default ResultGrid