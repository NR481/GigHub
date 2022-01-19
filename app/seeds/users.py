from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='demo123',
        firstName='Demo',
        lastName='User',
        email='demo@aa.io',
        password='password',
        imageUrl='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    )

    barron = User(
        username='barron123',
        firstName='Barron',
        lastName='Ryan',
        email='ryan@gighub.com',
        password='password',
        imageUrl='https://images.squarespace-cdn.com/content/v1/578fa48ce4fcb561f918fa88/1633829329129-NAGW4J5C8BQ0C49PWPB4/Barron+Ryan?format=750w'
    )

    mendilow = User(
        username='guy123',
        firstName='Guy',
        lastName='Mendilow',
        email='guy@gighub.com',
        password='password',
        imageUrl='https://images.squarespace-cdn.com/content/v1/578fa48ce4fcb561f918fa88/1633831300737-N5XH79S8D47ZU0R6LBMP/%28A%29_Guy_Mendilow_Ensemble_Photo_by_Gretjen_Helene_2.jpg?format=500w'
    )

    farrell = User(
        username='tim123',
        firstName='Tim',
        lastName='Farrell',
        email='tim@gighub.com',
        password='password',
        imageUrl='https://images.squarespace-cdn.com/content/v1/578fa48ce4fcb561f918fa88/1526570278252-0SLGAH100QBJFN1YM0YB/Tim+Farrell_3qtr+standing+with+guitar+photos_hi-res.jpg?format=300w'
    )

    dip = User(
        username='dip123',
        firstName='Brian',
        lastName='Katz',
        email='brian@gighub.com',
        password='password',
        imageUrl='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    )

    dan = User(
        username='dan123',
        firstName='Dan',
        lastName='Alvarez',
        email='dan@gighub.com',
        password='password',
        imageUrl='https://images.squarespace-cdn.com/content/v1/58a7c8522994ca3986975c4c/1629772458628-0NYZW8UXSDVP1C6QRXAM/3_James_Lynch-sq.jpg?format=500w'
    )

    emerson = User(
        username='eugene123',
        firstName='Eugene',
        lastName='Drucker',
        email='eugene@gighub.com',
        password='password',
        imageUrl='https://imgartists.com/wp-content/uploads/2016/05/EMERSON_QUARTET_indoor_seated_edit.jpg'
    )

    battle = User(
        username='andreas 123',
        firstName='Andreas',
        lastName='Kern',
        email='andreas@gighub.com',
        password='password',
        imageUrl='https://imgartists.com/wp-content/uploads/2016/04/Piano_Battle_pc_Mathias_Bothor_1_72.jpg'
    )

    stumptown = User(
        username='katie123',
        firstName='Katie',
        lastName='DJ',
        email='katie@gighub.com',
        password='password',
        imageUrl='https://stumptowndjs.com/wp-content/uploads/2017/04/djkatie-300x219.jpg'
    )

    unipiper = User(
        username='brian123',
        firstName='Brian',
        lastName='Kidd',
        email='brian@gigub.com',
        password='password',
        imageUrl='http://www.unipiper.com/_/rsrc/1519972913053/about/profile.jpg?height=400&width=400'
    )

    bmari = User(
        username='bmari123',
        firstName='B',
        lastName='Mari',
        email='bmari@gighub.com',
        password='password',
        imageUrl='https://cress.gigsalad.com/s3/b/bmari_music_with_purpose_kent/59821a69712ff_300_sq'
    )

    soul = User(
        username='gary123',
        firstName='Gary',
        lastName='Harris',
        email='gary@gighub.com',
        password='password',
        imageUrl='https://gp1.wac.edgecastcdn.net/802892/http_public_production/musicians/images/198636/original/resize:248x186/crop:x0y392w2022h1516/hash:1467292961/1392935354_DSC_1000.JPG?1467292961'
    )

    shoehorn = User(
        username='mike123',
        firstName='Mike',
        lastName='Conley',
        email='mike@gighub.com',
        password='password',
        imageUrl='https://d10j3mvrs1suex.cloudfront.net/u/391394/f5a0a26703cac168abd1721e80fb43ba359a7264/350w/cwb-2109-photo-by-carlton-ward-resized.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg'
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
