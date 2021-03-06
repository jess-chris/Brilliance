import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as trackActions from '../../store/track'; 

import './HomePage.css';

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(trackActions.getAllTracksThunk());
    })();
}, [dispatch])

  const tracksObj = useSelector(state => state.track)
  const tracks = Object.values(tracksObj);





  return (
    <div className='main-page'>

      <div id='topTracks'>
        <h1 className='main-headers'>Charts</h1>
        <p className='main-headers'>Trending on Brilliance</p>

        <div id='typeOfTracks'>

        </div>

        <div id='track-cont'>
        {tracks?.map(({id, lyrics, title, artist, userId, album_image}) => {
          if(!album_image) album_image = 'https://www.mcicon.com/wp-content/uploads/2021/01/Music_Music_note_1-copy-5.jpg'
          return(
            <NavLink key={id} to={{pathname: `/tracks/${id}`, state: {id, lyrics, title, artist, userId, album_image}}}>
              <div className='single-track-list'>
                <div className='track-id'><img alt='' src={album_image} /></div>
                <div className='track-title'>{title}</div>
                <div className='track-artist'>{artist}</div>
                <div className='track-likes'>🔥</div>
              </div>
            </NavLink>
          )
          })}
        </div>

      </div>

    </div>
    
  )

}


export default HomePage