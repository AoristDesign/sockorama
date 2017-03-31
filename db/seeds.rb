# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'csv'

file = File.open(File.join(Rails.root + 'db/data_src.csv'))
csv  = CSV.new(file, headers: true, header_converters: :symbol)
data = csv.to_a.map(&:to_hash)

str_to_cents = ->(str) {
  cents = str.gsub(/\D/,'').to_i
  (cents if str.include? '.') || cents * 100
}

data.each do |product|
  inventories = product[:inventories].delete(' ').upcase.split(',')
  materials = product[:material_description].split(/,|\/|\d.*?%/)
                                            .reject(&:blank?)
                                            .map{ |mat| mat.strip.titlecase }
  materials |= ['Blended'] if materials.size > 1
  product[:price_cents] = str_to_cents.(product[:price])
  product = product.except(:sizes, :inventories, :materials, :price)
  product = product.keys.map{ |key| [key, product[key]] }.to_h
  
  new_product = Product.new(product)
  inventories.each do |inventory|
    size = inventory.split(':')[0]
    stock = inventory.split(':')[1].to_i

    Inventory.create!(
      stock: stock,
      size: Size.find_or_create_by!(size: size),
      product: new_product
    )
  end
    
  materials.each do |mat|
    MaterialsProductsLinking.create!(
      material: Material.find_or_create_by!(name: mat),
      product: new_product
    )
  end

  new_product.save!
    
end