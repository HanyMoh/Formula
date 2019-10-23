module API
  class ArticleController < ApplicationController
    def index
      articles = Article.all
      
      render json: { articles: articles }
    end
  end
end

