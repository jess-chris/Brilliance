from flask.cli import AppGroup
from .users import seed_users, undo_users 
from .tracks import seed_tracks, undo_tracks
from .comments import seed_comments, undo_comments
from .annotations import seed_annotations, undo_annotations

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_tracks()
    seed_annotations()
    seed_comments()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_tracks()
    undo_annotations()
    undo_comments()
    # Add other undo functions here

