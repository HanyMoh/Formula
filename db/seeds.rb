Category.destroy_all
  Category.create(name: "Category one")
  Category.create(name: "Category two")
  Category.create(name: "Category three")
  Category.create(name: "Category four")
puts Category.count.to_s + " Categories created."

Article.destroy_all
  Article.create!([
    {
      category: Category.first,
      title: "This is an Article no. one",
      content: "This is a content of article 1.",
      published_date: DateTime.now - 5.days,
      published: true
    },
    {
      category: Category.first,
      title: "This is an Article no. two",
      content: "This is a content of article 2.",
      published_date: DateTime.now - 5.days
    },
    {
      category: Category.last,
      title: "This is an Article no. three",
      content: "This is a content of article 3.",
      published_date: DateTime.now - 4.days,
      published: true
    },
    {
      category: Category.first,
      title: "This is an Article no. four",
      content: "This is a content of article 4.",
      published_date: DateTime.now - 3.days,
      published: true
    },
    {
      category: Category.second,
      title: "This is an Article no. five",
      content: "This is a content of article 5.",
      published_date: DateTime.now - 3.days,
      published: true
    },
    {
      category: Category.last,
      title: "This is an Article no. six",
      content: "This is a content of article 6.",
      published_date: DateTime.now - 3.days,
      published: true
    },
    {
      category: Category.last,
      title: "This is an Article no. seven",
      content: "This is a content of article 7.",
      published_date: DateTime.now - 2.days,
      published: true
    },
    {
      category: Category.second,
      title: "This is an Article no. eghit",
      content: "This is a content of article 8.",
      published_date: DateTime.now - 2.days,
      published: true
    },
    {
      category: Category.last,
      title: "This is an Article no. nine",
      content: "This is a content of article 9.",
      published_date: DateTime.now - 5.days,
      published: true
    },
    {
      category: Category.second,
      title: "This is an Article no. ten",
      content: "This is a content of article 10.",
      published_date: DateTime.now,
      published: true
    },
    {
      category: Category.last,
      title: "This is an Article no. eleven",
      content: "This is a content of article 11.",
      published_date: DateTime.now
    },
    {
      category: Category.last,
      title: "This is an Article no. twelve",
      content: "This is a content of article 12.",
      published_date: DateTime.now,
      published: true
    },
    
  ])
puts Article.count.to_s + " Articles created."