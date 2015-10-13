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

  def self.reducer obj
    @@reducer = obj
  end

  def reduce action
    type = action['type']
    payload = @@reducer.send(action['type'], action['payload'])
    action.merge!('payload' => payload)
    publish(render(action))
  end

  # 'controller' endpoint
  def perform params
    reduce(params['data'])
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

  def render obj
    ActionController::Base.render json: obj
  end

  # create an FSA action
  def create_action type, payload
    render({
      type: type,
      payload: payload
    })
  end
end
