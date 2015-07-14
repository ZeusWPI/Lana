var dispatcher = new WebSocketRails('localhost:3000/websocket');

Notification.requestPermission();

function notify(argument) {
    var notification=new Notification('A Simple Title',{
        body:'A Body'
    });
    console.log("TETTEN");
}

dispatcher.bind('temp', notify);
