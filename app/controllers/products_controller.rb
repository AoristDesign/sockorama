class ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  private

  def product_params
    params.permit(:id, :model, :color, :style, :sizes, :inventories,
                  :price, :image_url, :material_description,
                  :description, :sku, :featured, :promo, :on_sale, :before_sale_price)
  end

end
