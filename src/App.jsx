import { fetchGifs, fetchPhotos, fetchVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
    return (
        <div className="w-full h-screen bg-zinc-900 text-white">
          <SearchBar />
          <Tabs />
          <ResultGrid />  
        </div>
    );
};

export default App;
