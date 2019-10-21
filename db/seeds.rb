Category.destroy_all
Category.create(name: "Category one")
Category.create(name: "Category two")
Category.create(name: "Category three")
puts Category.count.to_s + " Categories created."