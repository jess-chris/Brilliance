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

@anno_routes.route('/<int:id>', methods=['POST', 'PUT'])
def post_annotations(id):
    if request.method == 'POST':
        data = request.get_json()
        print('\nDAAATA\n', data)

        user_id = request.json['user_id']
        content = request.json['content']
        track_id = request.json['track_id']
        anno_id = request.json['annotations_id']
        print('\nrequest\n', request.json)

        annotation = Annotation(
            # id=anno_id,
            content=content,
            user_id = user_id,
            track_id = track_id,
            vote_score = 0
        )
        db.session.add(annotation)
        db.session.commit()
        return annotation.anno_to_dict()
    if request.method == 'PUT':
        print('idddddd', type(id))
        data = request.get_json()
        found = Annotation.query.get(id)
        # print('found', found.content)
        content = request.json['content']
        updatedContent = Annotation(
            content=content
        )

        found.content = updatedContent.content
        db.session.commit()
        # print('JSON', found.anno_to_dict())
        return data
