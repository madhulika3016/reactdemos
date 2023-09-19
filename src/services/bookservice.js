import axios from "axios";
const BOOK_API_BASE_URL = "http://localhost:8080/api";

class BookService 
{
    createBook(b)
    {
        return axios.post('http://localhost:8080/api/createBook',b)
    }
    listAllBooks()
    {
        return axios.get('http://localhost:8080/api/getAllBook')
    }
    

    deleteBookById(bookId)
    {
        return axios.delete('http://localhost:8080/api/deleteBook/'+bookId)
    }
    editBook(book)
    {
        return axios.put('http://localhost:8080/api/editBook',book)
    }
    viewBookById(bookId)
    {
        return axios.get('http://localhost:8080/api/getBookById/'+bookId)
    }
}
export default new BookService();