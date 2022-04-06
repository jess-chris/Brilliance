from app.models import db, Track
from datetime import date


today = date.today()

def seed_tracks():
    test_track = Track(
        user_id = 1,
        title = 'Mr.Brightside',
        lyrics =
    '''
    Coming out of my cage and I've been doing just fine
    Gotta, gotta be down, because I want it all
    It started out with a kiss, how did it end up like this?
    It was only a kiss, it was only a kiss
    Now I'm falling asleep and she's calling a cab
    While he's having a smoke and she's taking a drag
    Now they're going to bed and my stomach is sick
    And it's all in my head, but she's touching his

    Chest now, he takes off her
    Dress now, let me go
    And I just can't look, it's killing me
    They're taking control

    Jealousy, turning saints into the sea
    Swimming through sick lullabies, choking on your alibis
    But it's just the price I pay, destiny is calling me
    Open up my eager eyes, 'cause I'm Mr. Brightside

    I'm coming out of my cage and I've been doing just fine
    Gotta, gotta be down, because I want it all
    It started out with a kiss, how did it end up like this?
    It was only a kiss, it was only a kiss
    Now I'm falling asleep and she's calling a cab
    While he's having a smoke and she's taking a drag
    Now they're going to bed and my stomach is sick
    And it's all in my head, but she's touching his

    Chest now, he takes off her
    Dress now, let me go
    'Cause I just can't look, it's killing me
    They're taking control

    Jealousy, turning saints into the sea
    Swimming through sick lullabies, choking on your alibis
    But it's just the price I pay, destiny is calling me
    Open up my eager eyes, 'cause I'm Mr. Brightside

    I never...
    I never...
    I never...
    I never...
    ''',
        artist = 'The Killers',
        album_image = 'https://media.pitchfork.com/photos/5929bc3513d197565213b27f/1:1/w_320,c_limit/192293f3.jpg',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )



    db.session.add(test_track)
    db.session.commit()

def undo_tracks():
    db.session.execute('TRUNCATE tracks RESTART IDENTITY CASCADE;')
    db.session.commit()
