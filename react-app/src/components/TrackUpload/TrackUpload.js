import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';

const TrackUploadForm = () => {


    const onTrackSubmit = async (e) => {
        e.preventDefault();
        // const newTrack = { newArtist, newTitle, newLyrics, newAlbumImage }
        const res = await fetch('/api/tracks', {
            method: 'GET',
            headers: { 'Content-Type':'application/json' },
            // body: JSON.stringify({})
        })
        const response = await res.json()
        console.log(response)}

    return (
        <form onSubmit={onTrackSubmit}>
            <div>
                <label>Track Title</label>
                <input 
                type='text'
                name='TrackTitle'
                ></input>
            </div>
            <button type='Submit'>Submit</button>
        </form>
    )
}

export default TrackUploadForm;