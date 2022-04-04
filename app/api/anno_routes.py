from flask import Blueprint, jsonify
from app.models import db, Annotation

anno_routes = Blueprint('annotations', __name__)

@anno_routes.route('/')
def annotations():
    annotations = Annotation.query.all()
    return {'annotations': [annotation.anno_to_dict() for annotation in annotations]}

@anno_routes.route('/<int:id>', methods=['POST'])
def post_annotations():
    pass