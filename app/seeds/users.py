from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    dave = User(
        username='dave', email='dave@aa.io', password='password')
    sam = User(
        username='sam', email='sam@aa.io', password='password')
    jennifer = User(
        username='jennifer', email='jennifer@aa.io', password='password')
    jeremy = User(
        username='jeremy', email='jeremy@aa.io', password='password')
    megan = User(
        username='megan', email='megan@aa.io', password='password')
    sarah = User(
        username='sarah', email='sarah@aa.io', password='password')
    ellen = User(
        username='ellen', email='ellen@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(dave)
    db.session.add(sam)
    db.session.add(jennifer)
    db.session.add(jeremy)
    db.session.add(megan)
    db.session.add(sarah)
    db.session.add(ellen)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
