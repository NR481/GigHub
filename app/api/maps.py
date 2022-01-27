from flask import Blueprint
from app.models import Profile
from geopy.geocoders import GoogleV3
import os

maps_routes = Blueprint('maps', __name__)

@maps_routes.route('/')
def index():
  geolocator = GoogleV3(api_key=os.environ.get('GOOGLE_KEY'))
  profiles = Profile.query.all()

  locations = [profile.location for profile in profiles]
  coordinates = [geolocator.geocode(location) for location in locations]
  latitude = [coordinate.latitude for coordinate in coordinates]
  longitude = [coordinate.longitude for coordinate in coordinates]
  coordinate_pairs = list(zip(latitude, longitude))
  profile_ids = [profile.id for profile in profiles]
  coordinates_dict = dict(zip(profile_ids, coordinate_pairs))

  return {'coordinates': [{'id': key, 'coordinate': list(value)} for key, value in coordinates_dict.items()]}
