# :dog2: Lana [![Analytics](https://ga-beacon.appspot.com/UA-25444917-6/ZeusWPI/Lana/README.md?pixel)](https://github.com/igrigorik/ga-beacon) [![Code Climate](https://codeclimate.com/github/ZeusWPI/Lana/badges/gpa.svg)](https://codeclimate.com/github/ZeusWPI/Lana) [![Coverage Status](https://coveralls.io/repos/ZeusWPI/Lana/badge.svg?branch=master&service=github)](https://coveralls.io/github/ZeusWPI/Lana?branch=master) [![Build Status](https://travis-ci.org/ZeusWPI/Lana.png?branch=master)](https://travis-ci.org/ZeusWPI/Lana)

An application to make the life of a LAN-partygoer easier!

Don't forget to run `rake emoji`.

## Install

    bundle install
    packer -S npm               # install npm
    npm install                 # in root directory of the repo
    bundle exec rake db:setup   # setup the database

## Run

(run these in parallel)

    bundle exec rails s    # the https server
    redis-server           # redis needs to be running for action-cable

