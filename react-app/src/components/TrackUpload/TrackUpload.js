import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';

const TrackUploadForm = () => {


    const [artist, setArtist] = useState('')
    const [trackImg, setTrackImg] = useState('')
    const [title, setTitle] = useState('')
    const [lyrics, setLyrics] = useState('')


    const onTrackSubmit = async (e) => {
        e.preventDefault();
        const newTrack = { artist, trackImg, title, lyrics}
        const res = await fetch('/api/tracks/new', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(newTrack)
        })
        const response = await res.json()
        console.log(response)
    }

    return (
        <form onSubmit={onTrackSubmit}>
            <div>
                <label>Track Title</label>
                <input 
                type='text'
                name='TrackTitle'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Artist Name</label>
                <input
                type='text'
                name='TrackArtist'
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Lyrics</label>
                <input
                type='text'
                name='TrackLyrics'
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Track Album Image</label>
                <input
                type='text'
                name='TrackImage'
                value={trackImg}
                onChange={(e) => setTrackImg(e.target.value)}
                ></input>
            </div>
            <button type='Submit'>Submit</button>
        </form>
    )
}

export default TrackUploadForm;