class AddGameToEvent < ActiveRecord::Migration
  def change
    add_reference :events, :game, index: true, foreign_key: true
  end
end
