from unittest import result
from flask import Blueprint, request
from app.forms import SearchForm
from app.models import Profile

search_routes = Blueprint('search', __name__)

@search_routes.route('/', methods=['POST'])
def search():
  form = SearchForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  results = []
  if form.validate_on_submit():
    query = form.data['query']
    result1 = Profile.query.filter(Profile.name.ilike(f'%{query}%')).all()
    results.append(result1)
    result2 = Profile.query.filter(Profile.description.ilike(f'%{query}%')).all()
    results.append(result2)
    result3 = Profile.query.filter(Profile.category.ilike(f'%{query}%')).all()
    results.append(result3)
    result4 = Profile.query.filter(Profile.location.ilike(f'%{query}%')).all()
    results.append(result4)
    flat_results = [item for sublist in results for item in sublist]

    return {'profiles': [item.to_dict() for item in set(flat_results)]}
