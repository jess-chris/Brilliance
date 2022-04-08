import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';
import * as modalActions from '../../store/modal'
import EditTrackForm from '../EditTrack/EditTrack';
import AnnoForm from '../AnnoForm/AnnoForm';
import '../SpecificTrack/specificTrack.css'


const SpecificTrack = () => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const {trackId} = useParams()


    useEffect(() => {
      (async() => {
        await dispatch(trackActions.getTrackThunk(trackId));
        setLoaded(true);
      })();
    }, [dispatch, trackId]);

    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]


    const setAnnotations = (track) => {

      const node = track.lyrics
      const lyricsWithAnnos = [];

      const annoArr = track.annotations;

      let prevIndex = 0;

      for(let curIndex = 0; curIndex < annoArr.length; curIndex++){

        const curAnno = annoArr[curIndex];

        let nonAnno = node.slice(prevIndex, curAnno.initialAnnoIndex);

        let annoLyric = node.slice(curAnno.initialAnnoIndex, curAnno.finalAnnoIndex);


        lyricsWithAnnos.push(`<span class='nonAnno'>${nonAnno}</span>`);
        lyricsWithAnnos.push(`<span key='${curIndex}' class='annotated'>${annoLyric}</span>`);
        prevIndex = curAnno.finalAnnoIndex;

        if(curIndex === annoArr.length - 1) {
          nonAnno = node.slice(prevIndex, node.length)
          lyricsWithAnnos.push(`<span class='nonAnno'>${nonAnno}</span>`);
        }
      }

      document.querySelector('.lyrics').innerHTML = lyricsWithAnnos.join('')
    };



    const [editTrackForm, showEditTrackForm] = useState(false)

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
        dispatch(modalActions.setCurrentModal(AnnoForm))
        dispatch(modalActions.showModal())
        dispatch(trackActions.getTrackThunk(trackId))
        history.push(`/tracks/${trackId}`)
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
            <div className='lyrics' onMouseUp={handleMouseUp}>
              {track?.lyrics}
            </div>


          </div>

          <div className='annotationsRight'>

          </div>

          <button type='submit' onClick={(openForm)}>Edit</button>
          {editTrackForm && (<EditTrackForm/>)}
          <button type='submit' onClick={handleDelete}>Delete</button>

          <div className='comments'>
          <h1>Comments</h1>

          </div>
          {loaded && track.annotations.length > 0 && setAnnotations(track)}
        </div>
        </>

    )
}

export default SpecificTrack
