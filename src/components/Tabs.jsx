import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../redux/slices/searchSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  const tabs = [
    { id: 1, name: "Gifs", icon: "🎬" },
    { id: 2, name: "Photos", icon: "📸" },
    { id: 3, name: "Videos", icon: "📹" },
  ];
  return (
    <div className="flex justify-center py-6">
      <div className="flex gap-2 p-2 bg-zinc-800/80 backdrop-blur-md rounded-full border border-zinc-700/50 shadow-xl">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <button
              onClick={() => dispatch(setActiveTab(tab.name))}
              key={tab.id}
              className={`
                relative px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 ease-out
                ${isActive
                  ? "bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                }
              `}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
