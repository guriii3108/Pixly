import { fetchGifs, fetchPhotos, fetchVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";

const App = () => {
    return (
        <div className="w-full h-screen bg-zinc-900 text-white">
          <SearchBar />
        </div>
    );
};

export default App;
