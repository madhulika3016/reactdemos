import React, { Component } from 'react'

import { Grid,Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import bookservice from '../services/bookservice';

class CreateBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            bookId: this.props.match.params.id,
            title: '',
	        author: '',
            description: '',
            isbn: '',
            price: '',
            publishDate: '',
            lastUpdatedOn: '',
            categoryId:''
            
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeAuthorNameHandler = this.changeAuthorNameHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changeIsbnHandler=this.changeIsbnHandler.bind(this);
        this.changeLastUpdatedOnHandler = this.changeLastUpdatedOnHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changePublishDateHandler=this.changePublishDateHandler.bind(this);
       // this.changeCategoryIdHandler=this.changeCategoryIdHandler.bind(this)
       this.saveOrUpdateBook=this.saveOrUpdateBook.bind(this)
    }

    // step 3
    componentDidMount()
    {

        // step 4
        if(this.state.id === "_add"){
            return
        }else{
            bookservice.viewBookById(this.state.bookId).then( (res) =>{
                let book = res.data;
                this.setState({title: book.title,
                    author: book.author,
                    description : book.description,
                    isbn:book.isbn,
                    price:book.price,
                    publishDate:book.publishDate,
                    lastUpdatedOn:book.lastUpdatedOn,
                    //categoryId:book.categoryId
                });
            });
        }        
    }
    saveOrUpdateBook = (e) => {
        e.preventDefault();
        let book = {title: this.state.title, author: this.state.author, description: this.state.description,isbn:this.state.isbn,price:this.state.price,publishDate:this.state.publishDate,lastUpdatedOn:this.state.lastUpdatedOn,categoryId:this.state.categoryId};
        let book1 = {bookId:this.state.bookId,title: this.state.title, author: this.state.author, description: this.state.description,isbn:this.state.isbn,price:this.state.price,publishDate:this.state.publishDate,lastUpdatedOn:this.state.lastUpdatedOn,categoryId:this.state.categoryId};
        console.log('book => ' + JSON.stringify(book1));

        // step 5
        if(this.state.bookId === '_add'){
            bookservice.createBook(book).then(res =>{
                this.props.history.push('/getBookList');
            });
        }else{
            bookservice.editBook(book1).then( res => {
                this.props.history.push('/getBookList');
            });
        }
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeAuthorNameHandler= (event) => {
        this.setState({author: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeIsbnHandler= (event) => {
        this.setState({isbn: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    changePublishDateHandler= (event) => {
        this.setState({publishDate: event.target.value});
    }

    changeLastUpdatedOnHandler= (event) => {
        this.setState({lastUpdatedOn: event.target.value});
    }

    changeCategoryIdHandler=(event) => {
        this.setState({categoryId: event.target.value});
    }
   

    cancel(){
        this.props.history.push('/getBookList');
    }

    
    getTitle(){
        
        if(this.state.bookId === '_add'){
            return <h3 className="text-center"><center>Add Book</center></h3>
        }else{
            return <h3 className="text-center"><center>Update Book</center></h3>
        }
        
    }
    
    render() {
        return (
            
            <div className="update">
            {
                this.getTitle()
            }
            <center>
            <form>
            <Grid  className="create">
                <Grid container>
                    <Grid item xs={12}>
                        <TextField name="bookId" value={this.state.bookId} label={"bookId"} />
                    </Grid> 
                    <Grid item xs={12}>
                        <TextField name="title" onChange={this.changeTitleHandler} value={this.state.title} label={" title"} />
                    </Grid> 
                    <Grid item xs={12}>
                        <TextField name="author" value={this.state.author} onChange={this.changeAuthorNameHandler} label={"author"} />
                    </Grid> 
                    <Grid item xs={12}>
                        <TextField name="description" value={this.state.description} onChange={this.changeDescriptionHandler} label={"description"} />
                    </Grid> 
                    <Grid item xs={12}>
                        <TextField name="isbn" value={this.state.isbn} onChange={this.changeIsbnHandler} label={"isbn"} />
                    </Grid> 
                    <Grid item xs={12}>
                        <TextField name="price" value={this.state.price} onChange={this.changePriceHandler} label={"price"} />
                    </Grid> 
                    <Grid item xs={12}>
                        <TextField name="publishDate" value={this.state.publishDate} onChange={this.changePublishDateHandler} label={" publishDate"} />
                    </Grid> 
                    <Grid item xs={12}>
                        <TextField name="lastUpdatedOn" value={this.state.lastUpdatedOn} onChange={this.changeLastUpdatedOnHandler} label={"lastUpdatedOn"} />
                    </Grid> 
                    <Grid item xs={12}>
                        <TextField name="categoryId" value={this.state.categoryId} onChange={this.changeCategoryIdHandler} label={"categoryId"} />
                    </Grid> 
                        
                     <Button variant="contained"size="small" className="btn btn-success"onClick={this.saveOrUpdateBook}>Save</Button>
                     <Button variant="contained"size="small" onClick={this.cancel.bind(this)} color="error">Cancel</Button>
                </Grid>
            </Grid>
        </form>
        </center>
        </div>
        
        
         )
    }
}
         
export default CreateBook