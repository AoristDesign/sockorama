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
                  :price, :sku)
  end

end
