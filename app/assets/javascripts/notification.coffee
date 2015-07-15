dispatcher = new WebSocketRails 'localhost:3000/websocket'

Notification.requestPermission()

# Subscribe to a general channel
channel = dispatcher.subscribe 'all'

generate_div = (content) ->
    $('<div/>')
        .addClass('panel panel-default')
        .append('<div/>')
            .addClass('panel-body')
            .text(content)

channel.bind 'message', (data) ->
    noti = new Notification 'General',
        body: data
        icon: "https://pbs.twimg.com/profile_images/241260158/zeuswpi_400x400.jpg"
    # Not sure why this doesn't work??
    setTimeout (() -> noti.close()), 2000

    $(".notification-center").prepend generate_div(data)
