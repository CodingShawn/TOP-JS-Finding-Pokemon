class MapsController < ApplicationController
  TOGEPICOORDS = [9, 95]
  MAGIKARPCOORDS = [87.8, 39.6]
  PORYGONCOORDS = [56.6, 51.8]

  def index
  end 

  def checkImage(correctX, correctY, x, y)
    return x <= correctX + 2 && x >= correctX - 2 && 
            y <= correctY + 2 && y >= correctY - 2
  end

  def checktogepi
    @status = checkImage(TOGEPICOORDS[0], TOGEPICOORDS[1], params[:x].to_i , params[:y].to_i)
    render :json => {checkStatus: @status}
  end

  def checkmagikarp
    @status = checkImage(MAGIKARPCOORDS[0], MAGIKARPCOORDS[1], params[:x].to_i, params[:y].to_i)
    render :json => {checkStatus: @status}
  end

  def checkporygon
    @status = checkImage(PORYGONCOORDS[0], PORYGONCOORDS[1], params[:x].to_i, params[:y].to_i)
    render :json => {checkStatus: @status}
  end

  private
  def coords_params
    params.permit(:x, :y)
  end

end
