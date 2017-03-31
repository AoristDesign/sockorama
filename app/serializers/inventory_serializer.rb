class InventorySerializer < ActiveModel::Serializer
  attributes :id, :stock, :size
end
