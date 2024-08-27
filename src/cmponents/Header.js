import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/AppSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestion(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2  items-center">
      <div className="flex col-span-1 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        ></img>

        <img
          className="h-14 ml-4 cursor-pointer"
          alt="youtube logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
        ></img>
      </div>

      <div className="col-span-10 text-center">
        <div>
          <input
            className="p-2 w-1/2 rounded-l-full pl-10 border border-gray-300 overflow-hidden"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          ></input>
          <button className="border border-gray-300 p-2 px-3 rounded-r-full bg-gray-100 hover:bg-gray-200">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed items-center ml-80 mt-1 bg-white py-2 px-6 w-[720px] rounded-xl shadow-slate-400 border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 ml-1 shadow-sm hover:bg-gray-100 hover:rounded-xl text-left"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 cursor-pointer">
        <img
          className="h-10"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
