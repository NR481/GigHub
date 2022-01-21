from app.models import db, Comment

def seed_comments():
  first = Comment(
    comment="We absolutely LOVED this band!!! They were amazing for our 1920's party!! Paul is great to work with. The band was awesome! We all had such an amazing time! Highly recommend booking them for any event! Music was great!!!",
    profileId=12,
    userId=1
  )

  second = Comment(
    comment="We just celebrated our 50th Wedding anniversary. It was truly golden. Our amazing sons and their girls put together a gala beyond belief. It would not have been complete but for the sounds of this amazing band. Everyone loved their arrangements and commented on how long their sets were. BIG LUCKY seemed genuinely interested in the hosts and guests. Book them you won't be sorry.",
    profileId=12,
    userId=1
  )

  db.session.add(first)
  db.session.add(second)

  db.session.commit()

def undo_comments():
  db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
  db.session.commit()
