import React from 'react'
import './Songs.css';

function Songs({ track }) {
    const convertMinutes = (duration)=> {
        var seconds = Math.floor((duration / 1000) % 60);
        var minutes = Math.floor((duration / (1000 * 60)) % 60);
        var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return  minutes + ":" + seconds ;
    }
  return (
    <div className="songs">

        <div className="song__title">

            <img src="https://youshark.neocities.org/assets/img/default.png" alt="" />
            <div className="song__details">
                <p>{track?.track?.name}</p>
                <small className="song__artist">{track?.track?.artists[0]?.name}</small>
            </div>
        </div>
        <div className="song__album">
            <p>{track?.track?.album?.name}</p>
        </div>
        <div className="song__duration">
            <p>{convertMinutes(`${track?.track?.duration_ms}`)}</p>
        </div>
    </div>
  )
}

export default Songs