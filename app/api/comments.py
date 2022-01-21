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

@comment_routes.route('/<int:id>/', methods=['PUT'])
@login_required
def edit_comment(id):
  form = NewCommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  edited_comment = Comment.query.get(id)

  if form.validate_on_submit():
    edited_comment.comment = form.data['comment']
    edited_comment.rating = form.data['rating']
    edited_comment.profileId = form.data['profileId']
    edited_comment.userId = current_user.id

    db.session.commit()
    print(edited_comment.to_dict())
    return edited_comment.to_dict()
  return form.errors

@comment_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def delete_comment(id):
  comment = Comment.query.get(id)
  db.session.delete(comment)
  db.session.commit()
  return {"Delete": "Success"}
