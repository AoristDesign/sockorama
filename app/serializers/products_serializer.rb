class ProductsSerializer < ActiveModel::Serializer
  attributes :id, :model, :pattern, :style,
             :size, :stock, :price, :image:, materials_description,
             :material_linking, :description
end
