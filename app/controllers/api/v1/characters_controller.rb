class Api::V1::CharactersController < ApplicationController
  def index
    characters = Character.all
    render json: characters
  end

  def update
    puts(params)
    @character = Character.find(params[:id])
    @character.update(character_params)
    render json: @character
  end

  private

  def character_params
    params.require(:character).permit(:id, :found)
  end
end
