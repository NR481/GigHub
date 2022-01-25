from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='demo123',
        firstName='Demo',
        lastName='User',
        email='demo@aa.io',
        password='password'
    )

    barron = User(
        username='barron123',
        firstName='Barron',
        lastName='Ryan',
        email='ryan@gighub.com',
        password='password'
    )

    mendilow = User(
        username='guy123',
        firstName='Guy',
        lastName='Mendilow',
        email='guy@gighub.com',
        password='password'
    )

    farrell = User(
        username='tim123',
        firstName='Tim',
        lastName='Farrell',
        email='tim@gighub.com',
        password='password'
    )

    dip = User(
        username='dip123',
        firstName='Brian',
        lastName='Katz',
        email='brian@gighub.com',
        password='password'
    )

    dan = User(
        username='dan123',
        firstName='Dan',
        lastName='Alvarez',
        email='dan@gighub.com',
        password='password'
    )

    emerson = User(
        username='eugene123',
        firstName='Eugene',
        lastName='Drucker',
        email='eugene@gighub.com',
        password='password'
    )

    battle = User(
        username='andreas 123',
        firstName='Andreas',
        lastName='Kern',
        email='andreas@gighub.com',
        password='password'
    )

    stumptown = User(
        username='katie123',
        firstName='Katie',
        lastName='DJ',
        email='katie@gighub.com',
        password='password'
    )

    unipiper = User(
        username='brian123',
        firstName='Brian',
        lastName='Kidd',
        email='kidd@gigub.com',
        password='password'
    )

    bmari = User(
        username='bmari123',
        firstName='B',
        lastName='Mari',
        email='bmari@gighub.com',
        password='password'
    )

    soul = User(
        username='gary123',
        firstName='Gary',
        lastName='Harris',
        email='gary@gighub.com',
        password='password'
    )

    shoehorn = User(
        username='mike123',
        firstName='Mike',
        lastName='Conley',
        email='mike@gighub.com',
        password='password'
    )

    db.session.add(demo)
    db.session.add(barron)
    db.session.add(mendilow)
    db.session.add(farrell)
    db.session.add(dip)
    db.session.add(dan)
    db.session.add(emerson)
    db.session.add(battle)
    db.session.add(stumptown)
    db.session.add(unipiper)
    db.session.add(bmari)
    db.session.add(soul)
    db.session.add(shoehorn)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
