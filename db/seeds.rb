## Games
titles = ['Dota', 'League Of Legends', 'Trackmania', 'Nidhogg']

titles.each do |t|
  Game.create title: t
end

## Competitions
titles.each do |t|
  Competition.create name: t + ' comp', game: Game.find_by(title: t), starttime: Time.now + 5.minutes
end

## Notifications
contents = [ 'Pizza\'s kunnen besteld worden!', 'Het Dota toernooi begint zodra', 'Kijk daar, een roze olifant!']
contents.each do |c|
  Notification.create content: c
end

