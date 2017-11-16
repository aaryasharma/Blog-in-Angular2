import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {Blog} from "../blog";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit {
  blog: Blog[];


  constructor(private blogService: BlogService) {
  }


  ngOnInit() {
    this.blogService.loadData()
      .subscribe((data:Blog[]) => {
        this.blog = data;
      });
  }
}





