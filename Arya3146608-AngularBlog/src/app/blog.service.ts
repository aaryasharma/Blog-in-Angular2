import { Injectable } from '@angular/core';
import{Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000/blogs/';
const header = {headers: new Headers({'Content-Type': 'application/json'})}

@Injectable()
export class BlogService {

  constructor(private http :Http) { }

  loadData() {

    return this.http.get(BASE_URL)
      .map(res => res.json())
  }


  postData(data) {
    return this.http.post(BASE_URL,data, header)
      .map(res => res.json())

  }

  deleteData(id:number){
    return this.http.delete(BASE_URL+id)
      .map(res=> res.json())
  }

  putData(data){
    return this.http.put(BASE_URL+data.id,data)
      .map(res=>res.json())
  }

  getDatabyid(id:number){
    return this.http.get(BASE_URL+id)
      .map(res => res.json());
  }

}
