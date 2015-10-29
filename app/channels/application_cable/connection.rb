module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      cookies['token'].try do |token|
        self.current_user = User.find_by token: token
      end
    end
  end
end
