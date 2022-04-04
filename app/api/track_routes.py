from flask import Blueprint, jsonify
from app.models import db, Track

track_routes = Blueprint('tracks', __name__)

@track_routes.route('/')
def tracks():
    tracks = Track.query.all()
    for track in tracks: 
        print('--------------', track.to_dict(), '----------')
    return {'tracks': [track.to_dict() for track in tracks]}

# @track_routes.route('/new')
# def trackUpload():
    
    

