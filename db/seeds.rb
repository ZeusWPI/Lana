games = [
  {
    name: 'Geweren en Explosies 24',
    image_url: 'http://fotodes.ru/upload/img1342258123.jpg',
    notes: 'Wil jij ook veel schieten en dingen laten ontploffen?!!'
  }, {
    name: 'League of Legends',
    image_url: '',
    notes: '5,556 km legendes'
  }, {
    name: 'Counterstrike: Global Offensive',
    image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
    notes: 'Een goedkope spin-off van Geweren en Explosies 22'
  }, {
    name: 'Hearthstone',
    image_url: 'http://t01.deviantart.net/qFmq0BiZfvL5V1Db6iy1CwFBlMI=/300x200/filters:fixed_height(100,100):origin()/pre06/2882/th/pre/f/2013/258/a/6/hearthstone_logo_by_drerrror-d6meodw.png',
    notes: 'T is lijk magic maar dan anders'
  }, {
    name: 'Trackmania',
    image_url: 'http://www.logirama.net/img/images/D1Q56293.gif',
    notes: 'Snel rijden met auto\'s'
  }, {
    name: 'Team Fortress 2',
    image_url: 'http://www.stuffcoins.com/images/items/3043.png',
    notes: 'Da ziet er een grote man met een geweer uit. T is ook in teams naar \'t schijnt.'
  }, {
    name: 'Rocket League',
    image_url: 'http://static1.squarespace.com/static/55944a48e4b001e8af79bac6/55b14573e4b029684e326368/55db8185e4b0d4ac02041a7e/1440448911187/rl_shield_logo.png?format=500w',
    notes: 'Autovoetbal? Doe da maar. Heh.'
  }, {
    name: 'Dota 2',
    image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2',
    notes: 'WE ZITTEN OP VENTRILLO EN SPELEN EEN BEETJE DOTA.'
  }, {
    name: 'Minecraft',
    image_url: 'http://www.mrslawsonskiddos.com/wp-content/uploads/2015/07/app_mce.png ',
    notes: 'Lego maar dan computer. Is dat niet zo\'n boze meneer die dat geschreven heeft? Mein Kraft!'
  }, {
    name: 'Nidhogg',
    image_url: 'http://orig04.deviantart.net/9cfc/f/2014/018/d/8/nidhogg_by_pooterman-d72o9gg.png',
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
  Game.create! **game_hash
end
