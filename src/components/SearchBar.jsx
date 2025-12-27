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
    <div>
      <form onSubmit={(e)=>submitHandler(e)} 
      className="bg-zinc-800 p-2 rounded-md flex gap-2">
        <input className="w-full p-2 border border-zinc-600 rounded-md" 
        required
        type="text" 
        placeholder="Search Anything..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} />
        <button className=" p-2 border border-zinc-600 rounded-md" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar