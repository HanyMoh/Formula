import React from "react";
import { Link } from "react-router-dom";
import ArticlesTable from "./articlesTable";
import Pagination from "./common/pagination";
import { getArticles, deleteArticle } from "../services/articleService";
import { getCategories } from "../services/categoryService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Articles extends React.Component {
  state = {
    articles: [],
    categories: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedCategory: null,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { data: articles } = await getArticles();
    this.setState({ articles });
  }

  handleDelete = async article => {
    const originalArticles = this.state.articles;
    const articles = originalArticles.articles.filter(m => m.id !== article.id);
    this.setState({ articles });

    try {
      await deleteArticle(article.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("x");
        alert("This article has already been deleted.");
      }

      this.setState({ articles: originalArticles });
    }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedCategory: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      articles: allArticles
    } = this.state;

    let filtered = allArticles.articles;
    if (searchQuery)
      filtered = allArticles.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const articles = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: articles };
  };

  render() {
    const { length: count } = this.state.articles;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no articles in the database.</p>;

    const { totalCount, data: articles } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          
        </div>
        <div className="col">
          <Link
            to="/articles/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Article
          </Link>
          <p>Showing {totalCount} articles in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <ArticlesTable
            articles={articles}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Articles;
