class ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products, include: { inventories: { include: :size } }
  end

  def show
    @product = Product.find(params[:id])
    render json: @product, include: { inventories: { include: :size } }
  end

  private

  def product_params
    params.permit(:id, :model, :color, :style, :sizes, :inventories,
                  :price, :sku)
  end

end
