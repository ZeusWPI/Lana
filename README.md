# :dog2: Lana [![Analytics](https://ga-beacon.appspot.com/UA-25444917-6/ZeusWPI/Lana/README.md?pixel)](https://github.com/igrigorik/ga-beacon) [![Code Climate](https://codeclimate.com/github/ZeusWPI/Lana/badges/gpa.svg)](https://codeclimate.com/github/ZeusWPI/Lana) [![Coverage Status](https://coveralls.io/repos/ZeusWPI/Lana/badge.svg?branch=master&service=github)](https://coveralls.io/github/ZeusWPI/Lana?branch=master) [![Build Status](https://travis-ci.org/ZeusWPI/Lana.png?branch=master)](https://travis-ci.org/ZeusWPI/Lana)

An application to make the life of a LAN-partygoer easier!

Don't forget to run `rake emoji`.

## Install

    bundle install
    packer -S npm               # install npm
    npm install                 # in root directory of the repo
    bundle exec rake db:setup   # setup the database
    bundle exec rake db:seed    # seed the database
    

## Run

    (run these in parallel)
    bundle exec rails s     # the https server
    redis-server            # redis needs to be running for action-cable
    
    
    # Console editing
    bundle exex rails c     # opens the rails console
    
    # Queries & updates (in console)
    var = User.find_by member:"value"
    var.member = "other value"
    var.save
    
    # Creating new object (in console)
    var = Game.new
    var.save
    
    # reset, setup and seed the database when it's already populated
    bundle exec rake db:reset


    
    

## Programma structuur

### Data flow

Het programmma is gebouwt rond redux. Elke client kan acties sturen (gedefinieerd in [actions](app/assets/javascripts/actions), gepubliceert door [publishedAction](app/assets/javascripts/actions/utils)) welke naar de server gestuurd worden,
die ze reducet en terug stuurt naar alle subscribers (inclusief jezelf) waar ze dan gehandled worden.

Elke actie volgt de naming conventie: `reducer#method` (bijv. `event#create`). Op basis hiervan word er [geroute](app/reducers/reducer_multiplexer.rb) naar de correcte methodes.