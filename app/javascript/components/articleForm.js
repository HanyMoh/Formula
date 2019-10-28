import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getArticle, saveArticle } from "../services/articleService";
import { getCategories } from "../services/categoryService";

class ArticleForm extends Form {
  state = {
    data: {
      title: "",
      content: "", 
      category_id: "",
      published: true, 
      published_date: null,
      image: null
    },
    categories: [],
    errors: {}
  };

  schema = {
    id: Joi.string(),
    title: Joi.string()
      .alphanum()
      .min(2)
      .max(60)
      .required()
      .label("Title"),
    category_id: Joi.string()
      .required()
      .label("Category"),
    content: Joi.string()
      .alphanum()
      .min(2)
      .required()
      .label("Content"),
    published_date: Joi.string()
      .required()
      .label("Published date"),    
    published: Joi.bool()
      .label("Published")
  };

  async populateCategories() {
    const { data: categories } = await getCategories();
    this.setState({ categories });
  }

  async populateArticle() {
    try {
      const articleId = this.props.match.params.id;
      if (articleId === "new") return;

      const { data: article } = await getArticle(articleId);
      this.setState({ data: this.mapToViewModel(article) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateCategories();
    await this.populateArticle();
  }

  mapToViewModel(article) {
    return {
      id: article.id,
      title: article.title,
      category_id: article.category.id,
      content: article.content,
      published_date: article.published_date,
      published: article.published,
      image: article.image
    };
  }

  doSubmit = async() => {
    await saveArticle(this.state.data);

    this.props.history.push("/articles");
  };

  render() {
    return (
      <div>
        <h1>Article Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("published_date", "Published date")}
          {this.renderSelect("category_id", "Category", this.state.categories)}
          {this.renderInput("title", "Title")}
          {this.renderInput("content", "Content", "text")}
          {this.renderInput("published", "Published", "checkbox")}
          {this.renderInput("image", "Image", "file")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default ArticleForm;