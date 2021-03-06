class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :status, null: false
      t.string :notes
      t.string :coupon
      t.references :users, foreign_key: true

      t.timestamps
    end
  end
end
