from crypt import methods
from flask import Blueprint, request
from app.models import db, Comment
from flask_login import login_required, current_user
from ..forms import NewCommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/', methods=['POST'])
@login_required
def add_comment():
  form = NewCommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    comment = Comment(
      comment=form.data['comment'],
      rating=form.data['rating'],
      profileId=form.data['profileId'],
      userId=current_user.id
    )

    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()
  return form.errors
