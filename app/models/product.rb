class Product < ApplicationRecord
  # belongs_to
  has_many :materials
  has_many :sizes

end
