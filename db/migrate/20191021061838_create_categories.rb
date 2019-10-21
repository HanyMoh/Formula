class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :name, null: false, index: true, unique: true, limit: 25

      t.timestamps
    end
  end
end
