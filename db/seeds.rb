# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all

b1 = Book.create(title:"Harry Pottor", author: "JK")
b2 = Book.create(title:"Ring to Volcano", author: "JR")
b3 = Book.create(title:"Rabbit is Late", author: "LC")

puts "seeded #{Book.all.size} Books"