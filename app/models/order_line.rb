class OrderLine < ApplicationRecord
  belongs_to :order
  belongs_to :inventory
  
  monetize :price_at_order_cents, allow_nil: true
end
