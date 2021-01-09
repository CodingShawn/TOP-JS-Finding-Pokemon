class MapsController < ApplicationController
  TOGEPICOORDS = [10.9, 94.3]
  MAGIKARPCOORDS = [89.7, 38]
  PORYGONCOORDS = [58.5, 50.6]

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
