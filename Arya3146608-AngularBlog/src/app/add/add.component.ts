import { Component, OnInit } from '@angular/core';
import { BlogService} from "../blog.service";
import{Blog} from '../blog';
import{Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']

})
export class AddComponent {
  title = "Add a Blog";


  constructor(private blogService:BlogService,private router:Router) {

  }


  addItem(UserName:string,Category:string,Title:string,Description:string) {

    let blogitems = {
      UserName: UserName,
      Category: Category,
      Title: Title,
      Description: Description,
      ratings:3
    };

    this.blogService.postData(blogitems)
      .subscribe((data:Blog) => {
        this.router.navigate(['/welcome']);
      })

  }
  }

