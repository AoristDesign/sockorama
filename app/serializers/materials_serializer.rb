class MaterialsSerializer < ActiveModel::Serializer
  attributes :name
  
  has_many :products
end
