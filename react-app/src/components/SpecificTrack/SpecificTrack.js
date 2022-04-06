import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track'; 
import EditTrackForm from '../EditTrack/EditTrack';

import * as annoActions from '../../store/annotation';

const SpecificTrack = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(annoActions.getAnnoThunk())
  }, [dispatch])

    const annotationObj = useSelector(state => state.annotation)
    const annos = Object.values(annotationObj);

    console.log(annotationObj, "ANNOTATION OBJECT")
    console.log(annos, "ANNOTATION ARRAY")

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