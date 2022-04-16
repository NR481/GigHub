import boto3
import botocore
from flask import Blueprint, request
from app.models import db, Profile, Comment
from flask_login import login_required, current_user
from ..forms import NewProfileForm
from geopy.geocoders import GoogleV3
import os

from app.config import Config
from app.aws_s3 import *


profile_routes = Blueprint('profiles', __name__)

@profile_routes.route('/')
def index():
  profiles = Profile.query.all()

  return {'profiles': [profile.to_dict() for profile in profiles]}

@profile_routes.route('/', methods=['POST'])
@login_required
def new_profile():
  if "image" not in request.files:
    return "No image key in request.files"

  image_file = request.files["image"]

  if image_file:
    image_url = upload_file_to_s3(image_file, Config.S3_BUCKET)

    profile = Profile(
      name=request.form.get('name'),
      description=request.form.get('description'),
      category=request.form.get('category'),
      location=request.form.get('location'),
      userId=request.form.get('userId'),
      imageUrl = image_url
    )
  # form = NewProfileForm()
  # form['csrf_token'].data = request.cookies['csrf_token']

  # if form.validate_on_submit():
  #   profile = Profile(
  #     name=form.data['name'],
  #     description=form.data['description'],
  #     imageUrl=form.data['imageUrl'],
  #     category=form.data['category'],
  #     location=form.data['location'],
  #     userId=current_user.id
  #   )
    geolocator = GoogleV3(api_key=os.environ.get('GOOGLE_KEY'))
    location = geolocator.geocode(profile.location, timeout=None)
    if location is None:
      return {'error': 'Location is invalid'}, 500

    db.session.add(profile)
    db.session.commit()

    return profile.to_dict()
  return "No file attached!"

@profile_routes.route('/<int:id>/', methods=['PUT'])
@login_required
def edit_profile(id):
  form = NewProfileForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  profile = Profile.query.get(id)

  if form.validate_on_submit():
    profile.name = form.data['name']
    profile.description = form.data['description']
    profile.imageUrl = form.data['imageUrl']
    profile.category = form.data['category']
    profile.location = form.data['location']
    profile.userId = current_user.id

    geolocator = GoogleV3(api_key=os.environ.get('GOOGLE_KEY'))
    location = geolocator.geocode(profile.location, timeout=None)
    if location is None:
      return {'error': 'Location is invalid'}, 500

    db.session.commit()
    return profile.to_dict()
  return form.errors

@profile_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def delete_profile(id):
  profile = Profile.query.get(id)
  db.session.delete(profile)
  db.session.commit()
  return { "Delete": "Success"}

@profile_routes.route('/<int:id>/comments/')
def get_comments(id):
  comments = Comment.query.filter(Comment.profileId == id)
  return {'comments': [comment.to_dict() for comment in comments]}
