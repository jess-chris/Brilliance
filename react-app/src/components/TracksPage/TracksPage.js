import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as trackActions from '../../store/track'; 
import * as annoActions from '../../store/annotation'

import './TracksPage.css'

const TracksPage = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(trackActions.getAllTracksThunk());
        dispatch(annoActions.getAnnoThunk());
    }, [dispatch])

    const tracksObj = useSelector(state => state.track)
    const tracks = Object.values(tracksObj);

    return(
        <div className='allTracksContainer'>
          {tracks?.map(({id, lyrics, title, artist, userId, album_image}) => {
              return(
                  <ul key={id}>
                        <img src={album_image} className='trackImg'/>
                        <NavLink to={{pathname: `/tracks/${id}`, state: {id, lyrics, title, artist, userId, album_image}}}>
                            {title}
                        </NavLink>
                  </ul>
              )
          })}
        </div>
    )
}

export default TracksPage