# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
names = ['Don', 'Iepoev', 'Silox', 'Julien']

names.each do |n|
  User.create name: n
end

titles = ['Dota', 'League Of Legends', 'Trackmania', 'Nidhogg']

titles.each do |t|
  Game.create title: t
end

contents = [ 'Pizza\'s kunnen besteld worden!', 'Het Dota toernooi begint zodra', 'Kijk daar!, een roze olifant!']
contents.each do |c|
  Notification.create content: c
end
