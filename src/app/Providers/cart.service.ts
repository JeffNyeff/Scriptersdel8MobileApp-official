import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data =[
    {
     category: 'Books',
     expanded: true,
     products:[
       {id:0,name:'Information systems', price: '350'},
       {id:1,name:'Business Management', price: '450'},
       {id:2,name:'Introduction to accounting', price: '500'},
       {id:3,name:'Discrete Mathematics', price: '600'},
       {id:4,name:'Linear Algebra', price: '400'}
     ]
  }]
  constructor() { }
}
