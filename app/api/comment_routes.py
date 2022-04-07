from flask import Blueprint, jsonify, request
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/new', methods=['POST'])
def create_comment():
  
  user_id=request.json['userId']
  content=request.json['content']
  
  try:
    track_id=request.json['trackId']
    comment = Comment(
      user_id = user_id,
      track_id = track_id,
      content = content,
      vote_score = 0
    )
  except:
    annotation_id=request.json['annotationId']
    comment = Comment(
      user_id = user_id,
      annotation_id = annotation_id,
      content = content,
      vote_score = 0
    )
    
  db.session.add(comment)
  db.session.commit()
  
  return comment.to_dict()

@comment_routes.route('/edit', methods=['PUT'])
def update_comment():
  
  comment_id=request.json['commentId']
  content=request.json['content']
  
  comment = Comment.query.get(comment_id)
  
  comment.content=content
  
  db.session.add(comment)
  db.session.commit()
  
  return comment.to_dict()


@comment_routes.route('/delete', methods=['DELETE'])
def delete_comment():
  
  comment_id=request.json['commentId']
  
  comment = Comment.query.get(comment_id)
  
  db.session.delete(comment)
  db.session.commit()
  
  return comment.to_dict()
