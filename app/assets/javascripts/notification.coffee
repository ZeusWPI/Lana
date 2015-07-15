dispatcher = new WebSocketRails 'localhost:3000/websocket'

Notification.requestPermission()

notify = () ->
    notification = new Notification 'A Simple Title',
        body: 'A Body'
    console.log 'success!'

dispatcher.bind('temp', notify)
