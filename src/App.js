import React,{useRef,useState} from 'react';
import './style/style.scss';
import Player from './components/player';
import Song from './components/song';
import data from "./util";
import Lybrary from "./components/lybrary"
import Nav from "./components/Nav"

function App() {
  const audioRef = useRef(null);
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0]);
  const [isPlaying,setPlaying] = useState(false);

  const [songInfo,setSongInfo]=useState({
    currentTime: 0,
    duration: 0,
    animationPrecentage: 0,
});

  const [libraryStatus, setLibraryStatus] = useState(false);

const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  const roundedCurrent = Math.round(current);
  const roundedDuration = Math.round(duration);
  const animation = Math.round((roundedCurrent / roundedDuration * 100));
  setSongInfo(
      {
      ...songInfo,
      currentTime:current,
      duration:duration,
      animationPrecentage:animation,
      });
}
 const songEndHandler = async() => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]); 
      if(isPlaying) audioRef.current.play();
 }
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player
       setSongInfo={setSongInfo}
       songInfo={songInfo}
       audioRef={audioRef}
       isPlaying={isPlaying}
       setPlaying={setPlaying}
       currentSong={currentSong}
       songs={songs}
       setCurrentSong={setCurrentSong}
       setSongs={setSongs}
       />
       <Lybrary 
       libraryStatus={libraryStatus}
       audioRef={audioRef} 
       songs={songs} 
       isPlaying={isPlaying}
       setSongs={setSongs}
       setCurrentSong={setCurrentSong}
       />
       <audio 
                onTimeUpdate={timeUpdateHandler} 
                ref={audioRef} 
                src={currentSong.audio}
                onEnded={songEndHandler}
                onLoadedMetadata={timeUpdateHandler}
            ></audio>
    </div>
  );
}

export default App;
