Category.destroy_all
  Category.create(name: "Category one")
  Category.create(name: "Category two")
  Category.create(name: "Category three")
puts Category.count.to_s + " Categories created."

Article.destroy_all
  Article.create!([
    {
      category: Category.first,
      title: "This is an Article no. one",
      content: "This is a current content to this article1.",
      published_date: DateTime.now
    },
    {
      category: Category.first,
      title: "This is an Article no. two",
      content: "This is a current content to this article2.",
      published_date: DateTime.now
    },
    {
      category: Category.last,
      title: "This is an Article no. three",
      content: "This is a current content to this article3.",
      published_date: DateTime.now
    },
    {
      category: Category.first,
      title: "This is an Article no. four",
      content: "This is a current content to this article4.",
      published_date: DateTime.now
    }
  ])
puts Article.count.to_s + " Articles created."