module API
  class CategoriesController < ApplicationController
    def index
      categories = ['categories 1','categories 2','categories 3']
      #  Category.select(:name)

      render json: { categories: categories }
    end
  end
end