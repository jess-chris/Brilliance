from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
db = SQLAlchemy()

class Track(db.Model):
  __tablename__ = "tracks"
  
  id = db.Column(db.Integer, primary_key=True, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  title = db.Column(db.String(50), nullable=False)
  lyrics = db.Column(db.Text(), nullable=False)
  artist = db.Column(db.String(50), nullable=False)
  album_image = db.Column(db.String())
  created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
  updated_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)

  
  # TODO Relation
  annotations = db.relationship("Annotation", backref="tracks", cascade="all, delete")
  comments = db.relationship("Comment", backref="tracks", cascade="all, delete")

  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'title': self.title,
      'lyrics': self.lyrics,
      'artist': self.artist,
      'album_image': self.album_image,
      'annotations': self.annotations,
      'comments': self.comments
    }

  # user = db.relationship("User")
  
class Annotation(db.Model):
  __tablename__ = "annotations"
  
  id = db.Column(db.Integer, primary_key=True, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  track_id = db.Column(db.Integer, db.ForeignKey("tracks.id"), nullable=False)
  content = db.Column(db.Text, nullable=False)
  vote_score = db.Column(db.Integer)
  created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
  updated_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
  
  # TODO Relation
  # user = db.relationship("User")
  comments = db.relationship("Comment", backref="annotations", cascade="all, delete")
  votes = db.relationship("Vote", backref="annotations", cascade="all, delete")
  
class Comment(db.Model):
  __tablename__ = "comments"
  
  id = db.Column(db.Integer, primary_key=True, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  annotation_id = db.Column(db.Integer, db.ForeignKey("annotations.id"))
  track_id = db.Column(db.Integer, db.ForeignKey("tracks.id"))
  content = db.Column(db.Text, nullable=False)
  vote_score = db.Column(db.Integer)
  created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
  updated_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)

  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'annotation_id': self.annotation_id,
      'track_id': self.track_id,
      'vote_score': self.vote_score,
      'content': self.content
    }
  
  # TODO Relation
  # user = db.relationship("User")
  votes = db.relationship("Vote", backref="comments", cascade="all, delete")

class Vote(db.Model):
  __tablename__ = "votes"
  
  id = db.Column(db.Integer, primary_key=True, nullable=False)
  vote = db.Column(db.Boolean)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  annotation_id = db.Column(db.Integer, db.ForeignKey("annotations.id"))
  comment_id = db.Column(db.Integer, db.ForeignKey("comments.id"))
  
  # TODO Relation
  # user = db.relationship("User")