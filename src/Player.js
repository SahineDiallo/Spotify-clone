import React from 'react'
import './Player.css';
import SidebarOptions from './SidebarOptions';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function Player() {
  return (
    <div className='player'>
        
        <div className="player__container">
            <div className="player__sidebar">
                <img src="https://getheavy.com/wp-content/uploads//2019/12/spotify2019-830x350.jpg" alt="" />
                <SidebarOptions Icon={HomeOutlinedIcon} title="Home" />
                <SidebarOptions Icon={SearchIcon} title="Search" />
                <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
                <br />
                <strong className="sidebaroptions__title">Playlists</strong>
                <hr />

                <SidebarOptions  title="Rock" />
                <SidebarOptions  title="Rnb" />
                <SidebarOptions  title="Jazz Music" />
            </div>
            <div className='player__body'>
                <h1>Test body page for now.</h1>
            </div>
        </div>
        <div className="player__footer">
            
        </div>
    </div>
  )
}

export default Player