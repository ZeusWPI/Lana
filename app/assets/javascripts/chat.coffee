dispatcher = new WebSocketRails location.host + '/websocket'

dispatcher.on_open = (data) ->
  dispatcher.trigger 'chat.connect', "local"

append_message_div = (content) ->
  $( ".page-header" ).after $('<div/>').text(content)

dispatcher.bind 'chat.incoming_message', (content) ->
    append_message_div content.text

send_message = (event) ->
  if (event.which == 13 || event.keyCode == 13) && $(this).val() != ''
    dispatcher.trigger 'chat.new_message', { text: $(this).val() }
    # Clear input field
    $(this).val ''

$ ->
  $( "#send_message" ).keypress send_message
