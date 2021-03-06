class BooksController < ApplicationController
  def app
    render component: 'app'
  end

  def index
    books = Book.all.order(:id)
    render json: books
  end

  def create
    book = Book.new(books_params)
    if (book.save)
      render json: book
    else
      render json: {errors: book.errors}
    end
  end

  def update
    @book = Book.find(params[:id])
    if (@book.update(books_params))
      render json: @books
    else
      render json: {errors: book.errors}
    end
  end

  def destroy
    @book= Book.find(params[:id])
    render json: @book.destroy
  end

  private 
  def books_params
    params.require(:book).permit(:title, :author)
  end

end
