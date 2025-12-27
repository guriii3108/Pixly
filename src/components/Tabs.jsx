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
    <div className="flex gap-10 p-5">
      {tabs.map((tab) => {
        return (
          <button
            onClick={() => dispatch(setActiveTab(tab.name))}
            
            key={tab.id}
            className={`p-2 rounded-md flex items-center gap-2 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-blue-500  transition-all duration-300 ease-in-out hover:text-white  ${activeTab === tab.name ? "bg-blue-500 text-white" : "bg-zinc-700"}`}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
