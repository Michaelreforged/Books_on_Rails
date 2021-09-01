class BooksController < ApplicationController
  def app
    render component: 'app'
  end
  
  def index
    books = Book.all
    render json: books
  end
end
