import { Component, Input, OnInit } from '@angular/core';
import { Articles, Article } from '../../interfaces/article';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  @Input("noticia") n:Article;
  @Input("index") i:number;

  constructor() {
  
  }

  ngOnInit() {}

}
