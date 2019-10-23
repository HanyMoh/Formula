class Category < ApplicationRecord
  has_many :articles, dependent: :destroy

  validates :name, presence: true, uniqueness: true, length: {minimum: 2, maximum: 25}
end
