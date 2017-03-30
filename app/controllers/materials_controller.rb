class MaterialsController < ApplicationController

  def index
    @materials = Material.all
    render json: @materials
  end
  
  def show
    @material = Material.find(params[:id])
    render json: @material
  end

  private

  def materials_params
    params.permit(:id, :name, :product_id)
  end

end
