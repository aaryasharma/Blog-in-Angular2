import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RatingsComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 86/5;

  }

  starWidth:number;
  @Input() rating:number;
  constructor() { }

}
