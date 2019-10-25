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
      content: "This is a current content to this article 1.",
      published_date: DateTime.now
    },
    {
      category: Category.first,
      title: "This is an Article no. two",
      content: "This is a current content to this article 2.",
      published_date: DateTime.now
    },
    {
      category: Category.last,
      title: "This is an Article no. three",
      content: "This is a current content to this article 3.",
      published_date: DateTime.now
    },
    {
      category: Category.first,
      title: "This is an Article no. four",
      content: "This is a current content to this article 4.",
      published_date: DateTime.now
    },
    {
      category: Category.second,
      title: "This is an Article no. five",
      content: "This is a current content to this article 5.",
      published_date: DateTime.now
    },
    {
      category: Category.last,
      title: "This is an Article no. six",
      content: "This is a current content to this article 6.",
      published_date: DateTime.now
    },
    {
      category: Category.last,
      title: "This is an Article no. seven",
      content: "This is a current content to this article 7.",
      published_date: DateTime.now
    },
    {
      category: Category.first,
      title: "This is an Article no. eghit",
      content: "This is a current content to this article 8.",
      published_date: DateTime.now
    },
    {
      category: Category.first,
      title: "This is an Article no. nine",
      content: "This is a current content to this article 9.",
      published_date: DateTime.now
    },
    {
      category: Category.second,
      title: "This is an Article no. ten",
      content: "This is a current content to this article 10.",
      published_date: DateTime.now
    },
    {
      category: Category.last,
      title: "This is an Article no. eleven",
      content: "This is a current content to this article 11.",
      published_date: DateTime.now
    },
    {
      category: Category.first,
      title: "This is an Article no. twelve",
      content: "This is a current content to this article 12.",
      published_date: DateTime.now
    },
    
  ])
puts Article.count.to_s + " Articles created."