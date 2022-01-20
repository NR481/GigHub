from ast import Str
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import InputRequired

class NewProfileForm(FlaskForm):
  name = StringField('name', validators=[InputRequired(message="Please enter an artist or ensemble name")])
  description = StringField('description', validators=[InputRequired(message="Please enter a description of your services")])
  imageUrl = StringField('imageUrl', validators=[InputRequired(message="Please enter the URL for your photo")])
  category = StringField('category', validators=[InputRequired(message="Please provide musical genre(s) you specialize in")])
  location = StringField('location', validators=[InputRequired(message="Please enter your location")])
