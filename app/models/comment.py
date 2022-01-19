from db import db

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key=True)
  comment = db.Column(db.String, nullable=False)
  rating = db.Column(db.Integer)
  imageUrl = db.Column(db.String)
  profileId = db.Column(db.Integer, db.ForeignKey('profiles.id'), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  created_at = db.Column(db.DateTime, server_default=db.func.now())
  updated_at = db.Column(db.DateTime, server_default)
