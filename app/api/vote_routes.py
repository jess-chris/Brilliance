from flask import Blueprint, jsonify, request
from app.models import db, Vote, Comment, Annotation


vote_routes = Blueprint('votes', __name__)

@vote_routes.route('')
def votes():
    votes = Vote.query.all()
    return {'votes': [vote.to_dict() for vote in votes]}

@vote_routes.route('/new', methods = ['POST'])
def create_vote():
    
    prev_comment_vote = None
    prev_anno_vote = None

    user_id=request.json['userId']
    annotation_id=request.json['annotationId']
    comment_id=request.json['commentId']
    vote=request.json['vote']
    
    if annotation_id != None:
        prev_anno_vote = Vote.query.filter_by(annotation_id=annotation_id, user_id=user_id).first()
    else:
        prev_comment_vote = Vote.query.filter_by(comment_id=comment_id, user_id=user_id).first()

    if prev_comment_vote != None:
        comment_score = Comment.query.get(comment_id)
        if prev_comment_vote.vote == vote:
            if vote == False:
                comment_score.vote_score = (comment_score.vote_score + 1)
            elif vote == True:
                comment_score.vote_score = (comment_score.vote_score - 1)
            db.session.delete(prev_comment_vote)
            db.session.add(comment_score)
            db.session.commit()
            return prev_comment_vote.to_dict()
        elif vote == True:
            prev_comment_vote.vote=True
            comment_score.vote_score = comment_score.vote_score + 1
            db.session.add(comment_score)
            db.session.add(prev_comment_vote)
            db.session.commit()
            return prev_comment_vote.to_dict()
        elif vote == False:
            prev_comment_vote.vote=False
            comment_score.vote_score = comment_score.vote_score - 1
            db.session.add(comment_score)
            db.session.add(prev_comment_vote)
            db.session.commit()
            return prev_comment_vote.to_dict()
        
    elif prev_anno_vote != None:
        annotation_score = Annotation.query.get(annotation_id)
        if prev_anno_vote.vote == vote:
            if vote == False:
                annotation_score.vote_score = (annotation_score.vote_score + 1)
            elif vote == True:
                annotation_score.vote_score = (annotation_score.vote_score - 1)
            db.session.delete(prev_anno_vote)
            db.session.add(annotation_score)
            db.session.commit()
            return prev_anno_vote.to_dict()
        elif vote == True:
            prev_anno_vote.vote=True
            annotation_score.vote_score = annotation_score.vote_score + 1
            db.session.add(annotation_score)
            db.session.add(prev_anno_vote)
            db.session.commit()
            return prev_anno_vote.to_dict()
        elif vote == False:
            prev_anno_vote.vote=False
            annotation_score.vote_score = annotation_score.vote_score - 1
            db.session.add(annotation_score)
            db.session.add(prev_anno_vote)
            db.session.commit()
            return prev_anno_vote.to_dict()

    elif comment_id != None:
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
    
    #double check return below
    return vote.to_dict()
     