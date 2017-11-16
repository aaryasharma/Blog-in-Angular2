import { Component, OnInit } from '@angular/core';
import { BlogService} from "../blog.service";
import{Blog} from '../blog'


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  filteredBlog:Blog[];
  items:Blog[];
  filters:string;
  title="Filter By Category";

  constructor(private blogService:BlogService) {
  }

  ngOnInit() {
    this.blogService.loadData()
      .subscribe((data:Blog[]) => {
        this.items = data;
      });
  }

filterPost(filters:string){
  this.filteredBlog=this.items.filter((filterblog:Blog)=>filterblog.Category===filters);
}

}
