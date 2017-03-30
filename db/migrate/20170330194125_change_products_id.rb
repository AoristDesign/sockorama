class ChangeProductsId < ActiveRecord::Migration[5.0]
  def change
    
    rename_column :materials_products_linkings, :products_id, :product_id
  end
end
