class ActionChannel < ApplicationCable::Channel

  def self.channel chan
    chan = chan.to_s
    define_method :subscribe  do
      stream_from chan
    end
    define_method :publish do |data|
      ActionCable.server.broadcast(chan, data)
    end
  end

  def subscribed
    snapshot.try {|s| transmit(s)}
    subscribe
  end

  # stub methods
  def subscribe
  end

  def publish action
  end

  def snapshot
  end

  # create an FSA action
  def action type, payload
    ActionController::Base.render json: {
      type: type,
      payload: payload
    }
  end
end
