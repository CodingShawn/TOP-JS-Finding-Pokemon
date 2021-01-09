class Player < ApplicationRecord
  validates :name, :score, presence: true
end
