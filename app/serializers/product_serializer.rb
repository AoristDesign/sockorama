class ProductSerializer < ActiveModel::Serializer
  attributes :id, :model, :sku, :color, :style, :description, :materials,
             :material_description, :inventories, :sizes, :price, :image,
             :featured, :promo, :on_sale, :before_sale_price
end
