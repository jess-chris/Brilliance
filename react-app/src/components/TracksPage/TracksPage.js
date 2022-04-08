import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as trackActions from '../../store/track';


import './TracksPage.css'

const TracksPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trackActions.getAllTracksThunk());
    }, [dispatch])

    const tracksObj = useSelector(state => state.track)
    const tracks = Object.values(tracksObj);
    console.log(tracks)

    const albumImg = tracks.map(track => {
        if (track.album_image === ''){
            track.album_image = 'https://www.mcicon.com/wp-content/uploads/2021/01/Music_Music_note_1-copy-5.jpg'
        }
    })
        
    return (
        <>
        <div className='tracks-page-title'>
           <h1>Tracks</h1> 
        </div>
        
            <div className='allTracksContainer'>
                <div></div>
                <div>
                    {tracks?.map(({ id, lyrics, title, artist, userId, album_image }) => {
                        return (
                            <ul key={id}>
                                <div>{id}</div>
                                <img alt='' src={album_image} className='trackImg' />
                                <NavLink to={{ pathname: `/tracks/${id}`, state: { id, lyrics, title, artist, userId, album_image } }}>
                                    {title}
                                </NavLink>
                                <p>{artist}</p>
                                <div>TODO: likes</div>
                            </ul>
                        )
                    })}
                </div>
                <div></div>
            </div>
        </>
    )
}

export default TracksPage