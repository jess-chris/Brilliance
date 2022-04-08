import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track'
import '../TrackUpload/TrackUpload.css'


const TrackUploadForm = () => {

    const userId = useSelector(state => state.session.user.id)
    const [artist, setArtist] = useState('')
    const [trackImg, setTrackImg] = useState('')
    const [title, setTitle] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [errors, setErrors] = useState([]);


    const dispatch = useDispatch()

    const history = useHistory()

    const trackUpload = e => {
        e.preventDefault()
        const newTrack = { artist, trackImg, title, lyrics, userId}

        if(artist && title && lyrics) {
            setErrors([]);
            history.push('/tracks')
            return dispatch(trackActions.addNewTrackThunk(newTrack))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors)
                })
        }
        return setErrors(["Artist, Title, or Lyrics cannot be empty"])


    }


    return (
        <div className='large-container'>


        <div className='input-contatiner'>
            <form onSubmit={trackUpload}>
                <div>
                    <ul className="errors">
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                </div>

                <div>
                    <label>Track Title</label>
                    <br></br>
                    <input
                    type='text'
                    name='TrackTitle'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Artist Name</label>
                    <br></br>
                    <input
                    type='text'
                    name='TrackArtist'
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Lyrics</label>
                    <br></br>
                    <textarea
                    type='text'
                    name='TrackLyrics'
                    value={lyrics}
                    onChange={(e) => setLyrics(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label>Track Album Image</label>
                    <br></br>
                    <input
                    type='text'
                    name='TrackImage'
                    value={trackImg}
                    onChange={(e) => setTrackImg(e.target.value)}
                    ></input>
                </div>
                <button type='Submit'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default TrackUploadForm;
