import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';
import * as modalActions from '../../store/modal'
import EditTrackForm from '../EditTrack/EditTrack';
import AnnoForm from '../AnnoForm/AnnoForm';
import Votes from '../Votes/index'
import '../SpecificTrack/specificTrack.css'
import SpecificAnno from '../SpecificAnno/SpecificAnno';

const SpecificTrack = () => {

    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const {trackId} = useParams();

    const [viewAnnotation, setViewAnnotation] = useState(0);

    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]
    const commentsObj = track?.comments

    useEffect(() => {
      (async() => {
        await dispatch(trackActions.getTrackThunk(trackId));
        setLoaded(true);
      })();
    }, [dispatch]);



    
    const handleMouseUp = () => {
      dispatch(modalActions.setCurrentModal(AnnoForm))
      dispatch(modalActions.showModal())
    }

    const openForm = () => {
      dispatch(modalActions.setCurrentModal(EditTrackForm))
      dispatch(modalActions.showModal())
    };

    const handleDelete = (e) => {
      e.preventDefault()
      dispatch(trackActions.deleteTrackThunk(trackId));
      history.push('/tracks')
  }

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
        lyricsWithAnnos.push(`<span id='${curAnno.id}' key='${curAnno.id}' class='annotated'>${annoLyric}</span>`);
        prevIndex = curAnno.finalAnnoIndex;

        if(curIndex === annoArr.length - 1) {
          nonAnno = node.slice(prevIndex, node.length)
          lyricsWithAnnos.push(`<span class='nonAnno'>${nonAnno}</span>`);
        }
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



          <div className="songPage">
            <p className='lyricTitle'>{track?.title} lyrics</p>

            <div className='lyricAnnoCont'>
              <div className='lyrics'>
                {track?.lyrics}
              </div>
              <div className='annotationsRight'>
                {viewAnnotation != 0 && (
                <SpecificAnno viewAnnotation={viewAnnotation}/>
                )}
              </div>
            </div>
          </div>

          <button type='submit' onClick={(openForm)}>Edit</button>
          <button type='submit' onClick={handleDelete}>Delete</button>


        <div className='comments'>
          <h1>Comments</h1>

          {commentsObj?.map(comment => (
            <div>
              <p>{comment.content}</p>
              <p>{comment.vote_score}</p>
              <Votes comment_id={comment.id}/>
            </div>
          ))}

          {loaded  && setAnnotations(track)}

        </div>
    </>
    )
}

export default SpecificTrack
