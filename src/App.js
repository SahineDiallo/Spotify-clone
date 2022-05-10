import './App.css';
import Login from './Login';
import { useState, useEffect } from 'react';
import { getUrlToken } from './spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {UseDataLayerValue} from './DataLayerProvider';

function App() {
  const [_token, setToken ] = useState(null);
  const [ ,dispatch ] = UseDataLayerValue();
  const spotify = new SpotifyWebApi();
  
  useEffect(()=> {
    const urlToken = getUrlToken();
    const _token = urlToken?.access_token;

    if (_token) {
      setToken(_token);
      window.location.hash = "";
      spotify.setAccessToken(_token);
      // let's get the current user
      spotify.getMe()
      .then(user=>{
        dispatch({
          type: "SET_USER",
          user: user,
        })
      });
      spotify.getUserPlaylists()
      .then(playlists => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
        const playlist_id = (playlists?.items[0]?.id)
        spotify.getPlaylist(playlist_id).then(
          _cur_playlist => {
            dispatch({
              type: "SET_CURRENT_PLAYLIST",
              current_playlist: _cur_playlist
            })
          }

        )
      });

      
    }
  }, [_token])
  

  return (
    <div className="App">
        {_token ? <Player spotify={spotify} /> :<Login />}
    </div>
  );
}

export default App;
