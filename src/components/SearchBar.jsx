import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../redux/slices/searchSlice";

const SearchBar = () => {

  const dispatch = useDispatch();

  //Two-Way Binding:
  const [search, setSearch] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(search)); //set the query

    setSearch('');
    // console.log(search);

  }

  return (
    <div className="w-full flex justify-center pt-8 pb-4">
      <form onSubmit={(e) => submitHandler(e)}
        className="relative flex items-center w-full max-w-2xl bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 rounded-full shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300 group">

        {/* Search Icon */}
        <div className="pl-6 text-zinc-400 group-focus-within:text-cyan-400 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          className="w-full bg-transparent text-white placeholder-zinc-500 text-lg px-4 py-4 focus:outline-none rounded-full"
          required
          type="text"
          placeholder="Search for photos, gifs, videos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="m-1 px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-md"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar