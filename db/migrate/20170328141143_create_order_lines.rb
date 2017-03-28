class CreateOrderLines < ActiveRecord::Migration[5.0]
  def change
    create_table :order_lines do |t|
      t.references :orders, foreign_key: true
      t.references :products, foreign_key: true
      t.integer :quantity, default: 1
      t.integer :price_in_cents_at_order

      t.timestamps
    end
  end
end
