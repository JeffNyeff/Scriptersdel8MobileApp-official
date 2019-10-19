import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
apiurl ='https://localhost:44319/api/';
  Books: any;
  constructor(publichttp: HttpClient) { 
    
  }
  getBooks(){
    return new Promise(resolve=>{
      this.Books.get(this.apiurl+ '/Books').subscribe(data =>{
        resolve(data);
      }, (err: any) =>{
        console.log(err);
      });
    });
  }
}
