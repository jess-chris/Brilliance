import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track'; 
import EditTrackForm from '../EditTrack/EditTrack';


const SpecificTrack = () => {

    const dispatch = useDispatch();

    const [editTrackForm, showEditTrackForm] = useState(false)

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