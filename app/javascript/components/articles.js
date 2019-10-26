import React from "react";
import { Link } from "react-router-dom";
import ArticlesTable from "./articlesTable";
import ListGroup from "./common/listGroup";
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
    sortColumn: { path: "published_date", order: "desc" }
  };

  async componentDidMount() {
    const { data } = await getCategories();
    const categories = [{ id: "", name: "All Categories" }, ...data.categories];

    const { data: articles } = await getArticles();
    this.setState({ articles, categories });
  }

  handleDelete = async article => {
    const originalArticles = this.state.articles;
    const articles = originalArticles.articles.filter(m => m.id !== article.id);
    this.setState({ articles });

    try {
      await deleteArticle(article.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        alert("This article has already been deleted.");
      }

      this.setState({ articles: originalArticles });
    }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = category => {
    this.setState({ selectedCategory: category, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedCategory: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handlePublished = article => {
    const articles = [...this.state.articles.articles];
    const index = articles.indexOf(article);
    articles[index] = { ...articles[index] };
    articles[index].published = !articles[index].published;
    this.setState({articles});
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedCategory,
      searchQuery,
      articles: allArticles
    } = this.state;

    let filtered = allArticles.articles;
    if (searchQuery){
      filtered = allArticles.articles.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedCategory && selectedCategory.id){
      filtered = allArticles.articles.filter(m => m.category.id === selectedCategory.id); 
    }

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
          <ListGroup
              items={this.state.categories}
              selectedItem={this.state.selectedCategory}
              onItemSelect={this.handleCategorySelect}
          />
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
            onPublished={this.handlePublished}
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
