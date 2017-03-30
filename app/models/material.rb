class Material < ApplicationRecord
  has_many :materials_products_linkings
  has_many :products, through: :materials_products_linkings
end
