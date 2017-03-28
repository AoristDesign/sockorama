class CreateMaterialsProductsLinkings < ActiveRecord::Migration[5.0]
  def change
    create_table :materials_products_linkings do |t|
      t.references :materials, foreign_key: true
      t.references :products, foreign_key: true

      t.timestamps
    end
  end
end
