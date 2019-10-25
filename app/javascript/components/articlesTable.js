import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class ArticlesTable extends Component {
  columns = [
    { path: "published_date", label: "Date" },
    { path: "category.name", label: "Category" },
    {
      path: "title",
      label: "Title",
      content: article => <Link to={`/articles/${article.id}`}>{article.title}</Link>
    },
    { path: "content", label: "Content" }
  ];

  deleteColumn = {
    key: "delete",
    content: article => (
      <button
        onClick={() => this.props.onDelete(article)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    )
  }

  render() {
    const { articles, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={articles}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ArticlesTable;
