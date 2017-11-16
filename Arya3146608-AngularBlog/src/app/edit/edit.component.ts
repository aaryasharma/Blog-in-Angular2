import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {BlogService} from "../blog.service";
import{Blog} from '../blog'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],

})
export class EditComponent implements OnInit {
   title="Edit your Blog";
  filteredBlog:Blog[];
  items:Blog[];
  userName:string;


  constructor(private blogService:BlogService,private router:Router) { }

  ngOnInit() {
    this.blogService.loadData()
      .subscribe((data:Blog[]) => {
        this.items = data;
      });
  }
    filterEdit(userName:string)
    {

        this.filteredBlog = this.items.filter((filterblog: Blog) => filterblog.UserName === userName);

    }

removeBlog(id:number){
  this.blogService.deleteData(id)
    .subscribe((data:Blog[]) => {console.log(data)});
    this.router.navigate(['welcome']);

}
redirectToUpdate(id:number){
      this.router.navigate(['/update',id]);
}

}
