from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField
from wtforms.validators import InputRequired

class NewCommentForm(FlaskForm):
  comment = StringField('comment', validators=[InputRequired(message='Please enter a comment')])
  rating = DecimalField('rating')
  profileId = IntegerField('profileId')
