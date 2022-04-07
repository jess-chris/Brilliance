from flask import Blueprint, jsonify, request
from app.models import db, Vote

vote_routes = Blueprint('votes', __name__)

@vote_routes.route('/new', methods = ['POST'])
def create_vote():

    user_id=request.json['userId']
    annotation_id=request.json['annotationId']
    comment_id=request.json['commentId']
    vote=request.json['vote']
    print('!!!1', vote)

    vote = Vote(
        user_id = user_id,
        annotation_id = annotation_id,
        comment_id = comment_id,
        vote = vote
        
    )

    db.session.add(vote)
    db.session.commit()
    
    #double check return below
    return vote.to_dict()
     