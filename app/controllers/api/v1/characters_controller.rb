class Api::V1::CharactersController < ApplicationController
  def index
    characters = Character.all
    render json: characters
  end

  def update
    @character = Character.find(params[:id])
    @character.update(found: true)
    render json: @character
  end
end
