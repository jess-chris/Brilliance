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
      
      {/* <h2 className='main-headers'>Featured News</h2>
      <div id='featured'>

        <div id='mainFeat'>Main</div>
        <div id='mainFeatLink'>Some img</div>

        <div className='sub-feat'>1</div>
        <div className='sub-feat'>2</div>
        <div className='sub-feat'>3</div>
        <div className='sub-feat'>4</div>


      </div> */}

      <div id='topTracks'>
        <h1 className='main-headers'>Charts</h1>
        <p className='main-headers'>Trending on </p>

        <div id='typeOfTracks'>

          <div className='track-selector'>
            <select>
              <option value="">Songs / All Genres / Today</option>
            </select>
          </div>

        </div>

        <div id='track-cont'>
        {tracks?.map(({id, lyrics, title, artist, userId, album_image}) => {
          return(
            <NavLink key={id} to={{pathname: `/tracks/${id}`, state: {id, lyrics, title, artist, userId, album_image}}}>
              <div className='single-track-list'>
                <div className='track-id'>{id}</div>
                <div className='track-title'>{title}</div>
                <div className='track-artist'>{artist}</div>
                <div className='track-likes'>Likes?</div>
              </div>
            </NavLink>
          )
          })}
        </div>

      </div>

        <div className='load-more-cont'>
          <div className='load-more'>Load More</div>
        </div>

    </div>
    
  )

}


export default HomePage