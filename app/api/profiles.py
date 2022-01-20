from flask import Blueprint
from app.models import Profile

profile_routes = Blueprint('profiles', __name__)

@profile_routes.route('/')
def index():
  featured_profiles = Profile.query.limit(8)
  return {'profiles': [profile.to_dict() for profile in featured_profiles]}

  
