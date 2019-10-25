json.extract! article, :id, :title, :content, :published, :published_date, :created_at
json.category do
  json.extract! article.category, :id, :name
end
json.image do
  if article.image.attached?
    json.image_url rails_blob_path(article.image, only_path: true)
  else
    json.image_url nil
  end
end
json.url api_article_url(article, format: :json)
