from flask import Blueprint, jsonify, request
from app.models import db, Vote, Comment, Annotation


vote_routes = Blueprint('votes', __name__)

@vote_routes.route('')
def votes():
    votes = Vote.query.all()
    return {'votes': [vote.to_dict() for vote in votes]}

@vote_routes.route('/new', methods = ['POST'])
def create_vote():

    user_id=request.json['userId']
    annotation_id=request.json['annotationId']
    comment_id=request.json['commentId']
    vote=request.json['vote']
    

    if comment_id != None:
        comment_score = Comment.query.get(comment_id)
        if vote == True:
            comment_score.vote_score = comment_score.vote_score + 1
        else:
            comment_score.vote_score = comment_score.vote_score - 1
        db.session.add(comment_score)
    else:
        annotation_score = Annotation.query.get(annotation_id)
        if vote == True:
            annotation_score.vote_score = annotation_score.vote_score + 1
        else:
            annotation_score.vote_score = annotation_score.vote_score - 1
        db.session.add(annotation_score)



    vote = Vote(
        user_id = user_id,
        annotation_id = annotation_id,
        comment_id = comment_id,
        vote = vote
        
    )

    db.session.add(vote)
    db.session.commit()
    
    
    return vote.to_dict()
     