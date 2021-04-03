class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.integer :xcoordinate
      t.integer :ycoordinate
      t.boolean :found

      t.timestamps
    end
  end
end
