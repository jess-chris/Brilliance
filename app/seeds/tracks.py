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

    test_track2 = Track(
        user_id = 2,
        title = 'Hey There Delilah',
        lyrics = '''
            Hey there, Delilah
            What's it like in New York City?
            I'm a thousand miles away
            But girl, tonight you look so pretty
            Yes you do
            Times Square can't shine as bright as you
            I swear it's true

            Hey there, Delilah
            Don't you worry about the distance
            I'm right there if you get lonely
            Give this song another listen
            Close your eyes
            Listen to my voice, it's my disguise
            I'm by your side

            Oh it's what you do to me
            Oh it's what you do to me
            Oh it's what you do to me
            Oh it's what you do to me
            What you do to me

            Hey there, Delilah
            I know times are getting hard
            But just believe me, girl
            Someday I'll pay the bills with this guitar
            We'll have it good
            We'll have the life we knew we would
            My word is good

            Hey there, Delilah
            I've got so much left to say
            If every simple song I wrote to you
            Would take your breath away
            I'd write it all
            Even more in love with me you'd fall
            We'd have it all

            Oh it's what you do to me
            Oh it's what you do to me
            Oh it's what you do to me
            Oh it's what you do to me

            A thousand miles seems pretty far
            But they've got planes and trains and cars
            I'd walk to you if I had no other way
            Our friends would all make fun of us
            And we'll just laugh along because we know
            That none of them have felt this way
            Delilah, I can promise you
            That by the time we get through
            The world will never ever be the same
            And you're to blame

            Hey there, Delilah
            You be good and don't you miss me
            Two more years and you'll be done with school
            And I'll be making history like I do
            You'll know it's all because of you
            We can do whatever we want to
            Hey there, Delilah, here's to you
            This one's for you

            Oh it's what you do to me
            Oh it's what you do to me
            Oh it's what you do to me
            Oh it's what you do to me
            What you do to me
        ''',
        artist = "The Plain White T's",
        album_image = 'https://www.udiscovermusic.com/wp-content/uploads/2020/04/Plain-White-Ts-All-That-We-Needed.jpg',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")
    )

    test_track3 = Track(
        user_id = 3,
        title = 'Semi-Charmed Life',
        lyrics = '''
                        Doo doo doo, doo doo-doo doo...

                I'm packed and I'm holding
                I'm smiling, she's living, she's golden
                She lives for me, says she lives for me
                Ovation, her own motivation
                She comes round and she goes down on me

                And I make her smile, like a drug for you
                Do ever what you wanna do, coming over you
                Keep on smiling, what we go through
                One stop to the rhythm that divides you

                And I speak to you like the chorus to the verse
                Chop another line like a coda with a curse
                Come on like a freak show takes the stage
                We give them the games we play, she said...

                I want something else to get me through this
                Semi-charmed kinda life, baby, baby
                I want something else, I'm not listening when you say good-bye

                Doo doo doo, doo doo-doo doo...

                The sky was gold, it was rose
                I was taking sips of it through my nose
                And I wish I could get back there, someplace back there
                Smiling in the pictures you would take
                Doing crystal meth, will lift you up until you break

                It won't stop, I won't come down
                I keep stock with a tick-tock rhythm, a bump for the drop
                And then I bumped up, I took the hit that I was given
                Then I bumped again, then I bumped again
                I said...

                How do I get back there to the place where I fell asleep inside you
                How do I get myself back to the place where you said...

                I want something else to get me through this
                Semi-charmed kinda life, baby, baby
                I want something else, I'm not listening when you say good-bye

                I believe in the sand beneath my toes
                The beach gives a feeling, an earthy feeling
                I believe in the faith that grows
                And the four right chords can make me cry
                When I'm with you I feel like I could die
                And that would be alright, alright

                And when the plane came in, she said she was crashing
                The velvet it rips in the city, we tripped on the urge to feel alive
                Now I'm struggling to survive,
                Those days you were wearing that velvet dress
                You're the priestess, I must confess
                Those little red panties they pass the test
                Slide up around the belly, face down on the mattress one

                And you hold me, and we're broken
                Still it's all that I wanna do, just a little now
                Feel myself, heading off the ground
                I'm scared, I'm not coming down
                No, no
                And I won't run for my life
                She's got her jaws now locked down in a smile
                But nothing is alright, alright

                And I want something else to get me through this life
                Baby, I want something else
                Not listening when you say
                Good-bye, good-bye, good-bye, good-bye

                Doo doo doo, doo doo-doo doo...

                The sky was gold, it was rose (Doo doo doo, doo doo-doo doo...)
                I was taking sips of it through my nose (Doo doo doo, doo doo-doo doo...)
                And I wish I could get back there (Doo doo doo, doo doo-doo doo...)
                Someplace back there, in the place we used to start (Doo doo doo, doo doo-doo doo...)

                I want something else (Doo doo doo, doo doo-doo doo...) 
                 ''',
        artist = 'Third Eye Blind',
        album_image = 'https://m.media-amazon.com/images/I/71ihm3HSaML._SS500_.jpg',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")

    )
    test_track4 = Track(
        user_id = 4,
        title = 'Tequila',
        lyrics = '''
            Tequila!
            Tequila!
            Tequila!
                 ''',
        artist = 'The Champs',
        album_image = '',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")

    )
    test_track5 = Track(
        user_id = 5,
        title = 'All Star',
        lyrics = '''
        Somebody once told me the world is gonna roll me
                I ain't the sharpest tool in the shed
                She was looking kind of dumb with her finger and her thumb
                In the shape of an "L" on her forehead
                Well the years start coming and they don't stop coming
                Fed to the rules and I hit the ground running
                Didn't make sense not to live for fun
                Your brain gets smart but your head gets dumb
                So much to do, so much to see
                So what's wrong with taking the back streets?
                You'll never know if you don't go
                You'll never shine if you don't glow
                Hey now, you're an all-star, get your game on, go play
                Hey now, you're a rock star, get the show on, get paid
                And all that glitters is gold
                Only shooting stars break the mold
                It's a cool place and they say it gets colder
                You're bundled up now, wait 'til you get older
                But the meteor men beg to differ
                Judging by the hole in the satellite picture
                The ice we skate is getting pretty thin
                The water's getting warm so you might as well swim
                My world's on fire, how about yours?
                That's the way I like it and I'll never get bored
                Hey now, you're an all-star, get your game on, go play
                Hey now, you're a rock star, get the show on, get paid
                All that glitters is gold
                Only shooting stars break the mold
                Hey now, you're an all-star, get your game on, go play
                Hey now, you're a rock star, get the show, on get paid
                And all that glitters is gold
                Only shooting stars
                Somebody once asked could I spare some change for gas?
                I need to get myself away from this place
                I said, "Yup" what a concept
                I could use a little fuel myself
                And we could all use a little change
                Well, the years start coming and they don't stop coming
                Fed to the rules and I hit the ground running
                Didn't make sense not to live for fun
                Your brain gets smart but your head gets dumb
                So much to do, so much to see
                So what's wrong with taking the back streets?
                You'll never know if you don't go (go!)
                You'll never shine if you don't glow
                Hey now, you're an all-star, get your game on, go play
                Hey now, you're a rock star, get the show on, get paid
                And all that glitters is gold
                Only shooting stars break the mold
                And all that glitters is gold
                Only shooting stars break the mold
                 ''',
        artist = 'Smash Mouth',
        album_image = '',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")

    )
    test_track6 = Track(
        user_id = 1,
        title = 'September',
        lyrics = '''
            Do you remember
            The 21st night of September?
            Love was changin' the minds of pretenders
            While chasin' the clouds away
            Our hearts were ringin'
            In the key that our souls were singin'
            As we danced in the night, remember
            How the stars stole the night away, oh, yeah
            Hey, hey, hey
            Ba-dee-ya, say, do you remember?
            Ba-dee-ya, dancin' in September
            Ba-dee-ya, never was a cloudy day
            Ba-du-da, ba-du-da, ba-du-da, ba-du
            Ba-du-da, ba-du, ba-du-da, ba-du
            Ba-du-da, ba-du, ba-du-da
            My thoughts are with you
            Holdin' hands with your heart to see you
            Only blue talk and love, remember
            How we knew love was here to stay
            Now December
            Found the love that we shared in September
            Only blue talk and love, remember
            The true love we share today
            Hey, hey, hey
            Ba-dee-ya, say, do you remember?
            Ba-dee-ya, dancin' in September
            Ba-dee-ya, never was a cloudy day
            There was a
            Ba-dee-ya (dee-ya, dee-ya), say, do you remember?
            Ba-dee-ya (dee-ya, dee-ya), dancin' in September
            Ba-dee-ya (dee-ya, dee-ya), golden dreams were shiny days
            The bell was ringin', oh, oh
            Our souls were singin'
            Do you remember never a cloudy day? Yow
            There was a
            Ba-dee-ya (dee-ya, dee-ya), say, do you remember?
            Ba-dee-ya (dee-ya, dee-ya), dancin' in September
            Ba-dee-ya (dee-ya, dee-ya), never was a cloudy day
            And we'll say
            Ba-dee-ya (dee-ya, dee-ya), say, do you remember?
            Ba-dee-ya (dee-ya, dee-ya), dancin' in September
            Ba-dee-ya (dee ya, dee-ya), golden dreams were shiny days
            Ba-dee-ya, dee-ya, dee-ya
            Ba-dee-ya, dee-ya, dee-ya
            Ba-dee-ya, dee-ya, dee-ya, dee-ya!
            Ba-dee-ya, dee-ya, dee-ya
            Ba-dee-ya, dee-ya, dee-ya
            Ba-dee-ya, dee-ya, dee-ya, dee-ya!
                 ''',
        artist = 'Earth, Wind & Fire',
        album_image = '',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")

    )
    test_track7 = Track(
        user_id = 3,
        title = 'Crank That',
        lyrics = '''
            Soulja boy I tell 'em
            Ayy, I got a new dance for y'all called the Soulja Boy
            You just gotta punch then crank back three times from left to right
            Soulja Boy off in this hoe
            Watch me crank it, watch me roll
            Watch me crank that Soulja Boy
            Then Superman that hoe
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch
            Soulja Boy off in this hoe
            Watch me crank it, watch me roll
            Watch me crank that Soulja Boy
            Then Superman that hoe
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch
            Soulja boy up in this hoe
            Watch me lean and watch me rock
            Superman that hoe
            Then watch me crank that Robocop
            Super fresh, now watch me jock
            Jocking on them haters man
            When I do that Soulja Boy
            I lean to the left and crank that thang, now
            I'm jocking on your bitch ass
            And if we get the fighting
            Then I'm cocking on your bitch ass
            You catch me at your local party
            Yes I crank it everyday
            Haters getting mad 'cause
            I got me some bathing apes
            Soulja Boy off in this hoe
            Watch me crank it, watch me roll
            Watch me crank that Soulja Boy
            Then Superman that hoe
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch
            Soulja Boy off in this hoe
            Watch me crank it, watch me roll
            Watch me crank that Soulja Boy
            Then Superman that hoe
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch
            I'm bouncin' on my toes
            Watch me supersoak that hoe
            I'm gonna pass it to Arab
            Then he gon' crank it up fo' sho'
            Haters wanna be me
            Soulja boy, I'm the man
            They be lookin' at my neck
            Sayin' it's the rubber band man (Man)
            Watch me do it (Watch me do it)
            Dance (Dance)
            Let get to it (Let get to it)
            Nope, you can't do it like me
            Hoe, so don't do it like me
            Folk, I see you tryna do it like me
            Man that shit was ugly
            Soulja Boy off in this hoe
            Watch me crank it, watch me roll
            Watch me crank that Soulja Boy
            Then Superman that hoe
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch
            Soulja Boy off in this hoe
            Watch me crank it, watch me roll
            Watch me crank that Soulja Boy
            Then Superman that hoe
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch
            I'm too fresh, off in that hoe
            Watch me crank it, watch me roll
            Watch me crank that Roosevelt
            And super soak that Hoe
            Super soak that hoe
            Super soak that hoe
            Super soak that hoe
            Super soak that hoe
            I'm too fresh, now watch me do it
            Watch me shuffle, watch me
            Watch me crank that Soulja Boy
            Now Superman
            Superman, do it
            Superman, do it
            Soulja Boy off in this hoe
            Watch me crank it, watch me roll
            Watch me crank that Soulja Boy
            Then Superman that hoe
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch
            Soulja Boy off in this hoe
            Watch me crank it, watch me roll
            Watch me crank that Soulja Boy
            Then Superman that hoe
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch me (Crank that Soulja Boy)
            Now watch
                 ''',
        artist = 'Soulja Boy',
        album_image = 'https://img.discogs.com/WHcssBxzecK10nOKmsOq5U_Jp2Q=/fit-in/300x300/filters:strip_icc():format(webp):mode_rgb():quality(40)/discogs-images/R-1263083-1494598925-8726.jpeg.jpg',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")

    )
    test_track8 = Track(
        user_id = 5,
        title = "I'm on a Boat",
        lyrics = '''
            Aw shit, get your towels ready it's about to go down (shorty, yeah)
            Everybody in the place hit the fucking deck (shorty, yeah)
            But stay on your motherfucking toes
            We running this, let's go
            I'm on a boat (I'm on a boat) I'm on a boat (I'm on a boat)
            Everybody look at me
            'Cause I'm sailing on a boat (sailing on a boat)
            I'm on a boat (I'm on a boat) I'm on a boat
            Take a good hard look at the motherfucking boat (boat, yeah)
            I'm on a boat motherfucker take a look at me
            Straight floatin' on a boat on the deep blue sea
            Busting five knots, wind whipping out my coat
            You can't stop me motherfucker cause I'm on a boat
            Take a picture, trick (trick) I'm on a boat, bitch (bitch)
            We drinking Santana champ, 'cause it's so crisp (crisp)
            I got my swim trunks and my flippie-floppies
            I'm flipping burgers, you at Kinko's, straight flipping copies
            I'm riding on a dolphin, doing flips and shit
            The dolphin's splashing, getting everybody all wet
            But this ain't Sea World, this is real as it gets
            I'm on a boat, motherfucker, don't you ever forget
            I'm on a boat and, it's going fast and
            I got a nautical themed Pashmina Afghan
            I'm the king of the world on a boat like Leo
            If you're on the shore, then you're sure not me-oh
            Get the fuck up, this boat is real!
            Fuck land, I'm on a boat, motherfucker (motherfucker)
            Fuck trees, I climb buoys, motherfucker (motherfucker)
            I'm on the deck with my boys, motherfucker (yeah)
            This boat engine make noise, motherfucker
            Hey ma, if you could see me now (see me now)
            Arms spread wide on the starboard bow (starboard bow)
            Gonna fly this boat to the moon somehow (moon somehow)
            Like Kevin Garnett, anything is possible
            Yeah, never thought I'd be on a boat (let's go)
            It's a big blue watery road (yeah)
            Poseidon look at me, oh (all hands on deck)
            Never thought I'd see the day
            When a big boat coming my way
            Believe me when I say, I fucked a mermaid
            I'm on a boat, I'm on a boat
            Everybody look at me 'cause I'm sailing on a boat (whoa)
            I'm on a boat, I'm on a boat
            Take a good hard look at the motherfuckin' boat (shorty, shorty, yeah)
                 ''',
        artist = 'The Lonely Island',
        album_image = '',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")

    )
    test_track9 = Track(
        user_id = 2,
        title = 'Hey Ya!',
        lyrics = '''
            One, two, three, uh
            My baby don't mess around
            Because she loves me so
            And this I know fo sho (uh)
            But does she really wanna
            But can't stand to see me walk out the door? (Ah)
            Don't try to fight the feeling
            Because the thought alone is killin' me right now (uh)
            Thank God for Mom and Dad
            For sticking two together
            'Cause we don't know how (c'mon)
            Hey ya! Hey ya!
            Hey ya! Hey ya!
            Hey ya! Hey ya!
            Hey ya! Hey ya!
            You think you've got it
            Oh, you think you've got it
            But got it just don't get it 'til there's nothin' at all
            We get together
            Oh, we get together
            But separate's always better when there's feelings involved
            If what they say is
            "Nothing is forever"
            Then what makes, then what makes
            Then what makes, then what makes (what makes, what makes)
            Love the exception?
            So why, oh, why, oh
            Why, oh, why, oh, why, oh
            Are we so in denial when we know we're not happy here?
            (Y'all don't want to hear me, you just want to dance)
            Hey ya! (Uh oh) Hey ya! (Uh oh)
            Don't want to meet your daddy
            Hey ya! (Uh oh)
            Just want you in my Caddy (Uh oh)
            Hey ya! (Uh oh)
            Don't want to meet your mama
            Hey ya! (Uh oh)
            Just want to make you cum-a (Uh oh)
            Hey ya! (Uh oh)
            I'm, I'm, I'm just being honest (Uh oh)
            I'm just being honest
            Hey! Alright now
            Alright now, fellas (Yeah?)
            Now, what cooler than being cool? (Ice cold!)
            I can't hear you
            I say what's, what's cooler than being cool? (Ice cold!)
            Alright, alright, alright, alright, alright
            Alright, alright, alright, alright, alright
            Alright, alright, alright, alright
            Okay, now ladies (Yeah?)
            Now, we gon' break this thang down in just a few seconds
            Now, don't have me break this thang down for nothin'
            Now, I want to see y'all on y'all baddest behavior
            Lend me some sugar, I am your neighbor
            Ah! Here we go
            Shake it, shake, shake it, shake it, shake, shake it (Uh oh)
            Shake it, shake, shake it, shake it, shake it (Uh oh)
            Shake it like a Polaroid picture, hey ya!
            Shake it, shake, shake it, shake it, shake, shake it
            Shake it, shake it, shake it, sugar
            Shake it like a Polaroid picture
            Now, all Beyonce's, and Lucy Liu's
            And baby dolls
            Get on the floor
            Get on the floor, you know what to do
            You know what to do
            You know what to do
            Hey ya! (Uh oh) Hey ya! (Uh oh)
            Hey ya! (Uh oh) Hey ya! (Uh oh)
            Hey ya! (Uh oh) Hey ya! (Uh oh)
            Hey ya! (Uh oh) Hey ya! (Uh oh)
                 ''',
        artist = 'OutKast',
        album_image = 'https://i.discogs.com/Txt_sMh4sbtWv7NdrzGKgzCNmlZUOYNpMPzDZrB-9io/rs:fit/g:sm/q:90/h:600/w:589/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNTE4/OS0xMjQ2MjgyODUx/LmpwZWc.jpeg',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")

    )
    test_track10 = Track(
        user_id = 2,
        title = 'All Too Well',
        lyrics = '''
            I walked through the door with you
            The air was cold
            But something about it felt like home somehow
            And I, left my scarf there at your sister's house
            And you've still got it in your drawer even now
            Oh, your sweet disposition
            And my wide-eyed gaze
            We're singing in the car, getting lost upstate
            Autumn leaves falling down like pieces into place
            And I can picture it after all these days
            And I know it's long gone and that magic's not here no more
            And I might be okay but I'm not fine at all
            'Cause there we are again on that little town street
            You almost ran the red 'cause you were lookin' over at me
            Wind in my hair, I was there
            I remember it all too well
            Photo album on the counter
            Your cheeks were turning red
            You used to be a little kid with glasses in a twin-sized bed
            And your mother's telling stories 'bout you on the tee-ball team
            You told me 'bout your past thinking your future was me
            And I know it's long gone and there was nothing else I could do
            And I forget about you long enough to forget why I needed to
            'Cause there we are again in the middle of the night
            We're dancing 'round the kitchen in the refrigerator light
            Down the stairs, I was there
            I remember it all too well, yeah
            And maybe we got lost in translation
            Maybe I asked for too much
            But maybe this thing was a masterpiece 'til you tore it all up
            Running scared, I was there
            I remember it all too well
            And you call me up again just to break me like a promise
            So casually cruel in the name of being honest
            I'm a crumpled up piece of paper lying here
            'Cause I remember it all, all, all
            Too well
            Time won't fly, it's like I'm paralyzed by it
            I'd like to be my old self again
            But I'm still trying to find it
            After plaid shirt days and nights when you made me your own
            Now you mail back my things and I walk home alone
            But you keep my old scarf from that very first week
            'Cause it reminds you of innocence
            And it smells like me
            You can't get rid of it
            'Cause you remember it all too well, yeah
            'Cause there we are again when I loved you so
            Back before you lost the one real thing you've ever known
            It was rare, I was there, I remember it all too well
            Wind in my hair, you were there, you remember it all
            Down the stairs, you were there, you remember it all
            It was rare, I was there, I remember it all too well
            ''',
        artist = 'Taylor Swift',
        album_image = 'https://media.pitchfork.com/photos/618c3ab295b32339a9955837/1:1/w_600/Taylor-Swift-Red-Taylors-Version.jpeg',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")

    )
    test_track11 = Track(
        user_id = 4,
        title = 'Stressed Out',
        lyrics = '''
            I wish I found some better sounds
            No one's ever heard
            I wish I had a better voice
            That sang some better words
            I wish I found some chords
            In an order that is new
            I wish I didn't have to rhyme
            Every time I sang
            I was told when I get older
            All my fears would shrink
            But now I'm insecure
            And I care what people think
            My name's Blurryface and I care what you think
            My name's Blurryface and I care what you think
            Wish we could turn back time
            To the good old days
            When our momma sang us to sleep
            But now we're stressed out
            Wish we could turn back time
            To the good old days
            When our momma sang us to sleep
            But now we're stressed out
            We're stressed out
            Sometimes a certain smell will
            Take me back to when I was young
            How come I'm never able to identify
            Where it's coming from?
            I'd make a candle out of it
            If I ever found it
            Try to sell it, never sell out of it
            I'd probably only sell one
            It'd be to my brother, cause we have the same nose
            Same clothes, home grown
            The stone's throw from a creek we used to roam
            But it would remind us of when
            Nothing really mattered
            Out of student loans and tree house homes
            We all would take the latter
            My name's Blurryface and I care what you think
            My name's Blurryface and I care what you think
            Wish we could turn back time
            To the good old days
            When our momma sang us to sleep
            But now we're stressed out
            Wish we could turn back time
            To the good old days
            When our momma sang us to sleep
            But now we're stressed out
            Used to play pretend
            Give each other different names
            We would build a rocket ship and then we'd fly it far away
            Used to dream of outer space
            But now they're laughing at our face singing
            "Wake up, you need to make money", yeah
            Used to play pretend
            Give each other different names
            We would build a rocket ship
            And then we'd fly it far away
            Used to dream of outer space
            But now they're laughing at our face singing
            "Wake up, you need to make money", yeah
            Wish we could turn back time
            To the good old days
            When our momma sang us to sleep
            But now we're stressed out
            Wish we could turn back time
            To the good old days
            When our momma sang us to sleep
            But now we're stressed out
            We used to play pretend, used to play pretend, money
            We used to play pretend, wake up you need the money
            Used to play pretend, used to play pretend, money
            We used to play pretend, wake up you need the money
            Used to play pretend
            Give each other different names
            We would build a rocket ship
            And then we'd fly it far away
            Used to dream of outer space
            But now they're laughing at our face saying
            "Wake up, you need to make money", yeah
                 ''',
        artist = 'Twenty One Pilots',
        album_image = 'https://i.discogs.com/yxX98Rjw5_KL2ykk4wXLOn-A-zPbq4Ri12XK_i_80ws/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyMjEz/NDYtMTQ1MjMyNDU5/MS00MjY1LmpwZWc.jpeg',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")

    )
    test_track12 = Track(
        user_id = 1,
        title = 'Temperature',
        lyrics = '''
            The gal dem Schillaci, Sean da Paul
            So me give it to, so me give to, so me give it to, to all girls
            Five million and forty naughty shorty
            Baby girl, all my girls, all my girls, Sean da Paul say
            Well woman the way the time cold, I wanna be keepin' you warm
            I got the right temperature fi shelter you from the storm
            Oh Lord, gyal I got the right tactics to turn you on, and girl I
            Wanna be the Papa, you can be the Mom, oh oh!
            Make I see the gal them bruk out pon the floor
            From you don't want no worthless performer
            From you don't want no man wey can't turn you on gyal
            Make I see your hand them up on ya
            Can't tan pon it long
            Nah eat no yam, no steam fish, nor no green banana
            But down in Jamaica we give it to you hot like a sauna
            Well woman the way the time cold, I wanna be keepin' you warm
            I got the right temperature fi shelter you from the storm
            Oh Lord, gyal I got the right tactics to turn you on, and girl I
            Wanna be the Papa, you can be the Mom, oh oh!
            Bumper exposed and gal you got your chest out
            But you no wasters, cah gal you impress out
            And if you des out a me, you fi test out
            Cah I got the remedy to make you de-stress out
            Me haffi flaunt it becah me God Bless out
            And girl if you want it you haffi confess out
            A no lie, weh we need set speed, haffi test the mattress out
            Well woman the way the time cold I wanna be keepin' you warm
            I got the right temperature fi shelter you from the storm
            Oh Lord, gyal I got the right tactics to turn you on, and girl I
            Wanna be the Papa, you can be the Mom, oh oh!
            Gyal don't say me crazy now
            This strange love it a no Bridgette and Flava show
            Time fi a make baby now so stop gwaan like you a act shady yo
            Woman don't play me now, 'cause a no Fred Sanford nor Grady yo
            My lovin' is the way to go, my lovin' is the way to go
            Well woman the way the time cold I wanna be keepin' you warm
            I got the right temperature fi shelter you from the storm
            Oh Lord, gyal I got the right tactics to turn you on, and girl I
            Wanna be the Papa, you can be the Mom, oh oh!
            When you roll with a player like me
            With a brudda like me gyal there is no other
            No need to talk it right here
            Just park it right here, keep it undercover
            Cah me love how you fit inna you blouse and you fat inna you jeans
            And mi waan discover
            Everything 'bout you baby girl, can you hear when me utter?
            Well woman the way the time cold I wanna be keepin' you warm
            I got the right temperature fi shelter you from the storm
            Oh Lord, gyal I got the right tactics to turn you on, and girl I
            Wanna be the Papa, you can be the Mom, oh oh!
            Make I see the gal them bruk out pon the floor
            From you don't want no worthless performer
            From you don't want no man wey can't turn you on gyal
            Mek I see your hand them up on ya
            Can't tan pon it long
            Nah eat no yam, no steam fish, nor no green banana
            But down in Jamaica we give it to you hot like a sauna
            Well woman the way the time cold I wanna be keepin' you warm
            I got the right temperature fi shelter you from the storm
            Oh Lord, gyal I got the right tactics to turn you on, and girl I
            Wanna be the Papa, you can be the Mom, oh oh!
            Oh-oh!
            Oh-oh!
            Oh-oh!
                 ''',
        artist = 'Sean Paul',
        album_image = '',
        created_at = today.strftime("%B %d, %Y"),
        updated_at = today.strftime("%B %d, %Y")

    )

    db.session.add(test_track)
    db.session.add(test_track2)
    db.session.add(test_track3)
    db.session.add(test_track4)
    db.session.add(test_track5)
    db.session.add(test_track6)
    db.session.add(test_track7)
    db.session.add(test_track8)
    db.session.add(test_track9)
    db.session.add(test_track10)
    db.session.add(test_track11)
    db.session.add(test_track12)

    db.session.commit()

def undo_tracks():
    db.session.execute('TRUNCATE tracks RESTART IDENTITY CASCADE;')
    db.session.commit()
