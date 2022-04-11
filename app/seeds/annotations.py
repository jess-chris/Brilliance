from app.models import db, Annotation
from datetime import date

today = date.today()

def seed_annotations():
    # test_anno1 = Annotation(
    #     user_id = 1,
    #     track_id = 1,
    #     content = 'Love this line!',
    #     vote_score = 0,
    #     created_at = today.strftime("%B %d, %Y"),
    #     updated_at = today.strftime("%B %d, %Y")
    # )
    # test_anno2 = Annotation(
    #     user_id = 2,
    #     track_id = 2,
    #     content = 'this is very symbolic',
    #     vote_score = 0,
    #     created_at = today.strftime("%B %d, %Y"),
    #     updated_at = today.strftime("%B %d, %Y")
    # )
    # test_anno3 = Annotation(
    #     user_id = 3,
    #     track_id = 3,
    #     content = 'a metaphor for life',
    #     vote_score = 0,
    #     created_at = today.strftime("%B %d, %Y"),
    #     updated_at = today.strftime("%B %d, %Y")
    # )
    # test_anno4 = Annotation(
    #     user_id = 4,
    #     track_id = 4,
    #     content = 'i felt this',
    #     vote_score = 0,
    #     created_at = today.strftime("%B %d, %Y"),
    #     updated_at = today.strftime("%B %d, %Y")
    # )
    # test_anno5 = Annotation(
    #     user_id = 4,
    #     track_id = 5,
    #     content = 'this part sucks',
    #     vote_score = 0,
    #     created_at = today.strftime("%B %d, %Y"),
    #     updated_at = today.strftime("%B %d, %Y")
    # )
    # test_anno6 = Annotation(
    #     user_id = 5,
    #     track_id = 6,
    #     content = 'this aint it',
    #     vote_score = 0,
    #     created_at = today.strftime("%B %d, %Y"),
    #     updated_at = today.strftime("%B %d, %Y")
    # )
    # test_anno7 = Annotation(
    #     user_id = 5,
    #     track_id = 6,
    #     content = 'mic drop',
    #     vote_score = 0,
    #     created_at = today.strftime("%B %d, %Y"),
    #     updated_at = today.strftime("%B %d, %Y")
    # )
    # test_anno8 = Annotation(
    #     user_id = 6,
    #     track_id = 7,
    #     content = 'im tired',
    #     vote_score = 0,
    #     created_at = today.strftime("%B %d, %Y"),
    #     updated_at = today.strftime("%B %d, %Y")
    # )
    # test_anno9 = Annotation(
    #     user_id = 7,
    #     track_id = 8,
    #     content = '''First to bring a Million Dollar Car to Virginia Beach? Pharrell was one of 
    #                 the original owners of the super rare Ferrari Enzo. 
    #                 Named after the companies Itialian creator. Only 400 Made.''',
    #     vote_score = 0,
    #     created_at = today.strftime("%B %d, %Y"),
    #     updated_at = today.strftime("%B %d, %Y")
    # )
    # test_anno10 = Annotation(
    #     user_id = 8,
    #     track_id = 9,
    #     content = '''This can be interpreted as him asking someone to reach out. It specifying the palm of the hand implies it being in a helping or caring manner.
    #             Later he sings about being on the floor.''',
    #     vote_score = 0,
    #     created_at = today.strftime("%B %d, %Y"),
    #     updated_at = today.strftime("%B %d, %Y")
    # )

    # db.session.add(test_anno1)
    # db.session.add(test_anno2)
    # db.session.add(test_anno3)
    # db.session.add(test_anno4)
    # db.session.add(test_anno5)
    # db.session.add(test_anno6)
    # db.session.add(test_anno7)
    # db.session.add(test_anno8)
    # db.session.add(test_anno9)
    # db.session.add(test_anno10)

    # db.session.commit()
    pass

def undo_annotations():
    db.session.execute('TRUNCATE annotations RESTART IDENTITY CASCADE;')
    db.session.commit()