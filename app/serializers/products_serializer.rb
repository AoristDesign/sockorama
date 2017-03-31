class ProductsSerializer < ActiveModel::Serializer
  attributes :id, :model, :color, :style, :description, :sku,
             :sizes, :inventories, :price, :image, :material_description,
             :featured, :promo, :on_sale, :before_sale_price, :materials
end
