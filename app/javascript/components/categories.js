import React from 'react'
import { Link } from "react-router-dom";
import CategoriesTable from "./categoriesTable";
import Pagination from "./common/pagination";
import { getCategories, deleteCategory} from "../services/categoryService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Categories extends React.Component {
  state = {
    categories: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "name", order: "asc" }
  };

  async componentDidMount() {
    const { data: categories } = await getCategories();
    this.setState({ categories });
  }

  handleDelete = async category => {
    const originalCategories = this.state.categories;
    const categories = originalCategories.categories.filter(m => m.id !== category.id);
    this.setState({ categories });

    try {
      await deleteCategory(category.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) 
        alert("This category has already been deleted.");

      this.setState({ categories: originalCategories });
    }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
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
      categories: allCategories
    } = this.state;

    let filtered = allCategories.categories;
    
    if (searchQuery){
      filtered = allCategories.filter(m =>
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const categories = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: categories };
  };

  render() {
    const { length: count } = this.state.categories;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no categories in the database.</p>;

    const { totalCount, data: categories } = this.getPagedData();

    return (
      <div className="row">
        <div className="col">
          {<Link
            to="/categories/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Category
          </Link>}
          <p>Showing [{totalCount}] categories in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <CategoriesTable
            categories={categories}
            sortColumn={sortColumn}
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

export default Categories
