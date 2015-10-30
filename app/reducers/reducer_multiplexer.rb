# <3 Stijn
class ReducerMultiplexer < Reducer
  def initialize connection
    super(connection)
    @reducerMap = {
      event: EventsReducer.new(connection),
      group: GroupsReducer.new(connection),
      user: UsersReducer.new(connection)
    }
  end

  def reduce method, params
    reducer, method = method.split('#')
    @reducerMap[reducer.to_sym].reduce(method, params)
  end

  def send_snapshot
    @reducerMap.values.each(&:send_snapshot)
  end
end
