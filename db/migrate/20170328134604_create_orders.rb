class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :status
      t.string :notes
      t.string :promo
      t.references :users, foreign_key: true

      t.timestamps
    end
  end
end
