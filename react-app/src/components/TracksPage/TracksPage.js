import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAllTracksThunk } from '../../store/track'; 

const TracksPage = () => {

    const dispatch = useDispatch();
    
    const tracksObj = useSelector(state => state.track)
    const tracks = Object.values(tracksObj);


    useEffect(() => {
        dispatch(getAllTracksThunk());
        
    }, [dispatch])
    

    return(
        <li>
          {tracks?.map(track => {
              return track.title
            })
          }
        </li>
    )
}

export default TracksPage