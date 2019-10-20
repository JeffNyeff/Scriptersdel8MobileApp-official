import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BookService } from '../Providers/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})

export class BooksPage  {
  Books:any
  constructor(public navCtrl:NavController,public bkService:BookService) { 
  this.getBooks();
  }

  getBooks(){
    this.bkService.getBooks()
    .then(data =>{
     this.Books=data;
     console.log(this.Books);
    });
  }

 
}
