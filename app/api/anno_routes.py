from flask import Blueprint, jsonify, request
from app.models import db, Annotation
from app.forms import AnnotationForm 
anno_routes = Blueprint('annotations', __name__)

@anno_routes.route('/')
def annotations():
    annotations = Annotation.query.all()
    return {'annotations': [annotation.anno_to_dict() for annotation in annotations]}

# @anno_routes.route('/:track_id', methods=['POST'])
# def post_annotations(track_id):
#     form = AnnotationForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         anno = Annotation(
#             track_id = form.data['track_id'],
#             content = form.data['content']
#         )
#         db.session.add(anno)
#         db.session.commit()
#         return anno.anno_to_dict()

@anno_routes.route('/<int:id>', methods=['POST'])
def post_annotations(id):
    
    data = request.get_json()

    content = request.json['content']
    track_id = request.json['track_id']


    annotation = Annotation(
        content=content,
        user_id = 1,
        track_id = track_id,
        vote_score = 0
    )
    db.session.add(annotation)
    db.session.commit()
    return annotation.anno_to_dict()