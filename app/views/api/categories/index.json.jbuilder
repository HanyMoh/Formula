json.categories do
  json.array! @categories, partial: '/api/categories/category', as: :category
end

