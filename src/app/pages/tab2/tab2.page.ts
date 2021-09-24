import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  categorias: { categoria: string, category: string }[];
  categoria: string;
  news: Article[];

  constructor(private _n: NewsService) {
    this.categorias = [{ categoria: 'General', category: 'general' }, { categoria: 'Negocios', category: 'business' }, { categoria: 'Entretenimiento', category: 'entertainment' }, { categoria: 'Salud', category: 'health' }, { categoria: 'Ciencia', category: 'science' }, { categoria: 'Deportes', category: 'sports' }, { categoria: 'Tecnología', category: 'technology' }];
    this.categoria = this.categorias[0].category;
    this.news = [];
    this.getNewsByCategory(this.categoria);
  }

  segmentChanged(event) {
    this.news = [];
    this.categoria = event.detail.value;
    this.getNewsByCategory(this.categoria);
  }

  getNewsByCategory(categoria: string, event?) {
    this._n.getNewsbyCategory(categoria).subscribe(res => {
      this.news.push(...res.articles);
      console.log(this.news);
      if (event) {
        event.target.complete();
      }
    }, err => {
      console.log('Disableado');
      console.log(err);
      event.target.disabled = true;
      event.target.complete()
      return;
    })
  }

  loadData(event) {
    console.log('Activa');
    this.getNewsByCategory(this.categoria, event);
  }

}
