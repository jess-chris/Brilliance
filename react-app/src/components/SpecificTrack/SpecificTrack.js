import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';
import * as modalActions from '../../store/modal'
import EditTrackForm from '../EditTrack/EditTrack';
import AnnoForm from '../AnnoForm/AnnoForm';
import Votes from '../Votes/index'
import Comments from '../Comments/index'
import '../SpecificTrack/specificTrack.css'
import SpecificAnno from '../SpecificAnno/SpecificAnno';

const SpecificTrack = () => {

    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const {trackId} = useParams();

    const [viewAnnotation, setViewAnnotation] = useState(0);

    const userId = useSelector(state => state.session.user.id)
    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]
    const commentsObj = track?.comments

    useEffect(() => {
      (async() => {
        await dispatch(trackActions.getTrackThunk(trackId));
        setLoaded(true);
      })();
    }, [dispatch, trackId]);



    
    const handleMouseUp = () => {
      const annoCont = document.querySelector('.lyrics')
      const sel = document.getSelection()
      const range = sel.getRangeAt(0)

      let clone = range.cloneRange()
      clone.selectNodeContents(annoCont)
      clone.setEnd(range.startContainer, range.startOffset);
      const initialIndex = clone.toString().length;
      clone.setEnd(range.endContainer, range.endOffset);
      const finalIndex = clone.toString().length;

      if(initialIndex !== finalIndex) {
        dispatch(modalActions.setCurrentModal(AnnoForm))
        dispatch(modalActions.showModal())
      }
    }

    const openForm = () => {
      dispatch(modalActions.setCurrentModal(EditTrackForm))
      dispatch(modalActions.showModal())
    };

    const handleDelete = (e) => {
      e.preventDefault()
      history.push('/tracks')
      dispatch(trackActions.deleteTrackThunk(trackId))
      .catch(async (res) => {
        const data = await res.json();
        await dispatch(trackActions.getAllTracksThunk());
        if (data && data.errors) return(data.errors)
      })
  }

    const deleteComment = async (e) => {
      e.preventDefault()

      const comment = {
        commentId: e.target.id
      }

      await dispatch(trackActions.deleteCommentThunk(comment))
      await dispatch(trackActions.getTrackThunk(trackId));
      history.push(`/tracks/${trackId}`)

    }

    const setAnnotations = (track) => {

      const node = track.lyrics
      const lyricsWithAnnos = [];

      const annoArr = track.annotations;

      if(annoArr.length > 0) {

        let prevIndex = 0;

        for(let curIndex = 0; curIndex < annoArr.length; curIndex++){

          const curAnno = annoArr[curIndex];

          let nonAnno = node.slice(prevIndex, curAnno.initialAnnoIndex);

          let annoLyric = node.slice(curAnno.initialAnnoIndex, curAnno.finalAnnoIndex);


          lyricsWithAnnos.push(`<span class='nonAnno'>${nonAnno}</span>`);
          lyricsWithAnnos.push(`<span id='${curAnno.id}' key='${curAnno.id}' class='annotated'>${annoLyric}</span>`);
          prevIndex = curAnno.finalAnnoIndex;

          if(curIndex === annoArr.length - 1) {
            nonAnno = node.slice(prevIndex, node.length)
            lyricsWithAnnos.push(`<span class='nonAnno'>${nonAnno}</span>`);
          }
        }
      } else {
        lyricsWithAnnos.push(`<span class='nonAnno'>${node}</span>`);
      }

      document.querySelector('.lyrics').innerHTML = lyricsWithAnnos.join('')

      let newLyrics = document.querySelector('.lyrics');
      const annotations = newLyrics.querySelectorAll("span");

      for (let ind = 0; ind < annotations.length; ind++) {


        if (annotations[ind].className.includes('nonAnno')) {

          annotations[ind].addEventListener("mouseup", function() {
            handleMouseUp()
          });


        } else {

          annotations[ind].addEventListener("click", function() {

            try {
              document.querySelector('.currentAnno').classList.remove('currentAnno');
            } catch {}

            annotations[ind].classList.add('currentAnno');
            setViewAnnotation(annotations[ind].getAttribute("id"));
          })
        }
      }
    };

    return(
        <>
          <div className="header">
              <div className='image-box'>
                <img alt='' src={track?.album_image || 'https://www.mcicon.com/wp-content/uploads/2021/01/Music_Music_note_1-copy-5.jpg'}></img>
              </div>
              <h1>
                {track?.title}
              </h1>
              <h3>
                {track?.artist}
              </h3>
          </div>


          <div className="songPage">
            <h4 className='lyricTitle'>{track?.title} Lyrics:</h4>

            <div className='lyricAnnoCont'>
              <div className='lyrics'>
                {track?.lyrics}
              </div>
              <div className='annotationsRight'>
                {viewAnnotation !== 0 && (
                <SpecificAnno viewAnnotation={viewAnnotation}/>
                )}
              </div>
            </div>
          </div>

          {track?.user_id === userId && (
          <>
            <button type='submit' onClick={(openForm)}>Edit</button>
            <button type='submit' onClick={handleDelete}>Delete</button>
          </>
          )}

        <div className='comments'>
          <h1>Comments</h1>

          <Comments />

          <div id='users-comments'>
            {commentsObj?.map(comment => (
              <div id='single-comment' key={comment.id}>
                <p>{comment.content}</p>
                <div id='comment-footer'>
                  Vote Score: {comment?.vote_score}
                  <Votes comment_id={comment?.id}/>
                </div>
                {comment.user_id === userId && (
                <button  onClick={deleteComment} className='comment-delete' id={comment.id}>Delete</button>
                )}
              </div>
            ))}
          </div>

          {loaded && setAnnotations(track)}

        </div>
    </>
    )
}

export default SpecificTrack
