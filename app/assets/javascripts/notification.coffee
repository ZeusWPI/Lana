dispatcher = new WebSocketRails location.host + '/websocket'

Notification.requestPermission()

# Subscribe to a general channel
channel = dispatcher.subscribe 'all'

generate_div = (content) ->
    $('<div/>')
        .addClass('notification well')
        .text(content)

channel.bind 'message', (data) ->
    noti = new Notification 'General',
        body: data
        icon: "https://pbs.twimg.com/profile_images/241260158/zeuswpi_400x400.jpg"
    # Not sure why this doesn't work??
    setTimeout (() -> noti.close()), 10000

    $(".notifications").prepend generate_div(data)
    $(".notification").last().remove()
