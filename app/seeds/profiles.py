from app.models import db, Profile

def seed_profiles():
  barron = Profile(
    name='Barron Ryan',
    description="Barron Ryan’s love for music has always been divided. The son of two musicians, he grew up in a house filled with the sounds of artists ranging from Mozart to Michael Jackson. So, when it comes to his own performing, he’s not content drawing on just one influence. He combines them all into a musical adventure that’s vintage yet fresh, historical yet hip, classic yet cool.",
    imageUrl='https://images.squarespace-cdn.com/content/v1/578fa48ce4fcb561f918fa88/1633829329129-NAGW4J5C8BQ0C49PWPB4/Barron+Ryan?format=750w',
    soundUrl='',
    category='Jazz',
    location='New York, NY',
    userId=2
  )

  mendilow = Profile(
    name='Guy Mendilow Ensemble',
    description="The Guy Mendilow Ensemble weaves moving stories through riveting scores, narration and theatrically projected sand animation. Productions center on true tales of people’s choices and chances as they navigate thresholds, whether personal or historical. The ensemble is especially intrigued by decisions of generosity and grace despite upheaval.",
    imageUrl='https://images.squarespace-cdn.com/content/v1/578fa48ce4fcb561f918fa88/1633831300737-N5XH79S8D47ZU0R6LBMP/%28A%29_Guy_Mendilow_Ensemble_Photo_by_Gretjen_Helene_2.jpg?format=500w',
    soundUrl='',
    category='Contemporary',
    location='New York, NY',
    userId=3
  )

  farrell = Profile(
    name='Tim Farrell',
    description="With so many guitarists trying to make their mark these days, it’s not easy being a “trailblazer.” Yet, that perfectly defines Tim Farrell. His fingerstyle playing and original compositions display an elegant simplicity that celebrates the purity of the acoustic guitar. Farrell is a rare kind of musician who can entertain an audience and inspire future generations of players.",
    imageUrl='https://images.squarespace-cdn.com/content/v1/578fa48ce4fcb561f918fa88/1526570278252-0SLGAH100QBJFN1YM0YB/Tim+Farrell_3qtr+standing+with+guitar+photos_hi-res.jpg?format=300w',
    soundUrl='',
    category='Acoustic',
    location='New York, NY',
    userId=4
  )

  dip = Profile(
    name='The Dip',
    description="On their Dualtone Records debut Sticking With It,  Seattle-based seven piece The Dip deliver the kind of unbridled rhythm-and-blues that hits on every emotional level. Inciting everything from raw catharsis to heavy-hearted reckoning to wildly exuberant joy, the self-produced album marks a major creative breakthrough for the band. To that end, Sticking With It fully channels the vitality of the freewheeling live show that’s earned them an ardent following over the last decade, matching their sophisticated musicianship with a fantastically loose energy. When met with The Dip’s reflection on matters both timely (the crush of late capitalism, the glaring need for true community) and irrefutably timeless (the vast complexities of love and loss), the resulting body of work captures the mood of the current moment while offering immediate escape into a more elevated state of mind",
    imageUrl='https://images.squarespace-cdn.com/content/v1/58a7c8522994ca3986975c4c/1642199842887-LR8OFTKP2VY6CTIVK7LP/square.jpg?format=500w',
    soundUrl='',
    category='R&B',
    location='New York, NY',
    userId=5
  )

  sam = Profile(
    name='Toledo',
    description="Now New York City-based, Alvarez and Dunn-Pilz were destined to find one another in their tiny coastal town of Newburyport, Massachusetts, where they met some fifteen years ago at age 10 while busking for bemused passers-by. They grew up together, developed their own tastes, formed their own bands, and eventually separated for the first time during their college years. They kept in touch throughout, however, continuing to write songs together by trading voice clips back and forth across hundreds of miles. After graduation, Alvarez and Dunn-Pilz agreed to ‘just get back to doing what we were doing before.’",
    imageUrl='https://images.squarespace-cdn.com/content/v1/58a7c8522994ca3986975c4c/1629772458628-0NYZW8UXSDVP1C6QRXAM/3_James_Lynch-sq.jpg?format=500w',
    soundUrl='',
    category='Rock',
    location='New York, NY',
    userId=6
  )

  emerson = Profile(
    name='Emerson String Quartet',
    description="The Emerson String Quartet has maintained its status as one of the world’s premier chamber music ensembles for more than four decades. “With musicians like this,” wrote a reviewer for The Times (London), “there must be some hope for humanity.” The Quartet has made more than 30 acclaimed recordings, and has been honored with nine GRAMMYs® (including two for Best Classical Album), three Gramophone Awards, the Avery Fisher Prize, and Musical America’s “Ensemble of the Year” award. The Quartet collaborates with some of today’s most esteemed composers to premiere new works, keeping the string quartet form alive and relevant. The group has partnered in performance with such stellar soloists as Renée Fleming, Barbara Hannigan, Evgeny Kissin, Emanuel Ax, and Yefim Bronfman, to name a few.",
    imageUrl='https://imgartists.com/wp-content/uploads/2016/05/EMERSON_QUARTET_indoor_seated_edit.jpg',
    soundUrl='',
    category='Classical',
    location='New York, NY',
    userId=7
  )

  battle = Profile(
    name='Piano Battle',
    description='The brainchild of internationally accomplished pianists Andreas Kern and Paul Cibis, the PIANO BATTLE sees the duo go head-to-head on stage, charming and enchanting the audience with a variety of classical pieces. The two artists, with distinctly different performance styles, take turns to perform pieces by composers such as Chopin, Liszt and Debussy. They will even improvise based on the tunes you request.',
    imageUrl='https://imgartists.com/wp-content/uploads/2016/04/Piano_Battle_pc_Mathias_Bothor_1_72.jpg',
    soundUrl='',
    category='Classical',
    location='New York, NY',
    userId=8
  )

  stumptown = Profile(
    name='Stumptown DJs',
    description="Since moving to Portland in 2011, she’s been a resident DJ at the East End, and nowadays can be found at a local coffee shop daydreaming about playlists. You should hear her 50 Cent / Men Down Under remix.",
    imageUrl='https://stumptowndjs.com/wp-content/uploads/2017/04/djkatie-300x219.jpg',
    soundUrl='',
    category='Pop/Dance',
    location='Portland, OR',
    userId=9
  )

  unipiper = Profile(
    name='The Unipiper',
    description="Of all of Portland’s colorful characters, none are as easily recognized as The Unipiper, with his fire-breathing bagpipes, colorful costumes, and unicycle, reports of Unipiper sightings stretch back over a decade. The origin of The Unipiper is shrouded in mystery, but reportedly stems from an incident with local-resident Brian Kidd involving a bite from a radioactive unicycle incurred while playing the bagpipes, granting him the power to make people smile. Ever since, he has roamed the streets of Portland, protecting its citizens from all that is normal and standing up to those that would seek to silence the weird. Internet fame soon followed when eyewitness videos of The Unipiper went viral, winding up on such websites as CNN and the front page of Reddit. Youtube commenter kjun13 calls The Unipiper \"the most internet-y thing on the internet.\" The Unipiper has earned his place as the city’s unofficial ambassador of weird, having represented Portland in a variety of foreign lands from Scotland to Japan. For three years running, The Unipiper has been crowned ‘Best Local Celebrity in Portland’ by the Willamette Week and with recent appearances on ‘Jimmy Kimmel Live’, ‘America’s Got Talent’, and ‘The Gong Show’, The Unipiper has solidified his position as a true Portland icon. When asked about the enduring appeal of The Unipiper, Kidd says, \"don’t think too hard about it. If you don’t understand The Unipiper there’s a lot you probably won’t understand about Portland. Keeping Portland Weird isn’t a one-person job, but as they say, with great volume comes great responsibility.",
    imageUrl='https://seubertphoto.files.wordpress.com/2016/07/20160723_unipiper_0002.jpg',
    soundUrl='',
    category='Contemporary',
    location='Portland, OR',
    userId=10
  )

  bmari = Profile(
    name='B. Mari',
    description='Music ministry to uplift and encourage. A mix of praise and worship from contemporary to rap. Worship experience for all ages!',
    imageUrl='https://cress.gigsalad.com/s3/b/bmari_music_with_purpose_kent/59821a69712ff_300_sq',
    soundUrl='',
    category='Gospel',
    location='Kent, WA',
    userId=11
  )

  soul = Profile(
    name='Soul Vaccination',
    description="Soul Vaccination remains at the top of the Portland charts, and is one of the tightest Funk & Soul Bands in the PNW. As the Rose City's favorite, Soul Vax infuses the stage with the greatest soul standards, and has been a fixture in the Northwest music scene for over 20 years.",
    imageUrl='https://gp1.wac.edgecastcdn.net/802892/http_public_production/photos/images/32453452/original/crop:x0y0w3200h2460/hash:1574200240/SOUL0529.jpg?1574200240',
    soundUrl='',
    category='Funk/Soul',
    location='Portland, OR',
    userId=12
  )

  shoehorn = Profile(
    name='Shoehorn',
    description='MC Shoehorn is a performance artist who creates music with his feet and dances with his horn. Shoehorn combines body rhythms and sophisticated forms and concepts into an entertaining spectacle. A specialist in sax and tap dance, he is also a vocalist, multi-instrumentalist, arranger and composer, utilizing a variety of wind and percussion instruments, original material and songbook classics, and music from around the world. In addition to his shoes and horn, he uses the Tappercussion(TM) Mark VII e-tap (TM) MIDI instrument to add percussive sounds like drum set, steel drums, sitar and marimba. Whether playing as a bandleader or sideman with performers and performance troupes such as Circus Luminesence, Fools in Paradise marimba band, Baby Gramps, Rhys Thomas, and Leapin Louie Lichtenstein or playing solo, he puts heart, mind, body and soul into every performance.',
    imageUrl='https://d10j3mvrs1suex.cloudfront.net/u/391394/f5a0a26703cac168abd1721e80fb43ba359a7264/350w/cwb-2109-photo-by-carlton-ward-resized.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg',
    soundUrl='',
    category='Jazz',
    location='Portland, OR',
    userId=13
  )

  db.session.add(barron)
  db.session.add(mendilow)
  db.session.add(farrell)
  db.session.add(dip)
  db.session.add(sam)
  db.session.add(emerson)
  db.session.add(battle)
  db.session.add(stumptown)
  db.session.add(unipiper)
  db.session.add(bmari)
  db.session.add(soul)
  db.session.add(shoehorn)

  db.session.commit()

def undo_profiles():
  db.session.execute('TRUNCATE profiles RESTART IDENTITY CASCADE;')
  db.session.commit()
