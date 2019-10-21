import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class CategoriesTable extends Component {
  columns = [
    { path: "id", label: "ID" },
    {
      path: "name",
      label: "Category Name",
      content: category => <Link to={`/categories/${category.id}`}>{category.name}</Link>
    }
  ];

  deleteColumn = {
    key: "delete",
    content: category => (
      <button
        onClick={() => this.props.onDelete(category)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    )
  }

  constructor() {
    super();
    this.columns.push(this.deleteColumn);
  }

  render() {
    const { categories, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={categories}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default CategoriesTable;
