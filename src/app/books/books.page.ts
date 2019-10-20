import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BookService } from '../Providers/book.service';
import { Router } from '@angular/router';
import { CartService } from '../Providers/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})

export class BooksPage  {
  cart=[];

  items=[];
  Books:any
  
  constructor(public navCtrl:NavController,public bkService:BookService,private router:Router,private cartService:CartService) { 
  this.getBooks();
  }

  getBooks(){
    this.bkService.getBooks()
    .then(data =>{
     this.Books=data;
     console.log(this.Books);
    });
  }
ngOnInit(){
  this.cart =this.cartService.getCart();
}

addToCart(product){
  this.cartService.addProduct(product);
}
 openCart(){
   this.router.navigate(['cart'])
 }
}
