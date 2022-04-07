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

    //console.log('track', track)


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

    useEffect(() => {
      // console.log(`${window.getSelection().toString()}`)
      // let strObj = window.getSelection()
      // // let paras = document.getElementsByTagName('p')[0]
      // // let rect = strObj.getBoundingClientRect()
      // let initialIndex = strObj.anchorOffset
      // let finalIndex = strObj.focusOffset
      // console.log('ind2', finalIndex)
      // console.log('ind1', initialIndex)
      // let newHTML = `${strObj.toString()}`
      // console.log(newHTML)
      // //console.log('strObj', strObj)
      // // console.log(rect)
      // let lyricArr = track.lyrics.split('')
      // lyricArr.splice(initialIndex, finalIndex-initialIndex, newHTML).join('')
      //console.log('Arr', lyricArr)
      //const highlightedLyrics = lyricArr.join('')
      //console.log('hiiiii', highlightedLyrics)
      //console.log('lyrics', track.lyrics)
      

        var span = document.createElement("span");
        
        let node = document.querySelector(".lyrics")
        document.getSelection().removeAllRanges()

        let range = document.createRange()
        let initialIndex = 157
        let finalIndex = 203

        // let initialIndex2 = 20
        // let finalIndex2 = 50

        // let initialIndex = sel.anchorOffset
        // let finalIndex = sel.focusOffset

        range.setStart(node.firstChild, initialIndex)
        range.setEnd(node.firstChild, finalIndex)
    
        range.surroundContents(span);


        initialIndex = 0
        finalIndex = 0
          



      //setAnnotationForm(true)
        // return highlightedLyrics
    }, []);



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
            <p className='lyrics'>
              {annotationForm ? (<AnnoForm track={track}/>) : null}
              {track?.lyrics}
              {/* {highlightedLyrics} */}
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
