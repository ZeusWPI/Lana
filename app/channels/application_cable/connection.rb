module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      # For now, we are bert.
      #self.current_user = User.find_or_create_by name: 'bert'
    end
  end
end
