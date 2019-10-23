class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.references :category, null: false, index: true, foreign_key: true
      t.string     :title,    null: false, index: true, unique: true, limit: 60
      t.text       :content
      t.boolean    :published, default: false
      t.date       :published_date

      t.timestamps
    end
  end
end
