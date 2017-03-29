class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.boolean :member, default: false
      t.string :email
      t.string :name
      t.string :phone
      t.string :billing_address
      t.string :shipping_address

      t.timestamps
    end
  end
end
