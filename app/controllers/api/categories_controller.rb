module API
  class CategoriesController < ApplicationController
    def index
      categories = Category.select(:name)

      render json: { categories: categories }
    end
  end
end