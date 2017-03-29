class CreatePages < ActiveRecord::Migration[5.0]
  def change
    create_table :pages do |t|
      t.string :slug, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.string :image_url
      t.string :category
      t.string :tags
      t.references :admin, foreign_key: true

      t.timestamps
    end
  end
end
