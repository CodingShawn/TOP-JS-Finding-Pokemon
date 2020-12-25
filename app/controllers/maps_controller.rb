class MapsController < ApplicationController
  TOGEPICOORDS = [11.02, 94.3]

  def index
  end 

  def checkImage(correctX, correctY, x, y)
    return x <= correctX + 2.5 && x >= correctX - 2.5 && 
            y <= correctY + 2.5 && y >= correctY - 2.5
  end

  def checktogepi
    @status = checkImage(TOGEPICOORDS[0], TOGEPICOORDS[1], params[:x].to_i , params[:y].to_i)
    render :json => {checkStatus: @status}
  end

  private
  def coords_params
    params.permit(:x, :y)
  end

end
