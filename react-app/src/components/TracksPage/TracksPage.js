import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';

const TracksPage = () => {

    let response = {}

    useEffect(async() => {

        const tracks = await fetch('/api/tracks')
        if(tracks.ok){

            response = await tracks.json()
            
            console.log(response)
        }
    }, [])

    let allTracks = Object.values(response)
    
    
    return(
        <>
          {allTracks}
        </>
    )
}

export default TracksPage