from .db import db

class Profile(db.Model):
  __tablename__ = 'profiles'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  description = db.Column(db.String, nullable=False)
  imageUrl = db.Column(db.String, nullable=False)
  soundUrl = db.Column(db.String)
  rating = db.Column(db.Numeric(precision=2, scale=1, asdecimal=False))
  category = db.Column(db.String(50), nullable=False)
  location = db.Column(db.String(50), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  user = db.relationship('User', back_populates='profiles')
  comments = db.relationship('Comment', back_populates='profile', cascade='all, delete', passive_deletes=True)

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'description': self.description,
      'imageUrl': self.imageUrl,
      'soundUrl': self.soundUrl,
      'rating': self.rating,
      'category': self.category,
      'location': self.location,
      'userId': self.userId
    }
