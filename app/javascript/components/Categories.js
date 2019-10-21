import React from 'react'
import axios from 'axios'

class Categories extends React.Component {
  state = {
    categories: []
  };

  componentDidMount() {
    axios
      .get('/api/categories')
      .then(response => {
        console.log(response.data.categories)
        this.setState({ categories: response.data.categories });
      })
  }

  renderAllCategories = () => {
    return(
      <ul>
        {this.state.categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderAllCategories()}
      </div>
    )
  }
}

export default Categories
