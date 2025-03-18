import React, {useState, useEffect} from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }) => {
  const[width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

var opts;

  if(width <= 450){ //mobile
    opts = {
      height: "196",
      width: "310",
      playerVars: {
        autoplay: 0, // Auto-play the video
      },
    };
  }
  else if(width <= 640 && width > 450){ //small
    opts = {
      height: "236",
      width: "419",
      playerVars: {
        autoplay: 0, // Auto-play the video
      },
    };
  }
  else if(width <= 1024 && width > 640){ //mediumn
    opts = {
      height: "316",
      width: "562",
      playerVars: {
        autoplay: 0, // Auto-play the video
      },
    };
  }
  else if(width <= 1079 && width > 1024){ //large
    opts = {
      height: "257",
      width: "458",
      playerVars: {
        autoplay: 0, // Auto-play the video
      },
    };
  }
  else{
    opts = {
      height: "362",
      width: "543",
      playerVars: {
        autoplay: 0, // Auto-play the video
      },
    };
  }

  return <YouTube videoId={videoId} opts={opts} className="mx-auto"/>;
};

export default YouTubePlayer;