from .db import db

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key=True)
  comment = db.Column(db.String, nullable=False)
  rating = db.Column(db.Integer)
  imageUrl = db.Column(db.String)
  profileId = db.Column(db.Integer, db.ForeignKey('profiles.id'), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  created_at = db.Column(db.DateTime, server_default=db.func.now())
  updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

  profile = db.relationship('Profile', back_populates='comments')
  user = db.relationship('User', back_populates='comments')

  def to_dict(self):
    return {
      'id': self.id,
      'comment': self.comment,
      'rating': self.rating,
      'imageUrl': self.imageUrl,
      'profileId': self.profileId,
      'userId': self.userId,
      'created_at': self.created_at,
      'updated_at': self.updated_at
    }
