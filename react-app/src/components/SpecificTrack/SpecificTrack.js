import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track'; 
import EditTrackForm from '../EditTrack/EditTrack';


const SpecificTrack = () => {


    const [editTrackForm, showEditTrackForm] = useState(false)
    
    const [artist, setArtist] = useState('')
    const [trackImg, setTrackImg] = useState('')
    const [title, setTitle] = useState('')
    const [lyrics, setLyrics] = useState('')

    const location = useLocation()
    const history = useHistory()
    const {trackId} = useParams()

    const openForm = () => {
        if (editTrackForm) return;
        showEditTrackForm(true);
      };

    const handleDelete = (e) => {
        e.preventDefault()

        dispatch(trackActions.deleteTrackThunk(trackId));
        history.push('/tracks')
    }

    // useEffect(() => {
    //     if (!editTrackForm) return
    //     const closeForm = (() => {
    //         showEditTrackForm(false)
    //     })
    //     document.addEventListener('click', closeForm)
    //     return (() => {
    //         document.removeEventListener('click', closeForm)
    //     })
    // }, [editTrackForm]) 

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(trackActions)
    // }, [dispatch])


    return(
        <>
        <div>
          {location.state.lyrics}
          <button type='submit' onClick={(openForm)}>Edit</button>
          {editTrackForm && (<EditTrackForm/>)}
          <button type='submit' onClick={handleDelete}>Delete</button>
        </div>
        </>

    )
}

export default SpecificTrack