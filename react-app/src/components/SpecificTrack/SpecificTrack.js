import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';
import * as modalActions from '../../store/modal'
import EditTrackForm from '../EditTrack/EditTrack';
import AnnoForm from '../AnnoForm/AnnoForm';
import Votes from '../Votes/index'
import '../SpecificTrack/specificTrack.css'
import Comment from '../Comments';

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
        lyricsWithAnnos.push(`<span onclick={} key='${curAnno.id}' class='annotated'>${annoLyric}</span>`);
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


  const history = useHistory()


    const openForm = () => {
        dispatch(modalActions.setCurrentModal(EditTrackForm))
        dispatch(modalActions.showModal())
      };


  const handleDelete = (e) => {
    e.preventDefault()

    dispatch(trackActions.deleteTrackThunk(trackId));
    history.push('/tracks')
  }

<<<<<<< HEAD
  const handleMouseUp = () => {
    // console.log(`${window.getSelection().toString()}`)
    let strObj = window.getSelection()
    // let paras = document.getElementsByTagName('p')[0]
    // let rect = strObj.getBoundingClientRect()
    let initialIndex = strObj.anchorOffset
    let finalIndex = strObj.focusOffset
    console.log('ind2', finalIndex)
    console.log('ind1', initialIndex)
    let newHTML = `<span key=${track.annotations.length + 1}>${strObj.toString()}</span>`
    console.log('html', newHTML)
    console.log('strObj', strObj)
    // console.log(rect)
    let lyricArr = track.lyrics.split('')
    lyricArr.splice(initialIndex, finalIndex - initialIndex, newHTML).join('')
    console.log('Arr', lyricArr)
    const highlightedLyrics = lyricArr.join('')
    console.log('hiiiii', highlightedLyrics)
    console.log('lyrics', track.lyrics)
    setAnnotationForm(true)
    // return highlightedLyrics
  }


=======
>>>>>>> development

    const handleMouseUp = () => {
        dispatch(modalActions.setCurrentModal(AnnoForm))
        dispatch(modalActions.showModal())
        dispatch(trackActions.getTrackThunk(trackId))
        console.log(trackId)
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



<<<<<<< HEAD
        <div className='annotationsRight'>

        </div>
        {/* <div>
        {annoArr?.map(anno => (
            <div>
              <p>{anno.content}</p>
              <p>{anno.id}</p>
              <Votes anno={anno.id}/>
              <div>
                {anno.comments.map(annoComment => (
                  <><p>{annoComment.content}</p>
                  <Votes annoIdComment={annoComment.annotation_id} annoCommentId={annoComment.id}></Votes></>

                ))}
              </div>
            </div>
          ))}
        </div> */}
        <Comment/>
=======
        </div>


          <button type='submit' onClick={(openForm)}>Edit</button>
          {/* {editTrackForm && (<EditTrackForm/>)} */}
          <button type='submit' onClick={handleDelete}>Delete</button>


>>>>>>> development
        <div className='comments'>
          <h1>Comments</h1>

          {commentsObj?.map(comment => (
            <div>
              <p>{comment.content}</p>
              <p>{comment.vote_score}</p>
              <Votes comment_id={comment.id}/>
            </div>
          ))}


          </div>
          {loaded && track.annotations.length > 0 && setAnnotations(track)}

        </div>
      </div>
    </>

  )
}

export default SpecificTrack
