class ChangePriceInCents < ActiveRecord::Migration[5.0]
  def change
    rename_column :products, :price_in_cents, :price_cents
  end
end
