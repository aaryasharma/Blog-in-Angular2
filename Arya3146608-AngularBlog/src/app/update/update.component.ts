import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Blog} from '../blog';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../blog.service";
import{Router}from '@angular/router'



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateComponent implements OnInit {
   title="Update Blog";
   items:Blog;
   updateid:number;

  constructor(private route:ActivatedRoute,private blogService:BlogService,private router:Router) {
  }

  ngOnInit() {
    this.updateid = +this.route.snapshot.paramMap.get('id');
    this.blogService.getDatabyid(this.updateid)
      .subscribe( (data:Blog) => {
        {
        this.items = data;
        }
      })
  }

  updateItem(newCategory:string, newTitle:string, newDescription:string){
    let item= {
      Category: newCategory,
      Title: newTitle,
      Description: newDescription,
      id: this.updateid,
      ratings:this.items.Ratings,
      username:this.items.UserName
    }
    this.blogService.putData(item).subscribe();
    this.router.navigateByUrl('welcome');
    }
}
