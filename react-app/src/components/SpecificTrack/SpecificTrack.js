import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';
import * as modalActions from '../../store/modal'
import EditTrackForm from '../EditTrack/EditTrack';
import AnnoForm from '../AnnoForm/AnnoForm';
import '../SpecificTrack/specificTrack.css'


const SpecificTrack = () => {

    const dispatch = useDispatch();
    const {trackId} = useParams()

    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]

    console.log(track.annotations[0].initialAnnoIndex)
    console.log(track.annotations[0].finalAnnoIndex)


    useEffect(() => {
      dispatch(trackActions.getTrackThunk(trackId));
  }, [dispatch]);

    // .find(x => x.id === trackId)

    console.log('track', track)


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

    const getSelectedAnnotation = () => {
      const highlightedText = (`${window.getSelection().toString()}`)
      let strObj = window.getSelection()
      console.log(strObj.anchorOffset)
      console.log(strObj.focusOffset)

      

      track?.lyrics.replace(highlightedText, `<span>${highlightedText}</span`)

    }

    const handleMouseUp = () => {
       
        getSelectedAnnotation()
      // let initialIndex = strObj.anchorOffset
      // let finalIndex = strObj.focusOffset
      // console.log('ind2', finalIndex)
      // console.log('ind1', initialIndex)
      // let newHTML = `<span key=${track.annotations.length+1}>${strObj.toString()}</span>`
      // console.log('html', newHTML)
      // console.log('strObj', strObj)
      // // console.log(rect)
      // let lyricArr = track.lyrics.split('')
      // lyricArr.splice(initialIndex, finalIndex-initialIndex, newHTML).join('')
      // console.log('Arr', lyricArr)
      // const highlightedLyrics = lyricArr.join('')
      // console.log('hiiiii', highlightedLyrics)
      // console.log('lyrics', track.lyrics)
        setAnnotationForm(true)
        dispatch(modalActions.setCurrentModal(AnnoForm))
        dispatch(modalActions.showModal())
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
            <p className='lyrics' onMouseUp={handleMouseUp}>
              {/* {annotationForm ? (<AnnoForm track={track}/>) : null} */}
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
