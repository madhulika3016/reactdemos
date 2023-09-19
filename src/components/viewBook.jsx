import React, { Component } from 'react'

import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import bookservice from '../services/bookservice';

class ViewBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            book: {}
        }
    }

    componentDidMount(){
        bookservice.viewBookById(this.state.id).then( res => {
            this.setState({book: res.data});
           
        })
        
    }

    render() {
        return (
            <Card sx={{ maxWidth: 345 }}>
            
              <CardMedia
                component="img"
                height="140"
                image=""
                alt="green iguana"
              />
               <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Book Details:
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
            <div className="views">
    
                        <div className="view">
                               <div> 
                               Book Title:{this.state.book.title}
                               </div>
                           <div> 
                           Author : {this.state.book.author}
                           </div>
                           <div>
                           Description:
                                 {this.state.book.description}
                                 </div>
                            
                                <div>
                                Isbn: {this.state.book.isbn}</div>
                             
                                <div> 
                                Price : {this.state.book.price}
                                </div>
                           
                                <div> 
                                PublishDate: {this.state.book.publishDate}</div>
                           
                                <div> 
                                LastUpdatedOn:{this.state.book.lastUpdatedOn}</div>
                                <div> 
                                CategoryId:{this.state.book.categoryId}</div>
                               
                            
                        </div>
                    </div>
                   
          </Typography>
       
                   
                    </CardContent>

                    </Card>
        )
    }
}

export default ViewBook