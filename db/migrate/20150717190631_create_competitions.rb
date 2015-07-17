class CreateCompetitions < ActiveRecord::Migration
  def change
    create_table :competitions do |t|
      t.references :game, index: true
      t.string :name
      t.timestamp :starttime

      t.timestamps null: false
    end
    add_foreign_key :competitions, :games
  end
end
