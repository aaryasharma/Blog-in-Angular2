import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import{BlogService} from "../blog.service";
import{Blog} from '../blog'
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],

})
export class FavouritesComponent implements OnInit {

  blog:Blog[];
  favourites: Blog[];
  title="Favourite Blogs";
  constructor(private blogService :BlogService) { }

  ngOnInit() {

    this.blogService.loadData()
      .subscribe((data:Blog[]) => {
        this.blog = data;
        this.setFavourites();
  });
  }

  setFavourites() {
    this.favourites = this.blog.sort((firstblog:Blog,secondblog:Blog) => {
      return secondblog.Ratings - firstblog.Ratings;
    });
  }

}
