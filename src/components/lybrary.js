import React from "react";
import LybrarySong from "./lybrarySongs";

const Lybrary = ({
  songs,
  libraryStatus,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  return (
    <div className={`lybrary ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="lybrary-songs">
        {songs.map((song) => (
          <LybrarySong
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            id={song.id}
            key={song.id}
            isPlaying={isPlaying}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};
export default Lybrary;
