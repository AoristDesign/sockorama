class CreateInventories < ActiveRecord::Migration[5.0]
  def change
    create_table :inventories do |t|
      t.integer :stock, default: 0
      t.references :size, foreign_key: true
      t.references :product, foreign_key: true

      t.timestamps
    end
  end
end
