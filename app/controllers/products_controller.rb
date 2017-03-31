class ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products, include: @products.inventories.sizes
  end

  def show
    @product = Product.find(params[:id])
    render json: @product, include: @product.inventories.sizes
  end

  private

  def product_params
    params.permit(:id, :model, :color, :style, :sizes, :inventories,
                  :price, :sku)
  end

end
