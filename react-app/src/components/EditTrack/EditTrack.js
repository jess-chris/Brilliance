import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import * as trackActions from '../../store/track';
import * as modalActions from '../../store/modal';

import './EditTrackForm.css'

const buttonStyle = {
    border: '1px solid rgb(0, 0, 0)',
    fontSize: '1rem',
    padding: '5px',
    fontWeight: '100',
    width: '50%',
    cursor: 'pointer',
    display: 'block',
    color: 'inherit',
  }

const EditTrackForm = () => {
    const dispatch = useDispatch()
    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]
    const trackId = track.id

    const [artist, setArtist] = useState(track.artist)
    const [trackImg, setTrackImg] = useState(track.album_image)
    const [title, setTitle] = useState(track.title)
    const [lyrics, setLyrics] = useState(track.lyrics)
    const [errors, setErrors] = useState([]);

    const trackUpdate = async (e) => {
        e.preventDefault()

        const newTrack = { artist, trackImg, title, lyrics, trackId }

        if(artist && title && lyrics) {
            setErrors([]);
            dispatch(trackActions.updateTrackThunk(newTrack))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            })
        }
        if(errors.length > 0) return setErrors(["Artist, Title, or Lyrics cannot be empty"]);

        await dispatch(trackActions.getTrackThunk(track.id));
        await dispatch(modalActions.hideModal())

    }

    return (
        <>
            <div id='trackForm'>
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
                    <textarea
                    name='TrackLyrics'
                    rows='15'
                    cols='100'
                    value={lyrics}
                    onChange={(e) => setLyrics(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label>Track Album Image</label>
                    <input
                    type='text'
                    name='TrackImage'
                    placeholder='Optional'
                    value={trackImg}
                    onChange={(e) => setTrackImg(e.target.value)}
                    ></input>
                </div>
                <div id='track-btn-bar'>
                    <button style={buttonStyle} type='Submit'><i className="fa-regular fa-circle-check"></i> Submit</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default EditTrackForm;
