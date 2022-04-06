from flask import Blueprint, jsonify, request
from app.models import db, Track

track_routes = Blueprint('tracks', __name__)

@track_routes.route('')
def tracks():
    tracks = Track.query.all()
    # for track in tracks: 
    #     print('--------------', track.to_dict(), '----------')
    return {'tracks': [track.to_dict() for track in tracks]}


@track_routes.route('/new', methods=['POST'])
def trackUpload():

    user_id=request.json['userId']
    artist=request.json['artist']
    trackImg=request.json['trackImg']
    lyrics=request.json['lyrics']
    title=request.json['title']

    track = Track(
    artist=artist,
    album_image=trackImg,
    lyrics=lyrics,
    title=title,
    user_id=user_id
    )

    db.session.add(track)
    db.session.commit()
    
    return track.to_dict()

@track_routes.route('/edit', methods=['PUT'])
def trackUpdate():

    trackId=request.json['trackId']

    track = Track.query.get(trackId)

    artist=request.json['artist']
    trackImg=request.json['trackImg']
    lyrics=request.json['lyrics']
    title=request.json['title']

    track.artist=artist,
    track.album_image=trackImg,
    track.lyrics=lyrics,
    track.title=title,

    
    db.session.add(track)
    db.session.commit()

    return track.to_dict()


    
@track_routes.route('/delete', methods=['DELETE'])
def track_delete():
  
  track_id=request.json['trackId']
  
  track = Track.query.get(track_id)
  
  db.session.delete(track)
  db.session.commit()
  
  return track.to_dict()

