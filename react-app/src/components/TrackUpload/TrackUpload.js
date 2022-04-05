import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track'

const TrackUploadForm = () => {

    const userId = useSelector(state => state.session.user.id)
    const [artist, setArtist] = useState('')
    const [trackImg, setTrackImg] = useState('')
    const [title, setTitle] = useState('')
    const [lyrics, setLyrics] = useState('')

    const dispatch = useDispatch()

    const history = useHistory()

    const trackUpload = e => {
        e.preventDefault()
        const newTrack = { artist, trackImg, title, lyrics, userId}
        dispatch(trackActions.addNewTrackThunk(newTrack))
        history.push('/tracks')

    }
    

    return (
        <form onSubmit={trackUpload}>
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