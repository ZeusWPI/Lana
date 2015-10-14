module ActionChannel
  module ChannelHelpers
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

      attr_reader :reducer_class
      def reducer &proc
        @reducer_class = Class.new Reducer, &proc
      end
    end
  end
end
