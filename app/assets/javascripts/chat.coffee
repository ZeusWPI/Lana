$(".chat.index").ready ->
    append_message_div = (content) ->
      $( ".chatbox" ).append $('<div/>')
          .addClass( "message" )
              .append $('<span/>').text("Blaa:").addClass( "username" )
              .append $('<span/>').text(content)
              .animate({ scrollTop: $(document).height() }, "slow");

    window.dispatcher.bind 'chat.incoming_message', (content) ->
        append_message_div content.text
        emojify.run()

    window.send_message = (event) ->
      if (event.which == 13 || event.keyCode == 13)
        window.dispatcher.trigger 'chat.new_message', { text: $( "#send_message" ).val() }
        # Clear input field
        $( "#send_message" ).val ''



