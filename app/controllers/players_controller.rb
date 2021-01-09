class PlayersController < ApplicationController

  def create
    @player = Player.new(name: params[:playerName], score: params[:score])
    if @player.save
      @players = Player.order(:score).limit(5);
      render :json => {topscorers: @players}
    else 
      render :json => {topscorers: "Failed to save!"}
    end
  end
end
