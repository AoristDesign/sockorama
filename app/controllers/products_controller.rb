class ProductsController < ApplicationController

  def index
    # @products = Product.page(params[:page])
    @products = Product.all
    render json: @products
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  private

  def product_params
    params.permit(:id, :model, :pattern, :style, :size, :stock,
                  :price, :image, :materials_description,
                  :materials_linking, :description)
  end

end
