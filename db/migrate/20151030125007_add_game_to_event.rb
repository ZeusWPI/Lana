class AddGameToEvent < ActiveRecord::Migration[5.0]
  def change
    add_reference :events, :game, index: true, foreign_key: true
  end
end
