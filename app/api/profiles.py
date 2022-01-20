from flask import Blueprint, request
from app.models import db, Profile
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
