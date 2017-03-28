class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :model
      t.string :color
      t.string :style
      t.string :size
      t.integer :quantity
      t.string :image
      t.text :description
      t.decimal :price_in_cents
      t.string :materials

      t.timestamps
    end
  end
end
