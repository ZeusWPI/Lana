games = [
    {
        name: 'General',
        image_url: ''
    },

    {
        name: 'Geweren en Explosies 24',
        image_url: '/assets/geweren_en_explosies_24.jpg',
        notes: 'Wil jij ook veel schieten en dingen laten ontploffen?!!'
    }, {
        name: 'League of Legends',
        image_url: '/assets/lol.png',
        notes: '5,556 km legendes'
    }, {
        name: 'Counterstrike: Global Offensive',
        image_url: '/assets/csgo.png',
        notes: 'Een goedkope spin-off van Geweren en Explosies 22'
    },
    {
        name: 'Overwatch',
        image_url: '/assets/overwatch.png',
        notes: 'Een beetje een mashup van Lol en CSGO, best of both worlds'
    },
    {
        name: 'Hearthstone',
        image_url: '/assets/hearthstone.png',
        notes: 'T is lijk magic maar dan anders'
    }, {
        name: 'Trackmania',
        image_url: '/assets/tm.jpg',
        notes: 'Snel rijden met auto\'s'
    }, {
        name: 'Team Fortress 2',
        image_url: '/assets/tf.png',
        notes: 'Da ziet er een grote man met een geweer uit. T is ook in teams naar \'t schijnt.'
    }, {
        name: 'Rocket League',
        image_url: '/assets/rocket_league.png',
        notes: 'Autovoetbal? Doe da maar. Heh.'
    }, {
        name: 'Dota 2',
        image_url: '/assets/dota.jpg',
        notes: 'WE ZITTEN OP VENTRILLO EN SPELEN EEN BEETJE DOTA.'
    }, {
        name: 'Minecraft',
        image_url: '/assets/minecraft.png',
        notes: 'Lego maar dan computer. Is dat niet zo\'n boze meneer die dat geschreven heeft? Mein Kraft!'
    }, {
        name: 'Nidhogg',
        image_url: '/assets/nidhogg.png',
        notes: 'Flippen met zwaarden en Mats.'
    }, {
        name: 'Civilization V',
        image_url: 'http://screenshots.en.sftcdn.net/en/scrn/3346000/3346878/image-01-535x535.png',
        notes: 'Ah, da\'s wel tof. T is gelijk beschaving vier maar dan met meer pixels.'
    }, {
        name: 'Runescape',
        image_url: 'https://pbs.twimg.com/profile_images/685330164/RSEvents_Twitter_Logo.jpg',
        notes: 'Dit mag niet gespeeld worden op LAN-party\'s want dit draait niet eens lokaal. Ik ben eigenlijk ook tegen LoL.'
    }, {
        name: 'Age of Empires II',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Age_of_Empires_II_-_The_Conquerors_Coverart.png',
        notes: 'Toen ik acht jaar was, was dit echt de shit.'
    }, {
        name: 'Putt-Putt redt de zoo -- SPEED RUN',
        image_url: 'http://s.s-bol.com/imgbase0/imagebase/large/FC/1/4/6/4/1003004006304641.jpg',
        notes: 'Kan jij het sneller dan 43 seconden?'
    }
]

games.each do |game_hash|
  Game.create!(**game_hash)
end

# Create admin
admin = User.new(name: "admin")
admin.admin = true
admin.save
puts admin['token']

# games.each do |game_hash|
#   #Game.create!(**game_hash)
#   #
#   game = Game.find_or_initialize_by(name: game_hash['name'])
#   game.update(**game_hash)
#   game.save
# end