import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';
import EditTrackForm from '../EditTrack/EditTrack';
import AnnoForm from '../AnnoForm/AnnoForm';
import '../SpecificTrack/specificTrack.css'


const SpecificTrack = () => {

    const dispatch = useDispatch();
    const {trackId} = useParams()




    useEffect(() => {
      dispatch(trackActions.getTrackThunk(trackId));
  }, [dispatch]);

    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]
    // .find(x => x.id === trackId)

    console.log(track)


    const [editTrackForm, showEditTrackForm] = useState(false)
    const [annotationForm, setAnnotationForm] = useState(false)

    //const location = useLocation()
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

    const handleMouseUp = () => {
        console.log(`${window.getSelection().toString()}`)
        setAnnotationForm(true)
    }



    return(
        <>
        <div>
          <div className="header">
              <div className='image-box'>
              <img alt='' src={track?.album_image}></img>
              </div>
              <h1>
                {track?.title}
              </h1>
              <p>
                {track?.artist}
              </p>
          </div>

          <div className="songPage">
            <p className='lyricTitle'>{track?.title} lyrics</p>
            <p className='lyrics' onMouseUp={handleMouseUp}>
              {annotationForm ? (<AnnoForm track={track}/>) : null}
              {track?.lyrics}
            </p>


          </div>

          <div className='annotationsRight'>

          </div>

          <button type='submit' onClick={(openForm)}>Edit</button>
          {editTrackForm && (<EditTrackForm/>)}
          <button type='submit' onClick={handleDelete}>Delete</button>

          <div className='comments'>
          <h1>Comments</h1>

          </div>
        </div>
        </>

    )
}

export default SpecificTrack
