dispatcher = new WebSocketRails location.host + '/websocket'

console.log "SUP GUISE"

dispatcher.on_open = (data) ->
  console.log "Connection has been established: ", data
  dispatcher.trigger 'chat.connect', "local"

dispatcher.bind 'chat.new_connection', (event) ->
    alert "stuff!"
