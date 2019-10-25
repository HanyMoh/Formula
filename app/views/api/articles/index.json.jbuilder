json.articles do
  json.array! @articles, partial: '/api/articles/article', as: :article
end

