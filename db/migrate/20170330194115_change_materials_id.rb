class ChangeMaterialsId < ActiveRecord::Migration[5.0]
  def change
    rename_column :materials_products_linkings, :materials_id, :material_id
  end
end
