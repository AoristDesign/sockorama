class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :model, null: false
      t.string :sku
      t.text :description
      t.string :color
      t.string :style
      t.string :genderism, default: 'unisex'
      t.string :material_description
      t.string :image_url, null: false
      t.integer :price_in_cents, null: false
      t.boolean :featured, default: false
      t.boolean :promo, default: false
      t.boolean :on_sale, default: false
      t.integer :before_sale_price_in_cents

      t.timestamps
    end
  end
end
