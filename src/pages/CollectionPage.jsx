import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { Link } from 'react-router-dom'

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items)

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white font-sans selection:bg-cyan-500/30 py-10">

      {/* Navigation - Glass Header */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-1 p-2 bg-zinc-800/80 backdrop-blur-md rounded-full border border-zinc-700/50 shadow-xl z-50">
          <Link to="/" className="px-6 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-700/50 transition-all duration-300">
            Home
          </Link>
          <Link to="/collection" className="px-6 py-2 rounded-full text-sm font-medium text-white bg-zinc-700/50 shadow-inner transition-all duration-300">
            Collection
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white to-zinc-500">
          Your Collection
        </h1>

        {collection.length === 0 ? (
          <div className="text-center text-zinc-500 mt-20 flex flex-col items-center gap-4">
            <p className="text-xl font-light">Your collection is empty.</p>
            <Link to="/" className="px-8 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-sm tracking-widest uppercase">
              Start Exploring
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {collection.map((item) => (
              <div key={item.id} className="w-full">
                <CollectionCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="text-center text-zinc-600 py-10 text-sm mt-10">
        <p>&copy; {new Date().getFullYear()} Pixly. Crafted for creators.</p>
      </footer>
    </div>
  )
}

export default CollectionPage