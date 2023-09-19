import React, { Component } from 'react'

import { Route , history} from 'react-router-dom';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Typography,} from '@material-ui/core'
import bookservice from '../services/bookservice';

class ListBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
                books: []
        }
        this.createBook = this.createBook.bind(this);
        this.editBookById = this.editBookById.bind(this);
        this.deleteBookById = this.deleteBookById.bind(this);
    }

    deleteBookById(bookId){
        bookservice.deleteBookById(bookId).then( res => {
            this.setState({books: this.state.books.filter(book => book.bookId !== bookId) });
            
        });
    }
    viewBookById(bookId){
        this.props.history.push(`/view-book/${bookId}`);
    }
    editBookById(bookId){
        this.props.history.push(`/add-book/${bookId}`);
    }

    componentDidMount(){
        bookservice.listAllBooks().then((res) => {
            this.setState({ books: res.data});
        });
    }
    createBook(){
        this.props.history.push('/add-book/_add');
    }
    render() {
        return (
            <div>
               <center> <Typography variant="h6" text-align="center">
                 Book List
                </Typography>
                </center>
                <br />
                <center><Button variant="contained" color="default" onClick={this.createBook}>
                Add Book
    </Button></center>
                 {/*  <Button variant="contained"size="small" >Add Book</Button> */}
                 
                 <TableContainer component={Paper} style={{marginTop:'100px'}}>
                        <Table className="material-table"aria-label="simple table">
                             <TableHead>
                                <TableRow>
                                    <TableCell>Book Id</TableCell>
                                    <TableCell align="center">Title</TableCell>
                                    <TableCell align="center">Author</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                    <TableCell align="center">Isbn</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">PublishDate</TableCell>
                                    <TableCell align="center">lastUpdatedOn</TableCell>
                        
                                    <TableCell align="center">categoryId</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                             <tbody>
                                {
                                    this.state.books.map(
                                        book => 
                                        <TableRow key = {book.bookId}>
                                                    
                                                    <TableCell align="center" >{book.bookId}</TableCell>
                                                    <TableCell align="center">{book.title}</TableCell>
                                                    <TableCell align="center">{book.author}</TableCell>
                                                    <TableCell align="center">{book.description}</TableCell>
                                                    <TableCell align="center">{book.isbn}</TableCell>
                                                    <TableCell align="center">{book.price}</TableCell>
                                                    <TableCell align="center">{book.publishDate}</TableCell>
                                                    <TableCell align="center">{book.lastUpdatedOn}</TableCell>
                                                    <TableCell align="center">{book.categoryId}</TableCell>
                                                    <TableCell align="center">
                                                        
                                                        <Button variant="contained"size="small"  onClick={ () => this.editBookById(book.bookId)}>Update</Button>
                                                        <Button variant="contained"size="small"  onClick={ () => this.deleteBookById(book.bookId)}>Delete</Button>
                                                        <Button variant="contained"size="small"  onClick={ () => this.viewBookById(book.bookId)}>View</Button>
                                               </TableCell>

                                                </TableRow>
                                    ) }
                            </tbody> 
                         
                 </Table>
                </TableContainer></div>
        )
    }
}

export default ListBook