class ChangeBeforeSalePriceInCents < ActiveRecord::Migration[5.0]
  def change
    rename_column :products, :before_sale_price_in_cents, :before_sale_price_cents
  end
end
