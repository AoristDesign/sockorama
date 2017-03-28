class CreateAdmins < ActiveRecord::Migration[5.0]
  def change
    create_table :admins do |t|
      t.string :username
      t.string :email
      t.string :name
      t.string :role

      t.timestamps
    end
  end
end
