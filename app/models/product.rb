class Product < ApplicationRecord
  has_many :materials_products_linkings
  has_many :materials, through: :materials_products_linkings
  has_many :inventories
  has_many :sizes, through: :inventories
  
  monetize :price_cents
  monetize :before_sale_price_cents, allow_nil: true
end
