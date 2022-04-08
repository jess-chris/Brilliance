import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track';


const EditTrackForm = () => {

    const [artist, setArtist] = useState('')
    const [trackImg, setTrackImg] = useState('')
    const [title, setTitle] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [errors, setErrors] = useState([]);


    const dispatch = useDispatch()
    const history = useHistory()

    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]
    const trackId = track.id

    const trackUpdate = e => {
        e.preventDefault()
        const newTrack = { artist, trackImg, title, lyrics, trackId }

        if(artist && title && lyrics) {
            setErrors([]);
            dispatch(trackActions.updateTrackThunk(newTrack))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            })
            history.push('/tracks')
        }
        return setErrors(["Artist, Title, or Lyrics cannot be empty"])


    }

    return (
        <>
            <form onSubmit={trackUpdate}>
            <div>
                <ul className="errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            </div>

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
        </>
    )
}

export default EditTrackForm;
