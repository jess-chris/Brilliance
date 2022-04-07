from app.models import db, Comment
from datetime import date

today = date.today()

def seed_comments():
    test_comment1 = Comment(
        user_id = 1,
        track_id = 1,
        content = 'Love this song!',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment2 = Comment(
        user_id = 2,
        track_id = 1,
        content = 'Wow so deep',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment3 = Comment(
        user_id = 3,
        track_id = 3,
        content = 'banger',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment4 = Comment(
        user_id = 4,
        track_id = 3,
        content = 'a classic',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment5 = Comment(
        user_id = 5,
        track_id = 5,
        content = 'words of wisdom',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment6 = Comment(
        user_id = 6,
        track_id = 8,
        content = 'my wedding song',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment7 = Comment(
        user_id = 7,
        track_id = 2,
        content = '<3333',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment8 = Comment(
        user_id = 1,
        track_id = 10,
        content = 'thanks for the lyrics',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment9 = Comment(
        user_id = 9,
        track_id = 11,
        content = 'brilliant',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment10 = Comment(
        user_id = 4,
        track_id = 6,
        content = 'wowowowowowowowo',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment11 = Comment(
        user_id = 3,
        track_id = 7,
        content = 'i find this offensive',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment12 = Comment(
        user_id = 4,
        annotation_id = 7,
        content = 'i find this very very NOT offensive',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment13 = Comment(
        user_id = 3,
        annotation_id = 7,
        content = 'this is whack',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment14 = Comment(
        user_id = 3,
        annotation_id = 1,
        content = 'fire',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment15 = Comment(
        user_id = 3,
        annotation_id = 2,
        content = 'lmao',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )
    test_comment16 = Comment(
        user_id = 3,
        annotation_id = 3,
        content = 'nick is so cool and smart',
        vote_score = 0,
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )

    db.session.add(test_comment1)
    db.session.add(test_comment2)
    db.session.add(test_comment3)
    db.session.add(test_comment4)
    db.session.add(test_comment5)
    db.session.add(test_comment6)
    db.session.add(test_comment7)
    db.session.add(test_comment8)
    db.session.add(test_comment9)
    db.session.add(test_comment10)
    db.session.add(test_comment11)
    db.session.add(test_comment12)
    db.session.add(test_comment13)
    db.session.add(test_comment14)
    db.session.add(test_comment15)
    db.session.add(test_comment16)

    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
