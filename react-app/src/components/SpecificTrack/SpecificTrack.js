import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';
import EditTrackForm from '../EditTrack/EditTrack';
import '../SpecificTrack/specificTrack.css'
import * as annoActions from '../../store/annotation';

const SpecificTrack = () => {

    const dispatch = useDispatch();
    const {trackId} = useParams()


    useEffect(() => {
      dispatch(annoActions.getAnnoThunk())
  }, [dispatch])

    const annotationObj = useSelector(state => state.annotation)
    const annos = Object.values(annotationObj);

    const [editTrackForm, showEditTrackForm] = useState(false)

    const location = useLocation()
    const history = useHistory()


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
          <div className="header">
              <img src={location.state.album_image}></img>
              <h1>
              {location.state.title}
              </h1>
          </div>
          <div className="songPage">
            <p className='lyrics'>{location.state.lyrics}</p>


          </div>

          <button type='submit' onClick={(openForm)}>Edit</button>
          {editTrackForm && (<EditTrackForm/>)}
          <button type='submit' onClick={handleDelete}>Delete</button>
        </div>
        </>

    )
}

export default SpecificTrack
