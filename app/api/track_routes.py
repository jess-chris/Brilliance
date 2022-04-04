from flask import Blueprint, jsonify, request
from app.models import db, Track

track_routes = Blueprint('tracks', __name__)

@track_routes.route('/')
def tracks():
    tracks = Track.query.all()
    for track in tracks: 
        print('--------------', track.to_dict(), '----------')
    return {'tracks': [track.to_dict() for track in tracks]}

@track_routes.route('/new', methods=['POST'])
def trackUpload():
    data = request.get_json()

    print('--------', data, '---------')

    artist=request.json['artist']
    trackImg=request.json['trackImg']
    lyrics=request.json['lyrics']
    title=request.json['title']

    track = Track(
    artist=artist,
    album_image=trackImg,
    lyrics=lyrics,
    title=title,
    user_id=1
    )

    db.session.add(track)
    db.session.commit()
    
    return track.to_dict()
    
    

