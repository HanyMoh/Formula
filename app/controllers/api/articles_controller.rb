module API
  class ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :update, :destroy]

    def index
      @articles = Article.includes(:category).order(published_date: :desc)
    end
  
    def create
      @article = Article.create!(article_params)
      if @article
        render @article
      else
        render @article.errors
      end
    end
    
    def update
      if @article
        @article = @article.update(article_params)
      else
        @article.errors
      end
    end
  
    def show
      if @article
        render @article
      else
        @article.errors
      end
    end
  
    def destroy
      @article&.destroy
    end
  
    private
  
    def article_params
      params.permit(:category_id, :title, :content, :published, :published_date, :image)
    end
  
    def set_article
      @article ||= Article.find(params[:id])
    end
  end
end

