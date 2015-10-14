module ActionChannel
  module Helpers
    def self.included base
      base.extend ClassMethods
    end

    module ClassMethods
      # macro for using a single, static pubsub channel
      def channel chan
        chan = chan.to_s
        define_method :subscribe  do
          stream_from chan
        end
        define_method :publish do |data|
          ActionCable.server.broadcast(chan, data)
        end
      end
    end
  end
end
