import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);

  if (!info || !info.snippet || !info.statistics) {
    console.error(info);
    return <div>Error loading video</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  //   const displayTitle = title.slice(0, 3).join(", ");

  return (
    <div className="p-2 mt-2 hover:scale-95 transition-all  overflow-hidden">
      <img
        className="rounded-2xl w-80 h-44 shadow-lg overflow-hidden"
        alt="cardImage"
        src={thumbnails.medium.url}
      ></img>
      <ul className="ml-1">
        <li className="font-bold mt-3 flex-wrap">
          {title.length > 30 ? `${title.slice(0, 30)}...` : title}
        </li>
        <li className="mt-1 text-gray-700">{channelTitle}</li>
        <li className="text-gray-700 mb-10">{statistics.viewCount} - views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
