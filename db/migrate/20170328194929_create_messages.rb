class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :email, null: false
      t.string :name
      t.string :body, null: false

      t.timestamps
    end
  end
end
