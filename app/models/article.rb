class Article < ApplicationRecord
  belongs_to :category

  validates :title, presence: true, uniqueness: true, length: {minimum: 2, maximum: 60}
end
