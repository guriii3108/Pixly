import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeCollection, removedToast } from '../../redux/slices/collectionSlice'

const CollectionCard = ({ item }) => {
  const collection = useSelector((state) => state.collection.items)
  const dispatch = useDispatch()
  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id))
    dispatch(removedToast())
  }

  return (
    <div className='group relative w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
      <a href={item.url} target="_blank" className='w-full h-full bg-gray-300 animate-pulse group-hover:animate-none playback-container'>
        {item.type == "photo" ? <img className='w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out' src={item.src} alt={item.title} loading="lazy" /> : null}
        {item.type == "gif" ? <img className='w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out' src={item.src} alt={item.title} loading="lazy" /> : null}
        {item.type == "video" ? <video loop muted autoPlay playsInline className='w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out' >
          <source src={item.src} type="video/mp4" />
        </video> : null}
      </a>

      {/* Premium Gradient Overlay with Slide-Up Animation */}
      <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6'>

        <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-3'>
          <p className='text-white font-medium text-sm tracking-wide line-clamp-2 drop-shadow-md'>
            {item.title || "Untitled"}
          </p>

          <div className="flex items-center justify-between">
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent link click
                removeFromCollection(item);
              }}
              className='backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-5 py-2.5 rounded-full uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group/btn'
            >
              <span>Remove</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transform group-hover/btn:scale-125 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </button>

            {/* Decorative indicator */}
            <div className="w-8 h-[2px] bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard 