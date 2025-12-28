import { useRef } from 'react'
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Home = () => {
  const { query } = useSelector((store) => store.search);
  console.log(query);


  const mainSectionRef = useRef(null);
  const scrollToMain = () => {
    mainSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">

        {/* Void Background - Subtle and Deep */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          {/* Static deep radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black"></div>
          {/* Very subtle grain overlay if needed, or just pure clean darkness */}
        </div>

        <div className="z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-tight text-white/90 animate-[fade-in-up_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0ms' }}>
            Pixly
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 font-light tracking-widest uppercase max-w-lg leading-relaxed animate-[fade-in-up_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '300ms' }}>
            The curated universe of visuals
          </p>

          <button
            onClick={scrollToMain}
            className="group mt-10 px-12 py-4 bg-transparent border border-zinc-800 rounded-full text-zinc-400 text-xs font-medium tracking-[0.2em] uppercase hover:bg-zinc-900 hover:text-white hover:border-zinc-600 transition-all duration-700 ease-out animate-[fade-in-up_1s_ease-out_forwards] opacity-0"
            style={{ animationDelay: '600ms' }}
          >
            Enter
          </button>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-20 animate-pulse">
          <div className="w-px h-12 bg-linear-to-b from-transparent via-white to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={mainSectionRef} className="min-h-screen w-full bg-zinc-950 relative z-10 py-10">

        {/* Navigation - Glass Header */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-1 p-2 bg-zinc-800/80 backdrop-blur-md rounded-full border border-zinc-700/50 shadow-xl z-50">
            <Link to="/" className="px-6 py-2 rounded-full text-sm font-medium text-white bg-zinc-700/50 shadow-inner transition-all duration-300">
              Home
            </Link>
            <Link to="/collection" className="px-6 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all duration-300">
              Collection
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <SearchBar />
          <Tabs />
          <ResultGrid />
        </div>

        <footer className="text-center text-zinc-600 py-10 text-sm">
          <p>&copy; {new Date().getFullYear()} Pixly. Crafted for creators.</p>
        </footer>
      </div>
    </>
  )
}

export default Home;