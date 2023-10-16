import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

 const VideoTrailerBox = ({movies, selectedMovie}) => {

  console.log("SELECT"+selectedMovie);
  console.log(movies[0].id);

    //Constructor/componentDidMount/States
    const [videoNumberId, setVideoId] = useState(selectedMovie)
    const [player, setPlayerBox] = useState(null)

    const opts = {
      height: '500',
      width: '100%',
      playerVars: {
        autoplay: 1
      },
    };
     

  //componentDidMount/componentDidUpdate
  useEffect(() => {
    //TITULO PESTAÑA NAVEGADOR
    document.title = `You watching video ${videoNumberId}`;
  });

  return (
    <div>
      <YouTube videoId={movies[videoNumberId].videoUrl} opts={opts} onReady={(event) => setPlayerBox(event.target)} />
      <button type="button" onClick={() => setPlayerBox(player.playVideo())} disabled={!player}>
        Play
      </button>
      <button type="button" onClick={() => setPlayerBox(player.pauseVideo())} disabled={!player}>
        Pause
      </button>
      
      <p style={{color: '#FFFFFF'}} id="description">{movies[videoNumberId].descripcion}</p>
    </div>
  );
}

export default VideoTrailerBox;