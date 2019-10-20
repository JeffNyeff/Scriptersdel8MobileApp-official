import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
apiurl ='https://localhost:44384/api/';
 
  constructor(public httpClient: HttpClient) { 
    console.log("Test");
  }
  getBooks(){
    return new Promise(resolve=>{
      this.httpClient.get(this.apiurl+'/Books/Get').subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
      });
    });
  }
}
