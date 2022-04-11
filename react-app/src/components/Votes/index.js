import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';

const voteButtonStyle = {
    backgroundColor: 'white',
    border: 'none',
    color: 'black',
    margin: '10px',
}
const hideButton = {
    display: 'none',
    visibility: 'hidden'
}

const clickedUp = {
    backgroundColor: 'white',
    border: 'none',
    color: 'green',
    margin: '10px',
}

const clickedDown = {
    backgroundColor: 'white',
    border: 'none',
    color: 'red',
    margin: '10px',
}
const Vote = ({ comment_id, anno, annoIdComment, annoCommentId }) => {
    const commentId = comment_id
    const annotationId = anno
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)
    const { trackId } = useParams()

    const [style, setStyle] = useState('');
    const changeStyleDown = async () => {
        if (style === 'down'){
            await setStyle('')
        } else {
            await setStyle('down');
        }

    };
    const changeStyleUp = async () => {
        if (style === 'up'){
            await setStyle('')
        } else {
            await setStyle('up');
        }

    };


    useEffect(() => {
        dispatch(trackActions.getTrackThunk(trackId))
        dispatch(trackActions.getVoteThunk());
    }, [dispatch, trackId]);

    const handleUpVote = async (e) => {
        e.preventDefault()
        changeStyleUp()
        console.log(style)
        //if not a comment AND not a comment on an anno, it is annotation
        if (typeof commentId === 'undefined' && typeof annoCommentId === 'undefined') {
            const commentId = null
            const annotationId = anno

            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: true,
            }

            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }
        //if does not have commentId it is not a track comment
        //therefore it is an annotation comment,
        //need the annotation id as well
        else if (typeof commentId === 'undefined') {
            const commentId = null || annoCommentId
            const annotationId = annoIdComment

            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: true
            }

            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }
        //if does not have annotationId it is not a annotation comment
        //therefore it is a track comment
        else if (typeof annotationId === 'undefined') {
            const annotationId = null


            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: true
            }

            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }

    }
    //downvote is same as upvote but vote:false 
    const handleDownVote = async (e) => {
        e.preventDefault()
        changeStyleDown()
        console.log(style)

        if (typeof commentId === 'undefined' && typeof annoCommentId === 'undefined') {
            const commentId = null
            const annotationId = anno

            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: false
            }
            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }
        else if (typeof commentId === 'undefined') {
            const commentId = null || annoCommentId
            const annotationId = annoIdComment

            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: false
            }
            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }

        else if (typeof annotationId === 'undefined') {

            const annotationId = null

            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: false
            }
            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }

    }

    return (
        <>
            {style === '' &&
                <>
                    <div id='thumbs-up'>
                        <button style={voteButtonStyle} onClick={handleUpVote}><i className="fa-regular fa-thumbs-up"></i></button>
                    </div>
                    <div>
                        <button style={voteButtonStyle} onClick={handleDownVote}><i className="fa-regular fa-thumbs-down"></i></button>
                    </div>
                </>
            }
            {style === 'up' &&
                <>
                    <div id='thumbs-up'>
                        <button style={clickedUp} onClick={handleUpVote}><i className="fa-regular fa-thumbs-up"></i></button>
                    </div>
                    <div>
                        <button style={hideButton} onClick={handleDownVote}><i className="fa-regular fa-thumbs-down"></i></button>
                    </div>
                </>
            }
            {style === 'down' &&
                <>  
                    <div id='thumbs-up'>
                        <button style={hideButton} onClick={handleUpVote}><i className="fa-regular fa-thumbs-up"></i></button>
                    </div>
                    <div>
                        <button style={clickedDown} onClick={handleDownVote}><i className="fa-regular fa-thumbs-down"></i></button>
                    </div>
                </>
            }
        </>
    )
}
export default Vote;

