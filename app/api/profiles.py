from flask import Blueprint, request
from app.models import db, Profile, Comment
from flask_login import login_required, current_user
from ..forms import NewProfileForm

profile_routes = Blueprint('profiles', __name__)

@profile_routes.route('/')
def index():
  profiles = Profile.query.all()
  return {'profiles': [profile.to_dict() for profile in profiles]}

@profile_routes.route('/', methods=['POST'])
@login_required
def new_profile():
  form = NewProfileForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    profile = Profile(
      name=form.data['name'],
      description=form.data['description'],
      imageUrl=form.data['imageUrl'],
      category=form.data['category'],
      location=form.data['location'],
      userId=current_user.id
    )

    db.session.add(profile)
    db.session.commit()

    return profile.to_dict()
  return form.errors

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
