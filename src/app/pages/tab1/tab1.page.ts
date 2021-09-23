import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  noticias: Article[];

  constructor(private _n: NewsService) {
    this._n.getNews().subscribe(res => {
      this.noticias = res.articles;
      console.log(this.noticias);
    })
  }

}
