import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((Store) => Store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-58">
      <ul className="p-1 my-2">
        <li className="ml-3">
          <Link to="/">Home</Link>
        </li>
        <li className="ml-3">Shorts</li>
        <li className="ml-3">Subscriptions</li>
        <li className="ml-3">Videos</li>
      </ul>
      <h1 className="font-bold text-md pb-2">Subscriptions</h1>

      <ul className="p-1 my-2">
        <li className="ml-3">Travel with A.K</li>
        <li className="ml-3">Stay Awara</li>
        <li className="ml-3">Tech Burner</li>
        <li className="ml-3">Krish Rodrigruez</li>
        <li className="ml-3">Pratik Jain</li>
      </ul>
      <h1 className="pt-3 font-bold text-md pb-2">Eplore</h1>
      <ul className="p-1">
        <li className="ml-3">Trending</li>
        <li className="ml-3">Shopping</li>
        <li className="ml-3">Gamings</li>
        <li className="ml-3">Movies</li>
        <li className="ml-3">Sports</li>
        <li className="ml-3">Fashion & Beauty</li>
      </ul>
    </div>
  );
};

export default Sidebar;
