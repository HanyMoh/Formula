module API
  class ArticlesController < ApplicationController
    def index
      @articles = Article.includes(:category).order(published_date: :desc)
    end
  
    def create
      @article = Article.create!(article_params)
      if @article
        render json: @article
      else
        render json: @article.errors
      end
    end
    
    def update
      if article
        article.update(article_params)
        render json: article
      else
        render json: article.errors
      end
    end
  
    def show
      if @article
        render json: @article
      else
        render json: article.errors
      end
    end
  
    def destroy
      article&.destroy
      render json: { message: 'Article deleted!' }
    end
  
    private
  
    def article_params
      params.permit(:category_id, :title, :content, :published, :published_date, :image)
    end
  
    def article
      @article ||= Article.find(params[:id])
    end
  end
end

