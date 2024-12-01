import "./App.css";
import * as React from "react";

const videoPlaybackContext = React.createContext({
  videoPlayingId: null,
  setPlayingVideoId: () => {},
});

function VideoPlaybackProvider({ children }) {
  const [playingVideoId, setPlayingVideoId] = React.useState(null);

  return (
    <videoPlaybackContext.Provider
      value={{ playingVideoId, setPlayingVideoId }}
    >
      {children}
    </videoPlaybackContext.Provider>
  );
}

function VideoItem({ videoId, title, poster, src }) {
  const videoRef = React.useRef(null);
  const { playingVideoId, setPlayingVideoId } =
    React.useContext(videoPlaybackContext);

  const videoIsActive = playingVideoId === videoId;

  const handleTogglePlay = () => {
    if (!videoIsActive) {
      setPlayingVideoId(videoId);
    } else {
      setPlayingVideoId(null);
    }
  };

  React.useEffect(() => {
    if (videoIsActive) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoIsActive]);

  return (
    <li>
      <h3>{title}</h3>
      <article>
        <video ref={videoRef} poster={poster}>
          <source src={src} type="video/mp4" />
        </video>
        <button
          title={videoIsActive ? "Pause" : "Play"}
          onClick={handleTogglePlay}
        >
          {videoIsActive ? "⏸" : "▶"}
        </button>
      </article>
    </li>
  );
}

function NewsFeed() {
  const videos = [
    {
      id: 1,
      title: "The React Way",
      poster: "https://react.gg/img/visualized-og2.jpg",
      src: "https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4",
    },
    {
      id: 2,
      title: "The History of the Web",
      poster: "https://react.gg/img/visualized-og1.jpg",
      src: "https://stream.mux.com/EwJPlEBa0046jGSVdYOnRsX9WnqHjytgIBXwkOt7LvVg/high.mp4",
    },
    {
      id: 3,
      title: "Rendering, Visualized",
      poster: "https://react.gg/img/visualized-og5.jpg",
      src: "https://stream.mux.com/VvQKMwPEOq5BUnc9eRN4sL5sUEZrHqWxNlCbpXSkE3I/high.mp4",
    },
  ];

  return (
    <div>
      <h1>News Feed</h1>
      <ul>
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            videoId={video.id}
            title={video.title}
            poster={video.poster}
            src={video.src}
          />
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <VideoPlaybackProvider>
        <NewsFeed />
      </VideoPlaybackProvider>
    </div>
  );
}
