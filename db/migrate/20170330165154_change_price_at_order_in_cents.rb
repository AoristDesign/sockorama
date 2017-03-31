class ChangePriceAtOrderInCents < ActiveRecord::Migration[5.0]
  def change
    rename_column :order_lines, :price_in_cents_at_order, :price_at_order_cents
  end
end
