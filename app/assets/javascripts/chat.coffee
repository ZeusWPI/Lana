append_message_div = (content) ->
  $( ".page-header" ).after $('<div/>').text(content)

window.dispatcher.bind 'chat.incoming_message', (content) ->
    append_message_div content.text

@send_message = (event) ->
  if (event.which == 13 || event.keyCode == 13)
    window.dispatcher.trigger 'chat.new_message', { text: $( "#send_message" ).val() }
    # Clear input field
    $( "#send_message" ).val ''
