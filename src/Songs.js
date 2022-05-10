import React from 'react'
import './Songs.css';

function Songs({ track }) {
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

        </div>
        <div className="song__duration">

        </div>
    </div>
  )
}

export default Songs