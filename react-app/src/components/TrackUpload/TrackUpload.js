import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track'
import './TrackUpload.css'


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
        const newTrack = { artist, trackImg, title, lyrics, userId }

        if (artist && title && lyrics) {
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
        <div className='upload-large-container'>
            <div className='upload-track'>
                <h1> Upload Track </h1>
            </div>

            <div className='upload-input-container'>
                <form onSubmit={trackUpload}>
                    <div>
                        <ul className="errors">
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                    </div>

                    <div>
                        <label>Track Title</label>
                        <div>
                            <input
                                style={{ width: '400px', margin: '10px 0px 10px 0px' }}
                                type='text'
                                name='TrackTitle'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div>
                        <label>Artist Name</label>
                        <div>
                            <input
                                style={{ width: '400px', margin: '10px 0px 10px 0px' }}
                                type='text'
                                name='TrackArtist'
                                value={artist}
                                onChange={(e) => setArtist(e.target.value)}
                            ></input>
                        </div>

                    </div>
                    <div id='lyrics-textarea'>
                        <label>Lyrics</label>
                        <div>
                            <textarea
                                style={{ height: '500px', width: '400px', margin: '10px 0px 10px 0px' }}
                                type='text'
                                name='TrackLyrics'
                                value={lyrics}
                                onChange={(e) => setLyrics(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <label>Track Album Image</label>
                        <div>
                            <input
                                style={{ width: '400px', margin: '10px 0px 10px 0px' }}
                                type='text'
                                name='TrackImage'
                                value={trackImg}
                                onChange={(e) => setTrackImg(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <button type='Submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default TrackUploadForm;
