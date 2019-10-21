import http from './httpServices';

const apiEndPoint = "/api/categories";

function categoryUrl(id) {
  return `${apiEndPoint}/${id}`
}

export function getCategories() {
  return http.get(apiEndPoint);
}

export function getCategory(categoryId) {
  return http.get(categoryUrl(categoryId));
}

export function saveCategory(category) {
  if (category.id) {
    const body = { ...category };
    let categoryId = body.id;
    delete body.id;
    return http.put(categoryUrl(categoryId), body)
  }

  return http.post(apiEndPoint, category)
}

export function deleteCategory(categoryId) {
  return http.delete(categoryUrl(categoryId));
}