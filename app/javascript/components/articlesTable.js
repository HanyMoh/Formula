import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Published from "./common/published";

class ArticlesTable extends Component {
  columns = [
    {
      key: "published",
      content: article => (
        <Published 
          published={article.published} 
          onClick={() => this.props.onPublished(article)} 
        />
      )
    },
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

  constructor() {
    super();
    this.columns.push(this.deleteColumn);
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
