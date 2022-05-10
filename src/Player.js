import React from 'react'
import './Player.css';
import SidebarOptions from './SidebarOptions';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {UseDataLayerValue} from './DataLayerProvider';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { MoreHoriz } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Header from './Header';
import Songs from './Songs';



function Player({spotify}) {
  const convertMinutes = (duration)=> {
    var milliseconds = Math.floor((duration % 1000) / 100);
    var seconds = Math.floor((duration / 1000) % 60);
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "" + hours : hours;
    minutes = (minutes < 10) ? "" + minutes : minutes;
    seconds = (seconds < 10) ? "" + seconds : seconds;
  
    return hours + "h " + minutes + "min " + seconds + 's' ;
  }
  
  const [{ user, playlists, current_playlist}, ] = UseDataLayerValue();
  const total_minutes = current_playlist?.tracks?.items.reduce( (minutes, item) => minutes + item?.track?.duration_ms, 0)

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
                { playlists?.items?.map(playlist => (
                  <SidebarOptions key={playlist.name} title={playlist.name} />
                ))}

            </div>
            <div className='player__body'>
                <Header />
                <div className="body__info">
                  <img src={current_playlist?.images[0]?.url ? current_playlist?.images[0]?.url : "https://www.bajao.pk/theme/images/default-square-dark.jpg"} alt="" />
                  <div className="body__info__text">
                    <strong>PLAYLIST</strong>
                    <h2>{current_playlist?.name}</h2>
                    <p>
                      <span>{current_playlist?.owner.display_name}.</span>
                      <span>{current_playlist?.tracks?.total} songs </span>
                      <span> { convertMinutes(total_minutes) } </span>                           
                    </p>
                  </div>
                </div>
                <div className="body__core">
                    <div className="body__core__header">
                      <PlayCircleFilledIcon className="core__icon"/>
                      <FavoriteIcon />
                      <MoreHoriz />
                    </div>
                    {
                      current_playlist?.tracks?.items.map((track, i) => (
                        <Songs key={i} track={track}/>
                      ))
                    }
                    
                </div>
            </div>
        </div>
        <div className="player__footer">
            <div className="footer__left">
                  <div>
                    <p className="song__title">Yeah</p>
                    <p className="song__author">Chris Brown</p>
                  </div>
            </div>
            <div className="footer__middle">
                  <ShuffleIcon className="footer__icon footer__green"/>
                  <SkipPreviousIcon className="footer__icon"/>
                  <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                  <SkipNextIcon className="footer__icon"/>
                  <RepeatIcon className="footer__icon footer__green"/>
            </div>
            <div className="footer__right">
              <Grid container spacing={2}>
                  <Grid item>
                    <PlaylistPlayIcon className="footer__icon" />
                  </Grid>
                  <Grid item>
                    <VolumeDownIcon className="footer__icon" />
                  </Grid>
                  <Grid item xs>
                    <Slider className="footer__green" />
                  </Grid>
              </Grid>
            </div>
        </div>
    </div>
  )
}

export default Player