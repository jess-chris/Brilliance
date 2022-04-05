import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import * as trackActions from '../../store/track'; 

const TracksPage = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(trackActions.getAllTracksThunk());
        
    }, [dispatch])

    const tracksObj = useSelector(state => state.track)
    const tracks = Object.values(tracksObj);
    

    return(
        <ul>
          {tracks?.map(({id, lyrics, title, artist, userId, album_image}) => {
              return(
                  <li>
                    <NavLink to={{pathname: `/tracks/${id}`, state: {id, lyrics, title, artist, userId, album_image}}}>
                        {title}
                    </NavLink>
                  </li>
              )
          })}
        </ul>
    )
}

export default TracksPage