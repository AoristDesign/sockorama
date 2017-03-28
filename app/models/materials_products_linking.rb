class MaterialsProductsLinking < ApplicationRecord
  belongs_to :materials
  belongs_to :products
end
