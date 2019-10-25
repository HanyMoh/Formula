import http from './httpServices';

const apiEndPoint = "/api/articles";

function articleUrl(id) {
  return `${apiEndPoint}/${id}`
}

export function getArticles() {
  return http.get(apiEndPoint);
}

export function getArticle(articleId) {
  return http.get(articleUrl(articleId));
}

export function saveArticle(article) {
  if (article.id) {
    const body = { ...article };
    let articleId = body.id;
    delete body.id;
    return http.put(articleUrl(articleId), body)
  }

  return http.post(apiEndPoint, article)
}

export function deleteArticle(articleId) {
  return http.delete(articleUrl(articleId));
}